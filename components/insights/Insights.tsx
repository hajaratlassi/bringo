"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  ArrowRight,
  TrendingUp,
  Search,
  Bot,
} from "lucide-react";

export default function Insights() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith("/fr");

  const articles = isFrench
    ? [
        {
          category: "RECHERCHE IA",
          title:
            "Comment la recherche IA transforme l’acquisition client",
          description:
            "Découvrez comment les moteurs de recherche propulsés par l’IA changent la manière dont les entreprises attirent et convertissent leurs nouveaux clients.",
          icon: Search,
        },
        {
          category: "ACQUISITION",
          title:
            "Les nouvelles règles de l’acquisition client digitale",
          description:
            "Découvrez comment les systèmes d’acquisition modernes combinent publicité, SEO et optimisation de la conversion.",
          icon: TrendingUp,
        },
        {
          category: "AUTOMATISATION",
          title:
            "Comment l’automatisation IA peut accélérer la croissance",
          description:
            "Découvrez comment l’automatisation intelligente peut réduire les tâches répétitives et améliorer votre parcours client.",
          icon: Bot,
        },
      ]
    : [
        {
          category: "AI SEARCH",
          title:
            "How AI Search is changing customer acquisition",
          description:
            "Discover how AI-powered search engines are changing the way companies attract and convert new customers.",
          icon: Search,
        },
        {
          category: "ACQUISITION",
          title:
            "The new rules of digital customer acquisition",
          description:
            "Learn how modern acquisition systems combine paid media, SEO and conversion optimization.",
          icon: TrendingUp,
        },
        {
          category: "AUTOMATION",
          title:
            "How AI automation can accelerate growth",
          description:
            "Explore how intelligent automation can reduce repetitive work and improve your customer journey.",
          icon: Bot,
        },
      ];

  const text = isFrench
    ? {
        label: "Insights & Ressources",
        title1: "Des idées qui stimulent",
        title2: "la croissance.",
        description:
          "Explorez nos dernières réflexions sur la recherche IA, l’acquisition client, la conversion et l’automatisation.",
        viewAll: "Voir tous les insights",
        read: "Lire l’article",
      }
    : {
        label: "Insights & Resources",
        title1: "Ideas that drive",
        title2: "growth.",
        description:
          "Explore our latest insights about AI search, customer acquisition, conversion and automation.",
        viewAll: "View all insights",
        read: "Read article",
      };

  return (
    <section
      id="insights"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =========================
            HEADER
        ========================== */}

        <div className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end">

          <div className="max-w-3xl">

            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              {text.label}
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">

              {text.title1}

              <span className="text-cyan-500">
                {" "}{text.title2}
              </span>

            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              {text.description}
            </p>

          </div>


          {/* VIEW ALL */}

          <Link
            href={isFrench ? "/fr#insights" : "/#insights"}
            className="inline-flex items-center gap-3 self-start rounded-xl border border-slate-200 px-6 py-3 font-bold text-[#0b2454] transition-all hover:border-cyan-400 hover:text-cyan-500 md:self-auto"
          >
            {text.viewAll}

            <ArrowRight size={18} />
          </Link>

        </div>


        {/* =========================
            ARTICLES
        ========================== */}

        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">

          {articles.map((article) => {

            const Icon = article.icon;

            return (
              <article
                key={article.title}
                className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(15,35,80,0.10)]"
              >

                {/* Visual */}

                <div className="relative flex h-56 items-center justify-center overflow-hidden bg-[#0b2454]">

                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/30 via-transparent to-[#0b2454]" />

                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full border border-cyan-400/30" />

                  <div className="absolute -bottom-16 -left-10 h-48 w-48 rounded-full border border-cyan-400/20" />

                  <div className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white text-cyan-500 shadow-xl transition-transform duration-300 group-hover:scale-110">

                    <Icon
                      size={36}
                      strokeWidth={1.8}
                    />

                  </div>

                </div>


                {/* Content */}

                <div className="p-7">

                  <p className="mb-4 text-xs font-bold tracking-[0.2em] text-cyan-500">
                    {article.category}
                  </p>

                  <h3 className="text-2xl font-bold leading-tight text-[#0b2454]">
                    {article.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {article.description}
                  </p>


                  <div className="mt-7 border-t border-slate-100 pt-6">

                    <button
                      type="button"
                      className="inline-flex items-center gap-2 font-bold text-[#0b2454] transition-colors group-hover:text-cyan-500"
                    >
                      {text.read}

                      <ArrowRight
                        size={18}
                        className="transition-transform group-hover:translate-x-1"
                      />
                    </button>

                  </div>

                </div>

              </article>
            );

          })}

        </div>

      </div>
    </section>
  );
}