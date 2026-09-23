import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { CONTACT } from "@/constants/testIds";
import { profile } from "@/data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Please fill in name, email and message.");
      return;
    }
    setLoading(true);
    try {
      const { data } = await axios.post(`${API}/contact`, form);
      setSent(true);
      toast.success(data?.message || "Message sent.");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      const detail = err?.response?.data?.detail;
      toast.error(typeof detail === "string" ? detail : "Could not send. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      data-testid={CONTACT.section}
      className="section px-6 md:px-12 lg:px-20 border-t border-[color:var(--border)]"
    >
      <div className="grid grid-cols-12 gap-8 mb-12">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label"><span className="accent-bar" />06 — Contact</p>
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
          className="col-span-12 md:col-span-9 font-serif-display text-[14vw] md:text-[10vw] lg:text-[8.5vw] leading-[0.9] tracking-tighter"
        >
          Let’s <span className="italic" style={{ color: "var(--accent)" }}>talk.</span>
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-10 lg:gap-16">
        {/* Side info */}
        <aside className="col-span-12 lg:col-span-4 flex flex-col gap-8">
          <div>
            <p className="font-mono-label mb-2">Email</p>
            <a
              href={`mailto:${profile.email}`}
              className="font-serif-display text-xl md:text-2xl hover-underline"
              data-testid="contact-email-link"
            >
              {profile.email}
            </a>
          </div>
          <div>
            <p className="font-mono-label mb-2">Phone</p>
            <p className="font-serif-display text-xl">{profile.phone}</p>
          </div>
          <div>
            <p className="font-mono-label mb-2">Elsewhere</p>
            <div className="flex flex-col gap-2">
              <a href={profile.linkedin} target="_blank" rel="noreferrer" className="hover-underline w-fit">LinkedIn ↗</a>
              <a href={profile.instagram} target="_blank" rel="noreferrer" className="hover-underline w-fit">Instagram ↗</a>
            </div>
          </div>
          <div>
            <p className="font-mono-label mb-2">Open to</p>
            <p className="text-[color:var(--text-dim)] leading-relaxed">
              Full-time roles · Internships · Freelance briefs in brand, marketing and creative direction across France &amp; Europe.
            </p>
          </div>
        </aside>

        {/* Form */}
        <form
          onSubmit={submit}
          data-testid={CONTACT.form}
          className="col-span-12 lg:col-span-8 flex flex-col gap-2"
        >
          {sent ? (
            <motion.div
              data-testid={CONTACT.success}
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              className="border border-[color:var(--accent)] p-8 flex items-start gap-4"
            >
              <Check style={{ color: "var(--accent)" }} />
              <div>
                <p className="font-serif-display text-2xl mb-1">Message received.</p>
                <p className="text-[color:var(--text-dim)]">
                  I’ll come back to you within 48 hours. Thank you.
                </p>
                <button
                  type="button"
                  onClick={() => setSent(false)}
                  className="btn-pill accent mt-6"
                  data-testid="contact-send-another"
                >
                  Send another
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="font-mono-label">Name</label>
                  <input
                    data-testid={CONTACT.name}
                    className="field"
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={update("name")}
                    required
                  />
                </div>
                <div>
                  <label className="font-mono-label">Email</label>
                  <input
                    data-testid={CONTACT.email}
                    className="field"
                    type="email"
                    placeholder="you@brand.com"
                    value={form.email}
                    onChange={update("email")}
                    required
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="font-mono-label">Subject</label>
                <input
                  data-testid={CONTACT.subject}
                  className="field"
                  type="text"
                  placeholder="A role, a project, a hello"
                  value={form.subject}
                  onChange={update("subject")}
                />
              </div>
              <div className="mt-4">
                <label className="font-mono-label">Message</label>
                <textarea
                  data-testid={CONTACT.message}
                  className="field"
                  placeholder="Tell me about it…"
                  rows={5}
                  value={form.message}
                  onChange={update("message")}
                  required
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                data-testid={CONTACT.submit}
                className="btn-pill accent mt-10 self-start disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>Sending <Loader2 size={14} className="animate-spin" /></>
                ) : (
                  <>Send message <ArrowRight size={14} /></>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
};
