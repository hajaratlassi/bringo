import type { Metadata } from "next";
import Link from "next/link";
import {
  Search,
  TrendingUp,
  BarChart3,
  Bot,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI-Powered Customer Acquisition Solutions",
  description:
    "Explore Bringo's customer acquisition solutions: paid acquisition, AI Search, conversion optimization and intelligent automation.",
};

const solutions = [
  {
    title: "Customer Acquisition",
    category: "ACQUISITION",
    description:
      "Generate qualified traffic and leads through a predictable customer acquisition system.",
    href: "/solutions/acquisition",
    icon: TrendingUp,
    stat: "+184%",
    statLabel: "Traffic",
  },
  {
    title: "AI Search (GEO)",
    category: "AI SEARCH",
    description:
      "Make your brand visible in AI search results and recommendations across modern search engines.",
    href: "/solutions/ai-search",
    icon: Search,
    stat: "AI",
    statLabel: "Visibility",
  },
  {
    title: "Conversion Optimization",
    category: "CONVERSION",
    description:
      "Turn more visitors into qualified leads and customers with high-performing digital experiences.",
    href: "/solutions/conversion",
    icon: BarChart3,
    stat: "+78%",
    statLabel: "Conversion",
  },
  {
    title: "Customer Acquisition Automation",
    category: "AUTOMATION",
    description:
      "Automate repetitive tasks, qualify leads and accelerate your customer acquisition process.",
    href: "/solutions/automation",
    icon: Bot,
    stat: "24/7",
    statLabel: "Automation",
  },
];

export default function SolutionsPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                OUR SOLUTIONS
              </div>

              <h1 className="mt-8 max-w-3xl text-6xl font-extrabold leading-[0.95] tracking-tight text-[#0b2454] lg:text-7xl">
                Growth systems
                <span className="block text-cyan-500">
                  built to perform.
                </span>
              </h1>

              <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
                Build a predictable customer acquisition engine with
                acquisition, AI search, conversion optimization and
                intelligent automation.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/audit"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-6 py-4 text-sm font-bold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-cyan-500"
                >
                  Get a free audit
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>

                <a
                  href="#solutions"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-300 px-6 py-4 text-sm font-bold text-[#0b2454] transition hover:border-cyan-400 hover:text-cyan-500"
                >
                  Explore solutions
                  <ArrowRight size={18} />
                </a>
              </div>
            </div>

            {/* Right visual */}
            <div className="relative">
              <div className="rounded-[32px] border border-cyan-100 bg-gradient-to-br from-slate-50 to-cyan-50 p-6 shadow-[0_20px_60px_rgba(11,36,84,0.08)]">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-[#0b2454] p-7 text-white">
                    <TrendingUp size={32} className="text-cyan-400" />
                    <div className="mt-12 text-4xl font-extrabold">
                      +184%
                    </div>
                    <div className="mt-2 text-sm text-slate-300">
                      Traffic
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <Search size={32} className="text-cyan-500" />
                    <div className="mt-12 text-4xl font-extrabold text-[#0b2454]">
                      AI
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      Search visibility
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-7">
                    <BarChart3 size={32} className="text-cyan-500" />
                    <div className="mt-12 text-4xl font-extrabold text-[#0b2454]">
                      +78%
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      Conversion
                    </div>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-7">
                    <Bot size={32} className="text-cyan-500" />
                    <div className="mt-12 text-4xl font-extrabold text-[#0b2454]">
                      24/7
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      Automation
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section
        id="solutions"
        className="border-t border-slate-100 bg-slate-50/50"
      >
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <div className="text-sm font-bold tracking-[0.25em] text-cyan-500">
              ONE SYSTEM
            </div>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0b2454] lg:text-5xl">
              Everything you need to
              <span className="text-cyan-500"> grow.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our solutions work together to create a complete customer
              acquisition system.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => {
              const Icon = solution.icon;

              return (
                <Link
                  key={solution.title}
                  href={solution.href}
                  className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  {/* Card top */}
                  <div className="bg-[#0b2454] p-8">
                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white">
                        <Icon size={28} className="text-cyan-500" />
                      </div>

                      <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-bold tracking-wider text-white">
                        {solution.category}
                      </span>
                    </div>

                    <div className="mt-10 text-4xl font-extrabold text-white">
                      {solution.stat}
                    </div>

                    <div className="mt-2 text-sm text-slate-300">
                      {solution.statLabel}
                    </div>
                  </div>

                  {/* Card bottom */}
                  <div className="p-8">
                    <h3 className="text-2xl font-extrabold text-[#0b2454]">
                      {solution.title}
                    </h3>

                    <p className="mt-4 min-h-[72px] text-base leading-7 text-slate-600">
                      {solution.description}
                    </p>

                    <div className="mt-8 flex items-center gap-2 font-bold text-[#0b2454] transition-colors group-hover:text-cyan-500">
                      Explore solution
                      <ArrowRight
                        size={18}
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0b2454]">
        <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <div className="text-sm font-bold tracking-[0.25em] text-cyan-400">
                READY TO GROW?
              </div>

              <h2 className="mt-3 text-3xl font-extrabold text-white lg:text-4xl">
                Build your next growth system.
              </h2>

              <p className="mt-3 max-w-xl text-slate-300">
                Discover where your biggest acquisition opportunities are.
              </p>
            </div>

            <Link
              href="/audit"
              className="group inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-6 py-4 text-sm font-bold text-[#0b2454] transition hover:bg-cyan-400"
            >
              Get a free audit
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}