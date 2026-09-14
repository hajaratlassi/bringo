import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Search,
  TrendingUp,
  Bot,
  Target,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Insights & Ressources | Bringo",
  description:
    "Découvrez nos insights sur l’acquisition client, le SEO, la recherche IA, la conversion et l’automatisation.",
};

const articles = [
  {
    category: "RECHERCHE IA",
    title: "Comment être visible dans les résultats de recherche IA",
    description:
      "Découvrez comment optimiser votre présence sur Google, ChatGPT et les nouveaux moteurs de recommandation basés sur l’IA.",
    icon: Search,
  },
  {
    category: "ACQUISITION",
    title: "Construire un système d’acquisition client prévisible",
    description:
      "Les principes essentiels pour attirer une audience qualifiée et transformer votre trafic en opportunités commerciales.",
    icon: Target,
  },
  {
    category: "AUTOMATISATION",
    title: "Comment l’IA transforme l’acquisition client",
    description:
      "Découvrez comment les agents IA et l’automatisation peuvent qualifier les prospects et accélérer votre processus commercial.",
    icon: Bot,
  },
  {
    category: "CONVERSION",
    title: "Transformer davantage de visiteurs en clients",
    description:
      "Les stratégies de conversion pour créer des expériences digitales plus performantes et générer davantage de leads.",
    icon: TrendingUp,
  },
];

export default function FrenchInsightsPage() {
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
                  Insights & Ressources
                </span>
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
                Des idées qui
                <br />
                <span className="text-cyan-500">
                  stimulent la croissance.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Découvrez nos analyses, stratégies et conseils pour améliorer
                votre acquisition client, votre visibilité dans la recherche
                IA, votre conversion et votre automatisation.
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
                  href="/fr/solutions"
                  className="inline-flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-6 py-4 text-sm font-bold text-blue-950 transition hover:border-cyan-400"
                >
                  Découvrir nos solutions
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-xl">
              <div className="rounded-2xl bg-blue-950 p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-cyan-400">
                  BRINGO INSIGHTS
                </p>

                <h2 className="mt-5 text-3xl font-extrabold leading-tight text-white">
                  Les stratégies qui
                  <br />
                  font avancer votre
                  <br />
                  acquisition.
                </h2>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  Acquisition, recherche IA, conversion et automatisation :
                  retrouvez les idées essentielles pour construire un système
                  de croissance plus performant.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white/10 p-4">
                    <Search className="text-cyan-400" size={22} />
                    <p className="mt-3 text-sm font-bold text-white">
                      Recherche IA
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <Target className="text-cyan-400" size={22} />
                    <p className="mt-3 text-sm font-bold text-white">
                      Acquisition
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <TrendingUp className="text-cyan-400" size={22} />
                    <p className="mt-3 text-sm font-bold text-white">
                      Conversion
                    </p>
                  </div>

                  <div className="rounded-xl bg-white/10 p-4">
                    <Bot className="text-cyan-400" size={22} />
                    <p className="mt-3 text-sm font-bold text-white">
                      Automatisation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="py-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
                Nos derniers contenus
              </p>

              <h2 className="mt-3 text-4xl font-extrabold text-blue-950 sm:text-5xl">
                Apprenez. Testez.
                <br />
                <span className="text-cyan-500">Développez-vous.</span>
              </h2>
            </div>

            <Link
              href="/fr/insights"
              className="inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition hover:text-cyan-500"
            >
              Voir tous les insights
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {articles.map((article) => {
              const Icon = article.icon;

              return (
                <article
                  key={article.title}
                  className="group flex min-h-[390px] flex-col rounded-2xl border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                      <Icon size={23} className="text-cyan-500" />
                    </div>

                    <ArrowRight
                      size={20}
                      className="text-slate-300 transition group-hover:text-cyan-500"
                    />
                  </div>

                  <p className="mt-8 text-xs font-bold uppercase tracking-widest text-cyan-500">
                    {article.category}
                  </p>

                  <h3 className="mt-4 text-2xl font-extrabold leading-tight text-blue-950">
                    {article.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-6 text-slate-600">
                    {article.description}
                  </p>

                  <div className="mt-7 border-t border-slate-100 pt-5">
                    <button
                      type="button"
                      className="inline-flex items-center gap-2 text-sm font-bold text-blue-950 transition group-hover:text-cyan-500"
                    >
                      Lire l’article
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-950 py-20">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Passez à l’action
          </p>

          <h2 className="mt-4 text-4xl font-extrabold text-white sm:text-5xl">
            Prêt à développer
            <br />
            <span className="text-cyan-400">votre acquisition ?</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-300">
            Identifiez vos opportunités de croissance et découvrez comment
            construire un système d’acquisition plus performant.
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