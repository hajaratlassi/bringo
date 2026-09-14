export default function TermsPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-600">
          <span className="h-2 w-2 rounded-full bg-cyan-500" />
          TERMS
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-[#0b2454] lg:text-6xl">
          Terms of Service<span className="text-cyan-500">.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          These terms explain the conditions for using the Bringo website
          and services.
        </p>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              1. Acceptance of terms
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              By accessing or using our website and services, you agree to
              comply with these Terms of Service.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              2. Use of our services
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              You agree to use the website and services in a lawful manner
              and not to misuse, disrupt or attempt to gain unauthorized
              access to our systems.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              3. Our services
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Bringo provides customer acquisition, AI search,
              conversion optimization and automation solutions. Specific
              services may vary depending on the project and agreement
              with each client.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              4. Intellectual property
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Content, branding, designs and materials available on this
              website belong to Bringo or their respective owners and may
              not be reproduced without permission.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              5. Limitation of liability
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We make reasonable efforts to keep our website and services
              available and accurate, but we cannot guarantee that they
              will always be uninterrupted or error-free.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              6. Contact
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              If you have questions about these Terms of Service, please
              contact Bringo through our contact page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}