import { motion } from "framer-motion";
import { ArrowDownToLine, ArrowLeft } from "lucide-react";

const Shein = () => {
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
            className="font-serif-display text-7xl sm:text-8xl lg:text-[10rem] leading-[0.82]"
          >
            SHEIN
            <br />
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              Unlocked.
            </span>
          </motion.h1>

          <div className="grid grid-cols-12 gap-8 mt-14">

            <div className="col-span-12 lg:col-span-4">
              <p className="font-mono-label">
                INTERNATIONAL BRAND
                <br />
                & MARKET ANALYSIS
              </p>
            </div>

            <div className="col-span-12 lg:col-span-7 lg:col-start-6">
              <p className="text-xl md:text-2xl leading-relaxed text-[color:var(--text-dim)]">
                An academic analysis of SHEIN's international business model,
                rapid global expansion, digital-first growth, supply chain,
                market exposure and the regulatory, environmental and economic
                challenges surrounding its international operations.
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
              Understanding the engine behind{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                rapid global growth.
              </span>
            </h2>

            <p className="mt-8 text-lg leading-relaxed text-[color:var(--text-dim)]">
              The project examined SHEIN's product model, direct-to-consumer
              approach, digital ecosystem, international expansion and
              competitive positioning within the global fashion industry.
            </p>

            <p className="mt-5 text-lg leading-relaxed text-[color:var(--text-dim)]">
              It also examined the challenges surrounding labor, environmental
              impact, currency exposure, supply-chain management, political
              risk and taxation.
            </p>

          </div>
        </div>
      </section>


      {/* WHAT SHEIN DOES */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            02 — Business Model
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

            <div>
              <h2 className="font-serif-display text-5xl md:text-6xl leading-tight">
                Digital-first.
                <br />
                <span
                  className="italic"
                  style={{ color: "var(--accent)" }}
                >
                  Direct-to-consumer.
                </span>
              </h2>
            </div>

            <div className="space-y-7">

              <div className="border-t border-[color:var(--border)] pt-6">
                <p className="font-mono-label mb-3">PRODUCT RANGE</p>
                <p className="text-[color:var(--text-dim)] leading-relaxed">
                  Cost-effective fast fashion expanded from women's apparel
                  into men's and children's clothing, beauty, shoes and
                  accessories.
                </p>
              </div>

              <div className="border-t border-[color:var(--border)] pt-6">
                <p className="font-mono-label mb-3">DTC MODEL</p>
                <p className="text-[color:var(--text-dim)] leading-relaxed">
                  A direct-to-consumer model supports competitive pricing by
                  reducing traditional intermediaries.
                </p>
              </div>

              <div className="border-t border-[color:var(--border)] pt-6">
                <p className="font-mono-label mb-3">DIGITAL ECOSYSTEM</p>
                <p className="text-[color:var(--text-dim)] leading-relaxed">
                  E-commerce is supported by social-media activity and
                  influencer partnerships aimed at young global consumers.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>


      {/* GLOBAL EXPANSION */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            03 — Global Expansion
          </p>

          <div className="space-y-0">

            {[
              ["2008", "Foundation", "Initially focused on women's apparel and domestic operations."],
              ["2012", "Globalization", "Shift toward international markets with affordable, trend-focused fashion."],
              ["2015", "Rebranding & Growth", "SheInside was renamed SHEIN as the brand expanded its Western-market recognition."],
              ["2019", "Shift to Singapore", "Singapore was presented as a neutral and international-friendly business hub."],
              ["2020", "COVID-19 Boom", "Revenue surge linked in the project to online shopping, influencer marketing and social media."],
              ["2022", "Peak Valuation", "The presentation discusses a $100 billion valuation and 40 European pop-up stores."],
              ["2023", "Continued Growth", "Estimated revenue of $32.2 billion with strong North American, European and Asian presence."],
            ].map(([year, title, description]) => (
              <div
                key={year}
                className="grid grid-cols-12 gap-5 border-t border-[color:var(--border)] py-8"
              >
                <span
                  className="col-span-3 md:col-span-2 font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  {year}
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


      {/* REVENUE GROWTH */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-12">
            <span className="accent-bar" />
            04 — Revenue Growth
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl leading-tight max-w-4xl">
            From hundreds of millions to{" "}
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              $32.2B.
            </span>
          </h2>

          <p className="mt-8 max-w-3xl text-lg text-[color:var(--text-dim)] leading-relaxed">
            The presentation connects SHEIN's revenue growth with product
            expansion, rapid response to fashion trends, digital marketing,
            influencer activity and international market penetration.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-px bg-[color:var(--border)] mt-14">

            {[
              ["2015", "Hundreds of millions"],
              ["2020", "$10B"],
              ["2021", "$15.7B"],
              ["2022", "$23B"],
              ["2023", "$32.2B"],
            ].map(([year, revenue]) => (
              <div
                key={year}
                className="bg-[var(--bg)] p-6 md:p-8"
              >
                <p className="font-mono-label">{year}</p>
                <p
                  className="font-serif-display text-2xl md:text-3xl mt-5"
                  style={{ color: "var(--accent)" }}
                >
                  {revenue}
                </p>
              </div>
            ))}

          </div>

          <p className="mt-6 text-xs text-[color:var(--text-dim)]">
            Figures reproduced as presented in the original academic project.
          </p>

        </div>
      </section>


      {/* REGIONAL MARKET */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            05 — Regional Market Breakdown
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)]">

            {[
              {
                region: "North America",
                share: "50%",
                description:
                  "The largest contribution in the presentation, with the United States identified as the major market.",
              },
              {
                region: "Europe",
                share: "30%",
                description:
                  "The UK, France and Germany are identified as key markets, with European pop-up events supporting visibility.",
              },
              {
                region: "Asia",
                share: "20%",
                description:
                  "China, India and Southeast Asia are identified as relevant markets with rising e-commerce and fast-fashion demand.",
              },
            ].map((item, index) => (
              <motion.div
                key={item.region}
                whileHover={{ y: -5 }}
                className="bg-[var(--bg)] p-8 md:p-10"
              >
                <div className="flex justify-between">
                  <span
                    className="font-mono-label"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>

                  <span className="font-mono-label">
                    {item.share}
                  </span>
                </div>

                <h3 className="font-serif-display text-3xl mt-10">
                  {item.region}
                </h3>

                <p className="mt-5 text-[color:var(--text-dim)] leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}

          </div>
        </div>
      </section>


      {/* CURRENCY EXPOSURE */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-5">
            <p className="font-mono-label">
              <span className="accent-bar" />
              06 — Revenue & Currency Exposure
            </p>

            <h2 className="font-serif-display text-5xl md:text-6xl mt-10 leading-tight">
              Three major{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                currency exposures.
              </span>
            </h2>
          </div>

          <div className="col-span-12 lg:col-span-6 lg:col-start-7">

            {[
              ["USD", "North American sales"],
              ["EUR", "Major European markets"],
              ["CNY", "Asian markets"],
            ].map(([currency, exposure], index) => (
              <div
                key={currency}
                className="border-t border-[color:var(--border)] py-7 flex items-center justify-between gap-5"
              >
                <div className="flex items-center gap-5">
                  <span
                    className="font-mono-label"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>

                  <h3 className="font-serif-display text-3xl">
                    {currency}
                  </h3>
                </div>

                <p className="text-sm text-[color:var(--text-dim)] text-right">
                  {exposure}
                </p>
              </div>
            ))}

            <p className="mt-8 text-[color:var(--text-dim)] leading-relaxed">
              The project discusses transaction risk, translation risk and
              economic risk, alongside mitigation through pricing strategies
              and prioritizing security, cash flow and investment.
            </p>

          </div>
        </div>
      </section>


      {/* SUPPLY CHAIN */}
      <section className="px-6 md:px-12 lg:px-20 py-24">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label">
            <span className="accent-bar" />
            07 — Supply Chain & Value Chain
          </p>

          <div className="grid grid-cols-12 gap-8 mt-12">

            <div className="col-span-12 lg:col-span-5">

              <h2 className="font-serif-display text-5xl md:text-7xl leading-[0.95]">
                Data
                <br />
                meets{" "}
                <span
                  className="italic"
                  style={{ color: "var(--accent)" }}
                >
                  demand.
                </span>
              </h2>

              <p className="mt-8 text-[color:var(--text-dim)] leading-relaxed">
                The presentation uses the value-added "smile curve" to frame
                SHEIN's focus on R&D and brand marketing while production and
                manufacturing are outsourced.
              </p>

            </div>

            <div className="col-span-12 lg:col-span-6 lg:col-start-7 space-y-8">

              {[
                {
                  number: "01",
                  title: "On-Demand Model",
                  text: "Initial batches of about 100–200 items are tested, followed by real-time customer feedback and restocking of products showing demand.",
                },
                {
                  number: "02",
                  title: "C2M & R&D",
                  text: "The Customer-to-Manufacturer model combines demand data from fashion websites with design to respond faster to market demand.",
                },
                {
                  number: "03",
                  title: "Distribution & Inventory",
                  text: "Overseas warehouses are presented as supporting faster logistics, shorter international shipping times, reduced cross-border tariff impact and stronger inventory turnover.",
                },
                {
                  number: "04",
                  title: "Supplier Network",
                  text: "The deck describes more than 3,000 suppliers and vendors in China supported by a digital supplier-management system.",
                },
              ].map((item) => (
                <div
                  key={item.number}
                  className="border-t border-[color:var(--border)] pt-6"
                >
                  <div className="flex gap-5">
                    <span
                      className="font-mono-label"
                      style={{ color: "var(--accent)" }}
                    >
                      {item.number}
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
        </div>
      </section>


      {/* VALUE CHAIN FLOW */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            08 — Operating Logic
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-[color:var(--border)]">

            {[
              "Customer Data",
              "C2M / R&D",
              "Small Initial Batches",
              "Real-Time Feedback",
              "Restock",
            ].map((item, index) => (
              <div
                key={item}
                className="bg-[var(--bg)] p-7 min-h-[170px] flex flex-col justify-between"
              >
                <span
                  className="font-mono-label"
                  style={{ color: "var(--accent)" }}
                >
                  0{index + 1}
                </span>

                <h3 className="font-serif-display text-2xl">
                  {item}
                </h3>
              </div>
            ))}

          </div>
        </div>
      </section>


      {/* ESG */}
      <section className="px-6 md:px-12 lg:px-20 py-24 border-t border-[color:var(--border)]">
        <div className="max-w-7xl mx-auto grid grid-cols-12 gap-8">

          <div className="col-span-12 lg:col-span-4">

            <p className="font-mono-label">
              <span className="accent-bar" />
              09 — ESG
            </p>

            <h2 className="font-serif-display text-5xl mt-10">
              Growth meets{" "}
              <span
                className="italic"
                style={{ color: "var(--accent)" }}
              >
                responsibility.
              </span>
            </h2>

          </div>

          <div className="col-span-12 lg:col-span-7 lg:col-start-6">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              {[
                ["Environmental", "Eco-friendly products, carbon reduction and recycling initiatives."],
                ["Social", "Labor concerns around wages, working conditions and supply-chain rights."],
                ["Governance", "Independent audits and supply-chain transparency are presented as important controls."],
                ["Consumer Pressure", "Growing consumer awareness around sustainability and ethics creates pressure to adapt."],
              ].map(([title, text], index) => (
                <div
                  key={title}
                  className="border border-[color:var(--border)] p-7"
                >
                  <span
                    className="font-mono-label"
                    style={{ color: "var(--accent)" }}
                  >
                    0{index + 1}
                  </span>

                  <h3 className="font-serif-display text-2xl mt-6">
                    {title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-dim)]">
                    {text}
                  </p>
                </div>
              ))}

            </div>
          </div>

        </div>
      </section>


      {/* RISK */}
      <section className="px-6 md:px-12 lg:px-20 py-24 bg-[color:var(--surface)]">
        <div className="max-w-7xl mx-auto">

          <p className="font-mono-label mb-14">
            <span className="accent-bar" />
            10 — International Risk
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--border)]">

            {[
              {
                title: "Political",
                text: "Sustainability and labor laws, supply-chain transparency requirements, tariffs, China–US trade tensions and consumer activism.",
              },
              {
                title: "Taxation",
                text: "Corporate tax rates, import duties and the U.S. de minimis framework are discussed as potential influences on competitiveness and consumer prices.",
              },
              {
                title: "Economic",
                text: "Currency exposure and changes in international market conditions can influence financial performance and operating decisions.",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-[var(--bg)] p-8 md:p-10"
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


      {/* CONCLUSION */}
      <section className="px-6 md:px-12 lg:px-20 py-32">
        <div className="max-w-5xl mx-auto text-center">

          <p className="font-mono-label">
            11 — Conclusion
          </p>

          <h2 className="font-serif-display text-5xl md:text-7xl mt-10 leading-tight">
            Rapid growth creates{" "}
            <span
              className="italic"
              style={{ color: "var(--accent)" }}
            >
              strategic complexity.
            </span>
          </h2>

          <p className="mt-10 text-lg md:text-xl leading-relaxed text-[color:var(--text-dim)]">
            The project frames SHEIN's international story around rapid growth
            and market dominance alongside ethical, environmental, regulatory
            and economic challenges. Sustainability and adaptability are
            presented as important considerations for future growth.
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
            href="/reports/shein-report.pdf"
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

export default Shein;