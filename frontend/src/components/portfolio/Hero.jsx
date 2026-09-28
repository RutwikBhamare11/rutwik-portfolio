import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowDownToLine } from "lucide-react";
import { useEffect, useState } from "react";
import { HERO } from "@/constants/testIds";

const greetings = [
  {
    text: "Привет",
    className: "font-russian",
  },
  {
    text: "Bonjour",
    className: "font-french",
  },
  {
    text: "Hola",
    className: "font-spanish",
  },
  {
    text: "Hello",
    className: "font-english",
  },
  {
    text: "Hallo",
    className: "font-german",
  },
  {
    text: "नमस्ते",
    className: "font-hindi",
  },
  {
    text: "नमस्कार",
    className: "font-marathi",
  },
  {
    text: "你好",
    className: "font-chinese",
  },
];

const stats = [
  {
    value: "72.7K+",
    label: "CAMPAIGN SENDS",
  },
  {
    value: "66.7%",
    label: "EMAIL OPEN RATE",
  },
  {
    value: "33",
    label: "CAMPAIGNS",
  },
  {
    value: "100+",
    label: "SKUs MANAGED",
  },
  {
    value: "35%",
    label: "WEBSITE TRAFFIC",
  },
];

const skills = [
  {
    icon: "📣",
    label: "Marketing",
    position: "left-[8%] lg:left-[19%] top-[47%]",
  },
  {
    icon: "✨",
    label: "Brand Strategy",
    position: "left-[10%] lg:left-[22%] top-[63%]",
  },
  {
    icon: "🚀",
    label: "Campaigns",
    position: "right-[8%] lg:right-[22%] top-[48%]",
  },
  {
    icon: "🎨",
    label: "Creative Communication",
    position: "right-[5%] lg:right-[14%] top-[64%]",
  },
];

export const Hero = () => {
  const [greetingIndex, setGreetingIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGreetingIndex((current) => (current + 1) % greetings.length);
    }, 1800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="top"
      data-testid={HERO.section}
      className="relative min-h-screen overflow-hidden bg-[color:var(--bg)]"
    >
      {/* =====================================================
          EXISTING DARK BACKGROUND
      ====================================================== */}

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1710438399422-2fca27686bcd?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGxpcXVpZCUyMGRhcmslMjB0ZXh0dXJlfGVufDB8fHx8MTc4MjI5Mjc0OHww&ixlib=rb-4.1.0&q=85"
          alt=""
          className="h-full w-full object-cover opacity-30"
        />

        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/70 via-[#0a0a0a]/35 to-[#0a0a0a]" />
      </div>

      {/* =====================================================
          HERO CONTENT
      ====================================================== */}

      <div className="relative z-10 min-h-screen px-6 pt-24 md:px-12 lg:px-20">

        {/* TOP META */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute left-6 right-6 top-24 flex justify-between md:left-12 md:right-12 lg:left-20 lg:right-20"
        >
          <p className="font-mono-label">
            <span className="accent-bar" />
            Portfolio · 2026
          </p>

          <p className="hidden font-mono-label sm:block">
            Paris · France
          </p>
        </motion.div>

        {/* =====================================================
    GREETING
====================================================== */}

<div
  className="absolute z-40 flex flex-col items-center"
  style={{
    left: "50%",
    top: "7%",
    transform: "translateX(-50%)",
  }}
>
  {/* Decorative orange marks */}

  <div
    className="absolute -right-8 -top-5 text-2xl md:text-3xl"
    style={{ color: "var(--accent)" }}
  >
    //
  </div>

  {/* Greeting pill */}

<motion.div
  key={greetings[greetingIndex].text}
  initial={{ opacity: 0, y: 8 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
  className="flex items-center justify-center rounded-full border-2 border-[color:var(--text-dim)] bg-[color:var(--bg)] px-8 py-4 md:px-10 md:py-5"
>
  <span
    className={`${greetings[greetingIndex].className} text-xl md:text-2xl lg:text-3xl`}
  >
    {greetings[greetingIndex].text}
  </span>
</motion.div>
</div>

        {/* =====================================================
            MAIN HEADLINE
        ====================================================== */}

        <div className="relative z-40 flex flex-col items-center pt-[6vh] text-center">

          <motion.h1
            data-testid={HERO.name}
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.35,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="whitespace-nowrap font-sans text-[8vw] font-medium leading-none tracking-[-0.055em] sm:text-[6.8vw] md:text-[5.8vw] lg:text-[4.9vw]"
          >
            I'm{" "}
            <span
              className="font-serif-display italic"
              style={{ color: "var(--accent)" }}
            >
              Rutwik
            </span>{" "}
            <span className="inline-block">👋</span>,
          </motion.h1>

          <motion.h2
            data-testid={HERO.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.9,
              delay: 0.5,
            }}
            className="mt-3 whitespace-nowrap font-sans text-[4.2vw] font-medium leading-none tracking-[-0.045em] sm:text-[3.6vw] md:text-[3vw] lg:text-[2.7vw]"
          >
            A Brand &amp; Marketing Specialist.
          </motion.h2>
        </div>

        {/* =====================================================
            LEFT DESCRIPTION
        ====================================================== */}

        <motion.div
  initial={{ opacity: 0, x: -20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.75 }}
  className="absolute left-6 top-[45%] z-30 hidden max-w-[360px] md:left-12 md:block lg:left-20 lg:max-w-[390px]"
>
  <p className="font-mono-label text-lg md:text-xl">
    <span className="accent-bar" />
    Based in Paris, France 🥐
  </p>

  <p className="mt-6 text-lg leading-relaxed text-[color:var(--text-dim)] md:text-xl">
    Turning insights into meaningful brands, campaigns, and customer
    experiences.
  </p>
</motion.div>

        {/* =====================================================
            RIGHT AVAILABILITY
        ====================================================== */}

        <motion.div
  initial={{ opacity: 0, x: 20 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.8, delay: 0.8 }}
  className="absolute right-6 top-[45%] z-30 hidden max-w-[360px] text-right md:right-12 md:block lg:right-20 lg:max-w-[390px]"
>
  <p className="font-mono-label text-lg md:text-xl">
    Available from
  </p>

  <p
    className="mt-4 font-serif-display text-5xl italic md:text-6xl"
    style={{ color: "var(--text)" }}
  >
    October 2026
  </p>

  <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-dim)] md:text-xl">
    Full-time roles, apprenticeships &amp; other marketing
    opportunities across France &amp; Europe.
  </p>
</motion.div>

        {/* =====================================================
    ORANGE HALF CIRCLE
====================================================== */}

<motion.div
  initial={{ opacity: 0, scale: 0.96 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{
    duration: 0.9,
    delay: 0.6,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute z-10 h-[47vh] w-[56vw] min-h-[400px] min-w-[700px] max-w-[1000px] rounded-t-full"
  style={{
    left: "50%",
    bottom: "1%",
    x: "-50%",
    background:
      "linear-gradient(180deg, var(--accent) 0%, #b93c1d 100%)",
  }}
/>

{/* =====================================================
    CENTERED HERO PHOTO
====================================================== */}

<motion.div
  initial={{ opacity: 0, y: 35 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 1,
    delay: 0.75,
    ease: [0.22, 1, 0.36, 1],
  }}
  className="absolute z-20 h-[82vh] w-[1250px]"
  style={{
    left: "50%",
    bottom: "0%",
    x: "-50%",
  }}
>
  {/* ORIGINAL PHOTO */}

  <img
    src="/hero-photo.png"
    alt="Rutwik Bhamare"
    className="absolute bottom-0 left-1/2 w-[2250px] max-w-none"
    style={{
      transform: "translateX(-50%)",
      filter:
        "drop-shadow(0 20px 35px rgba(0,0,0,0.3))",
    }}
  />
</motion.div>

        {/* =====================================================
            SKILL TAGS
        ====================================================== */}

        {skills.map((skill, index) => (
  <motion.div
    key={skill.label}
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{
      duration: 0.55,
      delay: 1 + index * 0.1,
    }}
    className={`absolute ${skill.position} z-40 hidden items-center gap-4 rounded-full border-2 border-[color:var(--border)] bg-[#090909]/90 px-9 py-6 text-2xl backdrop-blur-md sm:flex md:px-10 md:py-7 md:text-3xl`}
  >
    <span className="text-3xl md:text-4xl">
      {skill.icon}
    </span>

    <span className="whitespace-nowrap">
      {skill.label}
    </span>
  </motion.div>
))}

        {/* =====================================================
    CTA BUTTONS
====================================================== */}

<motion.div
  initial={{ opacity: 0, y: 15 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{
    duration: 0.7,
    delay: 1.1,
  }}
  className="absolute z-[60] flex items-center justify-center gap-3"
  style={{
    left: "50%",
    bottom: "21%",
    x: "-50%",
  }}
>
  {/* VIEW PORTFOLIO */}

  <a
    href="#projects"
    data-testid={HERO.ctaContact}
    className="group flex min-w-[175px] items-center justify-center gap-3 rounded-full border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-7 py-3.5 text-sm font-medium text-[#080808] transition-all duration-300 hover:bg-transparent hover:text-[color:var(--accent)] md:min-w-[195px] md:px-8 md:py-4 md:text-base"
  >
    <span>View Portfolio</span>

    <ArrowUpRight
      size={18}
      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
    />
  </a>

  {/* RESUME */}

  <a
    href="/resume.pdf"
    download="Rutwik_Bhamare_Resume.pdf"
    data-testid={HERO.ctaResume}
    className="group flex min-w-[135px] items-center justify-center gap-3 rounded-full border-2 border-[color:var(--accent)] bg-[color:var(--accent)] px-7 py-3.5 text-sm font-medium text-[#080808] transition-all duration-300 hover:bg-transparent hover:text-[color:var(--accent)] md:min-w-[150px] md:px-8 md:py-4 md:text-base"
  >
    <span>Resume</span>

    <ArrowDownToLine
      size={17}
      className="transition-transform duration-300 group-hover:translate-y-1"
    />
  </a>
</motion.div>
      </div>

      {/* Moving Statistics Bar */}
      <div className="absolute bottom-0 left-1/2 z-50 w-full -translate-x-1/2 overflow-hidden border-y border-[color:var(--border)] bg-[#090909]/95 py-14 md:py-16 backdrop-blur-md">
        <motion.div
          className="flex w-max items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 28,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[0, 1].map((group) => (
            <div
              key={group}
              className="flex shrink-0 items-center"
            >
              {stats.map((stat, index) => (
                <div
                  key={`${group}-${index}`}
                  className="flex items-center"
                >
                  <div className="flex min-w-[210px] md:min-w-[280px] flex-col items-center justify-center px-8 md:px-12">
                    <span className="font-serif-display text-4xl md:text-6xl leading-none">
                      {stat.value}
                    </span>
                    <span className="mt-3 font-mono-label text-[12px] md:text-[14px] text-[color:var(--text-dim)]">
                      {stat.label}
                    </span>
                  </div>

                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="px-4 text-2xl md:text-3xl"
                    style={{ color: "var(--accent)" }}
                  >
                    ✹
                  </motion.span>
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      </section>
  );
};
