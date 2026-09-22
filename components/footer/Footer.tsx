"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  const pathname = usePathname();

  const isFrench = pathname.startsWith("/fr");
  const prefix = isFrench ? "/fr" : "";

  const text = isFrench
    ? {
        description:
          "Des systèmes d’acquisition client propulsés par l’IA, conçus pour aider les entreprises à être découvertes, générer une demande qualifiée et se développer.",
        solutions: "Solutions",
        acquisition: "Acquisition",
        aiSearch: "Recherche IA (GEO)",
        conversion: "Conversion",
        automation: "Automatisation",
        company: "Entreprise",
        caseStudies: "Études de cas",
        insights: "Insights",
        about: "À propos de Bringo",
        contact: "Contact",
        grow: "Développons votre activité",
        growDescription:
          "Découvrez comment Bringo peut améliorer votre acquisition client.",
        audit: "Obtenir mon audit gratuit",
        privacy: "Confidentialité",
        terms: "Conditions d’utilisation",
        rights: "Tous droits réservés.",
      }
    : {
        description:
          "AI-powered customer acquisition systems designed to help companies get discovered, generate qualified demand and grow.",
        solutions: "Solutions",
        acquisition: "Acquisition",
        aiSearch: "AI Search (GEO)",
        conversion: "Conversion",
        automation: "Automation",
        company: "Company",
        caseStudies: "Case Studies",
        insights: "Insights",
        about: "About Bringo",
        contact: "Contact",
        grow: "Let's grow",
        growDescription:
          "Discover how Bringo can improve your customer acquisition.",
        audit: "Get a free audit",
        privacy: "Privacy",
        terms: "Terms",
        rights: "All rights reserved.",
      };

  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        {/* MAIN FOOTER */}
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* BRAND */}
          <div className="lg:col-span-1">
            <Link
              href={isFrench ? "/fr" : "/"}
              className="flex items-center"
            >
              <img
                src="/images/bringo-logo.png"
                alt="Bringo"
                className="h-16 w-auto object-contain"
              />
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-7 text-slate-500">
              {text.description}
            </p>
          </div>

          {/* SOLUTIONS */}
          <div>
            <h3 className="font-bold text-[#0b2454]">{text.solutions}</h3>

            <div className="mt-5 space-y-3">
              <Link
                href={`${prefix}/solutions/acquisition`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.acquisition}
              </Link>

              <Link
                href={`${prefix}/solutions/ai-search`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.aiSearch}
              </Link>

              <Link
                href={`${prefix}/solutions/conversion`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.conversion}
              </Link>

              <Link
                href={`${prefix}/solutions/automation`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.automation}
              </Link>
            </div>
          </div>

          {/* COMPANY */}
          <div>
            <h3 className="font-bold text-[#0b2454]">{text.company}</h3>

            <div className="mt-5 space-y-3">
              <Link
                href={`${prefix}/case-studies`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.caseStudies}
              </Link>

              <Link
                href={`${prefix}/insights`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.insights}
              </Link>

              <Link
                href={`${prefix}/company`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.about}
              </Link>

              <Link
                href={`${prefix}/contact`}
                className="block text-sm text-slate-600 transition hover:text-cyan-500"
              >
                {text.contact}
              </Link>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h3 className="font-bold text-[#0b2454]">{text.grow}</h3>

            <p className="mt-5 text-sm leading-7 text-slate-500">
              {text.growDescription}
            </p>

            <Link
              href={isFrench ? "/fr#audit" : "/#audit"}
              className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#0b2454] px-5 py-3 text-sm font-bold !text-white transition hover:bg-cyan-500"
            >
              {text.audit}
              <ArrowUpRight size={17} />
            </Link>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col gap-4 border-t border-slate-200 pt-7 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Bringo. {text.rights}
          </p>

          <div className="flex gap-6">
            <Link
              href={`${prefix}/privacy`}
              className="transition hover:text-cyan-500"
            >
              {text.privacy}
            </Link>

            <Link
              href={`${prefix}/terms`}
              className="transition hover:text-cyan-500"
            >
              {text.terms}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
