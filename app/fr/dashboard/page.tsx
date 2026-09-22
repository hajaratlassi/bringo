"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  Globe,
  RefreshCw,
  TrendingUp,
  AlertTriangle,
  CheckCircle2,
  Clock,
  ArrowLeft,
} from "lucide-react";
import Link from "next/link";

type Audit = {
  id: string;
  website: string;
  finalUrl: string | null;
  score: number;
  status: string;
  summary: string | null;
  createdAt: string;
};

type Stats = {
  total: number;
  averageScore: number;
  good: number;
  needsImprovement: number;
  critical: number;
};

export default function DashboardPage() {
  const [audits, setAudits] = useState<Audit[]>([]);

  const [stats, setStats] = useState<Stats>({
    total: 0,
    averageScore: 0,
    good: 0,
    needsImprovement: 0,
    critical: 0,
  });

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadAudits() {
    try {
      setLoading(true);
      setError("");

      const response = await fetch("/api/audits", {
        cache: "no-store",
      });

      if (!response.ok) {
        throw new Error("Erreur lors du chargement des audits");
      }

      const data = await response.json();

      const auditList: Audit[] = Array.isArray(data.audits)
        ? data.audits
        : [];

      const apiStats = data.stats ?? {};

      /*
       * Sécurisation des statistiques.
       * On accepte plusieurs noms possibles provenant de l'API
       * afin d'éviter undefined + undefined = NaN.
       */

      const total = Number(
        apiStats.total ?? auditList.length
      );

      const averageScore = Number(
        apiStats.averageScore ?? 0
      );

      const good = Number(
        apiStats.good ??
          apiStats.goodScores ??
          auditList.filter((audit) => Number(audit.score) >= 70).length
      );

      const needsImprovement = Number(
        apiStats.needsImprovement ??
          auditList.filter(
            (audit) =>
              Number(audit.score) >= 40 &&
              Number(audit.score) < 70
          ).length
      );

      const critical = Number(
        apiStats.critical ??
          auditList.filter(
            (audit) => Number(audit.score) < 40
          ).length
      );

      setAudits(auditList);

      setStats({
        total: Number.isFinite(total) ? total : auditList.length,

        averageScore: Number.isFinite(averageScore)
          ? averageScore
          : 0,

        good: Number.isFinite(good) ? good : 0,

        needsImprovement: Number.isFinite(needsImprovement)
          ? needsImprovement
          : 0,

        critical: Number.isFinite(critical)
          ? critical
          : 0,
      });
    } catch (err) {
      console.error("DASHBOARD_AUDITS_ERROR:", err);

      setError("Impossible de charger les audits.");

      setAudits([]);

      setStats({
        total: 0,
        averageScore: 0,
        good: 0,
        needsImprovement: 0,
        critical: 0,
      });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAudits();
  }, []);

  function getScoreColor(score: number) {
    if (score >= 70) return "text-emerald-600";
    if (score >= 40) return "text-amber-500";
    return "text-red-500";
  }

  function getScoreBackground(score: number) {
    if (score >= 70) return "bg-emerald-50";
    if (score >= 40) return "bg-amber-50";
    return "bg-red-50";
  }

  function getStatus(score: number) {
    if (score >= 70) {
      return {
        label: "Bon",
        icon: CheckCircle2,
        className: "text-emerald-600 bg-emerald-50",
      };
    }

    if (score >= 40) {
      return {
        label: "À améliorer",
        icon: AlertTriangle,
        className: "text-amber-600 bg-amber-50",
      };
    }

    return {
      label: "Critique",
      icon: AlertTriangle,
      className: "text-red-600 bg-red-50",
    };
  }

  const improvementCount =
    Number.isFinite(stats.needsImprovement)
      ? stats.needsImprovement
      : 0;

  const criticalCount =
    Number.isFinite(stats.critical)
      ? stats.critical
      : 0;

  const totalNeedsImprovement =
    improvementCount + criticalCount;

  return (
    <main className="min-h-screen bg-slate-50">
      {/* HEADER */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#17265f]">
                <BarChart3 className="h-5 w-5 text-cyan-400" />
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-500">
                  BRINGO
                </p>

                <h1 className="text-xl font-black text-[#17265f]">
                  Audit Dashboard
                </h1>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadAudits}
              disabled={loading}
              className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600 disabled:opacity-50"
            >
              <RefreshCw
                className={`h-4 w-4 ${
                  loading ? "animate-spin" : ""
                }`}
              />

              Actualiser
            </button>

            <Link
              href="/fr/audit"
              className="flex items-center gap-2 rounded-xl bg-[#17265f] px-4 py-2.5 text-sm font-bold text-white transition hover:bg-[#223574]"
            >
              <ArrowLeft className="h-4 w-4" />
              Nouvel audit
            </Link>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-7xl px-6 py-10">
        {/* INTRO */}
        <div className="mb-8">
          <p className="mb-2 text-sm font-bold uppercase tracking-[0.18em] text-cyan-500">
            Vue globale
          </p>

          <h2 className="text-3xl font-black tracking-tight text-[#17265f]">
            Performances des audits
          </h2>

          <p className="mt-2 text-slate-500">
            Suivez les sites analysés et leur potentiel de croissance.
          </p>
        </div>

        {/* ERROR */}
        {error && (
          <div className="mb-6 rounded-2xl border border-red-200 bg-red-50 p-4 text-sm font-semibold text-red-600">
            {error}
          </div>
        )}

        {/* STATS */}
        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {/* AUDITS */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex items-center justify-between">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                <Globe className="h-5 w-5 text-cyan-500" />
              </div>
            </div>

            <p className="text-sm font-medium text-slate-500">
              Audits réalisés
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {loading ? "..." : stats.total}
            </p>
          </div>

          {/* SCORE */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-50">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
            </div>

            <p className="text-sm font-medium text-slate-500">
              Score moyen
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {loading ? "..." : stats.averageScore}

              <span className="text-lg text-slate-400">
                /100
              </span>
            </p>
          </div>

          {/* GOOD */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50">
              <CheckCircle2 className="h-5 w-5 text-emerald-600" />
            </div>

            <p className="text-sm font-medium text-slate-500">
              Bons scores
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {loading ? "..." : stats.good}
            </p>
          </div>

          {/* NEEDS IMPROVEMENT */}
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
            </div>

            <p className="text-sm font-medium text-slate-500">
              À améliorer
            </p>

            <p className="mt-1 text-3xl font-black text-[#17265f]">
              {loading ? "..." : totalNeedsImprovement}
            </p>
          </div>
        </div>

        {/* AUDITS TABLE */}
        <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
          <div className="border-b border-slate-200 px-6 py-5">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-lg font-black text-[#17265f]">
                  Derniers audits
                </h3>

                <p className="mt-1 text-sm text-slate-500">
                  Les derniers sites analysés par BRINGO.
                </p>
              </div>

              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">
                {audits.length} résultat
                {audits.length > 1 ? "s" : ""}
              </span>
            </div>
          </div>

          {loading ? (
            <div className="flex min-h-[250px] items-center justify-center">
              <RefreshCw className="h-7 w-7 animate-spin text-cyan-500" />
            </div>
          ) : audits.length === 0 ? (
            <div className="flex min-h-[250px] flex-col items-center justify-center px-6 text-center">
              <Globe className="mb-4 h-10 w-10 text-slate-300" />

              <h4 className="font-bold text-[#17265f]">
                Aucun audit pour le moment
              </h4>

              <p className="mt-1 text-sm text-slate-500">
                Lance ton premier audit pour voir les données ici.
              </p>

              <Link
                href="/fr/audit"
                className="mt-5 rounded-xl bg-cyan-500 px-5 py-3 text-sm font-bold text-white hover:bg-cyan-600"
              >
                Lancer un audit
              </Link>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px]">
                <thead>
                  <tr className="border-b border-slate-100 bg-slate-50 text-left">
                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Site
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Score
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Statut
                    </th>

                    <th className="px-6 py-4 text-xs font-bold uppercase tracking-wider text-slate-500">
                      Date
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {audits.map((audit) => {
                    const score = Number(audit.score) || 0;
                    const status = getStatus(score);
                    const StatusIcon = status.icon;

                    return (
                      <tr
                        key={audit.id}
                        className="border-b border-slate-100 last:border-0 hover:bg-slate-50"
                      >
                        <td className="px-6 py-5">
                          <div className="flex items-center gap-3">
                            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-slate-100">
                              <Globe className="h-4 w-4 text-slate-500" />
                            </div>

                            <div>
                              <p className="font-bold text-[#17265f]">
                                {audit.website}
                              </p>

                              {audit.finalUrl &&
                                audit.finalUrl !== audit.website && (
                                  <p className="mt-1 max-w-[350px] truncate text-xs text-slate-400">
                                    {audit.finalUrl}
                                  </p>
                                )}
                            </div>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <div
                            className={`inline-flex items-center rounded-xl px-3 py-2 ${getScoreBackground(
                              score
                            )}`}
                          >
                            <span
                              className={`text-xl font-black ${getScoreColor(
                                score
                              )}`}
                            >
                              {score}
                            </span>

                            <span className="ml-1 text-xs font-bold text-slate-400">
                              /100
                            </span>
                          </div>
                        </td>

                        <td className="px-6 py-5">
                          <span
                            className={`inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-bold ${status.className}`}
                          >
                            <StatusIcon className="h-3.5 w-3.5" />
                            {status.label}
                          </span>
                        </td>

                        <td className="px-6 py-5">
                          <div className="flex items-center gap-2 text-sm text-slate-500">
                            <Clock className="h-4 w-4" />

                            {new Date(
                              audit.createdAt
                            ).toLocaleDateString("fr-FR", {
                              day: "2-digit",
                              month: "2-digit",
                              year: "numeric",
                            })}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}