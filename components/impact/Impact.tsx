"use client";

import { usePathname } from "next/navigation";
import {
  TrendingUp,
  Users,
  Target,
  CalendarCheck,
  BadgeCheck,
  CircleDollarSign,
} from "lucide-react";

export default function Impact() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith("/fr");

  const metrics = [
    {
      value: "+184%",
      label: isFrench ? "Trafic" : "Traffic",
      icon: TrendingUp,
    },
    {
      value: "+127%",
      label: isFrench ? "Leads qualifiés" : "Qualified Leads",
      icon: Users,
    },
    {
      value: "-34%",
      label: "CPA",
      icon: Target,
    },
    {
      value: "+91%",
      label: isFrench ? "Rendez-vous" : "Appointments",
      icon: CalendarCheck,
    },
    {
      value: "+63%",
      label: isFrench ? "Taux de conversion" : "Close Rate",
      icon: BadgeCheck,
    },
    {
      value: "+49%",
      label: isFrench ? "Chiffre d’affaires" : "Revenue",
      icon: CircleDollarSign,
    },
  ];

  return (
    <section
      id="impact"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[320px_1fr] lg:items-end">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              {isFrench ? "Impact réel" : "Real impact"}
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">
              {isFrench ? "Croissance" : "Measurable"}{" "}
              <span className="text-cyan-500">
                {isFrench ? "mesurable." : "growth."}
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-8 text-slate-600">
              {isFrench
                ? "Nos systèmes d’acquisition sont conçus pour générer des résultats mesurables en matière de trafic, de leads, de rendez-vous et de chiffre d’affaires."
                : "Our acquisition systems are designed to generate measurable results across traffic, leads, appointments and revenue."}
            </p>
          </div>

        </div>

        {/* Metrics */}
        <div className="grid grid-cols-2 border-y border-slate-200 md:grid-cols-3 lg:grid-cols-6">

          {metrics.map((metric, index) => {
            const Icon = metric.icon;

            return (
              <div
                key={metric.label}
                className={`group relative flex flex-col items-center px-5 py-10 text-center transition-all duration-300 hover:bg-cyan-50/50 ${
                  index !== metrics.length - 1
                    ? "border-r border-slate-200"
                    : ""
                }`}
              >
                {/* Icon */}
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-100 bg-cyan-50 text-cyan-500 transition-all duration-300 group-hover:scale-110 group-hover:bg-cyan-500 group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Value */}
                <div className="text-3xl font-extrabold tracking-tight text-cyan-500 sm:text-4xl">
                  {metric.value}
                </div>

                {/* Label */}
                <div className="mt-2 text-sm font-semibold text-[#0b2454]">
                  {metric.label}
                </div>
              </div>
            );
          })}

        </div>

        {/* Bottom information */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 rounded-3xl border border-slate-200 bg-slate-50 px-8 py-8 md:flex-row md:items-center">

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-cyan-500">
              {isFrench
                ? "La performance qui compte"
                : "Performance that matters"}
            </p>

            <h3 className="mt-2 text-2xl font-bold text-[#0b2454]">
              {isFrench
                ? "Transformez votre acquisition en croissance mesurable."
                : "Turn your acquisition into measurable growth."}
            </h3>
          </div>

          <a
            href="#case-studies"
            className="inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-6 py-3.5 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500"
          >
            {isFrench ? "Voir les études de cas" : "See case studies"}

            <TrendingUp size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}