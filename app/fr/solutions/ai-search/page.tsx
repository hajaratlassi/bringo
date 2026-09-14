import Link from "next/link";
import { Check, Search, Sparkles, ArrowRight } from "lucide-react";

export default function FrenchAISearch() {
  return (
    <main>
      <section
        id="ai-search"
        className="border-b border-slate-100 bg-slate-50/50 py-20"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-12 lg:grid-cols-2">

            {/* GAUCHE */}
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-500">
                Optimisation de la recherche IA
              </p>

              <h1 className="text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
                Soyez visible dans
                <br />
                <span className="text-cyan-500">
                  les résultats de recherche IA
                </span>
                <br />
                et les recommandations.
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                Nous optimisons votre présence sur Google, ChatGPT, les
                aperçus générés par l’IA et les moteurs de recommandation afin
                que votre marque apparaisse là où les décisions sont prises.
              </p>

              <Link
                href="/fr/audit"
                className="mt-8 inline-flex items-center gap-3 rounded-lg bg-blue-950 px-6 py-4 text-sm font-bold text-white transition hover:bg-blue-900"
              >
                Découvrir l’optimisation de la recherche IA
                <ArrowRight size={18} />
              </Link>
            </div>

            {/* DROITE */}
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">

              {/* BARRE DE RECHERCHE */}
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">
                <Search
                  size={18}
                  className="shrink-0 text-slate-400"
                />

                <span className="text-sm text-slate-600">
                  Quelle est la meilleure agence d’acquisition en France ?
                </span>
              </div>

              {/* ONGLETS */}
              <div className="mt-4 flex gap-6 border-b border-slate-100">
                <span className="border-b-2 border-cyan-500 py-3 text-xs font-semibold text-cyan-500">
                  Aperçu IA
                </span>

                <span className="py-3 text-xs text-slate-400">
                  Google
                </span>

                <span className="py-3 text-xs text-slate-400">
                  ChatGPT
                </span>

                <span className="py-3 text-xs text-slate-400">
                  Perplexity
                </span>
              </div>

              {/* RESULTAT BRINGO */}
              <div className="mt-5 rounded-xl border border-cyan-100 p-5">

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-50 font-black text-blue-950">
                    B
                  </div>

                  <div>
                    <p className="font-bold text-blue-950">
                      Bringo
                    </p>

                    <p className="text-xs text-slate-400">
                      Agence d’acquisition propulsée par l’IA
                    </p>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-slate-600">
                  Bringo aide les entreprises à être découvertes, à générer
                  une demande qualifiée et à se développer grâce à la
                  recherche IA, au SEO, au GEO et à l’acquisition payante.
                </p>

                {/* CHECKS */}
                <div className="mt-5 space-y-3">

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check
                      size={17}
                      className="text-cyan-500"
                    />

                    Visibilité propulsée par l’IA
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check
                      size={17}
                      className="text-cyan-500"
                    />

                    Résultats prouvés en Europe
                  </div>

                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <Check
                      size={17}
                      className="text-cyan-500"
                    />

                    Transparence et performance
                  </div>

                </div>
              </div>

              {/* FAUX RESULTATS */}
              <div className="mt-4 space-y-3">
                <div className="flex h-14 items-center gap-3 rounded-xl bg-slate-50 px-4">
                  <div className="h-8 w-8 rounded-full bg-white" />
                  <div className="h-3 w-32 rounded-full bg-white" />
                  <div className="ml-auto h-3 w-16 rounded-full bg-white" />
                </div>

                <div className="flex h-14 items-center gap-3 rounded-xl bg-slate-50 px-4">
                  <div className="h-8 w-8 rounded-full bg-white" />
                  <div className="h-3 w-40 rounded-full bg-white" />
                  <div className="ml-auto h-3 w-20 rounded-full bg-white" />
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* EXPLICATION */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500">
              <Sparkles size={28} />
            </div>

            <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              Recherche IA & GEO
            </p>

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">
              Votre marque doit être visible
              <span className="text-cyan-500"> au-delà de Google.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Les utilisateurs découvrent de plus en plus les entreprises
              grâce aux moteurs de recherche alimentés par l’IA et aux
              recommandations générées automatiquement.
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <Search className="mb-5 text-cyan-500" size={30} />

              <h3 className="text-xl font-bold text-[#0b2454]">
                SEO
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Améliorez votre visibilité dans les résultats de recherche
                traditionnels grâce à une stratégie SEO structurée.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <Sparkles className="mb-5 text-cyan-500" size={30} />

              <h3 className="text-xl font-bold text-[#0b2454]">
                GEO
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Optimisez votre présence pour les moteurs de recherche et les
                réponses générées par l’intelligence artificielle.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <Check className="mb-5 text-cyan-500" size={30} />

              <h3 className="text-xl font-bold text-[#0b2454]">
                Visibilité IA
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                Augmentez vos chances d’être recommandé lorsque vos prospects
                recherchent des solutions comme les vôtres.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b2454] px-8 py-14 text-center sm:px-12">

          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Vérifiez votre visibilité
          </p>

          <h2 className="mt-4 text-3xl font-extrabold text-white sm:text-4xl">
            Découvrez si votre entreprise est visible dans la recherche IA.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-300">
            Analysez votre visibilité, identifiez vos opportunités et
            découvrez comment améliorer votre présence dans les recherches
            alimentées par l’IA.
          </p>

          <Link
            href="/fr#audit"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-white px-7 py-4 font-bold text-[#0b2454] transition hover:bg-cyan-50"
          >
            Obtenir mon audit gratuit
            <ArrowRight size={18} />
          </Link>

        </div>
      </section>
    </main>
  );
}