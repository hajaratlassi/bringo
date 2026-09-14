import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Website & AI Search Audit",
  description:
    "Get a free audit of your website visibility, acquisition, conversion and automation opportunities with Bringo.",
};

import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Search,
  BarChart3,
  Target,
  Zap,
} from "lucide-react";

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-white">

      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-bold text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                FREE WEBSITE AUDIT
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-[#0b2454] sm:text-6xl lg:text-7xl">
                Discover what is
                <span className="block text-cyan-500">
                  limiting your growth.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Get a free analysis of your website and discover opportunities
                to improve visibility, acquisition, conversion and growth.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="#audit-form"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-cyan-500"
                >
                  Start my free audit
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>

                <Link
                  href="/"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-300 px-7 py-4 text-sm font-bold text-[#0b2454] transition hover:border-cyan-400 hover:text-cyan-500"
                >
                  Back to home
                </Link>
              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl shadow-cyan-100/50">

                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500">
                    <Search size={28} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#0b2454]">
                      Your Visibility Score
                    </h2>
                    <p className="text-sm text-slate-500">
                      Example audit result
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-8">

                  <div className="flex h-56 w-56 items-center justify-center rounded-full border-[18px] border-cyan-400 bg-white shadow-inner">

                    <div className="text-center">
                      <div className="text-6xl font-extrabold text-[#0b2454]">
                        68
                      </div>

                      <div className="text-sm font-semibold text-slate-400">
                        /100
                      </div>

                      <div className="mt-2 font-bold text-cyan-500">
                        Good Potential
                      </div>
                    </div>

                  </div>

                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    Your website may have strong potential, but there are
                    opportunities that could improve visibility and customer
                    acquisition.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>
      </section>


      {/* AUDIT FORM */}
      <section
        id="audit-form"
        className="bg-slate-50 py-24"
      >
        <div className="mx-auto max-w-5xl px-6 lg:px-8">

          <div className="mb-12 text-center">

            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-cyan-500">
              START YOUR AUDIT
            </div>

            <h2 className="text-4xl font-extrabold text-[#0b2454] sm:text-5xl">
              Analyze your website.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Enter your website below to discover the main opportunities
              affecting your online acquisition.
            </p>

          </div>


          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">

            <form className="space-y-8">

              {/* WEBSITE */}
              <div>

                <label
                  htmlFor="website"
                  className="mb-3 block text-sm font-bold text-[#0b2454]"
                >
                  Your website
                </label>

                <input
                  id="website"
                  type="url"
                  placeholder="https://yourcompany.com"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-base text-[#0b2454] outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />

              </div>


              {/* EMAIL */}
              <div>

                <label
                  htmlFor="email"
                  className="mb-3 block text-sm font-bold text-[#0b2454]"
                >
                  Your email
                </label>

                <input
                  id="email"
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-base text-[#0b2454] outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />

              </div>


              {/* COMPANY */}
              <div>

                <label
                  htmlFor="company"
                  className="mb-3 block text-sm font-bold text-[#0b2454]"
                >
                  Company name
                </label>

                <input
                  id="company"
                  type="text"
                  placeholder="Your company"
                  className="w-full rounded-xl border border-slate-300 px-5 py-4 text-base text-[#0b2454] outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                />

              </div>


              {/* BUTTON */}
              <button
                type="submit"
                className="group inline-flex w-full items-center justify-center gap-3 rounded-xl bg-[#0b2454] px-7 py-4 text-base font-bold text-white transition-all hover:-translate-y-0.5 hover:bg-cyan-500"
              >
                Analyze my website
                <ArrowRight
                  size={20}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>

            </form>

          </div>

        </div>
      </section>


      {/* WHAT WE CHECK */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mb-14 max-w-2xl">

            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-cyan-500">
              WHAT WE CHECK
            </div>

            <h2 className="text-4xl font-extrabold text-[#0b2454] sm:text-5xl">
              A complete view of your acquisition.
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Our audit looks at the key areas that influence how customers
              discover and interact with your business.
            </p>

          </div>


          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* CARD 1 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <Search size={26} />
              </div>

              <h3 className="text-xl font-bold text-[#0b2454]">
                SEO & AI Visibility
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Understand how easily customers and AI search engines can
                discover your business.
              </p>

            </div>


            {/* CARD 2 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <Target size={26} />
              </div>

              <h3 className="text-xl font-bold text-[#0b2454]">
                Conversion
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Identify opportunities to turn more visitors into qualified
                leads and customers.
              </p>

            </div>


            {/* CARD 3 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <BarChart3 size={26} />
              </div>

              <h3 className="text-xl font-bold text-[#0b2454]">
                Paid Performance
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Find ways to improve acquisition efficiency and get more from
                your paid campaigns.
              </p>

            </div>


            {/* CARD 4 */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:shadow-lg">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <Zap size={26} />
              </div>

              <h3 className="text-xl font-bold text-[#0b2454]">
                Automation
              </h3>

              <p className="mt-3 text-sm leading-6 text-slate-500">
                Discover repetitive processes that could be automated to
                accelerate growth.
              </p>

            </div>

          </div>

        </div>

      </section>


      {/* FINAL CTA */}
      <section className="bg-[#0b2454] py-20">

        <div className="mx-auto max-w-5xl px-6 text-center lg:px-8">

          <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500 text-white">
            <CheckCircle2 size={32} />
          </div>

          <h2 className="text-4xl font-extrabold text-white sm:text-5xl">
            Ready to discover your opportunities?
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Start your free audit and get a clearer view of what could be
            improved across your digital acquisition.
          </p>

          <a
            href="#audit-form"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-400"
          >
            Start your free audit
            <ArrowRight size={19} />
          </a>

        </div>

      </section>

    </main>
  );
}