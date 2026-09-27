import { motion } from "framer-motion";
import { ABOUT } from "@/constants/testIds";
import { profile } from "@/data/portfolio";

export const About = () => {
  return (
    <section
      id="about"
      data-testid={ABOUT.section}
      className="section px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-12 gap-8 lg:gap-12">

        {/* Section label */}
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label">
            <span className="accent-bar" />
            01 — About
          </p>
        </div>

        {/* About text */}
        <div className="col-span-12 md:col-span-5">
          <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.02] mb-8">
            A creative who treats brands like living things.
          </h2>

          <div className="space-y-5 text-[color:var(--text)] text-base md:text-lg leading-relaxed max-w-prose">
            {profile.about.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.08 }}
                className="text-[color:var(--text-dim)]"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Personal brand editorial card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          data-testid={ABOUT.monogram}
          className="col-span-12 md:col-span-4 relative aspect-[3/4] overflow-hidden border border-[color:var(--border)] bg-[#0a0a0a]"
        >

          {/* Portrait */}
          <img
            src="/rutwik-about.png"
            alt="Rutwik Bhamare"
            className="absolute inset-0 w-full h-full object-cover object-[center_25%]"
          />

          {/* Subtle dark gradient for typography readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/50 pointer-events-none" />

          {/* TOP LEFT */}
          <div className="absolute top-5 left-5 z-20">
            <p className="font-mono-label text-[color:var(--text)]">
              BRAND &amp; CREATIVE
            </p>

            <div className="mt-2 flex items-center gap-3">
              <span className="block w-8 h-px bg-[color:var(--text-dim)]" />
              <p className="font-mono-label text-[color:var(--text-dim)]">
                MARKETING · STRATEGY
              </p>
            </div>
          </div>

          {/* TOP RIGHT */}
          <div className="absolute top-5 right-5 z-20 text-right">
            <p className="font-mono-label">
              MIM · KEDGE
            </p>

            <p className="font-mono-label mt-2 text-[color:var(--text-dim)]">
              PARIS, FRANCE
            </p>
          </div>

          {/* CENTER MONOGRAM */}
          <div className="absolute inset-x-0 top-[38%] z-20 flex justify-center pointer-events-none">
            <div className="font-serif-display leading-none tracking-[-0.08em]">
              <span className="text-[7rem] sm:text-[8rem] md:text-[7rem] lg:text-[8rem] text-[#f2eee7]">
                R
              </span>

              <span
                className="text-[7rem] sm:text-[8rem] md:text-[7rem] lg:text-[8rem]"
                style={{ color: "var(--accent)" }}
              >
                B
              </span>
            </div>
          </div>

          {/* NAME */}
          <div className="absolute left-0 right-0 top-[64%] z-20 text-center">
            <p className="font-mono-label tracking-[0.35em] text-[color:var(--text)]">
              RUTWIK BHAMARE
            </p>
          </div>

          {/* BOTTOM LEFT */}
          <div className="absolute bottom-5 left-5 z-20">
            <span className="block w-10 h-px bg-[color:var(--text-dim)] mb-3" />

            <p className="font-mono-label">
              DIGITAL · BRAND · CULTURE
            </p>
          </div>

          {/* BOTTOM RIGHT */}
          <div className="absolute bottom-5 right-5 z-20 text-right">
            <p className="font-mono-label">
              PARIS · MARSEILLE
            </p>

            <p className="font-mono-label mt-2 text-[color:var(--text-dim)]">
              N° 01
            </p>
          </div>

        </motion.div>
      </div>
    </section>
  );
};