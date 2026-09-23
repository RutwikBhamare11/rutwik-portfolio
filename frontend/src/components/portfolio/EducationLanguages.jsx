import { motion } from "framer-motion";
import { EDU } from "@/constants/testIds";
import { education, languages } from "@/data/portfolio";

export const EducationLanguages = () => {
  return (
    <section
      id="education"
      data-testid={EDU.section}
      className="section px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-12 gap-8 mb-14">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label"><span className="accent-bar" />05 — Education & Languages</p>
        </div>
        <h2 className="col-span-12 md:col-span-9 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Two countries. <span className="italic" style={{ color: "var(--accent)" }}>Four languages</span>. One creative mind.
        </h2>
      </div>

      <div className="grid grid-cols-12 gap-6 lg:gap-8">
        {/* Education cards */}
        {education.map((e, i) => (
          <motion.div
            key={e.school}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.08 }}
            className="col-span-12 md:col-span-6 lg:col-span-5 border border-[color:var(--border)] p-8 hover:bg-[#141414] transition-colors duration-500"
          >
            <p className="font-mono-label mb-4">{e.period}</p>
            <h3 className="font-serif-display text-2xl md:text-3xl leading-tight mb-3">
              {e.school}
            </h3>
            <p className="text-[color:var(--text-dim)] leading-relaxed">
              {e.degree}
            </p>
            <p className="mt-3 text-sm" style={{ color: "var(--accent)" }}>
              {e.location}
            </p>
          </motion.div>
        ))}

        {/* Languages */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="col-span-12 lg:col-span-2 flex lg:flex-col flex-wrap gap-4 lg:gap-6 lg:border-l lg:border-[color:var(--border)] lg:pl-8"
        >
          <p className="font-mono-label w-full">Languages</p>
          {languages.map((l) => (
            <div key={l.name} className="flex flex-col">
              <span className="font-serif-display text-2xl">{l.name}</span>
              <span className="font-mono-label" style={{ color: "var(--accent)" }}>
                {l.level}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
