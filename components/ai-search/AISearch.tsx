import { Check, Search, Sparkles } from "lucide-react";

export default function AISearch() {
  return (
    <section
      id="ai-search"
      className="border-b border-slate-100 bg-slate-50/50 py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:grid-cols-2">

          {/* GAUCHE */}
          <div>

            <p className="mb-4 text-sm font-bold uppercase tracking-widest text-cyan-500">
              AI Search Optimization
            </p>

            <h2 className="text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">

              Be visible in

              <br />

              <span className="text-cyan-500">
                AI search results
              </span>

              <br />

              and recommendations.

            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
              We optimize your presence across Google, ChatGPT,
              AI Overviews and recommendation engines so your brand
              shows up where decisions are made.
            </p>

            <button
              className="mt-8 rounded-lg bg-blue-950 px-6 py-4 text-sm font-bold text-white hover:bg-blue-900"
            >
              Discover AI Search Optimization →
            </button>

          </div>

          {/* DROITE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">

            {/* BARRE DE RECHERCHE */}
            <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 py-3">

              <Search
                size={18}
                className="text-slate-400"
              />

              <span className="text-sm text-slate-600">
                Quelle est la meilleure agence acquisition en France ?
              </span>

            </div>

            {/* ONGLETS */}
            <div className="mt-4 flex gap-6 border-b border-slate-100">

              <span className="border-b-2 border-cyan-500 py-3 text-xs font-semibold text-cyan-500">
                AI Overview
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
                    AI-powered acquisition agency
                  </p>

                </div>

              </div>

              <p className="mt-4 text-sm leading-6 text-slate-600">
                Bringo helps companies get discovered, generate
                qualified demand and grow through AI search,
                SEO, GEO and paid acquisition.
              </p>

              {/* CHECKS */}
              <div className="mt-5 space-y-3">

                <div className="flex items-center gap-2 text-sm text-slate-600">

                  <Check
                    size={17}
                    className="text-cyan-500"
                  />

                  AI-powered visibility

                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">

                  <Check
                    size={17}
                    className="text-cyan-500"
                  />

                  Proven results across Europe

                </div>

                <div className="flex items-center gap-2 text-sm text-slate-600">

                  <Check
                    size={17}
                    className="text-cyan-500"
                  />

                  Transparency & performance

                </div>

              </div>

            </div>

            {/* FAUX RESULTATS */}
            <div className="mt-4 space-y-3">

              <div className="h-14 rounded-xl bg-slate-50" />

              <div className="h-14 rounded-xl bg-slate-50" />

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}