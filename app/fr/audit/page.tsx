"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  Globe,
  Loader2,
  Search,
  ShieldCheck,
  XCircle,
} from "lucide-react";

type AuditCheck = {
  key?: string | null;
  label?: string | null;
  name?: string | null;
  title?: string | null;
  status?: string | null;
  score?: number | null;
  passed?: boolean | null;
  ok?: boolean | null;
  message?: string | null;
  description?: string | null;
};

type AuditResult = {
  score?: number | null;
  status?: string | null;
  summary?: string | null;
  website?: string | null;
  finalUrl?: string | null;
  checks?: AuditCheck[] | null;
};

const CHECK_LABELS: Record<string, string> = {
  title: "Balise Title",
  metaDescription: "Meta description",
  description: "Meta description",
  h1: "Structure H1",
  h1Count: "Structure H1",
  imagesAlt: "Images avec attribut ALT",
  imageAlt: "Images avec attribut ALT",
  alt: "Images avec attribut ALT",
  links: "Liens internes",
  internalLinks: "Liens internes",
  https: "Connexion HTTPS",
  ssl: "Connexion HTTPS",
  canonical: "URL canonique",
  robots: "Robots.txt",
  robotsTxt: "Robots.txt",
  sitemap: "Sitemap XML",
  sitemapXml: "Sitemap XML",
};

const CHECK_LABELS_BY_INDEX = [
  "Balise Title",
  "Meta description",
  "Structure H1",
  "Images avec attribut ALT",
  "Liens internes",
  "Connexion HTTPS",
  "URL canonique",
  "Robots.txt",
  "Sitemap XML",
];

function getCheckLabel(check: AuditCheck, index: number) {
  const directLabel =
    typeof check?.label === "string" ? check.label.trim() : "";

  if (directLabel) {
    return directLabel;
  }

  const name =
    typeof check?.name === "string" ? check.name.trim() : "";

  if (name) {
    return name;
  }

  const title =
    typeof check?.title === "string" ? check.title.trim() : "";

  if (title) {
    return title;
  }

  const key = typeof check?.key === "string" ? check.key.trim() : "";

  if (key && CHECK_LABELS[key]) {
    return CHECK_LABELS[key];
  }

  if (key) {
    const normalizedKey = key
      .toLowerCase()
      .replace(/[-_\s]/g, "");

    const matchingKey = Object.keys(CHECK_LABELS).find(
      (item) =>
        item.toLowerCase().replace(/[-_\s]/g, "") ===
        normalizedKey
    );

    if (matchingKey) {
      return CHECK_LABELS[matchingKey];
    }
  }

  return (
    CHECK_LABELS_BY_INDEX[index] ??
    `Analyse technique ${index + 1}`
  );
}

function isCheckPassed(check: AuditCheck) {
  if (typeof check.passed === "boolean") {
    return check.passed;
  }

  if (typeof check.ok === "boolean") {
    return check.ok;
  }

  if (typeof check.score === "number") {
    return check.score >= 70;
  }

  const status =
    typeof check.status === "string"
      ? check.status.toLowerCase()
      : "";

  return (
    status === "pass" ||
    status === "passed" ||
    status === "success" ||
    status === "good" ||
    status === "ok"
  );
}

function getCheckDescription(check: AuditCheck) {
  if (
    typeof check.description === "string" &&
    check.description.trim()
  ) {
    return check.description.trim();
  }

  if (
    typeof check.message === "string" &&
    check.message.trim()
  ) {
    return check.message.trim();
  }

  return isCheckPassed(check)
    ? "Ce point est correctement configuré."
    : "Ce point peut être amélioré.";
}

export default function AuditPage() {
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setError("");
    setResult(null);

    let url = website.trim();

    if (!url) {
      setError("Veuillez entrer une URL.");
      return;
    }

    if (!/^https?:\/\//i.test(url)) {
      url = `https://${url}`;
    }

    try {
      new URL(url);
    } catch {
      setError("Veuillez entrer une URL valide.");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: url,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Impossible de réaliser l'audit."
        );
      }

      const audit =
        data?.audit ??
        data?.result ??
        data;

      setResult({
        score:
          typeof audit?.score === "number"
            ? audit.score
            : 0,
        status:
          typeof audit?.status === "string"
            ? audit.status
            : "",
        summary:
          typeof audit?.summary === "string"
            ? audit.summary
            : "",
        website:
          audit?.website ??
          url,
        finalUrl:
          audit?.finalUrl ??
          url,
        checks: Array.isArray(audit?.checks)
          ? audit.checks
          : [],
      });
    } catch (err) {
      console.error("AUDIT_ERROR:", err);

      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue pendant l'audit."
      );
    } finally {
      setLoading(false);
    }
  }

  const score =
    typeof result?.score === "number"
      ? Math.max(0, Math.min(100, result.score))
      : 0;

  const checks = Array.isArray(result?.checks)
    ? result.checks
    : [];

  const passedChecks = checks.filter(isCheckPassed).length;
  const failedChecks = checks.length - passedChecks;

  return (
    <main className="min-h-screen bg-white text-[#17265f]">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
          <Link
            href="/fr"
            className="flex items-center gap-3"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-cyan-400 bg-white text-xl font-black text-[#17265f]">
              B
            </div>

            <div>
              <div className="text-xl font-black tracking-[0.18em] text-[#17265f]">
                BRINGO
              </div>

              <div className="text-[9px] font-bold uppercase tracking-[0.25em] text-cyan-500">
                Customer Acquisition
              </div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            <Link
              href="/fr/solutions"
              className="font-semibold text-[#17265f] transition hover:text-cyan-500"
            >
              Solutions
            </Link>

            <Link
              href="/fr/solutions/ai-search"
              className="font-semibold text-[#17265f] transition hover:text-cyan-500"
            >
              Recherche IA (GEO)
            </Link>

            <Link
              href="/fr/industries"
              className="font-semibold text-[#17265f] transition hover:text-cyan-500"
            >
              Secteurs
            </Link>

            <Link
              href="/fr/case-studies"
              className="font-semibold text-[#17265f] transition hover:text-cyan-500"
            >
              Études de cas
            </Link>

            <Link
              href="/fr/insights"
              className="font-semibold text-[#17265f] transition hover:text-cyan-500"
            >
              Insights
            </Link>

            <Link
              href="/fr/company"
              className="font-semibold text-[#17265f] transition hover:text-cyan-500"
            >
              Entreprise
            </Link>
          </nav>

          <Link
            href="/fr/audit"
            className="hidden items-center gap-2 rounded-xl bg-[#12265f] px-5 py-3 font-bold text-white shadow-lg shadow-[#12265f]/20 transition hover:-translate-y-0.5 lg:flex"
          >
            Obtenir mon audit gratuit
            <ArrowRight className="h-4 w-4" />
          </Link>

          <button
            type="button"
            className="rounded-xl border border-slate-200 p-3 lg:hidden"
            aria-label="Menu"
          >
            <span className="text-xl">☰</span>
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="relative overflow-hidden bg-[#f8fcff] px-5 py-20 lg:px-8 lg:py-28">
        <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-200/20 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-600">
            <ShieldCheck className="h-4 w-4" />
            Audit digital gratuit
          </div>

          <h1 className="mx-auto max-w-4xl text-4xl font-black leading-tight text-[#17265f] sm:text-5xl lg:text-6xl">
            Découvrez le potentiel de votre{" "}
            <span className="text-cyan-500">
              site web
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-500">
            Analysez votre visibilité, votre SEO, votre
            acquisition et vos performances techniques en
            quelques secondes.
          </p>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="mx-auto mt-10 max-w-3xl"
          >
            <div className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/50 sm:flex-row">
              <div className="flex flex-1 items-center gap-3 rounded-xl bg-slate-50 px-4">
                <Globe className="h-5 w-5 shrink-0 text-cyan-500" />

                <input
                  type="text"
                  value={website}
                  onChange={(event) =>
                    setWebsite(event.target.value)
                  }
                  placeholder="https://votre-site.com"
                  className="w-full bg-transparent py-4 text-[#17265f] outline-none placeholder:text-slate-400"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-2 rounded-xl bg-[#17265f] px-7 py-4 font-bold text-white transition hover:bg-[#223579] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-5 w-5 animate-spin" />
                    Analyse...
                  </>
                ) : (
                  <>
                    <Search className="h-5 w-5" />
                    Analyser mon site
                  </>
                )}
              </button>
            </div>
          </form>

          {error && (
            <div className="mx-auto mt-5 flex max-w-3xl items-center gap-3 rounded-xl border border-red-200 bg-red-50 px-5 py-4 text-left font-semibold text-red-600">
              <XCircle className="h-5 w-5 shrink-0" />
              {error}
            </div>
          )}
        </div>
      </section>

      {/* RESULT */}
      {result && (
        <section className="bg-white px-5 py-16 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* WEBSITE */}
            <div className="mb-8 text-center">
              <p className="text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
                Résultat de votre audit
              </p>

              <h2 className="mt-3 break-all text-2xl font-black text-[#17265f] sm:text-3xl">
                {result.finalUrl ||
                  result.website ||
                  website}
              </h2>
            </div>

            {/* SCORE */}
            <div className="overflow-hidden rounded-3xl bg-[#172b68] p-8 text-white shadow-2xl sm:p-12">
              <div className="text-center">
                <div className="relative mx-auto flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-cyan-400">
                  <div className="text-center">
                    <div className="text-5xl font-black">
                      {score}
                    </div>

                    <div className="text-sm text-white/80">
                      / 100
                    </div>
                  </div>
                </div>

                <h3 className="mt-8 text-2xl font-black text-cyan-400 sm:text-3xl">
                  {score >= 80
                    ? "Très bon potentiel"
                    : score >= 60
                    ? "Bon potentiel"
                    : "Potentiel à améliorer"}
                </h3>

                <p className="mx-auto mt-4 max-w-2xl leading-7 text-white/80">
                  {result.summary ||
                    "Votre site présente plusieurs opportunités importantes pour améliorer votre visibilité, votre conversion et votre acquisition."}
                </p>
              </div>

              {/* CHECK SUMMARY */}
              {checks.length > 0 && (
                <div className="mt-10 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <CheckCircle2 className="h-6 w-6 text-emerald-400" />

                      <div>
                        <p className="text-2xl font-black">
                          {passedChecks}
                        </p>

                        <p className="text-sm text-white/70">
                          Points corrects
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl bg-white/10 p-5">
                    <div className="flex items-center gap-3">
                      <AlertTriangle className="h-6 w-6 text-yellow-400" />

                      <div>
                        <p className="text-2xl font-black">
                          {failedChecks}
                        </p>

                        <p className="text-sm text-white/70">
                          Points à améliorer
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CHECKS */}
              {checks.length > 0 && (
                <div className="mt-10 rounded-3xl border border-cyan-400/40 bg-[#20366f] p-5 sm:p-7">
                  <h3 className="mb-5 text-xl font-black text-cyan-400">
                    Analyse détaillée
                  </h3>

                  <div className="space-y-3">
                    {checks.map((check, index) => {
                      const passed = isCheckPassed(check);

                      return (
                        <div
                          key={`${check.key ?? "check"}-${index}`}
                          className="flex items-center justify-between gap-4 rounded-xl bg-white/10 px-4 py-4"
                        >
                          <div className="flex min-w-0 items-center gap-3">
                            {passed ? (
                              <CheckCircle2 className="h-5 w-5 shrink-0 text-emerald-400" />
                            ) : (
                              <AlertTriangle className="h-5 w-5 shrink-0 text-yellow-400" />
                            )}

                            <div className="min-w-0">
                              <p className="font-semibold text-white">
                                {getCheckLabel(check, index)}
                              </p>

                              <p className="mt-1 text-xs text-white/60">
                                {getCheckDescription(check)}
                              </p>
                            </div>
                          </div>

                          <span
                            className={`shrink-0 text-sm font-bold ${
                              passed
                                ? "text-emerald-400"
                                : "text-yellow-400"
                            }`}
                          >
                            {passed
                              ? "Correct"
                              : "À améliorer"}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              {checks.length === 0 && (
                <div className="mt-10 rounded-2xl bg-white/10 p-6 text-center text-white/70">
                  Aucun détail technique n'a été retourné
                  par l'analyse.
                </div>
              )}
            </div>

            {/* CTA */}
            <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8 text-center">
              <h3 className="text-2xl font-black text-[#17265f]">
                Vous voulez aller plus loin ?
              </h3>

              <p className="mx-auto mt-3 max-w-2xl text-slate-500">
                BRINGO peut vous accompagner pour améliorer
                votre acquisition, votre visibilité et votre
                conversion.
              </p>

              <Link
                href="/fr/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#17265f] px-6 py-3.5 font-bold text-white transition hover:bg-[#223579]"
              >
                Parler à un expert
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      )}

      {/* EMPTY STATE */}
      {!result && !loading && (
        <section className="px-5 py-16 lg:px-8">
          <div className="mx-auto grid max-w-6xl gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <Search className="h-6 w-6 text-cyan-500" />
              </div>

              <h3 className="text-lg font-black text-[#17265f]">
                Visibilité
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Vérifiez les éléments qui influencent la
                visibilité de votre site.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-50">
                <Globe className="h-6 w-6 text-indigo-500" />
              </div>

              <h3 className="text-lg font-black text-[#17265f]">
                SEO
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Analysez les principaux éléments techniques
                de votre référencement.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50">
                <ShieldCheck className="h-6 w-6 text-emerald-500" />
              </div>

              <h3 className="text-lg font-black text-[#17265f]">
                Performance
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Identifiez les opportunités d'amélioration de
                votre présence digitale.
              </p>
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <footer className="border-t border-slate-100 bg-white px-5 py-10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-5 text-sm text-slate-500 md:flex-row">
          <p>
            © {new Date().getFullYear()} BRINGO. Tous droits
            réservés.
          </p>

          <div className="flex gap-5">
            <Link
              href="/fr/privacy"
              className="hover:text-[#17265f]"
            >
              Confidentialité
            </Link>

            <Link
              href="/fr/terms"
              className="hover:text-[#17265f]"
            >
              Conditions
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}