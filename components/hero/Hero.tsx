"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  ArrowRight,
  Play,
  Search,
  MousePointerClick,
  MessageCircle,
  Bot,
} from "lucide-react";

export default function Hero() {
  const pathname = usePathname();

  const isFrench = pathname.startsWith("/fr");

  const text = isFrench
    ? {
        badge: "Acquisition client propulsée par l’IA",

        title1: "The customer",
        title2: "We bring",

        subtitle:
          "Systèmes d’acquisition client propulsés par l’IA",

        description:
          "Nous aidons les entreprises à être découvertes, à générer une demande qualifiée et à transformer leurs visiteurs en clients grâce à l’acquisition payante, la visibilité dans les moteurs IA, l’optimisation de la conversion et l’automatisation.",

        mainButton: "Construire mon système d’acquisition",
        secondButton: "Voir comment ça marche",

        trusted: "Ils nous font confiance :",

        leads: "Leads & Opportunités",
        customers: "Clients",
      }
    : {
        badge: "AI-powered customer acquisition",

        title1: "The customer",
        title2: "We bring",

        subtitle:
          "AI-powered customer acquisition systems",

        description:
          "We help companies get discovered, generate qualified demand and turn visitors into customers through paid acquisition, AI search visibility, conversion optimization and automation.",

        mainButton: "Build my acquisition system",
        secondButton: "See how it works",

        trusted: "Trusted by companies in:",

        leads: "Leads & Opportunities",
        customers: "Customers",
      };

  return (
    <section className="relative overflow-hidden bg-white">

      {/* Décoration arrière-plan */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-0 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-50/40 blur-3xl" />

      <div className="mx-auto grid min-h-[620px] max-w-[1400px] items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:px-10 lg:py-20">

        {/* =====================================================
            PARTIE GAUCHE
        ====================================================== */}

        <div className="relative z-10 max-w-[650px]">

          {/* Petit label */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-100 bg-cyan-50 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-cyan-500" />

            <span className="text-sm font-semibold text-slate-700">
              {text.badge}
            </span>

          </div>

          {/* Titre principal */}
          <h1 className="text-5xl font-extrabold leading-[1.05] tracking-tight text-bringo-navy sm:text-6xl lg:text-[72px]">

            {text.title1}

            <br />

            <span className="text-bringo-cyan">
              {text.title2}
            </span>

          </h1>

          {/* Sous-titre */}
          <h2 className="mt-7 text-xl font-semibold leading-relaxed text-bringo-navy sm:text-2xl">
            {text.subtitle}
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-[570px] text-base leading-7 text-slate-600">
            {text.description}
          </p>

          {/* Boutons */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">

            <Link
              href="/audit"
              className="group inline-flex items-center justify-center gap-2 rounded-lg bg-bringo-navy px-6 py-3.5 text-sm font-bold text-white shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-bringo-blue"
            >
              {text.mainButton}

              <ArrowRight
                size={17}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href="#system"
              className="group inline-flex items-center justify-center gap-2 rounded-lg border border-slate-300 bg-white px-6 py-3.5 text-sm font-semibold text-bringo-navy transition-all duration-200 hover:border-bringo-cyan hover:text-bringo-cyan"
            >
              {text.secondButton}

              <Play
                size={16}
                className="transition-transform duration-200 group-hover:scale-110"
              />
            </Link>

          </div>

          {/* Pays */}
          <div className="mt-10">

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-slate-500">
              {text.trusted}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-sm font-medium text-slate-600">

              <span className="flex items-center gap-2">
                🇫🇷 France
              </span>

              <span className="flex items-center gap-2">
                🇲🇦 Morocco
              </span>

              <span className="flex items-center gap-2">
                🇧🇪 Belgium
              </span>

              <span className="flex items-center gap-2">
                🇨🇭 Switzerland
              </span>

              <span className="flex items-center gap-2">
                🇪🇺 Europe
              </span>

            </div>

          </div>

        </div>

        {/* =====================================================
            PARTIE DROITE
        ====================================================== */}

        <div className="relative z-10 flex min-h-[520px] items-center justify-center">

          {/* Cercles décoratifs */}
          <div className="absolute h-[440px] w-[440px] rounded-full border border-cyan-100" />

          <div className="absolute h-[350px] w-[350px] rounded-full border border-slate-100" />

          <div className="absolute h-[260px] w-[260px] rounded-full border border-cyan-100/70" />

          {/* GOOGLE ADS */}
          <div className="absolute right-[12%] top-[4%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl font-bold shadow-sm">
              G
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Google
              </p>

              <p className="text-xs text-slate-500">
                Ads
              </p>
            </div>

          </div>

          {/* META ADS */}
          <div className="absolute left-[5%] top-[23%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-500">
              ∞
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                Meta
              </p>

              <p className="text-xs text-slate-500">
                Ads
              </p>
            </div>

          </div>

          {/* CHATGPT */}
          <div className="absolute right-[3%] top-[27%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-50">
              <MessageCircle
                size={23}
                className="text-slate-700"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                ChatGPT
              </p>

              <p className="text-xs text-slate-500">
                Ads
              </p>
            </div>

          </div>

          {/* TIKTOK */}
          <div className="absolute bottom-[31%] left-[5%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-slate-50 text-lg font-black text-black">
              ♪
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                TikTok
              </p>

              <p className="text-xs text-slate-500">
                Ads
              </p>
            </div>

          </div>

          {/* SEO / GEO */}
          <div className="absolute bottom-[27%] right-[4%] flex items-center gap-3 rounded-2xl border border-slate-100 bg-white px-4 py-3 shadow-lg">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-cyan-50">
              <Search
                size={22}
                className="text-bringo-cyan"
              />
            </div>

            <div>
              <p className="text-sm font-bold text-slate-800">
                SEO
              </p>

              <p className="text-xs text-slate-500">
                & GEO
              </p>
            </div>

          </div>

          {/* CENTRE BRINGO */}
          <div className="relative flex h-[190px] w-[190px] items-center justify-center rounded-full border-[6px] border-bringo-cyan bg-white shadow-xl">

            <div className="absolute inset-[10px] rounded-full border-2 border-bringo-navy/20" />

            <div className="flex h-[110px] w-[110px] items-center justify-center rounded-full bg-gradient-to-br from-cyan-400 to-bringo-navy shadow-lg">

              <span className="text-6xl font-black text-white">
                B
              </span>

            </div>

          </div>

          {/* LEADS */}
          <div className="absolute bottom-[10%] left-1/2 w-[210px] -translate-x-1/2 rounded-xl border border-slate-100 bg-white px-5 py-4 text-center shadow-lg">

            <div className="flex items-center justify-center gap-2">

              <MousePointerClick
                size={18}
                className="text-bringo-cyan"
              />

              <span className="text-sm font-bold text-bringo-navy">
                {text.leads}
              </span>

            </div>

            <div className="mt-2 flex justify-center -space-x-2">

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-200 text-xs">
                👩
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-300 text-xs">
                👨
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-400 text-xs">
                👩
              </span>

              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-100 text-xs">
                +247
              </span>

            </div>

          </div>

          {/* CUSTOMERS */}
          <div className="absolute bottom-[-2%] left-1/2 flex w-[160px] -translate-x-1/2 items-center justify-center gap-2 rounded-xl border border-slate-100 bg-white px-5 py-3 shadow-md">

            <Bot
              size={18}
              className="text-bringo-cyan"
            />

            <span className="text-sm font-bold text-bringo-navy">
              {text.customers}
            </span>

          </div>

        </div>

      </div>

    </section>
  );
}