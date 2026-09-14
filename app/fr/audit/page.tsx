"use client";

import { useState } from "react";
import {
  ArrowRight,
  Check,
  Search,
  Sparkles,
  TrendingUp,
  Target,
  Bot,
  Globe,
  MousePointerClick,
} from "lucide-react";

const auditItems = [
  {
    icon: Search,
    title: "SEO & visibilité technique",
    description:
      "Analyse de votre visibilité organique, de votre structure technique et de vos opportunités SEO.",
  },
  {
    icon: Sparkles,
    title: "Visibilité dans la recherche IA",
    description:
      "Évaluez votre présence dans ChatGPT, Google AI et les nouveaux moteurs de recherche IA.",
  },
  {
    icon: Globe,
    title: "Préparation GEO",
    description:
      "Découvrez si votre entreprise est correctement optimisée pour les moteurs génératifs.",
  },
  {
    icon: Target,
    title: "Visibilité locale",
    description:
      "Analysez votre présence locale et les opportunités pour attirer davantage de clients.",
  },
  {
    icon: MousePointerClick,
    title: "Conversion",
    description:
      "Identifiez les points qui empêchent vos visiteurs de devenir des prospects et des clients.",
  },
  {
    icon: TrendingUp,
    title: "Acquisition payante",
    description:
      "Analysez vos opportunités sur Google Ads, Meta Ads et les autres canaux d'acquisition.",
  },
  {
    icon: Bot,
    title: "Automatisation",
    description:
      "Découvrez comment l'IA et l'automatisation peuvent accélérer votre acquisition client.",
  },
];

export default function FrenchAuditPage() {
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [score, setScore] = useState<number | null>(null);

  const handleAudit = () => {
    if (!website.trim()) return;

    setLoading(true);
    setScore(null);

    setTimeout(() => {
      const generatedScore = 60 + Math.floor(Math.random() * 31);
      setScore(generatedScore);
      setLoading(false);
    }, 1800);
  };

  const getScoreLabel = () => {
    if (!score) return "";

    if (score >= 80) {
      return "Fort potentiel";
    }

    if (score >= 70) {
      return "Bon potentiel";
    }

    return "Opportunité de croissance";
  };

  return (
    <main className="min-h-screen bg-white">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-b from-white to-cyan-50/30 py-20 lg:py-28">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-bold uppercase tracking-wider text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                Audit IA & Acquisition
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-[1.05] tracking-tight text-blue-950 sm:text-6xl lg:text-7xl">
                Découvrez vos{" "}
                <span className="text-cyan-500">
                  opportunités de croissance.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Analysez votre acquisition client, votre visibilité SEO et IA,
                votre conversion et vos opportunités d'automatisation.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#audit-form"
                  className="inline-flex items-center gap-3 rounded-lg bg-blue-950 px-7 py-4 text-sm font-bold text-white shadow-lg transition hover:bg-blue-900"
                >
                  Commencez votre audit gratuit
                  <ArrowRight size={18} />
                </a>

                <a
                  href="#analyse"
                  className="inline-flex items-center gap-3 rounded-lg border border-slate-300 bg-white px-7 py-4 text-sm font-bold text-blue-950 transition hover:border-cyan-400"
                >
                  Voir ce qui est analysé
                  <ArrowRight size={18} />
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-500">
                <div className="flex items-center gap-2">
                  <Check size={17} className="text-cyan-500" />
                  Gratuit
                </div>

                <div className="flex items-center gap-2">
                  <Check size={17} className="text-cyan-500" />
                  Analyse rapide
                </div>

                <div className="flex items-center gap-2">
                  <Check size={17} className="text-cyan-500" />
                  Sans engagement
                </div>
              </div>
            </div>

            {/* RIGHT - AUDIT CARD */}
            <div
              id="audit-form"
              className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-2xl sm:p-7"
            >
              <div className="rounded-2xl bg-blue-950 p-6 sm:p-8">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Sparkles className="text-cyan-400" size={25} />
                  </div>

                  <div>
                    <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                      Bringo Audit
                    </p>

                    <h2 className="mt-1 text-2xl font-extrabold text-white">
                      Analysez votre site
                    </h2>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-slate-300">
                  Entrez votre site pour commencer une analyse de votre
                  visibilité et de votre potentiel d'acquisition.
                </p>

                <div className="mt-6">
                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Votre site web
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white px-4 py-3">
                    <Search size={19} className="text-slate-400" />

                    <input
                      id="website"
                      type="text"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleAudit();
                        }
                      }}
                      placeholder="https://votreentreprise.com"
                      className="w-full bg-transparent text-sm text-slate-800 outline-none placeholder:text-slate-400"
                    />
                  </div>
                </div>

                <button
                  onClick={handleAudit}
                  disabled={loading || !website.trim()}
                  className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-500 px-6 py-4 text-sm font-bold text-white transition hover:bg-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                      Analyse en cours...
                    </>
                  ) : (
                    <>
                      Analyser mon site
                      <ArrowRight size={18} />
                    </>
                  )}
                </button>

                {/* SCORE */}
                {score !== null && !loading && (
                  <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-white/5 p-6 text-center">
                    <p className="text-sm font-medium text-slate-300">
                      Analyse terminée pour :
                    </p>

                    <p className="mt-1 truncate text-sm font-bold text-white">
                      {website}
                    </p>

                    <div className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-400">
                      <div>
                        <div className="text-4xl font-extrabold text-white">
                          {score}
                        </div>

                        <div className="text-xs text-slate-300">
                          / 100
                        </div>
                      </div>
                    </div>

                    <p className="mt-4 text-lg font-bold text-cyan-400">
                      {getScoreLabel()}
                    </p>

                    <p className="mt-2 text-sm leading-6 text-slate-300">
                      Votre site présente plusieurs opportunités pour améliorer
                      votre acquisition et votre visibilité.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ANALYSE */}
      <section
        id="analyse"
        className="border-b border-slate-100 bg-white py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1400px] px-6 lg:px-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-widest text-cyan-500">
              Ce que nous analysons
            </p>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight text-blue-950 sm:text-5xl">
              Une analyse complète de votre{" "}
              <span className="text-cyan-500">système d'acquisition.</span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Notre audit identifie les principales opportunités permettant
              d'améliorer votre visibilité, votre acquisition et votre
              conversion.
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {auditItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Icon size={23} className="text-cyan-500" />
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-blue-950">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-blue-950 py-20 lg:py-24">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
            Prêt à améliorer votre acquisition ?
          </p>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-white sm:text-5xl">
            Découvrez ce qui bloque votre croissance.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300">
            Lancez votre audit gratuit et identifiez les opportunités les plus
            importantes pour votre entreprise.
          </p>

          <a
            href="#audit-form"
            className="mt-8 inline-flex items-center gap-3 rounded-lg bg-cyan-500 px-7 py-4 text-sm font-bold text-white transition hover:bg-cyan-400"
          >
            Commencer mon audit gratuit
            <ArrowRight size={18} />
          </a>
        </div>
      </section>
    </main>
  );
}