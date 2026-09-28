import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useRef } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  BriefcaseBusiness,
  FileText,
  Globe2,
  Megaphone,
  Package,
  Search,
  Users,
} from "lucide-react";

const asset = "/work/rahi-industries";

const AnimatedMetric = ({ value, label, suffix = "", decimals = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });
  const count = useMotionValue(0);

  const displayValue = useTransform(count, (latest) => {
    return `${latest.toFixed(decimals)}${suffix}`;
  });

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(count, value, {
      duration: 1.6,
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

const capabilities = [
  {
    icon: Search,
    title: "Market & Competitor Research",
    text: "Researched product gaps, pricing benchmarks and messaging opportunities to support product marketing decisions.",
  },
  {
    icon: Globe2,
    title: "SEO & Digital Content",
    text: "Supported SEO and content optimisation while creating and updating product-focused digital assets.",
  },
  {
    icon: Package,
    title: "Online Product Marketing",
    text: "Managed online product communication across 100+ SKUs, including listings, product information and digital collateral.",
  },
  {
    icon: Megaphone,
    title: "Dealer Marketing",
    text: "Executed regional dealer campaigns and adapted promotional communication for 15+ dealers.",
  },
  {
    icon: FileText,
    title: "Marketing Collateral",
    text: "Created and optimised brochures, product visuals, one-pagers, banners and digital sales materials.",
  },
  {
    icon: Users,
    title: "Sales & Operations",
    text: "Collaborated across functions to keep product, pricing, availability, delivery and after-sales communication aligned.",
  },
];

export default function RahiIndustries() {
  return (
    <main className="min-h-screen bg-[color:var(--bg)] text-[color:var(--text)]">
      {/* HERO */}
      <section className="px-6 pt-8 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <a
            href="/"
            className="inline-flex items-center gap-2 font-mono-label text-[color:var(--text-dim)] transition-opacity hover:opacity-60"
          >
            <ArrowLeft size={14} />
            Back to Portfolio
          </a>

          <div className="mt-16 grid grid-cols-12 items-center gap-8 lg:mt-20 lg:gap-12">
            <div className="col-span-12 lg:col-span-8">
              <p className="mb-6 font-mono-label">
                <span className="accent-bar" />
                Professional Work · 02
              </p>

              <h1 className="font-serif-display text-6xl leading-[0.92] sm:text-7xl lg:text-[8rem]">
                Rahi
                <br />
                <span style={{ color: "var(--accent)" }}>Industries</span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[color:var(--text-dim)] md:text-xl">
                Product marketing, digital communication and B2B marketing for
                an electrical products manufacturer.
              </p>
            </div>

            <div className="col-span-12 lg:col-span-4">
              <div
                className="flex min-h-[230px] items-center justify-center p-8"
                style={{ backgroundColor: "var(--bg)" }}
              >
                <img
                  src={`${asset}/rahi-logo.png`}
                  alt="Rahi Industries"
                  className="max-h-40 w-auto object-contain"
                />
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-[color:var(--border)] pt-5">
            <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
              <div>
                <p className="font-mono-label text-[color:var(--text-dim)]">Role 01</p>
                <p className="mt-2 text-sm">Marketing &amp; Digital Communication Intern</p>
              </div>
              <div>
                <p className="font-mono-label text-[color:var(--text-dim)]">Role 02</p>
                <p className="mt-2 text-sm">Product Marketing Assistant</p>
              </div>
              <div>
                <p className="font-mono-label text-[color:var(--text-dim)]">Period</p>
                <p className="mt-2 text-sm">Nov 2022 — May 2024</p>
              </div>
              <div>
                <p className="font-mono-label text-[color:var(--text-dim)]">Focus</p>
                <p className="mt-2 text-sm">Product · Digital · B2B</p>
              </div>
            </div>
          </div>

          <div className="mt-12 border-y border-[color:var(--border)] py-4">
            <div className="flex flex-wrap gap-x-8 gap-y-3 font-mono-label text-[color:var(--text-dim)]">
              <span>Product Marketing</span>
              <span>Digital Communication</span>
              <span>B2B Marketing</span>
              <span>SEO</span>
              <span>Dealer Marketing</span>
              <span>Content</span>
            </div>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="section px-6 md:px-12 lg:px-20">
        <div className="mx-auto grid max-w-7xl grid-cols-12 gap-8 lg:gap-12">
          <div className="col-span-12 md:col-span-3">
            <p className="font-mono-label">
              <span className="accent-bar" />
              01 — Overview
            </p>
          </div>
          <div className="col-span-12 md:col-span-9">
            <h2 className="max-w-4xl font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
              From digital communication to online product marketing.
            </h2>
            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <p className="leading-relaxed text-[color:var(--text-dim)]">
                My work at Rahi Industries progressed from marketing and digital
                communication into a Product Marketing Assistant role, with a
                stronger focus on online product visibility and B2B communication.
              </p>
              <p className="leading-relaxed text-[color:var(--text-dim)]">
                The work combined market research, SEO, product content,
                marketplace listings, dealer marketing and sales collateral
                across a broad electrical products portfolio.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CAREER PROGRESSION */}
      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                02 — Career Progression
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid gap-10 md:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="border-t-2 pt-6"
                  style={{ borderColor: "#9b0712" }}
                >
                  <p className="font-mono-label text-[color:var(--text-dim)]">Nov 2022 — Jun 2023</p>
                  <h3 className="mt-4 font-serif-display text-3xl sm:text-4xl">
                    Marketing &amp; Digital Communication Intern
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-dim)]">
                    Market and competitor research, SEO and content optimisation,
                    product catalogues, digital assets, trade exhibition support
                    and B2B communication.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="border-t-2 pt-6"
                  style={{ borderColor: "#9b0712" }}
                >
                  <p className="font-mono-label text-[color:var(--text-dim)]">Jun 2023 — May 2024</p>
                  <h3 className="mt-4 font-serif-display text-3xl sm:text-4xl">
                    Product Marketing Assistant
                  </h3>
                  <p className="mt-5 text-sm leading-relaxed text-[color:var(--text-dim)]">
                    Online product marketing for 100+ SKUs, marketplace listings,
                    brochures, dealer campaigns, new SKU launches and digital
                    product communication.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DIGITAL COMMUNICATION */}
      <section className="section px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                03 — Digital Communication
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Product stories built for digital channels.
              </h2>

              <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                <AnimatedMetric value={20} suffix="–25%" label="Search Rankings" />
                <AnimatedMetric value={35} suffix="%" label="Website Traffic" />
                <AnimatedMetric value={50} suffix="+" label="Digital Assets" />
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT MARKETING */}
      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                04 — Product Marketing
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
                <div>
                  <p className="font-mono-label text-[color:var(--text-dim)]">Online product portfolio</p>
                  <h2 className="mt-3 font-serif-display text-4xl sm:text-5xl lg:text-6xl">
                    100+ SKUs.
                  </h2>
                </div>
                <p className="max-w-md text-sm leading-relaxed text-[color:var(--text-dim)]">
                  Managed online product marketing across a broad electrical
                  products portfolio, translating product information into
                  clear B2B-facing communication.
                </p>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6 }}
                className="mt-12 overflow-hidden border border-[color:var(--border)] bg-[#f3f1ed]"
              >
                <img
                  src={`${asset}/pvc-conduit-social.webp`}
                  alt="Rahi Industries electrical conduit PVC pipes and fittings social post"
                  className="block h-auto w-full"
                />
              </motion.div>

              <div className="mt-5 flex items-center justify-between gap-6">
                <div>
                  <p className="font-mono-label">Selected Product Marketing Asset</p>
                  <p className="mt-2 text-sm text-[color:var(--text-dim)]">
                    Electrical Conduit PVC Pipes &amp; Fittings
                  </p>
                </div>
                <p className="hidden text-right font-mono-label text-[color:var(--text-dim)] sm:block">
                  Product marketing · Social
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* B2B MARKETPLACES */}
      <section className="section px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                05 — B2B Marketplace Marketing
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Building visibility where B2B buyers search.
              </h2>

              <div className="mt-12 grid gap-px bg-[color:var(--border)] sm:grid-cols-2">
                <div className="flex min-h-[220px] items-center justify-center bg-[color:var(--bg)] p-10">
                  <img
                    src={`${asset}/indiamart-logo.png`}
                    alt="IndiaMART"
                    className="max-h-32 w-auto max-w-[80%] object-contain"
                  />
                </div>
                <div className="flex min-h-[220px] items-center justify-center bg-[color:var(--bg)] p-10">
                  <img
                    src={`${asset}/tradeindia-logo.png`}
                    alt="TradeIndia"
                    className="max-h-32 w-auto max-w-[80%] object-contain"
                  />
                </div>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-3">
                <AnimatedMetric value={2} label="B2B Platforms" />
                <AnimatedMetric value={100} suffix="+" label="SKUs Managed" />
                <div className="py-4 lg:py-6">
                  <p className="font-serif-display text-4xl lg:text-5xl xl:text-6xl">B2B</p>
                  <p className="mt-3 font-mono-label text-[color:var(--text-dim)]">Product Visibility</p>
                </div>
              </div>

              <p className="mt-8 max-w-3xl leading-relaxed text-[color:var(--text-dim)]">
                Managed and optimised listings across IndiaMART and TradeIndia,
                improving online product visibility and supporting inbound B2B
                lead quality.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DEALER MARKETING */}
      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                06 — Dealer Marketing
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Regional communication, adapted for the dealer network.
              </h2>

              <div className="mt-12 grid gap-8 sm:grid-cols-2">
                <AnimatedMetric value={2} label="Regional Campaigns" />
                <AnimatedMetric value={15} suffix="+" label="Dealers" />
              </div>

              <div className="mt-12 overflow-hidden border border-[color:var(--border)] bg-black">
                <video
                  controls
                  playsInline
                  loop
                  preload="metadata"
                  className="block aspect-video w-full object-cover"
                >
                  <source src={`${asset}/mcb-box-social.mp4`} type="video/mp4" />
                </video>
              </div>

              <p className="mt-5 max-w-3xl text-sm leading-relaxed text-[color:var(--text-dim)]">
                Selected product-focused digital content used to communicate
                Rahi Industries products through social and promotional channels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED BROCHURE */}
      <section className="section px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                07 — Selected Brochure
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <div className="grid items-start gap-10 lg:grid-cols-5 lg:gap-14">
                <div className="lg:col-span-3">
                  <div className="overflow-hidden bg-white shadow-sm">
                    <img
                      src={`${asset}/brochure-1.png`}
                      alt="Rahi Industries Designing for Sustainability brochure cover"
                      className="block h-auto w-full"
                    />
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <p className="font-mono-label text-[color:var(--text-dim)]">Product marketing collateral</p>
                  <h2 className="mt-4 font-serif-display text-4xl leading-tight sm:text-5xl">
                    Designing for Sustainability
                  </h2>
                  <p className="mt-6 leading-relaxed text-[color:var(--text-dim)]">
                    A selected product brochure showcasing Rahi Industries'
                    electrical products and accessories, with structured product
                    information, specifications and visual communication.
                  </p>

                  <div className="mt-8 flex items-center gap-4">
                    <span className="h-px w-10" style={{ backgroundColor: "#9b0712" }} />
                    <span className="font-mono-label text-[color:var(--text-dim)]">Selected Work · 01 / 05 · 5 preview pages</span>
                  </div>
                </div>
              </div>

              <div className="mt-12 grid grid-cols-5 gap-3">
                {[2, 3, 4, 5, 6].map((page) => (
                  <div key={page} className="overflow-hidden border border-[color:var(--border)] bg-white">
                    <img
                      src={`${asset}/brochure-${page}.png`}
                      alt={`Rahi Industries brochure preview ${page}`}
                      className="block h-full w-full object-cover object-top"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT COMMUNICATION */}
      <section className="section border-y border-[color:var(--border)] px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                08 — Product Communication
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                Turning technical product information into clear visual communication.
              </h2>

            </div>
          </div>
        </div>
      </section>

      {/* MY CONTRIBUTION */}
      <section className="section px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-12 gap-8 lg:gap-12">
            <div className="col-span-12 md:col-span-3">
              <p className="font-mono-label">
                <span className="accent-bar" />
                09 — My Contribution
              </p>
            </div>
            <div className="col-span-12 md:col-span-9">
              <h2 className="max-w-4xl font-serif-display text-4xl leading-tight sm:text-5xl lg:text-6xl">
                A two-role progression from digital communication into product marketing.
              </h2>

              <div className="mt-12 grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-5 lg:gap-x-12">
                <AnimatedMetric value={100} suffix="+" label="SKUs" />
                <AnimatedMetric value={15} suffix="+" label="Dealers" />
                <AnimatedMetric value={5} label="Brochures" />
                <AnimatedMetric value={2} label="Regional Campaigns" />
                <AnimatedMetric value={50} suffix="+" label="Digital Assets" />
              </div>

              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-[color:var(--text-dim)]">
                My work at Rahi Industries combined product marketing, digital
                communication, B2B marketplace management, dealer marketing and
                product-focused content creation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <section className="border-t border-[color:var(--border)] px-6 py-16 md:px-12 lg:px-20">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="font-mono-label text-[color:var(--text-dim)]">Professional Work · 02</p>
            <p className="mt-2 font-serif-display text-3xl">Rahi Industries</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a href="/work/wear-the-future" className="btn-pill">
              Previous Work <ArrowLeft size={14} />
            </a>
            <a href="/" className="btn-pill">
              Back to Portfolio <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
