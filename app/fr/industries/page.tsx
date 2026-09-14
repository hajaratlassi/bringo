import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Secteurs d'activité | Bringo",
  description:
    "Découvrez comment Bringo adapte ses systèmes d'acquisition client aux différents secteurs d'activité.",
};

const industries = [
  {
    id: "real-estate",
    number: "01",
    title: "Immobilier",
    description:
      "Générez davantage de prospects qualifiés et transformez votre visibilité digitale en opportunités commerciales.",
    benefits: [
      "Génération de leads qualifiés",
      "Campagnes Google et Meta Ads",
      "Landing pages dédiées",
      "Qualification automatisée des prospects",
    ],
  },
  {
    id: "hospitality",
    number: "02",
    title: "Hôtellerie",
    description:
      "Développez votre visibilité, augmentez vos réservations directes et attirez une clientèle qualifiée.",
    benefits: [
      "Acquisition de nouveaux clients",
      "Visibilité sur les moteurs de recherche",
      "Campagnes publicitaires ciblées",
      "Automatisation des demandes",
    ],
  },
  {
    id: "ecommerce",
    number: "03",
    title: "E-commerce",
    description:
      "Attirez les bons visiteurs et transformez votre trafic en ventes grâce à un système d'acquisition connecté.",
    benefits: [
      "Meta Ads et Google Ads",
      "Optimisation du taux de conversion",
      "Retargeting",
      "Automatisation marketing",
    ],
  },
  {
    id: "saas",
    number: "04",
    title: "SaaS & Technologie",
    description:
      "Construisez une acquisition prévisible pour générer une demande qualifiée et accélérer votre croissance.",
    benefits: [
      "Génération de demande B2B",
      "SEO et visibilité IA",
      "Lead nurturing",
      "Qualification automatisée",
    ],
  },
  {
    id: "professional-services",
    number: "05",
    title: "Services professionnels",
    description:
      "Transformez votre expertise en opportunités commerciales grâce à une stratégie d'acquisition performante.",
    benefits: [
      "Génération de prospects",
      "Prise de rendez-vous",
      "Landing pages",
      "Automatisation commerciale",
    ],
  },
];

export default function FrenchIndustriesPage() {
  return (
    <main className="bg-white">
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-slate-100 py-24">
        <div className="pointer-events-none absolute left-0 top-20 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                <span className="text-sm font-bold uppercase tracking-wide text-cyan-600">
                  Secteurs d'activité
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-[#0b2454] sm:text-6xl">
                Une acquisition adaptée à{" "}
                <span className="text-cyan-500">votre secteur.</span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Chaque secteur possède ses propres audiences, ses propres
                cycles de vente et ses propres défis. Bringo construit des
                systèmes d'acquisition adaptés à votre marché.
              </p>

              <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                <a
                  href="/fr/audit"
                  className="inline-flex items-center justify-center rounded-xl bg-[#0b2454] px-7 py-4 font-bold text-white shadow-lg transition hover:bg-[#16376f]"
                >
                  Obtenir mon audit gratuit
                  <span className="ml-3 text-lg">→</span>
                </a>

                <a
                  href="#industries"
                  className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-bold text-[#0b2454] transition hover:border-cyan-300 hover:bg-cyan-50"
                >
                  Découvrir les secteurs
                </a>
              </div>
            </div>

            {/* VISUAL */}
            <div className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-[0_20px_60px_rgba(15,35,80,0.10)]">
              <div className="rounded-2xl bg-[#0b2454] p-7">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
                  Bringo
                </p>

                <h2 className="mt-4 text-3xl font-bold text-white">
                  Un système.
                  <br />
                  Plusieurs secteurs.
                </h2>

                <p className="mt-4 text-sm leading-6 text-slate-300">
                  Acquisition, recherche IA, conversion et automatisation
                  réunies dans un système pensé pour votre activité.
                </p>

                <div className="mt-7 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-cyan-400">01</p>
                    <p className="mt-1 text-sm text-white">Acquisition</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-cyan-400">02</p>
                    <p className="mt-1 text-sm text-white">Recherche IA</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-cyan-400">03</p>
                    <p className="mt-1 text-sm text-white">Conversion</p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <p className="text-2xl font-bold text-cyan-400">04</p>
                    <p className="mt-1 text-sm text-white">Automatisation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section id="industries" className="bg-slate-50/50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Nos expertises sectorielles
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">
              Des stratégies pensées pour{" "}
              <span className="text-cyan-500">votre marché.</span>
            </h2>

            <p className="mt-5 text-lg leading-8 text-slate-600">
              Nous adaptons chaque système d'acquisition aux besoins, aux
              audiences et aux objectifs spécifiques de votre entreprise.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {industries.map((industry) => (
              <article
                key={industry.id}
                id={industry.id}
                className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,35,80,0.05)] transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-[0_20px_50px_rgba(15,35,80,0.10)]"
              >
                <div className="flex items-start justify-between">
                  <span className="text-sm font-bold tracking-widest text-cyan-500">
                    {industry.number}
                  </span>

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                    <span className="text-xl font-bold">+</span>
                  </div>
                </div>

                <h3 className="mt-7 text-3xl font-bold text-[#0b2454]">
                  {industry.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {industry.description}
                </p>

                <div className="mt-7 space-y-3 border-t border-slate-100 pt-6">
                  {industry.benefits.map((benefit) => (
                    <div
                      key={benefit}
                      className="flex items-center gap-3 text-sm text-slate-700"
                    >
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
                        ✓
                      </span>

                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl bg-[#0b2454] px-8 py-12 sm:px-12">
            <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div>
                <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-cyan-400">
                  Construisons votre système
                </p>

                <h2 className="max-w-3xl text-3xl font-bold text-white sm:text-4xl">
                  Prêt à accélérer votre acquisition client ?
                </h2>

                <p className="mt-4 max-w-2xl text-slate-300">
                  Découvrez les opportunités de croissance de votre entreprise
                  avec notre audit gratuit.
                </p>
              </div>

              <a
                href="/fr/audit"
                className="inline-flex shrink-0 items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#0b2454] transition hover:bg-cyan-50"
              >
                Obtenir mon audit gratuit
                <span className="text-lg">→</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}