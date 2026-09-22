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
  AlertCircle,
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

type AuditCheck = {
  key?: string | null;
  label?: string | null;
  ok: boolean;
};

type AuditResult = {
  website: string;
  finalUrl: string;
  score: number;
  status: number;
  checks: AuditCheck[];
  summary: {
    title: string;
    description: string;
    h1Count: number;
    links: number;
    imagesCount: number;
    imagesWithoutAlt: number;
  };
};

const CHECK_LABELS: Record<string, string> = {
  title: "Balise Title",
  metaDescription: "Meta description",
  description: "Meta description",
  h1: "Structure H1",
  h1Count: "Structure H1",
  imagesAlt: "Images avec attribut ALT",
  alt: "Images avec attribut ALT",
  links: "Liens internes",
  https: "Connexion HTTPS",
  canonical: "URL canonique",
  robots: "Robots.txt",
  sitemap: "Sitemap XML",
};

function getCheckLabel(check: AuditCheck, index: number) {
  const rawKey =
    check && typeof check.key === "string"
      ? check.key
      : "";

  const key = String(rawKey).trim();

  const rawLabel =
    check && typeof check.label === "string"
      ? check.label
      : "";

  const label = String(rawLabel).trim();

  if (label.length > 0) {
    return label;
  }

  if (key.length > 0 && CHECK_LABELS[key]) {
    return CHECK_LABELS[key];
  }

  if (key.length > 0) {
    const normalizedKey = String(key)
      .trim()
      .toLowerCase()
      .replace(/[-_\s]/g, "");

    const matchingKey = Object.keys(CHECK_LABELS).find((item) => {
      const safeItem = String(item);

      return (
        safeItem
          .trim()
          .toLowerCase()
          .replace(/[-_\s]/g, "") === normalizedKey
      );
    });

    if (matchingKey) {
      return CHECK_LABELS[matchingKey];
    }
  }

  return `Analyse technique ${index + 1}`;
}

export default function FrenchAuditPage() {
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<AuditResult | null>(null);
  const [error, setError] = useState("");

  const handleAudit = async () => {
    if (!website.trim() || loading) return;

    setLoading(true);
    setResult(null);
    setError("");

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: website.trim(),
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "Impossible d'analyser ce site."
        );
      }

      const safeResult: AuditResult = {
        website:
          typeof data.website === "string"
            ? data.website
            : website.trim(),

        finalUrl:
          typeof data.finalUrl === "string"
            ? data.finalUrl
            : "",

        score:
          typeof data.score === "number"
            ? data.score
            : Number(data.score) || 0,

        status:
          typeof data.status === "number"
            ? data.status
            : Number(data.status) || 0,

        checks: Array.isArray(data.checks)
          ? data.checks.map((check: unknown) => {
              const item =
                check &&
                typeof check === "object"
                  ? (check as Record<string, unknown>)
                  : {};

              return {
                key:
                  typeof item.key === "string"
                    ? item.key
                    : null,

                label:
                  typeof item.label === "string"
                    ? item.label
                    : null,

                ok:
                  item.ok === true,
              };
            })
          : [],

        summary: {
          title:
            typeof data.summary?.title === "string"
              ? data.summary.title
              : "",

          description:
            typeof data.summary?.description === "string"
              ? data.summary.description
              : "",

          h1Count:
            Number(data.summary?.h1Count) || 0,

          links:
            Number(data.summary?.links) || 0,

          imagesCount:
            Number(data.summary?.imagesCount) || 0,

          imagesWithoutAlt:
            Number(data.summary?.imagesWithoutAlt) || 0,
        },
      };

      setResult(safeResult);
    } catch (err) {
      console.error("AUDIT_FRONTEND_ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue pendant l'analyse."
      );
    } finally {
      setLoading(false);
    }
  };

  const getScoreLabel = () => {
    if (!result) return "";

    if (result.score >= 80) {
      return "Fort potentiel";
    }

    if (result.score >= 60) {
      return "Bon potentiel";
    }

    if (result.score >= 40) {
      return "Potentiel à améliorer";
    }

    return "Opportunité de croissance";
  };

  const getScoreMessage = () => {
    if (!result) return "";

    if (result.score >= 80) {
      return "Votre site possède une bonne base technique. Des optimisations ciblées peuvent encore améliorer votre acquisition.";
    }

    if (result.score >= 60) {
      return "Votre site possède une base intéressante, mais plusieurs opportunités peuvent améliorer votre visibilité et votre acquisition.";
    }

    return "Votre site présente plusieurs opportunités importantes pour améliorer votre visibilité, votre conversion et votre acquisition.";
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
                votre conversion et vos opportunités d&apos;automatisation.
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

            {/* RIGHT */}
            <div
              id="audit-form"
              className="rounded-3xl border border-cyan-100 bg-white p-5 shadow-2xl sm:p-7"
            >

              <div className="rounded-2xl bg-blue-950 p-6 sm:p-8">

                <div className="flex items-center gap-3">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/10">
                    <Sparkles
                      className="text-cyan-400"
                      size={25}
                    />
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
                  visibilité et de votre potentiel d&apos;acquisition.
                </p>

                <div className="mt-6">

                  <label
                    htmlFor="website"
                    className="mb-2 block text-sm font-semibold text-white"
                  >
                    Votre site web
                  </label>

                  <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white px-4 py-3">

                    <Search
                      size={19}
                      className="shrink-0 text-slate-400"
                    />

                    <input
                      id="website"
                      type="url"
                      value={website}
                      onChange={(e) =>
                        setWebsite(e.target.value)
                      }
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
                  type="button"
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

                {/* ERROR */}
                {error && (
                  <div className="mt-5 flex gap-3 rounded-xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-200">

                    <AlertCircle
                      size={19}
                      className="shrink-0"
                    />

                    <p>{error}</p>

                  </div>
                )}

                {/* RESULT */}
                {result && !loading && (
                  <div className="mt-6 rounded-2xl border border-cyan-400/20 bg-white/5 p-6">

                    <div className="text-center">

                      <p className="text-sm font-medium text-slate-300">
                        Analyse terminée pour :
                      </p>

                      <p className="mt-1 truncate text-sm font-bold text-white">
                        {result.website}
                      </p>

                      <div className="mx-auto mt-5 flex h-32 w-32 items-center justify-center rounded-full border-8 border-cyan-400">

                        <div>

                          <div className="text-4xl font-extrabold text-white">
                            {result.score}
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
                        {getScoreMessage()}
                      </p>

                    </div>

                    {/* CHECKS */}
                    <div className="mt-6 space-y-2">

                      {result.checks.map((check, index) => (

                        <div
                          key={`${check.key ?? "check"}-${index}`}
                          className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2"
                        >

                          <span className="text-sm text-slate-300">
                            {getCheckLabel(check, index)}
                          </span>

                          {check.ok ? (
                            <div className="flex items-center gap-2">

                              <Check
                                size={17}
                                className="text-cyan-400"
                              />

                              <span className="text-xs font-bold text-cyan-400">
                                OK
                              </span>

                            </div>
                          ) : (
                            <span className="text-xs font-bold text-amber-400">
                              À améliorer
                            </span>
                          )}

                        </div>

                      ))}

                    </div>

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
              <span className="text-cyan-500">
                système d&apos;acquisition.
              </span>
            </h2>

            <p className="mt-5 text-base leading-7 text-slate-600">
              Notre audit identifie les principales opportunités permettant
              d&apos;améliorer votre visibilité, votre acquisition et votre
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

                    <Icon
                      size={23}
                      className="text-cyan-500"
                    />

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