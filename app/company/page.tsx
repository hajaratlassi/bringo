import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bringo",
  description:
    "Learn about Bringo and our mission to make customer acquisition more predictable through acquisition, AI Search, conversion and automation.",
};

export default function CompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="max-w-4xl">
            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-bold text-cyan-600">
              <span className="h-2 w-2 rounded-full bg-cyan-500" />
              ABOUT BRINGO
            </div>
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight text-[#0b2454] md:text-7xl">
              Building the future of
              <span className="text-cyan-500"> customer acquisition.</span>
            </h1>
            <p className="mt-8 max-w-3xl text-lg leading-8 text-slate-600 md:text-xl">
              Bringo helps companies get discovered, generate qualified
              demand and turn opportunities into customers through
              acquisition, AI search, conversion and automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Our mission
            </p>
            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-[#0b2454] md:text-5xl">
              Make customer acquisition
              <span className="text-cyan-500"> predictable.</span>
            </h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-slate-600">
              Modern companies need more than traffic. They need the right
              audience, the right message and the right systems to transform
              attention into measurable business results.
            </p>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              Bringo brings these capabilities together into one customer
              acquisition system designed around visibility, performance and
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              What we believe
            </p>
            <h2 className="mt-4 text-4xl font-extrabold text-[#0b2454] md:text-5xl">
              Built around measurable growth.
            </h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="text-3xl font-extrabold text-cyan-500">01</div>
              <h3 className="mt-6 text-2xl font-bold text-[#0b2454]">
                Visibility
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Help brands appear where their customers are searching,
                discovering and making decisions.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="text-3xl font-extrabold text-cyan-500">02</div>
              <h3 className="mt-6 text-2xl font-bold text-[#0b2454]">
                Performance
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Focus on qualified leads, conversions, appointments and
                revenue rather than vanity metrics.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8">
              <div className="text-3xl font-extrabold text-cyan-500">03</div>
              <h3 className="mt-6 text-2xl font-bold text-[#0b2454]">
                Automation
              </h3>
              <p className="mt-4 leading-7 text-slate-600">
                Use intelligent systems to reduce repetitive work and
                accelerate the customer acquisition process.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="rounded-3xl bg-[#0b2454] px-8 py-16 text-center md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-400">
            Ready to grow?
          </p>
          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-extrabold text-white md:text-5xl">
            Build a customer acquisition system that grows with you.
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Discover how Bringo can help your company generate more qualified
            demand and accelerate growth.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center rounded-xl bg-cyan-500 px-7 py-4 font-bold text-white transition hover:bg-cyan-400"
          >
            Get started →
          </a>
        </div>
      </section>
    </main>
  );
}
