import { motion } from "framer-motion";
import { WORK } from "@/constants/testIds";
import { experiences } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Work = () => {
  return (
    <section
      id="work"
      data-testid={WORK.section}
      className="section px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-12 gap-8 mb-14">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label"><span className="accent-bar" />02 — Experience</p>
        </div>
        <h2 className="col-span-12 md:col-span-9 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Years of building, learning, <span className="italic" style={{ color: "var(--accent)" }}>shipping</span>.
        </h2>
      </div>

      <div className="divider mb-2" />
      <ul className="divide-y divide-[color:var(--border)]">
        {experiences.map((exp, i) => (
          <motion.li
            key={exp.key}
            data-testid={WORK.item(exp.key)}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.06 }}
            className="group py-10 grid grid-cols-12 gap-6 items-start cursor-default"
          >
            <div className="col-span-12 md:col-span-2 font-mono-label">
              {exp.period}
            </div>

            <div className="col-span-12 md:col-span-6">
              <h3 className="font-serif-display text-2xl md:text-3xl leading-tight">
                {exp.role}
              </h3>
              <p className="mt-1 text-[color:var(--text-dim)]">
                <span style={{ color: "var(--accent)" }}>{exp.company}</span> — {exp.location}
              </p>
            </div>

            <ul className="col-span-12 md:col-span-4 space-y-2 text-[color:var(--text-dim)] text-sm leading-relaxed">
              {exp.points.slice(0, 4).map((p, j) => (
                <li key={j} className="flex gap-2">
                  <span style={{ color: "var(--accent)" }}>—</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            <ArrowUpRight
              className="hidden md:block col-span-12 md:col-span-12 justify-self-end -mt-12 mr-1 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
              size={20}
              style={{ color: "var(--text-dim)" }}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};
