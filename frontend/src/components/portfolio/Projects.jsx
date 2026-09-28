import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECT } from "@/constants/testIds";
import { projects } from "@/data/portfolio";

export const Projects = () => {
  return (
    <section
      id="projects"
      data-testid={PROJECT.section}
      className="section px-6 md:px-12 lg:px-20"
    >
      <div className="grid grid-cols-12 gap-8 mb-14">
        <div className="col-span-12 md:col-span-3">
          <p className="font-mono-label">
            <span className="accent-bar" />
            04 — Academic Projects
          </p>
        </div>

        <h2 className="col-span-12 md:col-span-9 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Ideas, strategy &amp;{" "}
          <span className="italic" style={{ color: "var(--accent)" }}>
            execution
          </span>
          .
        </h2>
      </div>

      <div className="divider mb-2" />

      <div className="divide-y divide-[color:var(--border)]">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            data-testid={index === 0 ? PROJECT.card : undefined}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: index * 0.06 }}
            className="py-12 md:py-14 grid grid-cols-12 gap-8 lg:gap-12"
          >
            {/* Project Number */}
            <div className="col-span-12 md:col-span-2">
              <p className="font-mono-label text-[color:var(--text-dim)]">
                0{index + 1}
              </p>
            </div>

            {/* Project Information */}
            <div className="col-span-12 md:col-span-7">
              <p
                className="font-mono-label mb-3"
                style={{ color: "var(--accent)" }}
              >
                {project.subtitle}
              </p>

              <h3 className="font-serif-display text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                {project.title}.
              </h3>

              <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed max-w-2xl">
                {project.summary}
              </p>

              <ul className="mt-8 space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-sm md:text-base"
                  >
                    <span
                      className="font-mono-label mt-1"
                      style={{ color: "var(--accent)" }}
                    >
                      0{i + 1}
                    </span>

                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Project Meta + CTA */}
            <div className="col-span-12 md:col-span-3 flex flex-col justify-between md:items-end">
              <div className="text-left md:text-right">
                <p className="font-mono-label text-[color:var(--text-dim)]">
                  {project.client}
                </p>

                <p
                  className="font-mono-label mt-2"
                  style={{ color: "var(--accent)" }}
                >
                  {project.category}
                </p>

                <p className="font-mono-label mt-2">
                  {project.year}
                </p>
              </div>

              <a
                href={
                  project.title === "Tara Ocean Foundation"
                    ? "/projects/tara-ocean-foundation"
                    : project.title === "Shein"
                      ? "/projects/shein"
                      : project.title === "Samsung APAC"
                        ? "/projects/samsung-apac"
                        : project.title === "Ant.Element"
                          ? "/projects/ant-element"
                          : "#contact"
                }
                className="btn-pill mt-10 self-start md:self-end"
                data-testid={
                  index === 0 ? "project-card-cta" : undefined
                }
              >
                {project.title === "Tara Ocean Foundation" ||
                project.title === "Shein" ||
                project.title === "Samsung APAC" ||
                project.title === "Ant.Element"
                  ? "View Case Study"
                  : "Discuss this work"}

                <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};