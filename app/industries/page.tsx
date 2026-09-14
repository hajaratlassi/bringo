import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Hotel,
  ShoppingCart,
  Cpu,
  BriefcaseBusiness,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Industries",
  description:
    "Explore Bringo customer acquisition solutions for real estate, hospitality, e-commerce, SaaS, technology and professional services.",
};

const industries = [
  {
    title: "Real Estate",
    description:
      "Generate qualified property leads and build acquisition systems that turn online demand into opportunities.",
    icon: Building2,
    href: "#real-estate",
  },
  {
    title: "Hospitality",
    description:
      "Increase visibility, direct bookings and qualified demand with acquisition, AI Search and automation.",
    icon: Hotel,
    href: "#hospitality",
  },
  {
    title: "E-commerce",
    description:
      "Acquire more customers and improve conversion across paid acquisition, search and digital experiences.",
    icon: ShoppingCart,
    href: "#ecommerce",
  },
  {
    title: "SaaS & Technology",
    description:
      "Build a predictable qualified pipeline through search visibility, acquisition and intelligent automation.",
    icon: Cpu,
    href: "#saas",
  },
  {
    title: "Professional Services",
    description:
      "Generate high-value leads and turn expertise, visibility and digital demand into measurable growth.",
    icon: BriefcaseBusiness,
    href: "#professional-services",
  },
];

export default function IndustriesPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="pointer-events-none absolute right-[-150px] top-[-150px] h-[450px] w-[450px] rounded-full bg-cyan-100/50 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-bold text-cyan-600">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              INDUSTRIES
            </div>

            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#0b2454] sm:text-6xl lg:text-7xl">
              Acquisition systems
              <span className="block text-cyan-500">
                built for your industry.
              </span>
            </h1>

            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Every industry has different customers, buying journeys and
              growth challenges. Bringo combines acquisition, AI Search,
              conversion and automation around your specific market.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                href="/audit"
                className="group inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-cyan-500"
              >
                Get a free audit
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/contact"
                className="inline-flex items-center gap-3 rounded-xl border border-slate-300 px-7 py-4 text-sm font-bold text-[#0b2454] transition hover:border-cyan-400 hover:text-cyan-500"
              >
                Build my system
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES GRID */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              OUR INDUSTRIES
            </p>

            <h2 className="mt-4 text-4xl font-extrabold text-[#0b2454] sm:text-5xl">
              Growth systems adapted to your market.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Explore how Bringo can help different types of businesses
              attract, convert and retain qualified demand.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {industries.map((industry) => {
              const Icon = industry.icon;

              return (
                <Link
                  key={industry.title}
                  href={industry.href}
                  className="group rounded-3xl border border-slate-200 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500 transition group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-7 text-2xl font-bold text-[#0b2454]">
                    {industry.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {industry.description}
                  </p>

                  <div className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-cyan-500">
                    Explore industry
                    <ArrowRight
                      size={17}
                      className="transition-transform group-hover:translate-x-1"
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* INDUSTRY SECTIONS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl space-y-24 px-6 lg:px-8">
          <IndustrySection
            id="real-estate"
            number="01"
            title="Real Estate"
            text="Help property businesses generate qualified demand through paid acquisition, search visibility, conversion-focused landing pages and automated lead qualification."
          />

          <IndustrySection
            id="hospitality"
            number="02"
            title="Hospitality"
            text="Increase direct demand and improve the customer journey with AI Search visibility, paid acquisition, conversion optimization and intelligent follow-up."
          />

          <IndustrySection
            id="ecommerce"
            number="03"
            title="E-commerce"
            text="Create acquisition systems that connect paid traffic, search visibility and conversion experiences to help turn more visitors into customers."
          />

          <IndustrySection
            id="saas"
            number="04"
            title="SaaS & Technology"
            text="Build qualified pipeline through search, paid acquisition, conversion systems and automation designed for scalable growth."
          />

          <IndustrySection
            id="professional-services"
            number="05"
            title="Professional Services"
            text="Turn expertise and online visibility into qualified opportunities with targeted acquisition, strong conversion paths and automated lead qualification."
          />
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0b2454] py-20">
        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            READY TO GROW?
          </p>

          <h2 className="mt-5 text-4xl font-extrabold text-white sm:text-5xl">
            Build an acquisition system for your market.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Discover the opportunities that could help your business attract
            more qualified customers.
          </p>

          <Link
            href="/audit"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-400"
          >
            Start my free audit
            <ArrowRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}

function IndustrySection({
  id,
  number,
  title,
  text,
}: {
  id: string;
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div
      id={id}
      className="scroll-mt-28 grid gap-8 border-b border-slate-100 pb-20 lg:grid-cols-[0.35fr_1fr]"
    >
      <div>
        <span className="text-5xl font-extrabold text-cyan-500">
          {number}
        </span>
      </div>

      <div>
        <h2 className="text-4xl font-extrabold text-[#0b2454]">
          {title}
        </h2>

        <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
          {text}
        </p>

        <Link
          href="/contact"
          className="mt-7 inline-flex items-center gap-2 font-bold text-cyan-500 transition hover:text-cyan-600"
        >
          Talk to Bringo
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  );
}