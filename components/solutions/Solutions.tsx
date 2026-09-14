"use client";

import {
  Megaphone,
  Search,
  LineChart,
  Bot,
  ArrowRight,
  Check,
} from "lucide-react";

const solutions = [
  {
    number: "01",
    title: "Acquisition",
    description:
      "Generate qualified traffic and reach the right customers through powerful acquisition channels.",
    icon: Megaphone,
    items: [
      "Meta Ads",
      "Google Ads",
      "TikTok Ads",
      "ChatGPT Ads",
      "Retargeting",
    ],
  },
  {
    number: "02",
    title: "AI Search (GEO)",
    description:
      "Improve your visibility across search engines and AI-powered recommendation systems.",
    icon: Search,
    items: [
      "SEO",
      "GEO",
      "AI Search Visibility",
      "Content Strategy",
      "Search Optimization",
    ],
  },
  {
    number: "03",
    title: "Conversion",
    description:
      "Turn visitors into qualified leads with high-performing digital experiences.",
    icon: LineChart,
    items: [
      "Landing Pages",
      "Webinars",
      "Funnels",
      "CRO",
      "Conversion Optimization",
    ],
  },
  {
    number: "04",
    title: "Automation",
    description:
      "Automate repetitive tasks and accelerate your customer acquisition process.",
    icon: Bot,
    items: [
      "AI Agents",
      "CRM",
      "Workflows",
      "Lead Qualification",
      "Appointment Booking",
    ],
  },
];

export default function Solutions() {
  return (
    <section
      id="solutions"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              End-to-end acquisition
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">
              Our{" "}
              <span className="text-cyan-500">
                Solutions
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-8 text-slate-600">
              Everything you need to attract, convert, qualify and grow your
              customer base through one connected acquisition system.
            </p>
          </div>
        </div>

        {/* Solutions cards */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {solutions.map((solution) => {
            const Icon = solution.icon;

            return (
              <article
                key={solution.number}
                className="group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-[0_10px_40px_rgba(15,35,80,0.06)] transition-all duration-300 hover:-translate-y-2 hover:border-cyan-200 hover:shadow-[0_20px_50px_rgba(15,35,80,0.12)]"
              >
                {/* Number */}
                <div className="mb-6 flex items-center justify-between">
                  <span className="text-sm font-bold tracking-widest text-cyan-500">
                    {solution.number}
                  </span>

                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 text-cyan-500 transition-all duration-300 group-hover:bg-cyan-500 group-hover:text-white">
                    <Icon size={26} strokeWidth={1.8} />
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-2xl font-bold text-[#0b2454]">
                  {solution.title}
                </h3>

                {/* Description */}
                <p className="mb-7 min-h-[96px] text-sm leading-6 text-slate-500">
                  {solution.description}
                </p>

                {/* Items */}
                <div className="space-y-3 border-t border-slate-100 pt-6">
                  {solution.items.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
                        <Check size={12} strokeWidth={3} />
                      </span>

                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Link */}
                <div className="mt-8 flex items-center gap-2 text-sm font-bold text-[#0b2454] transition-colors group-hover:text-cyan-500">
                  Explore solution

                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-[#0b2454] px-8 py-10 shadow-xl sm:px-12">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                One system
              </p>

              <h3 className="text-3xl font-bold text-white sm:text-4xl">
                Build your customer acquisition system.
              </h3>

              <p className="mt-3 max-w-2xl text-slate-300">
                Connect acquisition, AI search, conversion and automation in
                one powerful system.
              </p>
            </div>

            <a
              href="#audit"
              className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#0b2454] transition-all hover:bg-cyan-50 hover:shadow-lg"
            >
              Get my free audit
              <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}