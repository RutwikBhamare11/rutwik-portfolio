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
          <p className="font-mono-label"><span className="accent-bar" />04 — Selected Projects</p>
        </div>
        <h2 className="col-span-12 md:col-span-9 font-serif-display text-4xl sm:text-5xl lg:text-6xl leading-[1.05]">
          Ideas, strategy &amp; <span className="italic" style={{ color: "var(--accent)" }}>execution</span>.
        </h2>
      </div>

      <div className="space-y-20">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            data-testid={index === 0 ? PROJECT.card : undefined}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-12 gap-8 lg:gap-12"
          >
            <div className={`col-span-12 lg:col-span-7 relative overflow-hidden border border-[color:var(--border)] aspect-[4/3] lg:aspect-[16/11] group ${index % 2 === 1 ? "lg:order-2" : ""}`}>
              <img
                src={project.image}
                alt={`${project.title} project visual`}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
              <div className="absolute top-5 left-5 font-mono-label" style={{ color: "var(--text)" }}>
                0{index + 1}
              </div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between gap-4">
                <div>
                  <p className="font-mono-label" style={{ color: "var(--text)" }}>
                    {project.client}
                  </p>
                  <p className="font-mono-label mt-1" style={{ color: "var(--accent)" }}>
                    {project.category}
                  </p>
                </div>
                <span className="font-mono-label">{project.year}</span>
              </div>
            </div>

            <div className={`col-span-12 lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1" : ""}`}>
              <p className="font-mono-label mb-3" style={{ color: "var(--accent)" }}>
                {project.subtitle}
              </p>
              <h3 className="font-serif-display italic text-3xl md:text-4xl lg:text-5xl leading-[1.05]">
                {project.title}.
              </h3>
              <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                {project.summary}
              </p>

              <ul className="mt-8 space-y-3">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-3 text-sm md:text-base">
                    <span className="font-mono-label mt-1" style={{ color: "var(--accent)" }}>
                      0{i + 1}
                    </span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="btn-pill mt-10 self-start"
                data-testid={index === 0 ? "project-card-cta" : undefined}
              >
                Discuss this work <ArrowUpRight size={14} />
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};
