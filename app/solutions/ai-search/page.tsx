import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Search,
  Sparkles,
  Globe,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "AI Search & GEO Optimization",
  description:
    "Improve your visibility across Google, ChatGPT, AI Overviews and recommendation engines with SEO, GEO, content and AI Search optimization.",
};

export default function AISearchPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b2454]">

      {/* =========================
          HERO
      ========================= */}

      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                AI SEARCH OPTIMIZATION
              </div>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Be visible in
                <span className="block text-cyan-500">
                  AI search results
                </span>
                and recommendations.
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                We optimize your presence across Google, ChatGPT,
                AI Overviews and recommendation engines so your brand
                shows up where decisions are made.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-cyan-500"
                >
                  Discover AI Search Optimization
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT - AI SEARCH MOCKUP */}
            <div className="relative">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">

                {/* Search bar */}
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-5 py-4">
                  <Search
                    size={21}
                    className="text-slate-400"
                  />

                  <span className="text-sm text-slate-500">
                    Quelle est la meilleure agence acquisition en France ?
                  </span>
                </div>

                {/* Tabs */}
                <div className="mt-6 flex gap-7 border-b border-slate-100 text-sm">
                  <div className="border-b-2 border-cyan-500 pb-4 font-semibold text-cyan-500">
                    AI Overview
                  </div>

                  <div className="pb-4 text-slate-400">
                    Google
                  </div>

                  <div className="pb-4 text-slate-400">
                    ChatGPT
                  </div>

                  <div className="pb-4 text-slate-400">
                    Perplexity
                  </div>
                </div>

                {/* Result */}
                <div className="mt-6 rounded-2xl border border-cyan-100 bg-white p-6">
                  <div className="flex items-center gap-4">

                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-50 text-cyan-600">
                      <Sparkles size={23} />
                    </div>

                    <div>
                      <h3 className="font-bold text-[#0b2454]">
                        Bringo
                      </h3>

                      <p className="text-sm text-slate-400">
                        AI-powered acquisition agency
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 leading-7 text-slate-600">
                    Bringo helps companies get discovered,
                    generate qualified demand and grow through
                    AI search, SEO, GEO and paid acquisition.
                  </p>

                  <div className="mt-6 space-y-4">
                    <AIResult text="AI-powered visibility" />
                    <AIResult text="Proven results across Europe" />
                    <AIResult text="Transparency & performance" />
                  </div>
                </div>

                {/* Loading cards */}
                <div className="mt-5 h-16 rounded-2xl bg-slate-50" />
                <div className="mt-4 h-16 rounded-2xl bg-slate-50" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          WHAT IS GEO
      ========================= */}

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
                AI visibility
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Search is changing.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                People are no longer relying only on traditional
                search engines. AI assistants and recommendation
                systems are becoming part of the customer journey.
              </p>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Your company needs to be visible in these new
                discovery environments.
              </p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
              <div className="grid gap-5 sm:grid-cols-2">

                <VisibilityCard
                  icon={<Search size={28} />}
                  title="SEO"
                  text="Improve your visibility in traditional search."
                />

                <VisibilityCard
                  icon={<Sparkles size={28} />}
                  title="GEO"
                  text="Optimize your brand for generative search."
                />

                <VisibilityCard
                  icon={<Globe size={28} />}
                  title="AI Search"
                  text="Increase your presence in AI-powered answers."
                />

                <VisibilityCard
                  icon={<BarChart3 size={28} />}
                  title="Analytics"
                  text="Track visibility and acquisition performance."
                />

              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          SERVICES
      ========================= */}

      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              What we optimize
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Build visibility where customers search.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Our AI Search strategy connects SEO, content,
              structured information and generative search visibility.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            <ServiceCard
              icon={<Search size={30} />}
              title="SEO"
              text="Improve your organic search visibility and rankings."
            />

            <ServiceCard
              icon={<Sparkles size={30} />}
              title="GEO"
              text="Optimize your content for generative engine responses."
            />

            <ServiceCard
              icon={<Globe size={30} />}
              title="AI Search Visibility"
              text="Increase the probability of being discovered by AI systems."
            />

            <ServiceCard
              icon={<BarChart3 size={30} />}
              title="Content Strategy"
              text="Create useful content that answers customer questions."
            />

            <ServiceCard
              icon={<Search size={30} />}
              title="Search Optimization"
              text="Connect traditional and AI-powered search strategies."
            />

            <ServiceCard
              icon={<Sparkles size={30} />}
              title="Brand Authority"
              text="Build a stronger digital presence across relevant sources."
            />

          </div>
        </div>
      </section>

      {/* =========================
          PROCESS
      ========================= */}

      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Our approach
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              From search visibility to growth.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <ProcessCard
              number="01"
              title="Analyze"
              text="Analyze your current search and AI visibility."
            />

            <ProcessCard
              number="02"
              title="Optimize"
              text="Improve your content, structure and digital presence."
            />

            <ProcessCard
              number="03"
              title="Publish"
              text="Create and distribute content that strengthens authority."
            />

            <ProcessCard
              number="04"
              title="Measure"
              text="Track visibility, traffic and business outcomes."
            />

          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================= */}

      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-3xl bg-[#0b2454] px-8 py-16 text-center text-white md:px-16">

          <h2 className="text-4xl font-extrabold md:text-5xl">
            Ready to become more visible?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Discover how your company can improve its visibility
            across search engines and AI recommendations.
          </p>

          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-400"
          >
            Start your free audit
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>

    </main>
  );
}

/* =========================================================
   AI RESULT
========================================================= */

function AIResult({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-3">

      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
        <Check size={15} />
      </div>

      <span className="text-sm font-medium text-slate-600">
        {text}
      </span>

    </div>
  );
}

/* =========================================================
   VISIBILITY CARD
========================================================= */

function VisibilityCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6">

      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   SERVICE CARD
========================================================= */

function ServiceCard({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">

      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
        {icon}
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* =========================================================
   PROCESS CARD
========================================================= */

function ProcessCard({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7">

      <span className="text-sm font-bold tracking-[0.2em] text-cyan-500">
        {number}
      </span>

      <h3 className="mt-5 text-2xl font-bold">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}