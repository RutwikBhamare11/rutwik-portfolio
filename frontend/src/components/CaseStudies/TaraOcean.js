import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowLeft, ArrowUpRight } from "lucide-react";

const TaraOcean = () => {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[var(--text)]">

      {/* HERO */}
      <section className="min-h-screen px-6 md:px-12 lg:px-20 py-24 flex items-end">
        <div className="w-full max-w-7xl mx-auto">

          <div className="flex items-center gap-3 mb-8">
            <span className="accent-bar" />
            <p className="font-mono-label">
              ACADEMIC PROJECT · 2025
            </p>
          </div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="font-serif-display text-6xl sm:text-7xl lg:text-[9rem] leading-[0.85]"
          >
            Tara Ocean
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              Foundation.
            </span>
          </motion.h1>

          <div className="grid grid-cols-12 gap-8 mt-14">
            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono-label">
                BRAND & DIGITAL
                <br />
                MARKETING STRATEGY
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--text-dim)]">
                A strategic analysis and communication plan focused on
                strengthening emotional engagement and small-donor
                participation while preserving Tara Ocean Foundation's
                scientific credibility.
              </p>
            </div>
          </div>

        </div>
      </section>


      {/* OVERVIEW */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 md:col-span-3">
            <p className="font-mono-label">
              <span className="accent-bar" />
              01 — Project Overview
            </p>
          </div>

          <div className="col-span-12 md:col-span-8 md:col-start-5">
            <h2 className="font-serif-display text-4xl md:text-6xl leading-tight">
              Turning scientific credibility into{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                emotional engagement.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[color:var(--text-dim)]">
              The project identified a gap between Tara Ocean Foundation's
              strong scientific credibility and its ability to create
              emotional engagement and mobilize small donors through social
              media.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-dim)]">
              The proposed direction was to make Tara more human, emotional
              and participatory while keeping its scientific credibility.
            </p>
          </div>

        </div>
      </section>


      {/* CURRENT SITUATION */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <div className="mb-14">
            <p className="font-mono-label">
              <span className="accent-bar" />
              02 — Current Situation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)]">

            <div className="bg-[var(--bg)] p-8 md:p-10">
              <p
                className="font-mono-label mb-6"
                style={{ color: "var(--accent)" }}
              >
                STRENGTHS
              </p>

              <h3 className="font-serif-display text-3xl mb-6">
                Scientific credibility.
              </h3>

              <p className="text-[color:var(--text-dim)] leading-relaxed">
                Globally recognized scientific excellence, prestigious
                partnerships including UNESCO and EMBL, and a distinctive
                combination of science, art and adventure.
              </p>
            </div>

            <div className="bg-[var(--bg)] p-8 md:p-10">
              <p
                className="font-mono-label mb-6"
                style={{ color: "var(--accent)" }}
              >
                WEAKNESSES
              </p>

              <h3 className="font-serif-display text-3xl mb-6">
                Communication gap.
              </h3>

              <p className="text-[color:var(--text-dim)] leading-relaxed">
                Communication was identified as too technical for general
                audiences, while small donors may not clearly understand how
                a contribution such as €5 creates impact.
              </p>
            </div>

            <div className="bg-[var(--bg)] p-8 md:p-10">
              <p
                className="font-mono-label mb-6"
                style={{ color: "var(--accent)" }}
              >
                OPPORTUNITIES
              </p>

              <h3 className="font-serif-display text-3xl mb-6">
                Rising eco-awareness.
              </h3>

              <p className="text-[color:var(--text-dim)] leading-relaxed">
                Rising environmental awareness among younger generations
                creates an opportunity to make Tara's science, art and
                adventure more accessible.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* COMPETITIVE ANALYSIS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-4">
            <p className="font-mono-label">
              <span className="accent-bar" />
              03 — Competitive Analysis
            </p>

            <h2 className="font-serif-display text-4xl md:text-5xl mt-8 leading-tight">
              Learning from the{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                category.
              </span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">

            {[
              ["Sea Shepherd", "Clarity and urgency can support donation response."],
              ["The Ocean Cleanup", "Precise, tangible metrics can build trust."],
              ["Greenpeace", "Human stories can help audiences connect with the cause."],
              ["WWF", "Symbolic adoption can create emotional connection."],
            ].map(([name, description], index) => (
              <div
                key={name}
                className="border-t border-[color:var(--border)] py-7 flex gap-6"
              >
                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
                </span>

                <div>
                  <h3 className="font-serif-display text-2xl md:text-3xl">
                    {name}
                  </h3>

                  <p className="mt-2 text-[color:var(--text-dim)]">
                    {description}
                  </p>
                </div>
              </div>
            ))}

            <p className="mt-8 text-lg leading-relaxed">
              The central learning was that effective fundraising can combine
              <span style={{ color: "var(--accent)" }}>
                {" "}emotion with scientific credibility.
              </span>
            </p>

          </div>

        </div>
      </section>


      {/* STRATEGIC REPOSITIONING */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">

          <div className="mb-16">
            <p className="font-mono-label">
              <span className="accent-bar" />
              04 — Strategic Repositioning
            </p>

            <h2 className="font-serif-display text-5xl md:text-7xl mt-8">
              Humanize.{" "}
              <span className="italic" style={{ color: "var(--accent)" }}>
                Engage.
              </span>{" "}
              Participate.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">

            <div>
              <span
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                01
              </span>

              <h3 className="font-serif-display text-3xl mt-5">
                Humanization
              </h3>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                Put faces, names and emotions at the centre of communication.
                Highlight scientists, sailors, photographers and young
                explorers through recurring human stories.
              </p>
            </div>

            <div>
              <span
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                02
              </span>

              <h3 className="font-serif-display text-3xl mt-5">
                Emotional Storytelling
              </h3>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                Translate complex science into accessible narratives without
                losing rigor. Use stories of creatures, ecosystems and real
                expedition moments.
              </p>
            </div>

            <div>
              <span
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                03
              </span>

              <h3 className="font-serif-display text-3xl mt-5">
                Participation
              </h3>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                Create easy, meaningful ways to take action and show donors
                immediate proof of impact, turning followers into active
                members of a shared adventure.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PERSONAS */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-12">
            <span className="accent-bar" />
            05 — Audience Personas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              {
                name: "The Green Parent",
                age: "35 years old",
                channels: "Facebook · Instagram",
                motivation:
                  "Family experiences, educational content and long-term contributions with clear impact.",
              },
              {
                name: "The Ethical Explorer",
                age: "26 years old",
                channels: "Instagram · YouTube · Travel communities",
                motivation:
                  "Authenticity, exclusive behind-the-scenes access and feeling close to expeditions.",
              },
              {
                name: "The Science Ally",
                age: "45 years old",
                channels: "LinkedIn · Newsletters · Webinars",
                motivation:
                  "Scientific credibility, transparency and access to research outputs.",
              },
              {
                name: "The Ocean Dreamer",
                age: "23 years old",
                channels: "Instagram · TikTok",
                motivation:
                  "Participation, recognition, community belonging and proof that €1–€5 creates impact.",
              },
            ].map((persona, index) => (
              <motion.div
                key={persona.name}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="border border-[color:var(--border)] p-8 md:p-10"
              >
                <div className="flex justify-between gap-4">
                  <span
                    className="font-mono-label"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>

                  <span className="font-mono-label text-right">
                    {persona.age}
                  </span>
                </div>

                <h3 className="font-serif-display text-3xl md:text-4xl mt-8">
                  {persona.name}
                </h3>

                <p
                  className="font-mono-label mt-5"
                  style={{ color: "var(--accent)" }}
                >
                  {persona.channels}
                </p>

                <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                  {persona.motivation}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* GAMIFICATION */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label">
            <span className="accent-bar" />
            06 — Gamification
          </p>

          <div className="grid grid-cols-12 gap-8 mt-12">

            <div className="col-span-12 lg:col-span-6">
              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95]">
                The Ocean
                <br />
                Health{" "}
                <span className="italic" style={{ color: "var(--accent)" }}>
                  Quest.
                </span>
              </h2>
            </div>

            <div className="col-span-12 lg:col-span-5 lg:col-start-8">
              <p className="text-lg leading-relaxed text-[color:var(--text-dim)]">
                A six-week challenge for TikTok, Instagram and Facebook
                designed to turn passive followers into active supporters.
              </p>

              <div className="mt-10 space-y-4">
                {[
                  "AR plankton capture",
                  "Impact Week — €1 = 1 m² goal",
                  "Waste Warrior environmental actions",
                  "Storytelling prompts and photo challenges",
                  "Live Q&As with the Tara crew",
                  "Digital badges and the Ocean Guardian Medal",
                ].map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 border-t border-[color:var(--border)] pt-4"
                  >
                    <span
                      className="font-mono-label"
                      style={{ color: "var(--accent)" }}
                    >
                      0{index + 1}
                    </span>

                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* CREATIVE CAMPAIGN */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label">
            <span className="accent-bar" />
            07 — Creative Campaign
          </p>

          <h2 className="font-serif-display text-5xl md:text-8xl mt-12 leading-[0.9]">
            The Ocean's
            <br />
            <span className="italic" style={{ color: "var(--accent)" }}>
              Secret Diary.
            </span>
          </h2>

          <div className="grid grid-cols-12 gap-8 mt-16">

            <div className="col-span-12 lg:col-span-5">
              <p className="text-xl leading-relaxed">
                The ocean becomes the narrator of its own diary.
              </p>

              <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                Poetic voice is combined with scientific facts to make the
                communication emotional and educational.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7">

              <div className="space-y-8">

                <div>
                  <p className="font-mono-label mb-3">FORMATS</p>
                  <p className="text-[color:var(--text-dim)]">
                    Reels · TikTok POV videos · Carousels · Static quotes ·
                    AR filters
                  </p>
                </div>

                <div>
                  <p className="font-mono-label mb-3">NARRATIVE</p>
                  <p className="text-2xl font-serif-display">
                    Beauty → Pain → Hope → Invitation
                  </p>
                </div>

                <div className="border-l-2 pl-6" style={{ borderColor: "var(--accent)" }}>
                  <p className="font-mono-label mb-3">CALL TO ACTION</p>
                  <p className="text-xl font-serif-display italic">
                    "Help me write the next page. Every €1 becomes research."
                  </p>
                </div>

              </div>

            </div>

          </div>
        </div>
      </section>


      {/* PLATFORM STRATEGY */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            08 — Platform Strategy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-[color:var(--border)]">

            {[
              ["TikTok", "Fast, emotional storytelling, trends and an authentic tone.", "3–4 posts/week"],
              ["Instagram", "Main engagement platform with Stories, feed posts and Reels.", "Daily Stories · 4 feed posts/week · 2 Reels/week"],
              ["Facebook", "Green Parent audiences and community groups.", "Educational content"],
              ["LinkedIn", "Scientific rigor, partnerships, research updates and professional outreach.", "Professional outreach"],
            ].map(([platform, description, frequency], index) => (
              <div
                key={platform}
                className="bg-[var(--bg)] p-8 md:p-10"
              >
                <div className="flex justify-between gap-5">
                  <h3 className="font-serif-display text-3xl">
                    {platform}
                  </h3>

                  <span
                    className="font-mono-label"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>
                </div>

                <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                  {description}
                </p>

                <p className="mt-6 font-mono-label">
                  {frequency}
                </p>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* TIMELINE */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            09 — Timeline & Expected Outcomes
          </p>

          <div className="space-y-0">

            {[
              ["01", "Months 1–2", "Audits, content planning, guidelines, launch of Secret Diary and First Mate Circle."],
              ["02", "Months 3–4", "Gamification, m² donation map and first Faces of Tara."],
              ["03", "Months 5–8", "Scale best-performing formats, influencers and matching campaigns."],
              ["04", "Months 9–12", "Full ecosystem."],
            ].map(([number, period, description]) => (
              <div
                key={number}
                className="grid grid-cols-12 gap-5 border-t border-[color:var(--border)] py-8"
              >
                <span
                  className="col-span-2 md:col-span-1 font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {number}
                </span>

                <h3 className="col-span-10 md:col-span-3 font-serif-display text-2xl">
                  {period}
                </h3>

                <p className="col-span-12 md:col-span-7 md:col-start-6 text-[color:var(--text-dim)] leading-relaxed">
                  {description}
                </p>
              </div>
            ))}

          </div>

          <div className="mt-12 border border-[color:var(--border)] p-8">
            <p className="font-mono-label mb-4">
              TARGETS FROM THE ORIGINAL PROJECT
            </p>

            <p className="text-[color:var(--text-dim)] leading-relaxed">
              The original academic work lists targets of 500k–1M followers,
              2–3 lakh monthly donors, €250k–€350k per quarter in matching
              campaigns and an ROI framing of €110k–€120k investment to
              €400k–€600k revenue.
            </p>

            <p className="mt-4 text-xs text-[color:var(--text-dim)]">
              These figures are reproduced as presented in the original
              academic project.
            </p>
          </div>

        </div>
      </section>


      {/* CONCLUSION */}
      <section className="px-6 md:px-12 lg:px-20 py-32 bg-[color:var(--surface)]">
        <div className="max-w-5xl mx-auto text-center">

          <p className="font-mono-label">
            10 — Conclusion
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-tight">
            Building an emotional bridge between{" "}
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              science and participation.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            The project proposes storytelling, humanization, participation
            and clear impact as ways to make Tara's scientific legitimacy
            more accessible to a broader audience and small donors.
          </p>

        </div>
      </section>


      {/* REPORT / BACK */}
      <section className="px-6 md:px-12 lg:px-20 py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 justify-between">

          <a
            href="/"
            className="btn-pill"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </a>

          <a
            href="/reports/tara-ocean-foundation-report.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-pill accent"
          >
            Download Full Report
            <ArrowDownToLine size={14} />
          </a>

        </div>
      </section>

    </main>
  );
};

export default TaraOcean;