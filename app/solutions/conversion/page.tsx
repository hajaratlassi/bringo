import type { Metadata } from "next";

import {
  ArrowRight,
  Check,
  FileText,
  Layout,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Conversion Optimization",
  description:
    "Turn more visitors into qualified leads and customers with high-performing landing pages, funnels, webinars and conversion rate optimization.",
};

export default function ConversionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b285c]">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#effcff]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-28">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#009fc5]">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Conversion Optimization
              </div>

              {/* Title */}
              <h1 className="max-w-[650px] text-6xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Turn visitors
                <br />
                into{" "}
                <span className="text-[#08afd0]">
                  customers.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[650px] text-xl leading-9 text-[#416184]">
                Build high-performing digital experiences that turn traffic
                into qualified leads and customers.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">

                <button className="flex items-center gap-3 rounded-xl bg-[#0b285c] px-8 py-5 font-bold text-white shadow-lg transition hover:bg-[#123b7d]">
                  Get started
                  <ArrowRight size={20} />
                </button>

                <button className="flex items-center gap-3 rounded-xl border border-[#cbd8e8] bg-white px-8 py-5 font-bold text-[#0b285c] transition hover:border-cyan-400">
                  See how it works
                  <ArrowRight size={20} />
                </button>

              </div>

            </div>

            {/* RIGHT - STATS CARD */}
            <div className="relative">

              <div className="rounded-[28px] border border-cyan-100 bg-white p-6 shadow-[0_25px_70px_rgba(11,40,92,0.12)]">

                <div className="grid grid-cols-2 gap-5">

                  {/* Card 1 */}
                  <div className="rounded-2xl bg-[#0b285c] p-8 text-white">

                    <Layout
                      className="mb-8 text-cyan-400"
                      size={40}
                    />

                    <div className="text-5xl font-extrabold">
                      +78%
                    </div>

                    <p className="mt-3 text-lg text-white/80">
                      Conversion Rate
                    </p>

                  </div>

                  {/* Card 2 */}
                  <div className="rounded-2xl border border-[#dce5ef] bg-white p-8">

                    <FileText
                      className="mb-8 text-cyan-500"
                      size={40}
                    />

                    <div className="text-5xl font-extrabold">
                      +211%
                    </div>

                    <p className="mt-3 text-lg text-[#58708e]">
                      ROAS
                    </p>

                  </div>

                  {/* Card 3 */}
                  <div className="rounded-2xl border border-[#dce5ef] bg-white p-8">

                    <BarChart3
                      className="mb-8 text-cyan-500"
                      size={40}
                    />

                    <div className="text-5xl font-extrabold">
                      +156%
                    </div>

                    <p className="mt-3 text-lg text-[#58708e]">
                      Qualified Leads
                    </p>

                  </div>

                  {/* Card 4 */}
                  <div className="rounded-2xl bg-cyan-50 p-8">

                    <ArrowRight
                      className="mb-8 text-cyan-500"
                      size={40}
                    />

                    <div className="text-5xl font-extrabold">
                      +49%
                    </div>

                    <p className="mt-3 text-lg text-[#58708e]">
                      Revenue
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-[#08afd0]">
              Conversion that matters
            </p>

            <h2 className="mt-5 text-5xl font-extrabold text-[#0b285c]">
              Turn more traffic into customers.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#58708e]">
              We optimize every stage of the customer journey to improve
              conversion rates, generate qualified leads and increase revenue.
            </p>

          </div>

          {/* SERVICES */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Landing Pages */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Layout
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Landing Pages
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                High-converting landing pages designed to turn visitors
                into qualified leads.
              </p>

            </div>

            {/* Webinars */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <FileText
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Webinars
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Strategic webinars that educate prospects and generate
                high-quality opportunities.
              </p>

            </div>

            {/* Funnels */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <ArrowRight
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Funnels
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Customer acquisition funnels optimized from first click
                to final conversion.
              </p>

            </div>

            {/* CRO */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-7 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <BarChart3
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                CRO
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Continuous conversion optimization based on data,
                testing and customer behavior.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* PROCESS */}
      <section className="bg-[#f7fbfd] py-24">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid gap-14 lg:grid-cols-2">

            <div>

              <p className="font-bold uppercase tracking-[0.25em] text-[#08afd0]">
                Our approach
              </p>

              <h2 className="mt-5 text-5xl font-extrabold leading-tight text-[#0b285c]">
                Optimize every step of the customer journey.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#58708e]">
                From the first visit to the final conversion, we identify
                opportunities and build experiences that make customers
                take action.
              </p>

            </div>

            <div className="space-y-5">

              {/* Analyze */}
              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Analyze
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Understand your traffic, users and conversion barriers.
                  </p>

                </div>

              </div>

              {/* Optimize */}
              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Optimize
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Improve pages, funnels, offers and customer experiences.
                  </p>

                </div>

              </div>

              {/* Measure */}
              <div className="flex gap-5 rounded-2xl bg-white p-6 shadow-sm">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Measure
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Track results and continuously improve performance.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* FINAL CTA */}
      <section className="bg-[#0b285c] py-20">

        <div className="mx-auto max-w-[1100px] px-6 text-center">

          <p className="font-bold uppercase tracking-[0.25em] text-cyan-400">
            Ready to grow?
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-white">
            Turn your traffic into measurable growth.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Build a conversion system that turns more visitors into
            qualified customers.
          </p>

          <button className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-5 font-bold text-[#0b285c] transition hover:bg-cyan-50">
            Get started
            <ArrowRight size={20} />
          </button>

        </div>

      </section>

    </main>
  );
}