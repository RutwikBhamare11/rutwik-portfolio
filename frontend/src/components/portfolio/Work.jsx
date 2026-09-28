import { motion } from "framer-motion";
import { WORK } from "@/constants/testIds";
import { experiences, professionalWork } from "@/data/portfolio";
import { ArrowUpRight } from "lucide-react";

export const Work = () => {
  return (
    <section
      id="work"
      data-testid={WORK.section}
      className="section px-6 md:px-12 lg:px-20"
    >
      {/* EXPERIENCE */}
      <div className="grid grid-cols-12 gap-8 mb-14">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label">
            <span className="accent-bar" />
            02 — Experience
          </p>
        </div>

        <h2 className="col-span-12 md:col-span-9 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Years of building, learning,{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            shipping
          </span>
          .
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
                <span style={{ color: "var(--accent)" }}>
                  {exp.company}
                </span>{" "}
                — {exp.location}
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

      {/* PROFESSIONAL WORK */}
      <div className="mt-32">
        <div className="grid grid-cols-12 gap-8 mb-14">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono-label">
              <span className="accent-bar" />
              03 — Professional Work
            </p>
          </div>

          <div className="col-span-12 md:col-span-9">
            <h2 className="font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
              The work behind the{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                work
              </span>
              .
            </h2>

            <p className="mt-6 max-w-2xl text-[color:var(--text-dim)] text-base md:text-lg leading-relaxed">
              A closer look at the strategy, creativity, and execution behind
              the work I’ve done across brands, campaigns, and digital
              experiences.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-[color:var(--border)] border border-[color:var(--border)]">
          {professionalWork.map((work, i) => (
            <motion.a
              key={work.key}
              href={work.path}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="group relative min-h-[320px] bg-[color:var(--bg)] p-8 md:p-10 lg:p-12 flex flex-col justify-between transition-colors duration-500 hover:bg-[#111111]"
            >
              <div>
                <div className="flex items-start justify-between gap-6">
                  <span className="font-mono-label text-[color:var(--text-dim)]">
                    0{i + 1}
                  </span>

                  <ArrowUpRight
                    size={22}
                    style={{ color: "var(--text-dim)" }}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </div>

                <h3 className="mt-16 font-serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                  {work.title}
                </h3>

                <p
                  className="mt-4 font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {work.subtitle}
                </p>

                <p className="mt-6 max-w-xl text-sm md:text-base leading-relaxed text-[color:var(--text-dim)]">
                  {work.description}
                </p>
              </div>

              <div className="mt-10 flex items-center gap-3 font-mono-label">
                <span>View Work</span>

                <span
                  className="block w-8 h-px transition-all duration-500 group-hover:w-12"
                  style={{ backgroundColor: "var(--accent)" }}
                />

                <ArrowUpRight
                  size={14}
                  className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};