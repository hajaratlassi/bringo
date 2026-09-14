"use client";

import { usePathname } from "next/navigation";
import {
  ArrowRight,
  TrendingUp,
  Users,
  Target,
} from "lucide-react";

export default function CaseStudies() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith("/fr");

  const caseStudies = [
    {
      category: isFrench ? "IA & Conseil" : "AI & Consulting",
      title: "BreachWatch",
      country: isFrench ? "France" : "France",
      image:
        "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",
      results: [
        {
          value: "+184%",
          label: isFrench ? "Trafic" : "Traffic",
          icon: TrendingUp,
        },
        {
          value: "+127%",
          label: isFrench ? "Leads" : "Leads",
          icon: Users,
        },
        {
          value: "-34%",
          label: "CPA",
          icon: Target,
        },
      ],
    },

    {
      category: "E-commerce",
      title: "Maison Karité",
      country: isFrench ? "Maroc" : "Morocco",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1200&q=80",
      results: [
        {
          value: "+211%",
          label: "ROAS",
          icon: TrendingUp,
        },
        {
          value: "+156%",
          label: isFrench ? "Ventes" : "Sales",
          icon: Users,
        },
        {
          value: "+78%",
          label: isFrench ? "Conversion" : "Conversion",
          icon: Target,
        },
      ],
    },

    {
      category: isFrench ? "Services B2B" : "B2B Services",
      title: "Tech Solutions",
      country: isFrench ? "Belgique" : "Belgium",
      image:
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80",
      results: [
        {
          value: "+91%",
          label: isFrench ? "Rendez-vous" : "Appointments",
          icon: TrendingUp,
        },
        {
          value: "+63%",
          label: isFrench ? "Taux de closing" : "Close Rate",
          icon: Users,
        },
        {
          value: "+49%",
          label: isFrench ? "Chiffre d’affaires" : "Revenue",
          icon: Target,
        },
      ],
    },
  ];

  const text = {
    label: isFrench ? "Résultats prouvés" : "Proven results",

    title1: isFrench ? "Des résultats en" : "Results across",

    title2: isFrench ? "Europe." : "Europe.",

    description: isFrench
      ? "Découvrez comment nos systèmes d’acquisition aident les entreprises à améliorer leur visibilité, générer des leads qualifiés et accélérer leur croissance."
      : "Discover how our acquisition systems help companies improve visibility, generate qualified leads and accelerate growth.",

    viewCaseStudy: isFrench
      ? "Voir l’étude de cas"
      : "View case study",

    bottomText: isFrench
      ? "De vrais projets. De vraies performances. Une croissance mesurable dans différents secteurs et marchés européens."
      : "Real projects. Real performance. Real measurable growth across different industries and European markets.",

    allCaseStudies: isFrench
      ? "Voir toutes les études de cas"
      : "See all case studies",
  };

  return (
    <section
      id="case-studies"
      className="relative overflow-hidden bg-white py-24"
    >
      {/* Background */}
      <div className="pointer-events-none absolute left-[-150px] top-20 h-96 w-96 rounded-full bg-cyan-100/40 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-14 grid gap-8 lg:grid-cols-[350px_1fr] lg:items-end">

          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
              {text.label}
            </p>

            <h2 className="text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">
              {text.title1}{" "}

              <span className="text-cyan-500">
                {text.title2}
              </span>
            </h2>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="text-lg leading-8 text-slate-600">
              {text.description}
            </p>
          </div>

        </div>

        {/* Cards */}
        <div className="grid gap-6 lg:grid-cols-3">

          {caseStudies.map((study) => (

            <article
              key={study.title}
              className="group overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_10px_40px_rgba(15,35,80,0.07)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(15,35,80,0.15)]"
            >

              {/* Image */}
              <div className="relative h-56 overflow-hidden">

                <img
                  src={study.image}
                  alt={study.title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#071b43]/90 via-[#071b43]/20 to-transparent" />

                {/* Category */}
                <div className="absolute left-5 top-5">
                  <span className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
                    {study.category}
                  </span>
                </div>

                {/* Country */}
                <div className="absolute bottom-5 left-5">

                  <span className="text-sm font-medium text-white/80">
                    {study.country}
                  </span>

                  <h3 className="mt-1 text-2xl font-bold text-white">
                    {study.title}
                  </h3>

                </div>

              </div>

              {/* Content */}
              <div className="p-6">

                <div className="grid grid-cols-3 divide-x divide-slate-200">

                  {study.results.map((result) => {

                    const Icon = result.icon;

                    return (
                      <div
                        key={result.label}
                        className="px-3 text-center first:pl-0 last:pr-0"
                      >

                        <div className="mb-2 flex justify-center text-cyan-500">
                          <Icon size={18} />
                        </div>

                        <div className="text-xl font-extrabold text-cyan-500">
                          {result.value}
                        </div>

                        <div className="mt-1 text-xs font-medium text-slate-500">
                          {result.label}
                        </div>

                      </div>
                    );

                  })}

                </div>

                {/* Link */}
                <div className="mt-7 border-t border-slate-100 pt-5">

                  <button
                    type="button"
                    className="flex items-center gap-2 text-sm font-bold text-[#0b2454] transition-colors group-hover:text-cyan-500"
                  >

                    {text.viewCaseStudy}

                    <ArrowRight
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />

                  </button>

                </div>

              </div>

            </article>

          ))}

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">

          <p className="max-w-xl text-sm leading-6 text-slate-500">
            {text.bottomText}
          </p>

          <a
            href="/case-studies"
            className="inline-flex items-center gap-3 rounded-xl border border-[#0b2454] px-6 py-3.5 font-bold text-[#0b2454] transition-all duration-300 hover:bg-[#0b2454] hover:text-white"
          >
            {text.allCaseStudies}

            <ArrowRight size={18} />
          </a>

        </div>

      </div>
    </section>
  );
}