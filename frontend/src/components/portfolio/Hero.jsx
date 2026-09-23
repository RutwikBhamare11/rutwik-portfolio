import { motion } from "framer-motion";
import { ArrowDown, ArrowDownToLine } from "lucide-react";
import { HERO } from "@/constants/testIds";
import { profile } from "@/data/portfolio";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const Word = ({ children, delay = 0 }) => (
  <motion.span
    initial={{ y: "110%", opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
    style={{ display: "inline-block" }}
  >
    {children}
  </motion.span>
);

export const Hero = () => {
  return (
    <section
      id="top"
      data-testid={HERO.section}
      className="relative min-h-screen flex flex-col justify-end px-6 md:px-12 lg:px-20 pb-16 pt-32"
    >
      {/* Background liquid texture */}
      <div className="pointer-events-none absolute inset-0 -z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpcXVpZCUyMGRhcmslMjB0ZXh0dXJlfGVufDB8fHx8MTc4MjI5Mjc0OHww&ixlib=rb-4.1.0&q=85"
          alt=""
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/40 to-[#0a0a0a]" />
      </div>

      <div className="relative z-10 grid grid-cols-12 gap-6">
        {/* Top meta line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="col-span-12 flex items-center justify-between font-mono-label"
        >
          <span><span className="accent-bar" /> Portfolio · 2026</span>
          <span className="hidden sm:inline">Marseille · Paris</span>
        </motion.div>

        {/* Massive name */}
        <h1
          data-testid={HERO.name}
          className="col-span-12 font-serif-display leading-[0.85] tracking-tighter text-[16vw] sm:text-[14vw] lg:text-[11.5vw] mt-10"
        >
          <span className="block overflow-hidden">
            <Word delay={0.1}>Rutwik</Word>
          </span>
          <span className="block overflow-hidden italic" style={{ color: "var(--accent)" }}>
            <Word delay={0.25}>Bhamare.</Word>
          </span>
        </h1>

        {/* Lower split row */}
        <div className="col-span-12 md:col-span-7 mt-10">
          <motion.p
            data-testid={HERO.title}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.55 }}
            className="font-serif-display italic text-xl md:text-2xl text-[color:var(--text)] max-w-xl"
          >
            {profile.title}<span className="caret" />
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.7 }}
            className="text-[color:var(--text-dim)] max-w-md mt-4 leading-relaxed"
          >
            {profile.tagline}
          </motion.p>
        </div>

        <div className="col-span-12 md:col-span-5 flex md:justify-end items-end mt-10 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className="flex flex-wrap gap-3"
          >
            <a href="#contact" data-testid={HERO.ctaContact} className="btn-pill">
              Let’s talk <ArrowDown size={14} />
            </a>
            <a
              href={`${API}/resume`}
              data-testid={HERO.ctaResume}
              target="_blank"
              rel="noreferrer"
              className="btn-pill accent"
            >
              Resume <ArrowDownToLine size={14} />
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-6 left-6 md:left-12 lg:left-20 font-mono-label flex items-center gap-3"
      >
        <span className="block w-px h-10 bg-[color:var(--border)]" />
        Scroll
      </motion.div>
    </section>
  );
};
