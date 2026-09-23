import asyncio
import logging
import os
import uuid
from datetime import datetime, timezone
from pathlib import Path
from typing import List, Optional

import resend
from dotenv import load_dotenv
from fastapi import APIRouter, FastAPI, HTTPException
from fastapi.responses import FileResponse
from motor.motor_asyncio import AsyncIOMotorClient
from pydantic import BaseModel, ConfigDict, EmailStr, Field
from starlette.middleware.cors import CORSMiddleware

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / ".env")

# ---------- Config ----------
mongo_url = os.environ["MONGO_URL"]
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ["DB_NAME"]]

resend.api_key = os.environ.get("RESEND_API_KEY", "")
SENDER_EMAIL = os.environ.get("SENDER_EMAIL", "onboarding@resend.dev")
OWNER_EMAIL = os.environ.get("PORTFOLIO_OWNER_EMAIL", "rutwikbhamare321@gmail.com")

STATIC_DIR = ROOT_DIR / "static"
RESUME_PDF = STATIC_DIR / "Rutwik_Bhamare_Resume.pdf"

app = FastAPI(title="Rutwik Bhamare — Portfolio API")
api_router = APIRouter(prefix="/api")

# ---------- Logging ----------
logging.basicConfig(
    level=logging.INFO,
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class StatusCheck(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    client_name: str
    timestamp: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))


class StatusCheckCreate(BaseModel):
    client_name: str


class ContactCreate(BaseModel):
    name: str = Field(min_length=1, max_length=120)
    email: EmailStr
    subject: Optional[str] = Field(default=None, max_length=180)
    message: str = Field(min_length=1, max_length=4000)


class ContactMessage(BaseModel):
    model_config = ConfigDict(extra="ignore")
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: EmailStr
    subject: Optional[str] = None
    message: str
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    email_sent: bool = False
    email_id: Optional[str] = None


# ---------- Helpers ----------
def _build_email_html(payload: ContactCreate) -> str:
    safe_msg = (payload.message or "").replace("\n", "<br/>")
    return f"""
    <div style="font-family: Helvetica, Arial, sans-serif; background:#0a0a0a; padding:32px; color:#f2f0e9;">
      <table width="100%" cellspacing="0" cellpadding="0" style="max-width:560px; margin:auto; background:#121212; border:1px solid #262626;">
        <tr><td style="padding:28px 28px 8px 28px;">
          <p style="margin:0; letter-spacing:.3em; font-size:11px; color:#8c8b87;">NEW MESSAGE — PORTFOLIO</p>
          <h1 style="font-family: Georgia, 'Times New Roman', serif; font-weight:300; font-size:30px; margin:6px 0 0 0; color:#f2f0e9;">{payload.name}</h1>
          <p style="margin:4px 0 0 0; font-size:13px; color:#d3512e;">{payload.email}</p>
        </td></tr>
        <tr><td style="padding:8px 28px 4px 28px;">
          <p style="margin:18px 0 4px 0; letter-spacing:.2em; font-size:10px; color:#8c8b87;">SUBJECT</p>
          <p style="margin:0; font-size:14px; color:#f2f0e9;">{payload.subject or "—"}</p>
        </td></tr>
        <tr><td style="padding:8px 28px 28px 28px;">
          <p style="margin:18px 0 4px 0; letter-spacing:.2em; font-size:10px; color:#8c8b87;">MESSAGE</p>
          <p style="margin:0; font-size:14px; line-height:22px; color:#f2f0e9;">{safe_msg}</p>
        </td></tr>
        <tr><td style="padding:20px 28px; border-top:1px solid #262626;">
          <p style="margin:0; font-size:11px; color:#8c8b87;">Sent from rutwikbhamare.portfolio</p>
        </td></tr>
      </table>
    </div>
    """


async def _send_contact_email(payload: ContactCreate) -> Optional[str]:
    if not resend.api_key:
        logger.warning("RESEND_API_KEY missing — skipping email send.")
        return None
    params = {
        "from": f"Portfolio <{SENDER_EMAIL}>",
        "to": [OWNER_EMAIL],
        "reply_to": payload.email,
        "subject": f"Portfolio — {payload.subject or 'New message from ' + payload.name}",
        "html": _build_email_html(payload),
    }
    try:
        result = await asyncio.to_thread(resend.Emails.send, params)
        return result.get("id") if isinstance(result, dict) else None
    except Exception as e:
        logger.error(f"Resend send failed: {e}")
        return None


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"message": "Portfolio API up", "owner": "Rutwik Bhamare"}


@api_router.get("/health")
async def health():
    return {"status": "ok"}


@api_router.post("/status", response_model=StatusCheck)
async def create_status_check(input: StatusCheckCreate):
    status_obj = StatusCheck(**input.model_dump())
    doc = status_obj.model_dump()
    doc["timestamp"] = doc["timestamp"].isoformat()
    await db.status_checks.insert_one(doc)
    return status_obj


@api_router.get("/status", response_model=List[StatusCheck])
async def get_status_checks():
    rows = await db.status_checks.find({}, {"_id": 0}).to_list(1000)
    for r in rows:
        if isinstance(r.get("timestamp"), str):
            r["timestamp"] = datetime.fromisoformat(r["timestamp"])
    return rows


@api_router.post("/contact", status_code=201)
async def submit_contact(payload: ContactCreate):
    email_id = await _send_contact_email(payload)
    record = ContactMessage(
        **payload.model_dump(),
        email_sent=bool(email_id),
        email_id=email_id,
    )
    doc = record.model_dump()
    doc["created_at"] = doc["created_at"].isoformat()
    await db.contact_messages.insert_one(doc)
    return {
        "ok": True,
        "id": record.id,
        "email_sent": record.email_sent,
        "message": "Thanks — your message just landed in my inbox." if record.email_sent
                   else "Message saved. I'll reach out shortly.",
    }


@api_router.get("/contact", response_model=List[ContactMessage])
async def list_contacts(limit: int = 50):
    rows = await db.contact_messages.find({}, {"_id": 0}).sort("created_at", -1).to_list(limit)
    for r in rows:
        if isinstance(r.get("created_at"), str):
            r["created_at"] = datetime.fromisoformat(r["created_at"])
    return rows


@api_router.get("/resume")
async def download_resume():
    if not RESUME_PDF.exists():
        raise HTTPException(status_code=404, detail="Resume not found")
    return FileResponse(
        path=str(RESUME_PDF),
        media_type="application/pdf",
        filename="Rutwik_Bhamare_Resume.pdf",
    )


# ---------- App wiring ----------
app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get("CORS_ORIGINS", "*").split(","),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
