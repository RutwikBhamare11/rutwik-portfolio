import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";

const AntElement = () => {
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
            className="font-serif-display text-6xl sm:text-7xl lg:text-[8rem] leading-[0.82]"
          >
            Ant.Element
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              Marseille.
            </span>
          </motion.h1>

          <div className="grid grid-cols-12 gap-8 mt-14">

            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono-label">
                SOCIAL ENTREPRENEURSHIP
                <br />
                & ECOSYSTEM RESEARCH
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--text-dim)]">
                A qualitative field study exploring three Marseille
                enterprises that transform waste into social, environmental
                and economic value.
              </p>
            </div>

          </div>
        </div>
      </section>


      {/* PROJECT OVERVIEW */}
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
              Understanding impact
              <br />
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                from the workshop floor.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[color:var(--text-dim)]">
              The project examined Marseille's social and creative upcycling
              ecosystem through direct field research. The study focused on
              businesses where environmental and social impact overlap.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-dim)]">
              Rather than looking only at the public narrative around the
              social economy, the research explored how these businesses
              actually operate, fund themselves, create value and manage
              constraints.
            </p>

          </div>
        </div>

      </section>


      {/* OBJECTIVES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            02 — Research Objectives
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)]">

            {[
              {
                number: "01",
                title: "Identify",
                text:
                  "Scan Marseille's circular and social-economy scene and narrow the research to businesses where environmental and social impact genuinely overlap.",
              },
              {
                number: "02",
                title: "Understand",
                text:
                  "Meet founders in their own spaces and explore not only what they create, but also their motivations, operational realities and constraints.",
              },
              {
                number: "03",
                title: "Document",
                text:
                  "Convert interviews and observations into a reusable written study supported by three founder video portraits.",
              },
            ].map((item) => (
              <motion.div
                key={item.number}
                whileHover={{ y: -5 }}
                className="bg-[var(--bg)] p-8 md:p-10"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="font-serif-display text-3xl md:text-4xl mt-10">
                  {item.title}
                </h3>

                <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>

      </section>


      {/* RESEARCH APPROACH */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            03 — Research Approach
          </p>

          <div className="space-y-0">

            {[
              {
                number: "01",
                title: "Desk Research",
                text:
                  "Mapped associations, ateliers and creative founders across Marseille and filtered potential cases based on their circular-economy and social-impact models.",
              },
              {
                number: "02",
                title: "Case Selection",
                text:
                  "Selected three complementary models: a solo B2B workshop, a state-recognised insertion association and an independent creative founder.",
              },
              {
                number: "03",
                title: "On-Site Interviews",
                text:
                  "Conducted semi-structured interviews in French directly within the businesses' workshop environments.",
              },
              {
                number: "04",
                title: "Video & Report",
                text:
                  "Cross-read the cases to identify shared patterns and transformed the findings into a written market study and video portraits.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="grid grid-cols-12 gap-5 border-t border-[color:var(--border)] py-8"
              >

                <span
                  className="col-span-3 md:col-span-2 font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="col-span-9 md:col-span-3 font-serif-display text-2xl md:text-3xl">
                  {item.title}
                </h3>

                <p className="col-span-12 md:col-span-6 md:col-start-7 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* THREE BUSINESSES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            04 — The Three Businesses
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                number: "01",
                title: "Atelier Royer",
                person: "Elisabeth",
                focus: "Creative Upcycling",
                text:
                  "Transforms PVC banners that would otherwise be sent to incineration into bags, accessories and furniture.",
                tension:
                  "Scaling craft-level upcycling while keeping each piece unique and locally made.",
              },
              {
                number: "02",
                title: "13 A'tipik",
                person: "Association",
                focus: "Textile Insertion",
                text:
                  "Uses a sewing workshop to retrain people who are far from employment because of disability, isolation or administrative hardship.",
                tension:
                  "Balancing the social mission with financial sustainability through upcycled-textile sales.",
              },
              {
                number: "03",
                title: "Zetapis",
                person: "Anissa",
                focus: "Creative Craft",
                text:
                  "Creates custom tufted rugs and upcycled sports gear while running workshops supporting Marseille's craft scene.",
                tension:
                  "Turning a personal creative practice into repeatable B2B partnerships.",
              },
            ].map((item) => (
              <motion.article
                key={item.title}
                whileHover={{ y: -6 }}
                className="border border-[color:var(--border)] p-8 md:p-10 bg-[var(--bg)]"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="font-serif-display text-3xl md:text-4xl mt-8">
                  {item.title}
                </h3>

                <p
                  className="font-mono-label mt-3"
                  style={{ color: "var(--accent)" }}
                >
                  {item.person} · {item.focus}
                </p>

                <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

                <div className="border-t border-[color:var(--border)] mt-8 pt-6">

                  <p className="font-mono-label">
                    KEY TENSION
                  </p>

                  <p className="mt-3 text-sm leading-relaxed text-[color:var(--text-dim)]">
                    {item.tension}
                  </p>

                </div>

              </motion.article>
            ))}

          </div>

        </div>

      </section>


      {/* CROSS CASE FINDING */}
      <section className="px-6 md:px-12 lg:px-20 py-32">

        <div className="max-w-5xl mx-auto text-center">

          <p className="font-mono-label">
            05 — Cross-Case Finding
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-[0.95]">
            Upcycling is not
            <br />
            the product.
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              It is the bridge.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            The study found that reusing waste allows founders to pursue
            broader objectives: a CSR offer for companies, a path back to work
            for marginalized people, or a distinctive creative identity.
          </p>

        </div>

      </section>


      {/* VALUE FRAMEWORK */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            06 — Value Created
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {[
              {
                number: "01",
                title: "Environmental Value",
                text: "Waste is diverted through reuse and upcycling practices.",
              },
              {
                number: "02",
                title: "Social Value",
                text: "Business activity can support jobs, inclusion and pathways back to employment.",
              },
              {
                number: "03",
                title: "Economic Value",
                text: "Distinctive products and services create opportunities for sustainable commercial activity.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border border-[color:var(--border)] p-8"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="font-serif-display text-3xl mt-8">
                  {item.title}
                </h3>

                <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

          <div className="max-w-4xl mt-10">

            <p className="text-lg leading-relaxed text-[color:var(--text-dim)]">
              A common thread across the cases was the importance of
              storytelling. The study presents customers and funders as
              engaging not only with a sustainability claim, but with the
              story of transformation behind it.
            </p>

          </div>

        </div>

      </section>


      {/* RESULTS & DELIVERABLES */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            07 — Results & Deliverables
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)]">

            {[
              {
                number: "03",
                title: "Businesses Studied",
                text:
                  "Three complementary Marseille cases were studied across upcycling, textile insertion and creative craft.",
              },
              {
                number: "03",
                title: "Founder Video Stories",
                text:
                  "Three founder stories were filmed on-site and subtitled in English.",
              },
              {
                number: "10",
                title: "Page Market Report",
                text:
                  "A qualitative reference report was co-written by the team to document the ecosystem and findings.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-[var(--bg)] p-8 md:p-10"
              >

                <span
                  className="font-serif-display text-6xl"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="font-serif-display text-2xl mt-8">
                  {item.title}
                </h3>

                <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* RECOMMENDATIONS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            08 — Recommendations
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                number: "01",
                title: "Measure to Attract Capital",
                text:
                  "Track indicators such as kilos diverted, people supported and partnerships signed to make impact more visible to funders.",
              },
              {
                number: "02",
                title: "Partner Across Borders",
                text:
                  "Connect founders with European brands and events looking for circular solutions and impact-focused partnerships.",
              },
              {
                number: "03",
                title: "Tell the Story in Two Languages",
                text:
                  "Use French and English video and visual assets to translate local impact into an international pitch.",
              },
            ].map((item) => (
              <div
                key={item.number}
                className="border-t border-[color:var(--border)] pt-7"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {item.number}
                </span>

                <h3 className="font-serif-display text-3xl mt-6">
                  {item.title}
                </h3>

                <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* MY CONTRIBUTION */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-5">

            <p className="font-mono-label">
              <span className="accent-bar" />
              09 — My Contribution
            </p>

            <h2 className="font-serif-display text-5xl md:text-6xl mt-10 leading-tight">
              Turning fieldwork into a{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                visual story.
              </span>
            </h2>

          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">

            <div className="border-t border-[color:var(--border)] pt-7">

              <p
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                RUTWIK BHAMARE
              </p>

              <h3 className="font-serif-display text-3xl mt-5">
                Video Editor
              </h3>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                Shaped hours of unscripted bilingual footage from the field
                interviews into a concise three-minute narrative that could
                communicate the founders' stories and the project's findings.
              </p>

            </div>

            <div className="border-t border-[color:var(--border)] pt-7 mt-8">

              <p
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                TEAM CONTRIBUTION
              </p>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                The project combined research, communication and visual
                storytelling to make three relatively overlooked businesses
                more understandable and shareable.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROJECT CLOSE */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-5xl mx-auto text-center">

          <p className="font-mono-label">
            10 — Project Close
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-tight">
            Making local impact
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              visible.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            The project concluded with a self-contained written and visual
            reference documenting three Marseille businesses. Each business
            retained its own story and footage for potential self-promotion,
            with public release planned subject to founder consent.
          </p>

        </div>

      </section>


      {/* CONCLUSION */}
      <section className="px-6 md:px-12 lg:px-20 py-32">

        <div className="max-w-5xl mx-auto text-center">

          <p className="font-mono-label">
            11 — Conclusion
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-tight">
            Waste can become
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              social value.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            The study presents three complementary examples of upcycling,
            textile insertion and creative craft. Its central contribution
            was documenting how environmental reuse can support wider social
            and economic value while translating founder stories into a
            reusable written and video reference.
          </p>

        </div>

      </section>


      {/* REPORT / BACK */}
      <section className="px-6 md:px-12 lg:px-20 py-20 border-t border-[color:var(--border)]">

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-5 justify-between">

          <a
            href="/"
            className="btn-pill"
          >
            <ArrowLeft size={14} />
            Back to Projects
          </a>

          <a
            href="/reports/ant-element-report.pdf"
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

export default AntElement;