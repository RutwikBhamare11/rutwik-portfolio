import { motion } from "framer-motion";
import { ABOUT } from "@/constants/testIds";
import { profile } from "@/data/portfolio";

export const About = () => {
  return (
    <section
      id="about"
      data-testid={ABOUT.section}
      className="section relative overflow-hidden px-6 md:px-12 lg:px-20"
    >
      <div className="relative min-h-[820px] lg:min-h-[900px]">

        {/* SECTION LABEL */}
        <div className="absolute left-0 top-2 z-40">
          <p className="font-mono-label">
            <span className="accent-bar" />
            01 — About
          </p>
        </div>

        {/* LEFT CONTENT */}
        <div className="relative z-30 w-full pt-24 md:pt-28 lg:w-[57%] lg:pt-28">
          <motion.h2
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="font-serif-display max-w-[900px] text-5xl leading-[0.94] tracking-[-0.035em] sm:text-6xl md:text-7xl lg:text-[5.9rem] xl:text-[6.7rem]"
          >
            A creative who treats
            <br />
            brands like{" "}
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              living things.
            </span>
          </motion.h2>

          <div className="mt-14 max-w-[790px] space-y-8 lg:mt-16">
            {profile.about.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.75,
                  delay: i * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="text-lg leading-[1.65] text-[color:var(--text-dim)] md:text-xl lg:text-[1.3rem]"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div
          className="absolute inset-y-0 right-0 z-20 hidden w-[52%] lg:block"
        >
          {/* MIM / LOCATION */}
          <div className="absolute right-0 top-12 z-50 text-right">
            <p className="font-mono-label">MIM · KEDGE</p>
            <p className="mt-2 font-mono-label text-[color:var(--text-dim)]">
              PARIS, FRANCE
            </p>
          </div>

          {/* SMALL ORANGE CIRCLE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute z-0 rounded-full"
            style={{
              width: "clamp(300px, 29vw, 560px)",
              height: "clamp(300px, 29vw, 560px)",
              right: "7%",
              top: "22%",
              background:
                "linear-gradient(180deg, var(--accent) 0%, #b93c1d 100%)",
            }}
          />

          {/* LARGE PHOTO */}
          <motion.img
            src="/about-photo.png"
            alt="Rutwik Bhamare"
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute z-30 h-auto max-w-none object-contain drop-shadow-[0_25px_40px_rgba(0,0,0,0.35)]"
            style={{
              width: "clamp(1200px, 100vw, 2000px)",
              right: "-10%",
              bottom: "-1%",
            }}
          />

          {/* BOTTOM RIGHT META */}
          <div className="absolute bottom-7 right-0 z-50 text-right">
            <p className="font-mono-label">PARIS · MARSEILLE</p>
            <p className="mt-2 font-mono-label text-[color:var(--text-dim)]">
              N° 01
            </p>
          </div>
        </div>

        {/* MOBILE VISUAL */}
        <div className="relative mt-12 block min-h-[560px] lg:hidden">
          <div
            className="absolute left-1/2 top-[10%] z-0 aspect-square w-[70%] -translate-x-1/2 rounded-full"
            style={{
              background:
                "linear-gradient(180deg, var(--accent) 0%, #b93c1d 100%)",
            }}
          />

          <img
            src="/about-photo.png"
            alt="Rutwik Bhamare"
            className="absolute bottom-0 left-1/2 z-10 w-[150%] max-w-none -translate-x-1/2"
          />
        </div>
      </div>
    </section>
  );
};
