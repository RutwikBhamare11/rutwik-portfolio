import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BarChart3,
  Globe2,
  Megaphone,
  Search,
  Sparkles,
  Target,
} from "lucide-react";

const capabilities = [
  {
    icon: Megaphone,
    title: "Campaign Execution",
    text: "Coordinated multi-channel campaign activity across social, email and web for Paris and Los Angeles teams.",
  },
  {
    icon: Target,
    title: "Paid Media",
    text: "Worked with Google Ads and Meta Ads, including A/B testing and budget-aligned campaign execution.",
  },
  {
    icon: Search,
    title: "SEO & Website",
    text: "Owned SEO strategy and on-page optimisation for website product listings.",
  },
  {
    icon: BarChart3,
    title: "Performance Reporting",
    text: "Tracked campaign KPIs and prepared monthly performance reports to support content and budget decisions.",
  },
  {
    icon: Sparkles,
    title: "Brand Communication",
    text: "Developed communication around designers, product stories, events and brand positioning.",
  },
  {
    icon: Globe2,
    title: "Market Research",
    text: "Conducted competitive and market research to inform content strategy and brand positioning.",
  },
];

const AnimatedMetric = ({ value, label, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);

  const displayValue = useTransform(
    count,
    (latest) => `${latest.toFixed(decimals)}${suffix}`
  );

  useEffect(() => {
    if (!isInView) return;

    const controls = animate(count, value, {
      duration: 1.8,
      ease: "easeOut",
    });

    return () => controls.stop();
  }, [isInView, value, count]);

  return (
    <div ref={ref} className="py-4 lg:py-6">
      <motion.p className="font-serif-display text-4xl lg:text-5xl xl:text-6xl">
        {displayValue}
      </motion.p>

      <p className="mt-3 font-mono-label text-[color:var(--text-dim)]">
        {label}
      </p>
    </div>
  );
};

export default function WearTheFuture() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">

      {/* ============================================================
          HERO
      ============================================================ */}

      <section className="px-6 pt-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">

          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono-label text-[color:var(--text-dim)] transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </a>

          <div className="mt-20 grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 lg:col-span-8">

              <p className="font-mono-label mb-6">
                <span className="accent-bar" />
                Professional Work · 01
              </p>

              <h1 className="font-serif-display text-6xl leading-[0.92] sm:text-7xl lg:text-[8rem]">
                Wear The
                <br />
                <span style={{ color: "var(--accent)" }}>
                  Future
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--text-dim)] md:text-xl">
                Digital marketing, brand communication and campaign execution
                for a Los Angeles-based fashion PR and representation agency
                working across Paris and Los Angeles.
              </p>

            </div>

            <div className="col-span-12 flex items-end lg:col-span-4">

              <div className="w-full border-t border-[color:var(--border)] pt-5">

                <div className="grid grid-cols-2 gap-6">

                  <div>
                    <p className="font-mono-label text-[color:var(--text-dim)]">
                      Role
                    </p>

                    <p className="mt-2 text-sm">
                      Digital Marketing
                      <br />
                      &amp; Media Intern
                    </p>
                  </div>

                  <div>
                    <p className="font-mono-label text-[color:var(--text-dim)]">
                      Location
                    </p>

                    <p className="mt-2 text-sm">
                      Paris
                      <br />
                      Los Angeles
                    </p>
                  </div>

                  <div>
                    <p className="font-mono-label text-[color:var(--text-dim)]">
                      Period
                    </p>

                    <p className="mt-2 text-sm">
                      Mar — Sep 2026
                    </p>
                  </div>

                  <div>
                    <p className="font-mono-label text-[color:var(--text-dim)]">
                      Focus
                    </p>

                    <p className="mt-2 text-sm">
                      Brand · Digital
                      <br />
                      Campaigns
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

          <div className="mt-16 border-y border-[color:var(--border)] py-4">

            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono-label text-[color:var(--text-dim)]">
              <span>Digital Marketing</span>
              <span>Brand Communication</span>
              <span>Campaign Execution</span>
              <span>Paid Media</span>
              <span>SEO</span>
              <span>Market Research</span>
            </div>

          </div>

        </div>
      </section>


      {/* ============================================================
          OVERVIEW
      ============================================================ */}

      <section className="section px-6 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 lg:gap-12">

          <div className="col-span-12 md:col-span-3">

            <p className="font-mono-label">
              <span className="accent-bar" />
              01 — Overview
            </p>

          </div>

          <div className="col-span-12 md:col-span-9">

            <h2 className="font-serif-display max-w-4xl text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Connecting fashion brands, digital campaigns and cultural
              storytelling.
            </h2>

            <div className="mt-10 grid gap-8 md:grid-cols-2">

              <p className="leading-relaxed text-[color:var(--text-dim)]">
                During my internship at Wear The Future, I worked across
                digital marketing, campaign coordination, brand communication,
                paid media, SEO, reporting and market research.
              </p>

              <p className="leading-relaxed text-[color:var(--text-dim)]">
                The work connected day-to-day digital execution with the wider
                challenge of communicating emerging designers and fashion
                brands across international audiences.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          SCOPE
      ============================================================ */}

      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 md:col-span-3">

              <p className="font-mono-label">
                <span className="accent-bar" />
                02 — Scope
              </p>

            </div>

            <div className="col-span-12 grid md:grid-cols-2 lg:grid-cols-3">

              {capabilities.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.05,
                    }}
                    className="border-l border-t border-[color:var(--border)] p-6 lg:p-8"
                  >

                    <Icon
                      size={20}
                      strokeWidth={1.5}
                      className="mb-8"
                      style={{ color: "var(--accent)" }}
                    />

                    <h3 className="font-serif-display text-2xl">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-relaxed text-[color:var(--text-dim)]">
                      {item.text}
                    </p>

                  </motion.div>
                );
              })}

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          EVENT
      ============================================================ */}

      <section className="section px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 md:col-span-3">

              <p className="font-mono-label">
                <span className="accent-bar" />
                03 — Event Campaign
              </p>

            </div>

            <div className="col-span-12 md:col-span-9">

              <p className="font-mono-label text-[color:var(--text-dim)]">
                French in Fashion
              </p>

              <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                From concept to campaign execution.
              </h2>

              <p className="mt-8 max-w-3xl text-base leading-relaxed text-[color:var(--text-dim)] md:text-lg">
                Organized and led execution of “French in Fashion: A Summer
                Solstice Celebration,” coordinating designers, vendors and
                outreach partners for a Los Angeles brand event.
              </p>

              <div className="mt-10 grid grid-cols-1 gap-px border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-3">

                <div className="bg-[color:var(--bg)] p-6">
                  <p className="font-mono-label">01</p>
                  <p className="mt-4 text-sm">
                    Designer coordination
                  </p>
                </div>

                <div className="bg-[color:var(--bg)] p-6">
                  <p className="font-mono-label">02</p>
                  <p className="mt-4 text-sm">
                    Vendor coordination
                  </p>
                </div>

                <div className="bg-[color:var(--bg)] p-6">
                  <p className="font-mono-label">03</p>
                  <p className="mt-4 text-sm">
                    Outreach partners
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          CAMPAIGN PERFORMANCE
      ============================================================ */}

      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 md:col-span-3">

              <p className="font-mono-label">
                <span className="accent-bar" />
                04 — Campaign Performance
              </p>

            </div>

            <div className="col-span-12 md:col-span-9">

              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                33 campaigns.
                <br />
                Six months of communication.
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-relaxed text-[color:var(--text-dim)] md:text-lg">
                Newsletter campaigns executed during my six-month internship,
                spanning editorial storytelling, creator communication,
                product launches and fashion brand positioning.
              </p>

              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4 lg:gap-x-12">

  <AnimatedMetric
    value={33}
    label="Campaigns"
  />

  <AnimatedMetric
    value={72.7}
    suffix="K"
    decimals={1}
    label="Sends"
  />

  <AnimatedMetric
    value={70.1}
    suffix="K"
    decimals={1}
    label="Delivered"
  />

  <AnimatedMetric
    value={66.7}
    suffix="%"
    decimals={1}
    label="Open Rate"
  />

</div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          SELECTED NEWSLETTER CAMPAIGNS
      ============================================================ */}

      <section className="section bg-[#080808] px-6 text-[#f2eee7] md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 md:col-span-3">

              <p className="font-mono-label text-[#f2eee7]">
                <span className="accent-bar" />
                05 — Selected Campaigns
              </p>

            </div>

            <div className="col-span-12 md:col-span-9">

              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Newsletter &
                <br />
                <span style={{ color: "var(--accent)" }}>
                  Brand Communication
                </span>
              </h2>

              <p className="mt-7 max-w-3xl text-base leading-relaxed text-[#999] md:text-lg">
                A selection of four campaigns from the 33 newsletters
                executed during my internship, showing different approaches
                to editorial storytelling, creator communication, product
                launches and fashion brand positioning.
              </p>


              {/* ======================================================
                  01 — BUZZFEED
              ====================================================== */}

              <article className="mt-20">

                <div className="mb-8 flex flex-col justify-between gap-5 border-t border-[#303030] pt-5 sm:flex-row sm:items-end">

                  <div>

                    <p className="font-mono-label text-[#777]">
                      01 / 04
                    </p>

                    <h3 className="mt-2 font-serif-display text-3xl sm:text-4xl">
                      As Seen on BuzzFeed
                    </h3>

                  </div>

                  <p className="font-mono-label text-[color:var(--accent)]">
                    Editorial · PR · Brand Storytelling
                  </p>

                </div>


                <div className="overflow-hidden border border-[#2c2c2c] bg-[#e8e8e8] p-3 sm:p-6 lg:p-10">

                  <div className="mx-auto max-w-[620px] overflow-hidden bg-white text-[#171717] shadow-2xl">

                    <div className="bg-[#111111] px-6 py-3 text-center">
                      <p className="text-[8px] font-medium uppercase tracking-[0.35em] text-white">
                        Wear The Future · Editorial Communication
                      </p>
                    </div>

                    <div className="border-b border-[#e5e5e5] px-7 py-6 text-center">
                      <p className="text-[10px] uppercase tracking-[0.4em] text-[#999]">
                        Wear The Future
                      </p>
                    </div>

                    <div className="px-6 pt-7">

                      <p className="text-center text-[9px] font-semibold uppercase tracking-[0.35em] text-[#888]">
                        As Seen On BuzzFeed
                      </p>

                      <h4 className="mt-4 text-center font-serif-display text-3xl leading-tight text-[#171717]">
                        Our Designers Just Made
                        <br />
                        BuzzFeed&apos;s List.
                      </h4>

                      <p className="mx-auto mt-4 max-w-md text-center text-[11px] leading-relaxed text-[#777]">
                        Editorial communication built around designer
                        visibility, press recognition and brand discovery.
                      </p>

                    </div>

                    <div className="mt-7">
                      <img
                        src="/newsletters/01-buzzfeed/buzzfeed-feature.png"
                        alt="BuzzFeed editorial feature"
                        className="block w-full"
                      />
                    </div>

                    <div className="grid grid-cols-3 border-y border-[#dedede] bg-[#f7f7f7] text-center">

                      <div className="border-r border-[#dedede] px-3 py-5">
                        <p className="font-serif-display text-2xl">
                          15
                        </p>

                        <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#888]">
                          Designers
                        </p>
                      </div>

                      <div className="border-r border-[#dedede] px-3 py-5">
                        <p className="font-serif-display text-2xl">
                          15
                        </p>

                        <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#888]">
                          Stories
                        </p>
                      </div>

                      <div className="px-3 py-5">
                        <p className="font-serif-display text-2xl">
                          01
                        </p>

                        <p className="mt-1 text-[7px] uppercase tracking-[0.2em] text-[#888]">
                          Feature
                        </p>
                      </div>

                    </div>


                    <div className="px-6 py-7">

                      <p className="text-center text-[8px] font-semibold uppercase tracking-[0.35em] text-[#999]">
                        Featured Designer Roster
                      </p>

                      <div className="mt-5 grid grid-cols-3 gap-1 bg-[#e5e5e5] sm:grid-cols-4">

                        {[
                          "deborah-lindquist-logo.png",
                          "fite-fashion-logo.png",
                          "proto-marin-logo.png",
                          "people-of-the-dark-water.png",
                          "mozi-wash-logo.png",
                          "bealice-logo.png",
                          "a-shimus-logo.png",
                          "silk-and-soul-logo.png",
                          "volotea-logo.png",
                          "lyoness-jewels-logo.png",
                          "jendue-logo.png",
                          "nebulyft-logo.png",
                        ].map((logo) => (
                          <div
                            key={logo}
                            className="flex aspect-square items-center justify-center bg-white p-4"
                          >

                            <img
                              src={`/newsletters/01-buzzfeed/${logo}`}
                              alt=""
                              className="max-h-full max-w-full object-contain"
                            />

                          </div>
                        ))}

                      </div>

                    </div>


                    <div className="bg-[#111111] px-7 py-8 text-center">

                      <p className="font-serif-display text-xl text-white">
                        Discover the designers.
                      </p>

                      <div className="mt-5 inline-block bg-white px-7 py-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#111]">
                        Explore More
                      </div>

                    </div>

                  </div>

                </div>

              </article>


              {/* ======================================================
                  02 — MOZI WASH
              ====================================================== */}

              <article className="mt-28">

                <div className="mb-8 flex flex-col justify-between gap-5 border-t border-[#303030] pt-5 sm:flex-row sm:items-end">

                  <div>

                    <p className="font-mono-label text-[#777]">
                      02 / 04
                    </p>

                    <h3 className="mt-2 font-serif-display text-3xl sm:text-4xl">
                      Mozi Wash Gifting
                    </h3>

                  </div>

                  <p className="font-mono-label text-[color:var(--accent)]">
                    Creator Marketing · Product Communication
                  </p>

                </div>


                <div className="overflow-hidden border border-[#2c2c2c] bg-[#e8e8e8] p-3 sm:p-6 lg:p-10">

                  <div className="mx-auto max-w-[620px] overflow-hidden bg-[#faf8f4] text-[#171717] shadow-2xl">

                    <div className="bg-[#111] px-6 py-3 text-center">

                      <p className="text-[8px] uppercase tracking-[0.35em] text-white">
                        Creator Mailer · LA / Paris
                      </p>

                    </div>


                    <div className="px-7 py-7 text-center">

                      <p className="text-[9px] font-semibold uppercase tracking-[0.35em] text-[#888]">
                        Wear The Future × Mozi Wash
                      </p>

                      <h4 className="mt-4 font-serif-display text-3xl leading-tight">
                        A gift for your
                        <br />
                        next content moment.
                      </h4>

                      <p className="mx-auto mt-4 max-w-md text-[11px] leading-relaxed text-[#777]">
                        Creator-facing product communication designed around
                        a gifting opportunity and clear product presentation.
                      </p>

                    </div>


                    <div className="grid grid-cols-1 gap-2 px-3 pb-3 sm:grid-cols-3">

                      <img
                        src="/newsletters/02-mozi-wash/mozi-wash-yellow-product.jpg"
                        alt="Mozi Wash Golden Hour"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/02-mozi-wash/mozi-wash-beige-product.jpg"
                        alt="Mozi Wash Signature Cozy"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/02-mozi-wash/mozi-wash-pink-product.jpg"
                        alt="Mozi Wash Vanilla Moon"
                        className="w-full"
                      />

                    </div>


                    <div className="px-7 py-8 text-center">

                      <p className="text-[9px] uppercase tracking-[0.3em] text-[#999]">
                        Creator Gifting Opportunity
                      </p>

                      <p className="mt-4 font-serif-display text-2xl">
                        Your next content moment starts here.
                      </p>

                      <div className="mt-6 inline-block bg-[#171717] px-8 py-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-white">
                        Apply for Gifting
                      </div>

                    </div>

                  </div>

                </div>

              </article>


              {/* ======================================================
                  03 — LYONESS JEWELS
              ====================================================== */}

              <article className="mt-28">

                <div className="mb-8 flex flex-col justify-between gap-5 border-t border-[#303030] pt-5 sm:flex-row sm:items-end">

                  <div>

                    <p className="font-mono-label text-[#777]">
                      03 / 04
                    </p>

                    <h3 className="mt-2 font-serif-display text-3xl sm:text-4xl">
                      Lyoness Jewels
                    </h3>

                  </div>

                  <p className="font-mono-label text-[color:var(--accent)]">
                    Brand Launch · Fashion Storytelling
                  </p>

                </div>


                <div className="overflow-hidden border border-[#2c2c2c] bg-[#e8e8e8] p-3 sm:p-6 lg:p-10">

                  <div className="mx-auto max-w-[620px] overflow-hidden bg-[#faf8f4] text-[#171717] shadow-2xl">

                    <div className="flex items-center justify-between border-b border-[#ddd] px-6 py-5">

                      <p className="text-[9px] font-semibold uppercase tracking-[0.3em]">
                        Wear The Future
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.3em] text-[#999]">
                        New Designer
                      </p>

                    </div>


                    <div className="px-7 py-8 text-center">

                      <p className="text-[9px] uppercase tracking-[0.35em] text-[#999]">
                        A New Designer in the House
                      </p>

                      <h4 className="mt-4 font-serif-display text-3xl leading-tight">
                        Bold by nature.
                        <br />
                        Exquisite by craft.
                      </h4>

                      <p className="mx-auto mt-4 max-w-md text-[11px] leading-relaxed text-[#777]">
                        A visual brand introduction combining designer
                        storytelling, product presentation and editorial
                        fashion imagery.
                      </p>

                    </div>


                    <img
                      src="/newsletters/03-lyoness-jewels/lyoness-jewels-fashion-01.jpg"
                      alt="Lyoness Jewels fashion campaign"
                      className="block w-full"
                    />


                    <div className="grid grid-cols-2 border-y border-[#ddd]">

                      {[
                        [
                          "BOLD",
                          "Distinctive design and visual identity.",
                        ],
                        [
                          "EXQUISITE",
                          "Craft and detail at the centre.",
                        ],
                        [
                          "BESPOKE",
                          "Pieces designed with individuality.",
                        ],
                        [
                          "LEGACY",
                          "A story built beyond a single season.",
                        ],
                      ].map(([title, text]) => (
                        <div
                          key={title}
                          className="border-r border-b border-[#ddd] p-5"
                        >

                          <p className="text-[8px] font-semibold uppercase tracking-[0.25em]">
                            {title}
                          </p>

                          <p className="mt-3 text-[10px] leading-relaxed text-[#777]">
                            {text}
                          </p>

                        </div>
                      ))}

                    </div>


                    <div className="grid grid-cols-2 gap-1 p-1">

                      <img
                        src="/newsletters/03-lyoness-jewels/lyoness-jewels-portrait.jpg"
                        alt="Lyoness Jewels editorial portrait"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/03-lyoness-jewels/lyoness-jewels-necklace-01.jpg"
                        alt="Lyoness Jewels necklace"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/03-lyoness-jewels/lyoness-jewels-necklace-02.jpg"
                        alt="Lyoness Jewels necklace detail"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/03-lyoness-jewels/lyoness-jewels-fashion-02.jpg"
                        alt="Lyoness Jewels fashion detail"
                        className="w-full"
                      />

                    </div>


                    <div className="bg-[#171717] px-7 py-9 text-center">

                      <p className="font-serif-display text-2xl text-white">
                        Discover Lyoness Jewels.
                      </p>

                      <div className="mt-6 inline-block bg-white px-8 py-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#171717]">
                        Explore Collection
                      </div>

                    </div>

                  </div>

                </div>

              </article>


              {/* ======================================================
                  04 — PROTO MARÍN
              ====================================================== */}

              <article className="mt-28">

                <div className="mb-8 flex flex-col justify-between gap-5 border-t border-[#303030] pt-5 sm:flex-row sm:items-end">

                  <div>

                    <p className="font-mono-label text-[#777]">
                      04 / 04
                    </p>

                    <h3 className="mt-2 font-serif-display text-3xl sm:text-4xl">
                      PROTO MARÍN
                    </h3>

                  </div>

                  <p className="font-mono-label text-[color:var(--accent)]">
                    Brand Launch · Fashion Communication
                  </p>

                </div>


                <div className="overflow-hidden border border-[#2c2c2c] bg-[#e8e8e8] p-3 sm:p-6 lg:p-10">

                  <div className="mx-auto max-w-[620px] overflow-hidden bg-[#faf8f4] text-[#1c1c1a] shadow-2xl">

                    {/* TOP BAR */}

                    <div className="flex items-center justify-between bg-[#1c1c1a] px-6 py-3">

                      <p className="text-[8px] uppercase tracking-[0.35em] text-white">
                        New Brand Alert · 2026
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.2em] text-white">
                        Wear The Future
                      </p>

                    </div>


                    {/* HEADER */}

                    <div className="flex items-center justify-between border-b border-[#e8e2d8] px-7 py-5">

                      <p className="text-[10px] font-semibold uppercase tracking-[0.35em]">
                        Wear The Future
                      </p>

                      <p className="text-[8px] uppercase tracking-[0.3em] text-[#b8a98a]">
                        New Brand Alert
                      </p>

                    </div>


                    {/* ALERT */}

                    <div className="bg-[#1c1c1a] px-6 py-3 text-center">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-white">
                        Now Represented by Wear The Future
                      </p>

                    </div>


                    {/* HERO */}

                    <div className="bg-[#e8dcc8] px-6 py-9 text-center">

                      <div className="border border-[#1c1c1a] bg-[#f0e8d8] px-6 py-8">

                        <p className="inline-block border border-[#1c1c1a] px-4 py-2 text-[7px] font-semibold uppercase tracking-[0.35em]">
                          New to Our Roster
                        </p>

                        <div className="mx-auto mt-6 max-w-[150px]">

                          <img
                            src="/newsletters/04-proto-marin/proto-marin-logo.png"
                            alt="Proto Marín"
                            className="mx-auto w-full object-contain"
                          />

                        </div>

                        <div className="mx-auto mt-5 h-px w-10 bg-[#1c1c1a]/30" />

                        <p className="mt-5 font-serif-display text-xl italic leading-relaxed">
                          Resort swimwear that feels
                          <br />
                          <span className="not-italic">
                            found rather than made.
                          </span>
                        </p>

                        <p className="mt-3 text-[8px] uppercase tracking-[0.3em]">
                          Clothing &amp; Beachwear · Est. Germany / Honduras
                        </p>

                      </div>

                    </div>


                    {/* BRAND STORY */}

                    <div className="px-7 py-8">

                      <p className="border-b border-[#e8e2d8] pb-3 text-[8px] font-semibold uppercase tracking-[0.35em] text-[#8a7a5a]">
                        The Brand
                      </p>

                      <h5 className="mt-5 font-serif-display text-2xl leading-relaxed">
                        Where <em>Bauhaus precision</em> meets
                        <br />
                        the fluid ease of the Caribbean.
                      </h5>

                      <p className="mt-5 text-[11px] leading-[1.9] text-[#6a6050]">
                        Proto Marín is the creative expression of Dominic
                        Marín — a German/Honduran designer whose work lives at
                        the intersection of two worlds.
                      </p>

                    </div>


                    {/* DESIGNER */}

                    <div className="bg-[#1c1c1a] px-7 py-8 text-white">

                      <p className="text-[8px] font-semibold uppercase tracking-[0.35em] text-[#b8a98a]">
                        ✦ The Designer
                      </p>

                      <h5 className="mt-4 font-serif-display text-3xl">
                        Dominic Marín
                      </h5>

                      <p className="mt-2 font-serif-display text-lg italic text-[#b8a98a]">
                        German · Honduran · Designer
                      </p>

                      <p className="mt-4 text-[11px] leading-relaxed text-[#aaa]">
                        Each piece is approached as a design practice — an
                        exploration of form, placement and motion.
                      </p>

                    </div>


                    {/* KEY DETAILS */}

                    <div className="grid grid-cols-2 border-y-2 border-[#1c1c1a] bg-[#f0e8d8] sm:grid-cols-4">

                      {[
                        ["Category", "Resort Swimwear"],
                        ["Origin", "Germany · Honduras"],
                        ["Aesthetic", "Bauhaus · Caribbean"],
                        ["Philosophy", "Found Rather Than Made"],
                      ].map(([label, value]) => (
                        <div
                          key={label}
                          className="border-r border-[#d8ccb8] px-3 py-5 text-center"
                        >

                          <p className="text-[7px] font-semibold uppercase tracking-[0.25em] text-[#8a7a5a]">
                            {label}
                          </p>

                          <p className="mt-2 font-serif-display text-sm leading-tight">
                            {value}
                          </p>

                        </div>
                      ))}

                    </div>


                    {/* CAMPAIGN IMAGES */}

                    <div className="grid grid-cols-2 gap-1 bg-white p-1">

                      <img
                        src="/newsletters/04-proto-marin/proto-marin-campaign-01.jpg"
                        alt="Proto Marín campaign"
                        className="col-span-2 w-full"
                      />

                      <img
                        src="/newsletters/04-proto-marin/proto-marin-campaign-02.jpg"
                        alt="Proto Marín campaign"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/04-proto-marin/proto-marin-campaign-03.jpg"
                        alt="Proto Marín campaign"
                        className="w-full"
                      />

                      <img
                        src="/newsletters/04-proto-marin/proto-marin-detail.jpg"
                        alt="Proto Marín textile detail"
                        className="col-span-2 w-full"
                      />

                    </div>


                    {/* FEATURES */}

                    <div className="grid grid-cols-3 gap-px bg-[#d8ccb8]">

                      {[
                        [
                          "Design Practice",
                          "Form, placement and motion",
                        ],
                        [
                          "Resort Luxury",
                          "Considered and unhurried",
                        ],
                        [
                          "Two Worlds",
                          "Bauhaus meets Caribbean",
                        ],
                      ].map(([title, text]) => (
                        <div
                          key={title}
                          className="bg-[#faf8f4] px-4 py-6"
                        >

                          <p className="text-[8px] font-semibold uppercase tracking-[0.2em]">
                            {title}
                          </p>

                          <p className="mt-3 text-[9px] leading-relaxed text-[#8a8070]">
                            {text}
                          </p>

                        </div>
                      ))}

                    </div>


                    {/* CTA */}

                    <div className="bg-[#1c1c1a] px-7 py-9 text-center">

                      <p className="text-[8px] uppercase tracking-[0.35em] text-[#b8a98a]">
                        Now Available for Placement
                      </p>

                      <p className="mt-4 font-serif-display text-3xl text-white">
                        Discover
                        <br />
                        <em className="text-[#b8a98a]">
                          Proto Marín
                        </em>
                      </p>

                      <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-[#aaa]">
                        Showroom appointments · Editorial pulls · Buying
                        enquiries
                      </p>

                      <div className="mt-6 inline-block bg-white px-9 py-3 text-[8px] font-semibold uppercase tracking-[0.3em] text-[#1c1c1a]">
                        Get in Touch
                      </div>

                    </div>


                    {/* FOOTER */}

                    <div className="border-t border-[#e8e2d8] px-6 py-6 text-center">

                      <p className="text-[8px] uppercase tracking-[0.25em] text-[#aaa]">
                        Wear The Future · Los Angeles · Paris
                      </p>

                      <p className="mt-3 text-[8px] text-[#bbb]">
                        © 2026 Wear The Future
                      </p>

                    </div>

                  </div>

                </div>

              </article>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          DIGITAL EXECUTION
      ============================================================ */}

      <section className="section px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 md:col-span-3">

              <p className="font-mono-label">
                <span className="accent-bar" />
                06 — Digital Execution
              </p>

            </div>

            <div className="col-span-12 grid gap-px border border-[color:var(--border)] bg-[color:var(--border)] md:grid-cols-3">

              <div className="bg-[color:var(--bg)] p-7 lg:p-10">

                <p className="font-mono-label text-[color:var(--text-dim)]">
                  Paid Media
                </p>

                <h3 className="mt-4 font-serif-display text-3xl">
                  Google Ads
                  <br />
                  + Meta Ads
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-dim)]">
                  Supported paid-media execution with A/B testing and
                  budget-aligned campaign activity.
                </p>

              </div>


              <div className="bg-[color:var(--bg)] p-7 lg:p-10">

                <p className="font-mono-label text-[color:var(--text-dim)]">
                  Website
                </p>

                <h3 className="mt-4 font-serif-display text-3xl">
                  SEO
                  <br />
                  Optimisation
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-dim)]">
                  Owned SEO strategy and on-page optimisation for website
                  product listings.
                </p>

              </div>


              <div className="bg-[color:var(--bg)] p-7 lg:p-10">

                <p className="font-mono-label text-[color:var(--text-dim)]">
                  Analytics
                </p>

                <h3 className="mt-4 font-serif-display text-3xl">
                  KPI
                  <br />
                  Reporting
                </h3>

                <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-dim)]">
                  Tracked campaign KPIs and prepared monthly performance
                  reports for stakeholder review.
                </p>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          RESEARCH
      ============================================================ */}

      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">

        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 lg:gap-12">

          <div className="col-span-12 md:col-span-3">

            <p className="font-mono-label">
              <span className="accent-bar" />
              07 — Research
            </p>

          </div>

          <div className="col-span-12 md:col-span-9">

            <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              Turning market signals into communication decisions.
            </h2>

            <p className="mt-8 max-w-3xl leading-relaxed text-[color:var(--text-dim)]">
              Conducted competitive and market research to shape content
              strategy and brand positioning, connecting individual designer
              stories with the wider fashion and media landscape.
            </p>

            <div className="mt-12 flex flex-wrap gap-3">

              {[
                "Competitive Research",
                "Market Research",
                "Content Strategy",
                "Brand Positioning",
                "Audience Thinking",
              ].map((item) => (
                <span
                  key={item}
                  className="border border-[color:var(--border)] px-4 py-3 font-mono-label"
                >
                  {item}
                </span>
              ))}

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          MY CONTRIBUTION
      ============================================================ */}

      <section className="section px-6 md:px-12 lg:px-20">

        <div className="mx-auto max-w-7xl">

          <div className="grid grid-cols-12 gap-8 lg:gap-12">

            <div className="col-span-12 md:col-span-3">

              <p className="font-mono-label">
                <span className="accent-bar" />
                08 — My Contribution
              </p>

            </div>

            <div className="col-span-12 md:col-span-9">

              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                A role across strategy, execution and communication.
              </h2>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">

                {[
                  "Campaign coordination",
                  "Designer & brand communication",
                  "Paid media execution",
                  "SEO & product listing optimisation",
                  "Monthly KPI reporting",
                  "Competitive & market research",
                  "Content strategy",
                  "Event coordination",
                ].map((item, index) => (

                  <motion.div
                    key={item}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.04,
                    }}
                    className="border-b border-[color:var(--border)] py-4"
                  >

                    <span className="mr-4 font-mono-label text-[color:var(--accent)]">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    <span className="text-sm">
                      {item}
                    </span>

                  </motion.div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* ============================================================
          FOOTER
      ============================================================ */}

      <section className="border-t border-[color:var(--border)] px-6 py-20 md:px-12 lg:px-20">

        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-10 md:flex-row md:items-end">

          <div>

            <p className="font-mono-label">
              <span className="accent-bar" />
              Professional Work
            </p>

            <h2 className="mt-5 font-serif-display text-4xl sm:text-5xl">
              More work,
              <br />
              more stories.
            </h2>

          </div>


          <div className="flex flex-wrap gap-3">

            <a
              href="/"
              className="btn-pill inline-flex items-center gap-2"
            >
              Back to Portfolio
              <ArrowLeft size={14} />
            </a>

            <a
              href="/resume.pdf"
              download="Rutwik_Bhamare_Resume.pdf"
              className="btn-pill inline-flex items-center gap-2"
            >
              Download CV
              <ArrowUpRight size={14} />
            </a>

          </div>

        </div>

      </section>

    </main>
  );
}