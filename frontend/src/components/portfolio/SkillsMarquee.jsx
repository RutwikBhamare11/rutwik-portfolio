import Marquee from "react-fast-marquee";
import { SKILLS } from "@/constants/testIds";
import { skills } from "@/data/portfolio";

export const SkillsMarquee = () => {
  return (
    <section
      data-testid={SKILLS.section}
      className="py-20 md:py-28 border-y border-[color:var(--border)] overflow-hidden"
    >
      <div className="px-6 md:px-12 lg:px-20 mb-10 flex items-center justify-between">
        <p className="font-mono-label"><span className="accent-bar" />03 — Toolkit</p>
        <p className="font-mono-label hidden md:block">In motion</p>
      </div>

      <div data-testid={SKILLS.marquee}>
        <Marquee speed={45} gradient={false} pauseOnHover>
          {skills.map((s, i) => (
            <span
              key={i}
              className="outlined-text text-[10vw] md:text-[8vw] lg:text-[6.5vw] mx-8 leading-none"
            >
              {s} <span style={{ color: "var(--accent)", WebkitTextStroke: 0 }}>·</span>
            </span>
          ))}
        </Marquee>
        <div className="mt-6">
          <Marquee speed={30} gradient={false} direction="right">
            {skills.slice().reverse().map((s, i) => (
              <span
                key={`r-${i}`}
                className="font-serif-display italic text-3xl md:text-4xl mx-6 text-[color:var(--text-dim)]"
              >
                {s} <span style={{ color: "var(--accent)" }}>—</span>
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};
