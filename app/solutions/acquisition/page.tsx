import type { Metadata } from "next";
import Link from "next/link";

import {
  ArrowRight,
  Check,
  Megaphone,
  Search,
  BarChart3,
  Target,
} from "lucide-react";

import { createLocalizedMetadata } from "@/lib/seo";

export const metadata: Metadata = createLocalizedMetadata({
  title: "Customer Acquisition",
  description:
    "Build a predictable customer acquisition system through paid advertising, search visibility, retargeting and performance analysis.",
  path: "/solutions/acquisition",
  french: false,
});

export default function AcquisitionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b2454]">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                CUSTOMER ACQUISITION
              </div>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Generate{" "}
                <span className="block text-cyan-500">
                  qualified customers.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Build a predictable customer acquisition system that attracts
                the right audience, generates qualified demand and turns your
                traffic into customers.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/#audit"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-6 py-4 font-bold text-white shadow-lg transition hover:bg-cyan-500"
                >
                  Get a free audit
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/solutions"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-[#0b2454] transition hover:border-cyan-400 hover:text-cyan-500"
                >
                  See how it works
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-xl">
                <div className="grid grid-cols-2 gap-5">
                  <div className="rounded-2xl bg-[#0b2454] p-6 text-white">
                    <Megaphone
                      className="mb-5 text-cyan-400"
                      size={32}
                    />

                    <p className="text-3xl font-extrabold">+184%</p>

                    <p className="mt-2 text-sm text-slate-300">
                      Traffic
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <Target
                      className="mb-5 text-cyan-500"
                      size={32}
                    />

                    <p className="text-3xl font-extrabold">+127%</p>

                    <p className="mt-2 text-sm text-slate-500">
                      Qualified leads
                    </p>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-6">
                    <Search
                      className="mb-5 text-cyan-500"
                      size={32}
                    />

                    <p className="text-3xl font-extrabold">-34%</p>

                    <p className="mt-2 text-sm text-slate-500">
                      Acquisition cost
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-6">
                    <BarChart3
                      className="mb-5 text-cyan-500"
                      size={32}
                    />

                    <p className="text-3xl font-extrabold">+49%</p>

                    <p className="mt-2 text-sm text-slate-500">
                      Revenue
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CHANNELS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Acquisition channels
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Reach your customers where they are searching.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              We combine paid acquisition, search visibility and retargeting
              to create a complete customer acquisition engine.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <AcquisitionCard
              icon={<Megaphone size={30} />}
              title="Meta Ads"
              description="Reach your ideal audience through targeted advertising campaigns."
            />

            <AcquisitionCard
              icon={<Search size={30} />}
              title="Google Ads"
              description="Capture high-intent searches and generate qualified traffic."
            />

            <AcquisitionCard
              icon={<Target size={30} />}
              title="TikTok Ads"
              description="Reach new audiences through creative, performance-driven campaigns."
            />

            <AcquisitionCard
              icon={<Search size={30} />}
              title="ChatGPT Ads"
              description="Prepare your acquisition strategy for AI-powered discovery."
            />

            <AcquisitionCard
              icon={<Target size={30} />}
              title="Retargeting"
              description="Reconnect with your visitors and turn missed opportunities into customers."
            />

            <AcquisitionCard
              icon={<BarChart3 size={30} />}
              title="Performance Analytics"
              description="Measure your traffic, leads, acquisition costs and revenue."
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Our process
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              From traffic to customers.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ProcessStep
              number="01"
              title="Analyze"
              text="Understand your market, your audience and your acquisition opportunities."
            />

            <ProcessStep
              number="02"
              title="Attract"
              text="Launch acquisition campaigns that generate qualified visitors."
            />

            <ProcessStep
              number="03"
              title="Convert"
              text="Optimize the customer journey to turn traffic into leads and customers."
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
                Why Bringo
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Acquisition built around measurable growth.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Every campaign is connected to your business objectives, from
                the first click to the final customer.
              </p>
            </div>

            <div className="space-y-5">
              <Benefit text="Qualified traffic instead of low-value clicks" />
              <Benefit text="Data-driven campaign optimization" />
              <Benefit text="Clear acquisition performance tracking" />
              <Benefit text="Connected paid and organic strategies" />
              <Benefit text="Continuous conversion optimization" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b2454] px-8 py-16 text-center text-white md:px-16">
          <h2 className="text-4xl font-extrabold md:text-5xl">
            Ready to improve your acquisition?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Discover where your acquisition strategy can generate more
            qualified customers.
          </p>

          <Link
            href="/#audit"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-400"
          >
            Start my free audit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* COMPONENTS */
/* -------------------------------- */

function AcquisitionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
        {icon}
      </div>

      <h3 className="text-xl font-bold">{title}</h3>

      <p className="mt-3 leading-7 text-slate-600">{description}</p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8">
      <span className="text-sm font-bold tracking-[0.2em] text-cyan-500">
        {number}
      </span>

      <h3 className="mt-5 text-2xl font-bold">{title}</h3>

      <p className="mt-4 leading-7 text-slate-600">{text}</p>
    </div>
  );
}

function Benefit({ text }: { text: string }) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
        <Check size={18} />
      </div>

      <p className="font-semibold text-[#0b2454]">{text}</p>
    </div>
  );
}