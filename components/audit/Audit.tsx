"use client";

import { FormEvent, useState } from "react";
import { usePathname } from "next/navigation";

import {
  Search,
  Check,
  ArrowRight,
  BarChart3,
  ShieldCheck,
  Loader2,
} from "lucide-react";

function getScore(website: string) {
  let total = 0;

  for (let i = 0; i < website.length; i++) {
    total += website.charCodeAt(i);
  }

  return 60 + (total % 31);
}

function getScoreLabel(score: number, isFrench: boolean) {
  if (score >= 80) {
    return isFrench ? "Fort potentiel" : "Strong Potential";
  }

  if (score >= 70) {
    return isFrench ? "Bon potentiel" : "Good Potential";
  }

  return isFrench ? "Opportunité de croissance" : "Growth Opportunity";
}

export default function Audit() {
  const pathname = usePathname();
  const isFrench = pathname.startsWith("/fr");

  const [website, setWebsite] = useState("");
  const [score, setScore] = useState(68);
  const [analyzedWebsite, setAnalyzedWebsite] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const auditItems = isFrench
    ? [
        "SEO & Technique",
        "Visibilité dans les moteurs IA",
        "Préparation GEO",
        "Visibilité locale",
        "Conversion / CRO",
        "Acquisition payante",
        "Automatisation",
        "Opportunités de croissance",
      ]
    : [
        "SEO & Technical",
        "AI Search Visibility",
        "GEO Readiness",
        "Local Visibility",
        "Conversion / CRO",
        "Paid Acquisition",
        "Automation",
        "Growth Opportunities",
      ];

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const value = website.trim();

    if (!value) {
      return;
    }

    setIsAnalyzing(true);

    setTimeout(() => {
      setScore(getScore(value));
      setAnalyzedWebsite(value);
      setIsAnalyzing(false);
    }, 1200);
  };

  return (
    <section
      id="audit"
      className="relative overflow-hidden bg-slate-50 py-24"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-96 w-96 rounded-full bg-cyan-100/50 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* =====================================================
            HEADER
        ====================================================== */}

        <div className="mb-14 max-w-3xl">

          <p className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-cyan-500">
            {isFrench
              ? "Audit IA & Acquisition"
              : "AI Search & Acquisition Audit"}
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-[#0b2454] sm:text-5xl">

            {isFrench ? "Découvrez vos" : "Discover your"}{" "}

            <span className="text-cyan-500">
              {isFrench
                ? "opportunités de croissance."
                : "growth opportunities."}
            </span>

          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {isFrench
              ? "Obtenez une analyse gratuite de la visibilité de votre site, de vos performances d’acquisition et de vos opportunités de croissance."
              : "Get a free analysis of your website visibility, acquisition performance and potential growth opportunities."}
          </p>

        </div>


        {/* =====================================================
            MAIN GRID
        ====================================================== */}

        <div className="grid gap-8 lg:grid-cols-[1.5fr_0.8fr]">

          {/* ===================================================
              AUDIT FORM
          ==================================================== */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,35,80,0.06)] sm:p-10">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
                <Search size={23} />
              </div>

              <div>

                <h3 className="text-xl font-bold text-[#0b2454]">
                  {isFrench
                    ? "Commencez votre audit gratuit"
                    : "Start your free audit"}
                </h3>

                <p className="text-sm text-slate-500">
                  {isFrench
                    ? "Entrez votre site pour commencer."
                    : "Enter your website to begin."}
                </p>

              </div>

            </div>


            {/* Form */}

            <form onSubmit={handleSubmit}>

              <div className="flex flex-col gap-3 sm:flex-row">

                <input
                  type="url"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  placeholder={
                    isFrench
                      ? "Entrez votre site (ex. https://votreentreprise.com)"
                      : "Enter your website (e.g. https://yourcompany.com)"
                  }
                  className="h-14 flex-1 rounded-xl border border-slate-200 bg-white px-5 text-sm text-[#0b2454] outline-none transition-all placeholder:text-slate-400 focus:border-cyan-400 focus:ring-4 focus:ring-cyan-100"
                  required
                />

                <button
                  type="submit"
                  disabled={isAnalyzing}
                  className="inline-flex h-14 items-center justify-center gap-3 rounded-xl bg-[#0b2454] px-7 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-cyan-500 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
                >

                  {isAnalyzing ? (
                    <>
                      {isFrench ? "Analyse en cours..." : "Analyzing..."}

                      <Loader2
                        size={18}
                        className="animate-spin"
                      />
                    </>
                  ) : (
                    <>
                      {isFrench
                        ? "Analyser mon site"
                        : "Analyze my website"}

                      <ArrowRight size={18} />
                    </>
                  )}

                </button>

              </div>

            </form>


            {/* Analysis status */}

            {analyzedWebsite && !isAnalyzing && (

              <div className="mt-6 rounded-xl border border-cyan-100 bg-cyan-50 px-5 py-4">

                <p className="text-sm font-semibold text-[#0b2454]">
                  {isFrench
                    ? "Analyse terminée pour :"
                    : "Analysis completed for:"}
                </p>

                <p className="mt-1 break-all text-sm text-cyan-600">
                  {analyzedWebsite}
                </p>

              </div>

            )}


            {/* Features */}

            <div className="mt-10 grid gap-5 border-t border-slate-100 pt-8 sm:grid-cols-2">

              {auditItems.map((item) => (

                <div
                  key={item}
                  className="flex items-center gap-3"
                >

                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">

                    <Check
                      size={15}
                      strokeWidth={3}
                    />

                  </div>

                  <span className="text-sm text-slate-600">
                    {item}
                  </span>

                </div>

              ))}

            </div>

          </div>


          {/* ===================================================
              VISIBILITY SCORE
          ==================================================== */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_10px_40px_rgba(15,35,80,0.06)] sm:p-10">

            <div className="flex items-center gap-3">

              <BarChart3
                size={22}
                className="text-cyan-500"
              />

              <h3 className="font-bold text-[#0b2454]">
                {isFrench
                  ? "Votre score de visibilité"
                  : "Your Visibility Score"}
              </h3>

            </div>


            {/* Score */}

            <div className="my-10 flex justify-center">

              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border-[18px] border-slate-100">

                <div className="absolute inset-[-18px] rotate-[-35deg] rounded-full border-[18px] border-transparent border-r-cyan-400 border-t-cyan-500" />

                <div className="text-center">

                  <div className="text-5xl font-extrabold text-[#0b2454]">
                    {score}
                  </div>

                  <div className="text-sm font-medium text-slate-400">
                    /100
                  </div>

                  <div className="mt-1 text-sm font-bold text-cyan-500">
                    {getScoreLabel(score, isFrench)}
                  </div>

                </div>

              </div>

            </div>


            {/* Information */}

            <div className="flex items-start gap-3 rounded-xl bg-slate-50 p-4">

              <ShieldCheck
                size={20}
                className="mt-0.5 shrink-0 text-cyan-500"
              />

              <p className="text-sm leading-6 text-slate-600">

                {analyzedWebsite
                  ? isFrench
                    ? "Votre site a été analysé avec un score de visibilité simulé. Un audit complet permettrait d’identifier les opportunités ayant le plus d’impact sur votre système d’acquisition."
                    : "Your website has been analyzed with a simulated visibility score. A complete audit can identify the highest-impact opportunities for your acquisition system."
                  : isFrench
                    ? "Votre site présente un bon potentiel, mais certaines opportunités peuvent encore améliorer votre visibilité et votre acquisition."
                    : "Your website has strong potential, but there are key opportunities that could improve visibility and acquisition."}

              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}