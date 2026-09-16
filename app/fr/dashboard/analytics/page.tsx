"use client";

import { useEffect, useState } from "react";
import {
  BarChart3,
  TrendingUp,
  Users,
  Globe,
  FileSearch,
  RefreshCw,
} from "lucide-react";

type AnalyticsData = {
  audits: number;
  averageScore: number;
  goodScores: number;
  needsImprovement: number;
  contacts: number;
  emails: number;
  phones: number;
};

export default function AnalyticsPage() {
  const [data, setData] = useState<AnalyticsData>({
    audits: 0,
    averageScore: 0,
    goodScores: 0,
    needsImprovement: 0,
    contacts: 0,
    emails: 0,
    phones: 0,
  });

  const [loading, setLoading] = useState(true);

  async function loadAnalytics() {
    try {
      setLoading(true);

      const [auditsRes, contactsRes] = await Promise.all([
        fetch("/api/audits", { cache: "no-store" }),
        fetch("/api/contacts", { cache: "no-store" }),
      ]);

      const auditsJson = await auditsRes.json();
      const contactsJson = await contactsRes.json();

      const audits = auditsJson.audits ?? [];
      const stats = auditsJson.stats ?? {};

      const contactsStats = contactsJson.stats ?? {};

      setData({
        audits: stats.total ?? audits.length,
        averageScore: stats.averageScore ?? 0,
        goodScores: stats.goodScores ?? 0,
        needsImprovement: stats.needsImprovement ?? 0,
        contacts: contactsStats.total ?? 0,
        emails: contactsStats.emails ?? 0,
        phones: contactsStats.phones ?? 0,
      });
    } catch (error) {
      console.error("ANALYTICS_ERROR:", error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadAnalytics();
  }, []);

  return (
    <main className="min-h-screen bg-[#f7f9fc] px-6 py-10 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-center">
          <div>
            <div className="mb-3 flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#192d68]">
                <BarChart3 className="h-6 w-6 text-[#00c7e8]" />
              </div>

              <div>
                <p className="text-sm font-bold tracking-[0.3em] text-[#00bddf]">
                  BRINGO
                </p>
                <h1 className="text-3xl font-extrabold text-[#172b68]">
                  Analytics
                </h1>
              </div>
            </div>

            <p className="text-[#64789d]">
              Analysez les performances de votre acquisition client.
            </p>
          </div>

          <button
            onClick={loadAnalytics}
            className="flex items-center justify-center gap-2 rounded-xl border border-[#dce4ef] bg-white px-5 py-3 font-bold text-[#172b68] shadow-sm transition hover:shadow-md"
          >
            <RefreshCw className="h-4 w-4" />
            Actualiser
          </button>
        </div>

        {/* KPI */}
        <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          <KpiCard
            icon={<Globe className="h-6 w-6 text-[#00bddf]" />}
            title="Audits réalisés"
            value={loading ? "..." : data.audits}
          />

          <KpiCard
            icon={<TrendingUp className="h-6 w-6 text-[#6157ff]" />}
            title="Score moyen"
            value={loading ? "..." : `${data.averageScore}/100`}
          />

          <KpiCard
            icon={<FileSearch className="h-6 w-6 text-[#00a86b]" />}
            title="Bons scores"
            value={loading ? "..." : data.goodScores}
          />

          <KpiCard
            icon={<Users className="h-6 w-6 text-[#ff9f00]" />}
            title="Contacts"
            value={loading ? "..." : data.contacts}
          />
        </section>

        {/* DETAILS */}
        <section className="mt-8 grid gap-6 lg:grid-cols-2">
          <div className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">
            <h2 className="mb-6 text-xl font-extrabold text-[#172b68]">
              Performance des audits
            </h2>

            <div className="space-y-5">
              <StatRow
                label="Audits réalisés"
                value={data.audits}
              />

              <StatRow
                label="Score moyen"
                value={`${data.averageScore}/100`}
              />

              <StatRow
                label="Sites à améliorer"
                value={data.needsImprovement}
              />

              <StatRow
                label="Bons scores"
                value={data.goodScores}
              />
            </div>
          </div>

          <div className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">
            <h2 className="mb-6 text-xl font-extrabold text-[#172b68]">
              Performance CRM
            </h2>

            <div className="space-y-5">
              <StatRow
                label="Total contacts"
                value={data.contacts}
              />

              <StatRow
                label="Contacts avec email"
                value={data.emails}
              />

              <StatRow
                label="Contacts avec téléphone"
                value={data.phones}
              />

              <StatRow
                label="Leads exploitables"
                value={Math.max(data.emails, data.phones)}
              />
            </div>
          </div>
        </section>

        {/* EMPTY STATE */}
        <section className="mt-8 rounded-3xl border border-[#e1e7f0] bg-white p-10 text-center shadow-sm">
          <BarChart3 className="mx-auto mb-4 h-12 w-12 text-[#c7d2e4]" />

          <h2 className="text-xl font-extrabold text-[#172b68]">
            Vue analytique BRINGO
          </h2>

          <p className="mt-2 text-[#64789d]">
            Les statistiques sont calculées automatiquement à partir
            des audits et des contacts enregistrés.
          </p>
        </section>
      </div>
    </main>
  );
}

function KpiCard({
  icon,
  title,
  value,
}: {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}) {
  return (
    <div className="rounded-3xl border border-[#e1e7f0] bg-white p-7 shadow-sm">
      <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f3f7ff]">
        {icon}
      </div>

      <p className="text-sm font-medium text-[#64789d]">
        {title}
      </p>

      <p className="mt-2 text-4xl font-extrabold text-[#172b68]">
        {value}
      </p>
    </div>
  );
}

function StatRow({
  label,
  value,
}: {
  label: string;
  value: string | number;
}) {
  return (
    <div className="flex items-center justify-between border-b border-[#edf1f6] pb-4 last:border-0 last:pb-0">
      <span className="text-[#64789d]">{label}</span>

      <span className="font-extrabold text-[#172b68]">
        {value}
      </span>
    </div>
  );
}