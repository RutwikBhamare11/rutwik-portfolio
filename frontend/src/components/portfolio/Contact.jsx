import { motion } from "framer-motion";
import {
  Download,
  Instagram,
  Linkedin,
  Mail,
  ArrowUpRight,
} from "lucide-react";
import { CONTACT } from "@/constants/testIds";
import { profile } from "@/data/portfolio";

export const Contact = () => {
  return (
    <section
      id="contact"
      data-testid={CONTACT.section}
      className="section px-6 md:px-12 lg:px-20 border-t border-[color:var(--border)]"
    >
      {/* Header */}
<div className="grid grid-cols-12 gap-8 md:gap-12 mb-20">
  <div className="col-span-12 md:col-span-3">
    <p className="font-mono-label">
      <span className="accent-bar" />
      06 — Contact
    </p>
  </div>

  <div className="col-span-12 md:col-span-9">
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9 }}
      className="font-serif-display text-[11vw] sm:text-[9vw] md:text-[7vw] lg:text-[6.5vw] leading-[0.95] tracking-tight"
    >
      Open to{" "}
      <span
        className="italic"
        style={{ color: "var(--accent)" }}
      >
        opportunities
      </span>
      .
    </motion.h2>

    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: 0.15 }}
      className="mt-10 md:mt-12 max-w-2xl"
    >
      <p className="text-base md:text-lg leading-relaxed text-[color:var(--text)]">
        Available from October 2026 for full-time roles,
        apprenticeships, and other marketing opportunities
        across France &amp; Europe.
      </p>

      <p className="mt-4 text-sm md:text-base leading-relaxed text-[color:var(--text-dim)]">
        Interested in marketing, brand strategy, digital marketing
        and creative communication.
      </p>
    </motion.div>
  </div>
</div>

      {/* Contact Content */}
      <div className="grid grid-cols-12 gap-10 lg:gap-16">
        {/* Email / Availability */}
        <motion.aside
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="col-span-12 lg:col-span-4 flex flex-col gap-10"
        >
          <div>
            <p className="font-mono-label mb-3">Email</p>

            <a
              href={`mailto:${profile.email}`}
              className="font-serif-display text-xl md:text-2xl hover-underline break-all"
              data-testid="contact-email-link"
            >
              {profile.email}
            </a>
          </div>

          <div>
            <p className="font-mono-label mb-3">Open to</p>

            <p className="text-[color:var(--text-dim)] leading-relaxed">
              Full-time roles · Internships · Freelance briefs in marketing,
              brand strategy, digital marketing and creative communication
              across France &amp; Europe.
            </p>
          </div>
        </motion.aside>

        {/* Contact Actions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="col-span-12 lg:col-span-8"
        >
          <p className="font-mono-label mb-6">Let’s connect</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {/* Email */}
            <a
              href={`mailto:${profile.email}?subject=Opportunity%20for%20Rutwik%20Bhamare`}
              className="group border border-[color:var(--border)] p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:border-[color:var(--accent)] hover:bg-[color:var(--bg)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-[color:var(--border)] transition-colors duration-500 group-hover:border-[color:var(--accent)]">
                  <Mail size={18} />
                </span>

                <div>
                  <p className="font-serif-display text-lg">
                    Send an Email
                  </p>
                  <p className="mt-1 font-mono-label text-[color:var(--text-dim)]">
                    {profile.email}
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/rutwik-bhamare-n17082002/"
              target="_blank"
              rel="noreferrer"
              className="group border border-[color:var(--border)] p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:border-[color:var(--accent)] hover:bg-[color:var(--bg)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-[color:var(--border)] transition-colors duration-500 group-hover:border-[color:var(--accent)]">
                  <Linkedin size={18} />
                </span>

                <div>
                  <p className="font-serif-display text-lg">
                    Connect on LinkedIn
                  </p>
                  <p className="mt-1 font-mono-label text-[color:var(--text-dim)]">
                    Professional profile
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Instagram */}
            <a
              href={profile.instagram}
              target="_blank"
              rel="noreferrer"
              className="group border border-[color:var(--border)] p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:border-[color:var(--accent)] hover:bg-[color:var(--bg)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-[color:var(--border)] transition-colors duration-500 group-hover:border-[color:var(--accent)]">
                  <Instagram size={18} />
                </span>

                <div>
                  <p className="font-serif-display text-lg">
                    Instagram
                  </p>
                  <p className="mt-1 font-mono-label text-[color:var(--text-dim)]">
                    @rutwik_bhamare
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>

            {/* Download CV */}
            <a
              href="/resume.pdf"
              download="Rutwik_Bhamare_Resume.pdf"
              className="group border border-[color:var(--border)] p-5 md:p-6 flex items-center justify-between transition-all duration-500 hover:border-[color:var(--accent)] hover:bg-[color:var(--bg)]"
            >
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center border border-[color:var(--border)] transition-colors duration-500 group-hover:border-[color:var(--accent)]">
                  <Download size={18} />
                </span>

                <div>
                  <p className="font-serif-display text-lg">
                    Download CV
                  </p>
                  <p className="mt-1 font-mono-label text-[color:var(--text-dim)]">
                    Resume · PDF
                  </p>
                </div>
              </div>

              <ArrowUpRight
                size={18}
                className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};