import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  CalendarCheck,
  Workflow,
  Users,
  Zap,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Customer Acquisition Automation",
  description:
    "Automate lead qualification, CRM workflows, customer follow-up and appointment booking to build a more efficient acquisition system.",
};

export default function AutomationPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b285c]">

      {/* =========================
          HERO SECTION
      ========================== */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-[#effcff]">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-28">

          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              {/* Badge */}
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-3 text-sm font-bold uppercase tracking-wide text-[#009fc5]">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Customer Acquisition Automation
              </div>

              {/* Title */}
              <h1 className="max-w-[700px] text-6xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Automate your
                <br />
                <span className="text-[#08afd0]">
                  growth.
                </span>
              </h1>

              {/* Description */}
              <p className="mt-8 max-w-[680px] text-xl leading-9 text-[#416184]">
                Automate repetitive tasks, qualify leads and accelerate your
                customer acquisition process with intelligent automation.
              </p>

              {/* Buttons */}
              <div className="mt-10 flex flex-wrap gap-5">

                <Link
                  href="/contact"
                  className="flex items-center gap-3 rounded-xl bg-[#0b285c] px-8 py-5 font-bold text-white shadow-lg transition hover:bg-[#123b7d]"
                >
                  Get started
                  <ArrowRight size={20} />
                </Link>

                <Link
                  href="/audit"
                  className="flex items-center gap-3 rounded-xl border border-[#cbd8e8] bg-white px-8 py-5 font-bold text-[#0b285c] transition hover:border-cyan-400"
                >
                  See how it works
                  <ArrowRight size={20} />
                </Link>

              </div>

            </div>

            {/* RIGHT */}
            <div className="relative">

              <div className="rounded-[28px] border border-cyan-100 bg-white p-6 shadow-[0_25px_70px_rgba(11,40,92,0.12)]">

                <div className="grid grid-cols-2 gap-5">

                  {/* AI Agents */}
                  <div className="rounded-2xl bg-[#0b285c] p-8 text-white">
                    <Bot
                      className="mb-8 text-cyan-400"
                      size={40}
                    />

                    <div className="text-4xl font-extrabold">
                      AI
                    </div>

                    <p className="mt-3 text-lg text-white/80">
                      AI Agents
                    </p>
                  </div>

                  {/* CRM */}
                  <div className="rounded-2xl border border-[#dce5ef] bg-white p-8">
                    <Users
                      className="mb-8 text-cyan-500"
                      size={40}
                    />

                    <div className="text-4xl font-extrabold">
                      CRM
                    </div>

                    <p className="mt-3 text-lg text-[#58708e]">
                      Lead Management
                    </p>
                  </div>

                  {/* Workflows */}
                  <div className="rounded-2xl border border-[#dce5ef] bg-white p-8">
                    <Workflow
                      className="mb-8 text-cyan-500"
                      size={40}
                    />

                    <div className="text-4xl font-extrabold">
                      24/7
                    </div>

                    <p className="mt-3 text-lg text-[#58708e]">
                      Automated Workflows
                    </p>
                  </div>

                  {/* Appointments */}
                  <div className="rounded-2xl bg-cyan-50 p-8">
                    <CalendarCheck
                      className="mb-8 text-cyan-500"
                      size={40}
                    />

                    <div className="text-4xl font-extrabold">
                      +63%
                    </div>

                    <p className="mt-3 text-lg text-[#58708e]">
                      Appointments
                    </p>
                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================
          INTRODUCTION
      ========================== */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-[#08afd0]">
              Intelligent automation
            </p>

            <h2 className="mt-5 text-5xl font-extrabold text-[#0b285c]">
              Let technology do the repetitive work.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#58708e]">
              We build automated systems that connect your marketing,
              sales and customer acquisition processes so your team can
              focus on what really matters.
            </p>

          </div>

          {/* SERVICES */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">

            {/* AI Agents */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Bot
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                AI Agents
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Intelligent AI agents that handle repetitive conversations,
                qualify prospects and assist your customers.
              </p>

            </div>

            {/* CRM */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Users
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                CRM
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Connect your customer data and automate lead management
                throughout your acquisition process.
              </p>

            </div>

            {/* Workflows */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Workflow
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Workflows
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Automate complex workflows and connect the tools your team
                already uses.
              </p>

            </div>

            {/* Lead Qualification */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <Zap
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Lead Qualification
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Automatically identify your best prospects and prioritize
                leads that are most likely to convert.
              </p>

            </div>

            {/* Appointment Booking */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <CalendarCheck
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Appointment Booking
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Automatically schedule qualified prospects with your sales
                team at the right moment.
              </p>

            </div>

            {/* Analytics */}
            <div className="rounded-2xl border border-[#dce5ef] bg-white p-8 transition hover:-translate-y-1 hover:shadow-xl">

              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                <BarChart3
                  className="text-cyan-500"
                  size={28}
                />
              </div>

              <h3 className="text-xl font-bold">
                Analytics
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Measure your acquisition performance and understand which
                automated processes generate the best results.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          HOW IT WORKS
      ========================== */}
      <section className="bg-[#f7fbfd] py-24">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="text-center">

            <p className="font-bold uppercase tracking-[0.25em] text-[#08afd0]">
              How it works
            </p>

            <h2 className="mt-5 text-5xl font-extrabold text-[#0b285c]">
              One automated customer journey.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[#58708e]">
              From the first interaction to the final appointment, automation
              keeps your acquisition system moving.
            </p>

          </div>

          {/* STEPS */}
          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {/* Step 1 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">

              <div className="mb-6 text-sm font-bold text-cyan-500">
                01
              </div>

              <h3 className="text-2xl font-bold">
                Capture
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Capture visitors and leads from your acquisition channels.
              </p>

            </div>

            {/* Step 2 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">

              <div className="mb-6 text-sm font-bold text-cyan-500">
                02
              </div>

              <h3 className="text-2xl font-bold">
                Qualify
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Automatically evaluate and qualify incoming prospects.
              </p>

            </div>

            {/* Step 3 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">

              <div className="mb-6 text-sm font-bold text-cyan-500">
                03
              </div>

              <h3 className="text-2xl font-bold">
                Engage
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Follow up with prospects automatically through the right
                channels.
              </p>

            </div>

            {/* Step 4 */}
            <div className="relative rounded-2xl bg-white p-8 shadow-sm">

              <div className="mb-6 text-sm font-bold text-cyan-500">
                04
              </div>

              <h3 className="text-2xl font-bold">
                Book
              </h3>

              <p className="mt-4 leading-7 text-[#58708e]">
                Turn qualified prospects into appointments and customers.
              </p>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          BENEFITS
      ========================== */}
      <section className="bg-white py-24">

        <div className="mx-auto max-w-[1200px] px-6">

          <div className="grid gap-14 lg:grid-cols-2">

            {/* LEFT */}
            <div>

              <p className="font-bold uppercase tracking-[0.25em] text-[#08afd0]">
                Automation that matters
              </p>

              <h2 className="mt-5 text-5xl font-extrabold leading-tight text-[#0b285c]">
                Work smarter.
                <br />
                Grow faster.
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#58708e]">
                Automation removes repetitive work from your team's daily
                operations and creates a faster, more consistent customer
                journey.
              </p>

            </div>

            {/* RIGHT */}
            <div className="space-y-5">

              {/* Benefit 1 */}
              <div className="flex gap-5 rounded-2xl border border-[#dce5ef] bg-white p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Save time
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Eliminate repetitive manual tasks and let your team
                    focus on high-value activities.
                  </p>

                </div>

              </div>

              {/* Benefit 2 */}
              <div className="flex gap-5 rounded-2xl border border-[#dce5ef] bg-white p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Respond faster
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Respond to prospects quickly and keep every opportunity
                    moving forward.
                  </p>

                </div>

              </div>

              {/* Benefit 3 */}
              <div className="flex gap-5 rounded-2xl border border-[#dce5ef] bg-white p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Scale your acquisition
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Build systems that can handle more leads without
                    increasing repetitive workload.
                  </p>

                </div>

              </div>

              {/* Benefit 4 */}
              <div className="flex gap-5 rounded-2xl border border-[#dce5ef] bg-white p-6">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                  <Check
                    className="text-cyan-500"
                    size={22}
                  />
                </div>

                <div>

                  <h3 className="text-xl font-bold">
                    Improve consistency
                  </h3>

                  <p className="mt-2 text-[#58708e]">
                    Make sure every lead receives the right action at the
                    right moment.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =========================
          FINAL CTA
      ========================== */}
      <section className="bg-[#0b285c] py-20">

        <div className="mx-auto max-w-[1100px] px-6 text-center">

          <p className="font-bold uppercase tracking-[0.25em] text-cyan-400">
            Ready to automate?
          </p>

          <h2 className="mt-5 text-5xl font-extrabold text-white">
            Automate your customer acquisition.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">
            Build an intelligent acquisition system that works continuously
            and turns more opportunities into customers.
          </p>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-white px-8 py-5 font-bold text-[#0b285c] transition hover:bg-cyan-50"
          >
            Get started
            <ArrowRight size={20} />
          </Link>

        </div>

      </section>

    </main>
  );
}