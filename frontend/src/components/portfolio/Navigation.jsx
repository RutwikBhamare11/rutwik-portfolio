import { useEffect, useState } from "react";
import { ArrowDownToLine, Menu, X } from "lucide-react";
import { NAV } from "@/constants/testIds";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const links = [
  { href: "#about", label: "About", id: NAV.linkAbout },
  { href: "#work", label: "Work", id: NAV.linkWork },
  { href: "#projects", label: "Projects", id: NAV.linkProjects },
  { href: "#contact", label: "Contact", id: NAV.linkContact },
];

export const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-black/60 border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="px-6 md:px-12 lg:px-20 py-4 flex items-center justify-between">
        <a
          href="#top"
          data-testid={NAV.monogram}
          className="font-serif-display text-3xl tracking-tighter leading-none select-none"
        >
          R<span style={{ color: "var(--accent)" }}>B</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={l.id}
              className="font-mono-label hover-underline text-[color:var(--text)]"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${API}/resume`}
            data-testid={NAV.resumeBtn}
            className="btn-pill accent"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowDownToLine size={14} />
          </a>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden text-[color:var(--text)]"
          onClick={() => setOpen(!open)}
          data-testid="nav-mobile-toggle"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-6 pb-6 flex flex-col gap-5 border-t border-white/10 bg-black/80 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              data-testid={`${l.id}-mobile`}
              onClick={() => setOpen(false)}
              className="font-mono-label py-2"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`${API}/resume`}
            data-testid={`${NAV.resumeBtn}-mobile`}
            className="btn-pill accent w-fit"
            target="_blank"
            rel="noreferrer"
          >
            Resume <ArrowDownToLine size={14} />
          </a>
        </div>
      )}
    </header>
  );
};
