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
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label"><span className="accent-bar" />01 — About</p>
        </div>

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

        {/* Monogram block */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 1 }}
          data-testid={ABOUT.monogram}
          className="col-span-12 md:col-span-4 relative aspect-[3/4] border border-[color:var(--border)] flex items-center justify-center overflow-hidden"
          style={{ background: "linear-gradient(180deg, #141414 0%, #0a0a0a 100%)" }}
        >
          <img
            src="https://images.unsplash.com/photo-1613915617430-8ab0fd7c6baf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDR8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwZWRpdG9yaWFsJTIwYWJzdHJhY3R1cmV8ZW58MHx8fGJsYWNrX2FuZF93aGl0ZXwxNzgyMjkyNzM1fDA&ixlib=rb-4.1.0&q=85"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-25 mix-blend-luminosity"
          />
          <div className="relative z-10 text-center">
            <p className="font-mono-label mb-4">Monogram</p>
            <div className="font-serif-display leading-none">
              <span className="block text-[28vw] md:text-[18vw] lg:text-[14vw]">
                R<span style={{ color: "var(--accent)" }}>B</span>
              </span>
            </div>
            <p className="font-mono-label mt-4">{profile.locations.join(" · ")}</p>
          </div>
          <span className="absolute top-4 left-4 font-mono-label">EST. 2024</span>
          <span className="absolute bottom-4 right-4 font-mono-label">N° 01</span>
        </motion.div>
      </div>
    </section>
  );
};
