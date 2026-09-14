"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ChevronDown,
  Menu,
  X,
  ArrowRight,
} from "lucide-react";

export default function Navbar() {
  const pathname = usePathname();

  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const [industriesOpen, setIndustriesOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const isFrench = pathname.startsWith("/fr");

  /*
   * =========================================================
   * LANGUAGE SWITCH
   * =========================================================
   */

  const getLanguagePath = (targetLanguage: "fr" | "en") => {
    // Déjà en français
    if (targetLanguage === "fr") {
      if (pathname.startsWith("/fr")) {
        return pathname;
      }

      return pathname === "/" ? "/fr" : `/fr${pathname}`;
    }

    // Déjà en anglais
    if (pathname.startsWith("/fr")) {
      const englishPath = pathname.replace(/^\/fr/, "");

      return englishPath || "/";
    }

    return pathname;
  };

  const frenchPath = getLanguagePath("fr");
  const englishPath = getLanguagePath("en");

  /*
   * =========================================================
   * TEXTES
   * =========================================================
   */

  const text = {
    solutions: isFrench ? "Solutions" : "Solutions",
    aiSearch: isFrench ? "Recherche IA (GEO)" : "AI Search (GEO)",
    industries: isFrench ? "Secteurs" : "Industries",
    caseStudies: isFrench ? "Études de cas" : "Case Studies",
    insights: isFrench ? "Insights" : "Insights",
    company: isFrench ? "Entreprise" : "Company",
    audit: isFrench
      ? "Obtenir mon audit gratuit"
      : "Get my free audit",

    allSolutions: isFrench
      ? "Toutes les solutions"
      : "All Solutions",

    acquisition: isFrench
      ? "Acquisition"
      : "Acquisition",

    conversion: isFrench
      ? "Conversion"
      : "Conversion",

    automation: isFrench
      ? "Automatisation"
      : "Automation",

    allIndustries: isFrench
      ? "Tous les secteurs"
      : "All Industries",

    realEstate: isFrench
      ? "Immobilier"
      : "Real Estate",

    hospitality: isFrench
      ? "Hôtellerie"
      : "Hospitality",

    ecommerce: "E-commerce",

    saas: "SaaS",

    professionalServices: isFrench
      ? "Services professionnels"
      : "Professional Services",

    about: isFrench ? "À propos" : "About",

    contact: isFrench ? "Contact" : "Contact",

    language: isFrench ? "EN" : "FR",
  };

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-10">
        {/* =====================================================
            LOGO
        ====================================================== */}

        <Link
          href={isFrench ? "/fr" : "/"}
          className="flex shrink-0 items-center"
        >
          <img
            src="/images/bringo-logo.png"
            alt="Bringo"
            className="h-10 w-auto object-contain"
          />
        </Link>

        {/* =====================================================
            DESKTOP NAVIGATION
        ====================================================== */}

        <nav className="hidden items-center gap-7 lg:flex">
          {/* SOLUTIONS */}

          <div
            className="relative"
            onMouseEnter={() => setSolutionsOpen(true)}
            onMouseLeave={() => setSolutionsOpen(false)}
          >
            <button
              type="button"
              onClick={() => setSolutionsOpen(!solutionsOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-[#0b2454] transition hover:text-cyan-500"
            >
              {text.solutions}

              <ChevronDown
                size={15}
                className={`transition-transform ${
                  solutionsOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {solutionsOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <Link
                  href={isFrench ? "/fr/solutions" : "/solutions"}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#0b2454] hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.allSolutions}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/solutions/acquisition"
                      : "/solutions/acquisition"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.acquisition}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/solutions/ai-search"
                      : "/solutions/ai-search"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.aiSearch}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/solutions/conversion"
                      : "/solutions/conversion"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.conversion}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/solutions/automation"
                      : "/solutions/automation"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.automation}
                </Link>
              </div>
            )}
          </div>

          {/* AI SEARCH */}

          <Link
            href={
              isFrench
                ? "/fr/solutions/ai-search"
                : "/solutions/ai-search"
            }
            className="text-sm font-semibold text-[#0b2454] transition hover:text-cyan-500"
          >
            {text.aiSearch}
          </Link>

          {/* INDUSTRIES */}

          <div
            className="relative"
            onMouseEnter={() => setIndustriesOpen(true)}
            onMouseLeave={() => setIndustriesOpen(false)}
          >
            <button
              type="button"
              onClick={() => setIndustriesOpen(!industriesOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-[#0b2454] transition hover:text-cyan-500"
            >
              {text.industries}

              <ChevronDown
                size={15}
                className={`transition-transform ${
                  industriesOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {industriesOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-64 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <Link
                  href={isFrench ? "/fr/industries" : "/industries"}
                  className="block rounded-xl px-4 py-3 text-sm font-semibold text-[#0b2454] hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.allIndustries}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/industries#real-estate"
                      : "/industries#real-estate"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.realEstate}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/industries#hospitality"
                      : "/industries#hospitality"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.hospitality}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/industries#ecommerce"
                      : "/industries#ecommerce"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.ecommerce}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/industries#saas"
                      : "/industries#saas"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.saas}
                </Link>

                <Link
                  href={
                    isFrench
                      ? "/fr/industries#professional-services"
                      : "/industries#professional-services"
                  }
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.professionalServices}
                </Link>
              </div>
            )}
          </div>

          {/* CASE STUDIES */}

          <Link
            href={isFrench ? "/fr/case-studies" : "/case-studies"}
            className="text-sm font-semibold text-[#0b2454] transition hover:text-cyan-500"
          >
            {text.caseStudies}
          </Link>

          {/* INSIGHTS */}

          <Link
            href={isFrench ? "/fr/insights" : "/insights"}
            className="text-sm font-semibold text-[#0b2454] transition hover:text-cyan-500"
          >
            {text.insights}
          </Link>

          {/* COMPANY */}

          <div
            className="relative"
            onMouseEnter={() => setCompanyOpen(true)}
            onMouseLeave={() => setCompanyOpen(false)}
          >
            <button
              type="button"
              onClick={() => setCompanyOpen(!companyOpen)}
              className="flex items-center gap-1 text-sm font-semibold text-[#0b2454] transition hover:text-cyan-500"
            >
              {text.company}

              <ChevronDown
                size={15}
                className={`transition-transform ${
                  companyOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {companyOpen && (
              <div className="absolute left-1/2 top-full mt-4 w-52 -translate-x-1/2 rounded-2xl border border-slate-200 bg-white p-3 shadow-2xl">
                <Link
                  href={isFrench ? "/fr/company" : "/company"}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.about}
                </Link>

                <Link
                  href={isFrench ? "/fr/contact" : "/contact"}
                  className="block rounded-xl px-4 py-3 text-sm text-slate-600 hover:bg-cyan-50 hover:text-cyan-500"
                >
                  {text.contact}
                </Link>
              </div>
            )}
          </div>

          {/* LANGUAGE */}

          <div className="flex items-center gap-2 border-l border-slate-200 pl-5">
            <Link
              href={isFrench ? englishPath : frenchPath}
              className="text-sm font-bold text-[#0b2454] transition hover:text-cyan-500"
            >
              {isFrench ? "🇬🇧 EN" : "🇫🇷 FR"}
            </Link>
          </div>

          {/* AUDIT CTA */}

          <Link
            href={isFrench ? "/fr/audit" : "/audit"}
            className="inline-flex items-center gap-2 rounded-lg bg-[#0b2454] px-5 py-3 text-sm font-bold !text-white shadow-lg transition hover:bg-cyan-500"
          >
            {text.audit}
            <ArrowRight size={16} />
          </Link>
        </nav>

        {/* =====================================================
            MOBILE BUTTON
        ====================================================== */}

        <button
          type="button"
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0b2454] lg:hidden"
          aria-label="Menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* =====================================================
          MOBILE MENU
      ====================================================== */}

      {mobileOpen && (
        <div className="border-t border-slate-100 bg-white px-6 py-6 shadow-xl lg:hidden">
          <div className="space-y-2">
            <Link
              href={isFrench ? "/fr/solutions" : "/solutions"}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-[#0b2454] hover:bg-cyan-50"
            >
              {text.solutions}
            </Link>

            <Link
              href={
                isFrench
                  ? "/fr/solutions/acquisition"
                  : "/solutions/acquisition"
              }
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50"
            >
              {text.acquisition}
            </Link>

            <Link
              href={
                isFrench
                  ? "/fr/solutions/ai-search"
                  : "/solutions/ai-search"
              }
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50"
            >
              {text.aiSearch}
            </Link>

            <Link
              href={
                isFrench
                  ? "/fr/solutions/conversion"
                  : "/solutions/conversion"
              }
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50"
            >
              {text.conversion}
            </Link>

            <Link
              href={
                isFrench
                  ? "/fr/solutions/automation"
                  : "/solutions/automation"
              }
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50"
            >
              {text.automation}
            </Link>

            <Link
              href={isFrench ? "/fr/industries" : "/industries"}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-[#0b2454] hover:bg-cyan-50"
            >
              {text.industries}
            </Link>

            <Link
              href={isFrench ? "/fr/case-studies" : "/case-studies"}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-[#0b2454] hover:bg-cyan-50"
            >
              {text.caseStudies}
            </Link>

            <Link
              href={isFrench ? "/fr/insights" : "/insights"}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-[#0b2454] hover:bg-cyan-50"
            >
              {text.insights}
            </Link>

            <Link
              href={isFrench ? "/fr/company" : "/company"}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 font-semibold text-[#0b2454] hover:bg-cyan-50"
            >
              {text.company}
            </Link>

            <Link
              href={isFrench ? "/fr/contact" : "/contact"}
              onClick={() => setMobileOpen(false)}
              className="block rounded-xl px-4 py-3 text-slate-600 hover:bg-cyan-50"
            >
              {text.contact}
            </Link>

            {/* LANGUAGE MOBILE */}

            <div className="my-3 border-t border-slate-100 pt-4">
              <Link
                href={isFrench ? englishPath : frenchPath}
                onClick={() => setMobileOpen(false)}
                className="block rounded-xl px-4 py-3 font-bold text-[#0b2454] hover:bg-cyan-50"
              >
                {isFrench ? "🇬🇧 English" : "🇫🇷 Français"}
              </Link>
            </div>

            {/* AUDIT */}

            <Link
              href={isFrench ? "/fr/audit" : "/audit"}
              onClick={() => setMobileOpen(false)}
              className="mt-3 flex items-center justify-center gap-2 rounded-lg bg-[#0b2454] px-5 py-4 text-sm font-bold !text-white"
            >
              {text.audit}
              <ArrowRight size={17} />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}