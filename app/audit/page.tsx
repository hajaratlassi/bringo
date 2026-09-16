"use client";

import { FormEvent, useState } from "react";
import {
  Search,
  CheckCircle2,
  XCircle,
  ArrowRight,
  Loader2,
  ShieldCheck,
} from "lucide-react";

type AuditCheck = {
  name: string;
  passed: boolean;
  details?: unknown;
  message?: unknown;
};

type AuditResult = {
  website: string;
  finalUrl?: string;
  score: number;
  status?: string;
  summary?: unknown;
  checks: AuditCheck[];
};

export default function AuditPage() {
  const [website, setWebsite] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [result, setResult] = useState<AuditResult | null>(null);

  const handleAudit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = website.trim();

    if (!value) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          website: value,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          typeof data?.error === "string"
            ? data.error
            : "Unable to analyze this website."
        );
      }

      setResult(data);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred during the audit."
      );
    } finally {
      setLoading(false);
    }
  };

  const getScoreLabel = (score: number) => {
    if (score >= 80) return "Strong Potential";
    if (score >= 60) return "Good Potential";
    if (score >= 40) return "Growth Opportunity";
    return "Needs Improvement";
  };

  const formatValue = (value: unknown): string => {
    if (value === null || value === undefined) return "";

    if (typeof value === "string") return value;

    if (
      typeof value === "number" ||
      typeof value === "boolean" ||
      typeof value === "bigint"
    ) {
      return String(value);
    }

    try {
      return JSON.stringify(value, null, 2);
    } catch {
      return String(value);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <section className="relative overflow-hidden bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-bold text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                FREE WEBSITE AUDIT
              </div>

              <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-[#0b2454] sm:text-6xl lg:text-7xl">
                Discover what is
                <span className="block text-cyan-500">
                  limiting your growth.
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-lg leading-8 text-slate-600">
                Get a free analysis of your website and discover opportunities
                to improve visibility, acquisition, conversion and growth.
              </p>

              <div className="mt-10">
                <a
                  href="#audit-form"
                  className="group inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-7 py-4 text-sm font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-cyan-500"
                >
                  Start my free audit
                  <ArrowRight
                    size={18}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </a>
              </div>
            </div>

            <div>
              <div className="rounded-3xl border border-cyan-100 bg-white p-6 shadow-xl shadow-cyan-100/50">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-500">
                    <Search size={28} />
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-[#0b2454]">
                      Your Visibility Score
                    </h2>

                    <p className="text-sm text-slate-500">
                      {result ? "Real audit result" : "Enter your website below"}
                    </p>
                  </div>
                </div>

                <div className="flex justify-center py-8">
                  <div className="flex h-56 w-56 items-center justify-center rounded-full border-[18px] border-cyan-400 bg-white shadow-inner">
                    <div className="text-center">
                      <div className="text-6xl font-extrabold text-[#0b2454]">
                        {result ? result.score : "--"}
                      </div>

                      <div className="text-sm font-semibold text-slate-400">
                        /100
                      </div>

                      <div className="mt-2 font-bold text-cyan-500">
                        {result
                          ? getScoreLabel(result.score)
                          : "Ready to analyze"}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="rounded-2xl bg-slate-50 p-5">
                  <p className="text-sm leading-6 text-slate-600">
                    {result
                      ? "Your website has been analyzed. Review the results below."
                      : "Enter your website below to receive a real technical and SEO analysis."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="audit-form" className="bg-slate-50 py-24">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="mb-4 text-sm font-bold tracking-[0.25em] text-cyan-500">
              START YOUR AUDIT
            </div>

            <h2 className="text-4xl font-extrabold text-[#0b2454] sm:text-5xl">
              Analyze your website.
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-600">
              Enter your website below to discover the main opportunities
              affecting your online acquisition.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-12">
            <form onSubmit={handleAudit} className="space-y-8">
              <div>
                <label
                  htmlFor="website"
                  className="mb-3 block text-sm font-bold text-[#0b2454]"
                >
                  Your website
                </label>

                <div className="flex flex-col gap-3 sm:flex-row">
                  <input
                    id="website"
                    type="url"
                    value={website}
                    onChange={(e) => setWebsite(e.target.value)}
                    placeholder="https://yourcompany.com"
                    required
                    className="h-14 flex-1 rounded-xl border border-slate-300 px-5 text-base text-[#0b2454] outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  />

                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#0b2454] px-7 text-sm font-bold text-white transition-all hover:-translate-y-1 hover:bg-cyan-500 disabled:cursor-not-allowed disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        Analyzing...
                        <Loader2 size={18} className="animate-spin" />
                      </>
                    ) : (
                      <>
                        Analyze my website
                        <ArrowRight size={18} />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </form>

            {error && (
              <div className="mt-6 rounded-xl border border-red-200 bg-red-50 p-5">
                <p className="font-semibold text-red-700">Audit error</p>

                <p className="mt-1 text-sm text-red-600">{error}</p>
              </div>
            )}

            {result && (
              <div className="mt-10 border-t border-slate-100 pt-10">
                <div className="mb-8 flex items-center gap-3">
                  <ShieldCheck size={25} className="text-cyan-500" />

                  <div>
                    <h3 className="text-2xl font-extrabold text-[#0b2454]">
                      Audit completed
                    </h3>

                    <p className="mt-1 break-all text-sm text-slate-500">
                      {result.finalUrl || result.website}
                    </p>
                  </div>
                </div>

                <div className="mb-8 rounded-2xl bg-[#0b2454] p-8 text-center">
                  <p className="text-sm font-bold uppercase tracking-widest text-cyan-400">
                    Visibility Score
                  </p>

                  <div className="mt-3 text-7xl font-extrabold text-white">
                    {result.score}
                    <span className="text-2xl text-slate-400">/100</span>
                  </div>

                  <p className="mt-2 font-bold text-cyan-400">
                    {getScoreLabel(result.score)}
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  {result.checks?.map((check, index) => {
                    const detail = formatValue(
                      check.details ?? check.message
                    );

                    return (
                      <div
                        key={`${check.name}-${index}`}
                        className="rounded-2xl border border-slate-200 bg-white p-5"
                      >
                        <div className="flex items-start gap-4">
                          {check.passed ? (
                            <CheckCircle2
                              size={22}
                              className="mt-0.5 shrink-0 text-green-500"
                            />
                          ) : (
                            <XCircle
                              size={22}
                              className="mt-0.5 shrink-0 text-red-500"
                            />
                          )}

                          <div className="min-w-0">
                            <h4 className="font-bold text-[#0b2454]">
                              {check.name}
                            </h4>

                            {detail && (
                              <pre className="mt-2 whitespace-pre-wrap break-words font-sans text-sm leading-6 text-slate-600">
                                {detail}
                              </pre>
                            )}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}