import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";

const Samsung = () => {
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
            className="font-serif-display text-6xl sm:text-7xl lg:text-[9rem] leading-[0.82]"
          >
            Samsung
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              APAC.
            </span>
          </motion.h1>

          <div className="grid grid-cols-12 gap-8 mt-14">

            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono-label">
                REPUTATION RISK
                <br />
                & STRATEGIC ANALYSIS
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--text-dim)]">
                An academic analysis of Samsung's reputational risks in the
                Asia-Pacific context, examining product safety, labor
                conditions, corruption-related allegations, sustainability,
                regional differences and stakeholder trust.
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
              Reputation is built through{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                every stakeholder interaction.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[color:var(--text-dim)]">
              The project followed three analytical stages: understanding
              reputational risk, critically evaluating Samsung's challenges,
              and developing strategic responses.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-dim)]">
              The analysis considered product quality and customer trust,
              employee welfare and workplace safety, sustainability
              initiatives, regional expectations and the relationship between
              global corporate standards and local realities.
            </p>

          </div>
        </div>
      </section>


      {/* RISK CASES */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            02 — Reputational Risk Cases
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)]">

            {[
              {
                number: "01",
                title: "Galaxy Note 7",
                subtitle: "Product Safety & Customer Trust",
                text:
                  "The 2016 Galaxy Note 7 battery crisis is examined as a major product-quality and reputational-risk case, including the recall, public communication and eventual production stoppage.",
              },
              {
                number: "02",
                title: "Labor Rights",
                subtitle: "Employee Welfare & Workplace Safety",
                text:
                  "The project discusses reported working conditions involving Samsung Electronics workers in Vietnam, India and Indonesia, including long working hours and occupational health concerns.",
              },
              {
                number: "03",
                title: "Corruption Issues",
                subtitle: "Governance & Corporate Reputation",
                text:
                  "The project discusses a 2017 prosecution involving allegations concerning a payment to an organization linked to Choi Soon-sil. It also records Samsung's denial of the bribery allegations.",
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

                <p
                  className="font-mono-label mt-3"
                  style={{ color: "var(--accent)" }}
                >
                  {item.subtitle}
                </p>

                <p className="mt-6 text-[color:var(--text-dim)] leading-relaxed">
                  {item.text}
                </p>

              </motion.div>
            ))}

          </div>

        </div>
      </section>


      {/* NOTE 7 TIMELINE */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            03 — Galaxy Note 7 Timeline
          </p>

          <div className="space-y-0">

            {[
              ["August 2", "Product Release", "Galaxy Note 7 released."],
              ["August 31", "Quality Control", "Shipment delayed for additional quality-control tests."],
              ["September 2", "Public Response", "DJ Koh apologized and Samsung announced a global recall."],
              ["September 8", "Aviation Warning", "U.S. aviation authorities and airlines advised passengers not to turn on or charge the phone on planes."],
              ["September 9", "Formal Recall", "U.S. Consumer Product Safety Commission advised consumers to stop using the device and later issued a formal recall."],
              ["October 5", "Replacement Incident", "Reports emerged of a replacement Note 7 overheating on a U.S. flight."],
              ["October 11", "Production Stopped", "Samsung stopped production and instructed users to stop using the device."],
            ].map(([date, title, description]) => (
              <div
                key={date}
                className="grid grid-cols-12 gap-5 border-t border-[color:var(--border)] py-7"
              >

                <span
                  className="col-span-3 md:col-span-2 font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {date}
                </span>

                <h3 className="col-span-9 md:col-span-3 font-serif-display text-2xl md:text-3xl">
                  {title}
                </h3>

                <p className="col-span-12 md:col-span-6 md:col-start-7 text-[color:var(--text-dim)] leading-relaxed">
                  {description}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CRITICAL EVALUATION */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            04 — Critical Evaluation
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {[
              {
                title: "Product Quality",
                text:
                  "The Note 7 incident is presented as a major reputational risk affecting product quality and customer trust.",
              },
              {
                title: "Employee Welfare",
                text:
                  "The analysis highlights concerns around labor practices, workplace safety and occupational health.",
              },
              {
                title: "Sustainability",
                text:
                  "Samsung is presented as pursuing environmental initiatives including a 2050 net-zero emissions commitment, eco-friendly products and recycling programs.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border border-[color:var(--border)] p-8"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
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

        </div>

      </section>


      {/* REGIONAL DIFFERENCES */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-5">

            <p className="font-mono-label">
              <span className="accent-bar" />
              05 — Regional Differences
            </p>

            <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-[0.95]">
              Global standards.
              <br />
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                Local realities.
              </span>
            </h2>

          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-8">

            {[
              {
                title: "Regulatory Framework",
                text:
                  "The project highlights the importance of strict compliance in highly regulated markets such as the EU, including GDPR.",
              },
              {
                title: "Cultural Expectations",
                text:
                  "Adaptation of products and marketing to local cultures is presented as an important strength.",
              },
              {
                title: "Global vs Local",
                text:
                  "The analysis identifies situations where local adaptation can create tension with global corporate values.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="border-t border-[color:var(--border)] pt-6"
              >

                <div className="flex gap-5">

                  <span
                    className="font-mono-label"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>

                  <div>

                    <h3 className="font-serif-display text-2xl md:text-3xl">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-[color:var(--text-dim)] leading-relaxed">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* OPERATIONAL ETHICS */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            06 — Operational Ethics
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            <div className="border border-[color:var(--border)] p-8 md:p-10">

              <p
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                01
              </p>

              <h3 className="font-serif-display text-3xl mt-7">
                Labor Conditions vs Sustainability
              </h3>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                The project contrasts Samsung's sustainability narrative with
                investigations cited in the presentation involving labor and
                environmental concerns.
              </p>

            </div>

            <div className="border border-[color:var(--border)] p-8 md:p-10">

              <p
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                02
              </p>

              <h3 className="font-serif-display text-3xl mt-7">
                CSR Narratives vs Ground Realities
              </h3>

              <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                Programs such as Smart School and Samsung Solve for Tomorrow
                are discussed alongside the importance of evaluating actual
                operating conditions.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* PROACTIVE STRATEGY */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            07 — Proactive Reputation Strategy
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-[color:var(--border)]">

            {[
              "Community Engagement",
              "Monitoring & Transparency",
              "Supply-Chain Transparency",
              "Environmental Initiatives",
            ].map((title, index) => (
              <div
                key={title}
                className="bg-[var(--bg)] p-8 min-h-[230px] flex flex-col justify-between"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
                </span>

                <h3 className="font-serif-display text-2xl">
                  {title}
                </h3>

              </div>
            ))}

          </div>

          <p className="mt-8 max-w-4xl text-[color:var(--text-dim)] leading-relaxed">
            The recommendations include stronger community engagement,
            improved monitoring and transparency, consideration of blockchain
            for supply-chain transparency, and environmental initiatives such
            as clean-energy projects in Vietnam and e-waste recycling in
            Manila and Jakarta.
          </p>

        </div>

      </section>


      {/* REACTIVE RISK MANAGEMENT */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-5">

            <p className="font-mono-label">
              <span className="accent-bar" />
              08 — Reactive Risk Management
            </p>

            <h2 className="font-serif-display text-5xl md:text-6xl mt-10 leading-tight">
              Prepare for the moment when{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                risk becomes visible.
              </span>
            </h2>

          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">

            <div className="border-t border-[color:var(--border)] pt-7">

              <p
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                01
              </p>

              <h3 className="font-serif-display text-3xl mt-5">
                Crisis Response Framework
              </h3>

              <p className="mt-4 text-[color:var(--text-dim)] leading-relaxed">
                Build a robust crisis-response framework with regionally
                specific teams for controversies such as product recalls.
              </p>

            </div>

            <div className="border-t border-[color:var(--border)] pt-7 mt-8">

              <p
                className="font-mono-label"
                style={{ color: "var(--accent)" }}
              >
                02
              </p>

              <h3 className="font-serif-display text-3xl mt-5">
                Local Partnerships
              </h3>

              <p className="mt-4 text-[color:var(--text-dim)] leading-relaxed">
                Build trust through partnerships, including collaboration with
                local NGOs such as labor-rights organizations in Vietnam.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ETHICAL ALIGNMENT */}
      <section className="px-6 md:px-12 lg:px-20 py-24">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            09 — Ethical Alignment Across Regions
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {[
              "Regional ethics committees",
              "Cultural-sensitivity training",
              "Third-party audits",
              "Community feedback",
              "Ethical supplier incentives",
              "Local workforce development",
              "Regional leadership town halls",
            ].map((item, index) => (
              <div
                key={item}
                className="border border-[color:var(--border)] p-7"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
                </span>

                <h3 className="font-serif-display text-2xl mt-6">
                  {item}
                </h3>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* TRANSPARENCY */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">

        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            10 — Transparency & CSR Reporting
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {[
              "Publish region-specific CSR reports with metrics and challenges.",
              "Include local communities, NGOs and government bodies in CSR design.",
              "Create diverse regional stakeholder advisory boards.",
              "Develop real-time CSR tracking platforms.",
              "Use mobile apps or websites to provide live updates on environmental and social goals.",
            ].map((item, index) => (
              <div
                key={item}
                className="flex gap-5 border-t border-[color:var(--border)] pt-6"
              >

                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
                </span>

                <p className="text-[color:var(--text-dim)] leading-relaxed">
                  {item}
                </p>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* CONCLUSION */}
      <section className="px-6 md:px-12 lg:px-20 py-32">

        <div className="max-w-5xl mx-auto text-center">

          <p className="font-mono-label">
            11 — Conclusion
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-tight">
            Reputation requires{" "}
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              preparedness.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            The project frames Samsung's APAC reputation challenge around
            product safety, labor conditions, corruption-related allegations,
            sustainability expectations and the balance between global
            standards and local realities.
          </p>

          <p className="mt-5 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            Its recommendations focus on monitoring, crisis preparedness,
            transparency, ethical alignment and regional stakeholder
            engagement.
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
            href="/reports/samsung-apac-report.pdf"
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

export default Samsung;