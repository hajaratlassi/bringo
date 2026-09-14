import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Target,
  Search,
  BarChart3,
  Bot,
  Check,
} from "lucide-react";

export const metadata: Metadata = {
  title: "À propos de Bringo",
  description:
    "Découvrez Bringo, une approche moderne de l’acquisition client combinant IA, acquisition, recherche IA, conversion et automatisation.",
};

const pillars = [
  {
    number: "01",
    title: "Acquisition",
    description:
      "Attirez une audience qualifiée grâce à des campagnes performantes sur les principaux canaux d’acquisition.",
    icon: Target,
  },
  {
    number: "02",
    title: "Recherche IA",
    description:
      "Améliorez votre visibilité sur Google, ChatGPT et les moteurs de recherche et de recommandation basés sur l’IA.",
    icon: Search,
  },
  {
    number: "03",
    title: "Conversion",
    description:
      "Transformez davantage de visiteurs en prospects et en clients grâce à des expériences digitales performantes.",
    icon: BarChart3,
  },
  {
    number: "04",
    title: "Automatisation",
    description:
      "Automatisez les tâches répétitives, qualifiez vos prospects et accélérez votre processus commercial.",
    icon: Bot,
  },
];

const values = [
  "Une stratégie pensée pour la croissance",
  "Des décisions basées sur les données",
  "Une approche centrée sur la conversion",
  "L’intelligence artificielle au service du business",
  "Une vision long terme de l’acquisition",
  "Une amélioration continue des performances",
];

export default function FrenchCompanyPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-cyan-50/30 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />

                <span className="text-sm font-bold uppercase tracking-wide text-cyan-600">
                  À propos de Bringo
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
                Nous construisons
                <br />
                <span className="text-cyan-500">
                  des systèmes d’acquisition.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Bringo aide les entreprises à attirer la bonne audience, être
                découvertes dans la recherche IA, convertir davantage de
                visiteurs et automatiser leur acquisition client.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/fr/audit"
                  className="inline-flex items-center gap-3 rounded-lg bg-blue-950 px-6 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-blue-900"
                >
                  Obtenir mon audit gratuit
                  <ArrowRight size={18} />
                </Link>

                <Link
                  href="/fr/contact"
                  className="inline-flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-blue-950 transition hover:border-cyan-400"
                >
                  Nous contacter
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-blue-950 p-8">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                  BRINGO
                </p>

                <h2 className="mt-5 text-4xl font-extrabold leading-tight text-white">
                  Un système.
                  <br />
                  Plusieurs leviers.
                  <br />
                  Une croissance.
                </h2>

                <p className="mt-6 text-sm leading-7 text-slate-300">
                  Acquisition, recherche IA, conversion et automatisation
                  réunies dans une approche pensée pour développer votre
                  activité.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  {pillars.map((pillar) => {
                    const Icon = pillar.icon;

                    return (
                      <div
                        key={pillar.number}
                        className="rounded-xl bg-white/10 p-4"
                      >
                        <Icon size={22} className="text-cyan-400" />

                        <p className="mt-3 text-lg font-extrabold text-cyan-400">
                          {pillar.number}
                        </p>

                        <p className="mt-1 text-sm font-bold text-white">
                          {pillar.title}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION */}
      <section className="border-b border-slate-100 py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                Notre mission
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                Rendre votre
                <br />
                <span className="text-cyan-500">
                  acquisition plus prévisible.
                </span>
              </h2>
            </div>

            <div className="space-y-6 text-base leading-8 text-slate-600">
              <p>
                La croissance ne devrait pas dépendre d’un seul canal, d’une
                campagne ponctuelle ou de décisions prises au hasard.
              </p>

              <p>
                Nous construisons des systèmes qui connectent les différents
                leviers de l’acquisition afin de créer un parcours cohérent,
                mesurable et orienté vers les résultats.
              </p>

              <p>
                Notre approche combine technologie, données, intelligence
                artificielle et stratégie pour aider les entreprises à
                générer une demande qualifiée et à transformer cette demande
                en croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FOUR PILLARS */}
      <section className="bg-slate-50/60 py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
              Notre approche
            </p>

            <h2 className="mt-3 text-4xl font-extrabold text-blue-950 sm:text-5xl">
              Quatre leviers.
              <br />
              <span className="text-cyan-500">
                Un système d’acquisition.
              </span>
            </h2>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-600">
              Chaque levier joue un rôle différent dans votre croissance. Leur
              combinaison permet de construire un système plus performant et
              plus durable.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((pillar) => {
              const Icon = pillar.icon;

              return (
                <div
                  key={pillar.number}
                  className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-extrabold text-cyan-500">
                      {pillar.number}
                    </span>

                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon size={23} className="text-cyan-500" />
                    </div>
                  </div>

                  <h3 className="mt-8 text-2xl font-extrabold text-blue-950">
                    {pillar.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-slate-600">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1200px] px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                Notre façon de travailler
              </p>

              <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                Une approche
                <br />
                <span className="text-cyan-500">orientée résultats.</span>
              </h2>

              <p className="mt-6 text-base leading-7 text-slate-600">
                Nous privilégions la clarté, la mesure et l’amélioration
                continue. Chaque décision doit contribuer à un objectif
                business concret.
              </p>
            </div>

            {/* RIGHT */}
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-lg">
              <div className="space-y-5">
                {values.map((value) => (
                  <div
                    key={value}
                    className="flex items-center gap-4 border-b border-slate-100 pb-5 last:border-0 last:pb-0"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50">
                      <Check size={18} className="text-cyan-500" />
                    </div>

                    <p className="text-sm font-semibold text-blue-950">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-20">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Construisons votre système
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Prêt à développer
            <br />
            <span className="text-cyan-400">
              votre acquisition client ?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
            Découvrez vos opportunités de croissance et identifiez les leviers
            qui peuvent améliorer votre acquisition.
          </p>

          <Link
            href="/fr/audit"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-cyan-500 px-7 py-4 text-sm font-bold text-blue-950 transition hover:bg-cyan-400"
          >
            Obtenir mon audit gratuit
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}