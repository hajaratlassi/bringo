export default function PrivacyPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-5xl px-6 py-24 lg:px-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold text-cyan-600">
          <span className="h-2 w-2 rounded-full bg-cyan-500" />
          PRIVACY
        </div>

        <h1 className="mt-8 text-5xl font-extrabold tracking-tight text-[#0b2454] lg:text-6xl">
          Privacy Policy<span className="text-cyan-500">.</span>
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-600">
          Your privacy matters to us. This page explains how Bringo
          collects, uses and protects information when you use our
          website and services.
        </p>

        <div className="mt-16 space-y-12">
          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              1. Information we collect
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We may collect information that you provide when you contact
              us, request an audit or interact with our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              2. How we use your information
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We use information to respond to requests, provide our
              services, improve our website and communicate with you about
              relevant business opportunities.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              3. Data protection
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              We take reasonable measures to protect information against
              unauthorized access, alteration, disclosure or destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              4. Your rights
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              Depending on applicable law, you may have rights regarding
              access, correction, deletion and use of your personal
              information.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-extrabold text-[#0b2454]">
              5. Contact
            </h2>
            <p className="mt-4 leading-7 text-slate-600">
              If you have questions about this Privacy Policy, please
              contact Bringo through our contact page.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}