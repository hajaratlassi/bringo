import type { Metadata } from "next";

import {
  ArrowRight,
  BarChart3,
  Target,
  Users,
  TrendingUp,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Études de cas & Résultats",
  description:
    "Découvrez les études de cas Bringo et les résultats mesurables obtenus grâce à l’acquisition client, la recherche IA, la conversion et l’automatisation.",
};

export default function FrenchCaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b285c]">
      {/* =====================================================
          HEADER
      ====================================================== */}

      <section className="bg-gradient-to-br from-[#f4fcfe] via-white to-white">
        <div className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12">
          <div className="grid items-end gap-10 lg:grid-cols-2">
            {/* TITRE */}

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#08afd0]">
                Notre travail
              </p>

              <h1 className="mt-6 max-w-[600px] text-6xl font-extrabold leading-[1.05] tracking-tight md:text-7xl">
                Des résultats
                <br />
                à travers
                <br />
                <span className="text-[#08afd0]">l’Europe.</span>
              </h1>
            </div>

            {/* DESCRIPTION */}

            <div>
              <p className="max-w-[680px] text-xl leading-9 text-[#416184]">
                Découvrez comment nos systèmes d’acquisition aident les
                entreprises à améliorer leur visibilité, générer des leads
                qualifiés et accélérer leur croissance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CASE STUDIES
      ====================================================== */}

      <section className="bg-white pb-24">
        <div className="mx-auto max-w-[1400px] px-6 lg:px-12">
          <div className="grid gap-7 lg:grid-cols-3">
            {/* =================================================
                BREACHWATCH
            ================================================== */}

            <article className="overflow-hidden rounded-[28px] border border-[#dce5ef] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* IMAGE / COVER */}

              <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-[#071a3d] via-[#0b285c] to-[#123b7d]">
                {/* Décoration */}

                <div className="absolute -right-16 -top-20 h-64 w-64 rounded-full border border-cyan-400/20" />

                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-cyan-400/20" />

                {/* Faux serveur */}

                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="grid w-[260px] grid-cols-3 gap-3 opacity-60">
                    <div className="h-28 rounded-lg border border-cyan-400/30 bg-[#061735]" />
                    <div className="h-36 rounded-lg border border-cyan-400/30 bg-[#061735]" />
                    <div className="h-24 rounded-lg border border-cyan-400/30 bg-[#061735]" />
                  </div>
                </div>

                {/* Badge */}

                <div className="absolute left-6 top-6 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  IA & Conseil
                </div>

                {/* Texte */}

                <div className="absolute bottom-7 left-6">
                  <p className="text-sm text-white/80">France</p>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    BreachWatch
                  </h2>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">
                {/* STATS */}

                <div className="grid grid-cols-3">
                  <div className="border-r border-[#dce5ef] text-center">
                    <TrendingUp
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +184%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">Trafic</p>
                  </div>

                  <div className="border-r border-[#dce5ef] text-center">
                    <Users
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +127%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Leads qualifiés
                    </p>
                  </div>

                  <div className="text-center">
                    <Target
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      -34%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Coût / lead
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <div className="mt-7 border-t border-[#e4ebf2] pt-6">
                  <button className="flex items-center gap-3 font-bold text-[#08afd0] transition hover:gap-5">
                    Voir l’étude de cas
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </article>

            {/* =================================================
                MAISON KARITÉ
            ================================================== */}

            <article className="overflow-hidden rounded-[28px] border border-[#dce5ef] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* IMAGE / COVER */}

              <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-[#b9d7d8] via-[#dcebea] to-[#f2f7f5]">
                {/* Décoration */}

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/70" />

                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-white/70" />

                {/* Illustration boutique */}

                <div className="absolute inset-x-10 bottom-0 top-14">
                  <div className="absolute bottom-0 left-0 right-0 h-32 rounded-t-3xl bg-white/70" />

                  <div className="absolute bottom-10 left-10 h-20 w-16 rounded-lg bg-white shadow-lg" />

                  <div className="absolute bottom-10 left-32 h-28 w-16 rounded-lg bg-[#d4a27a] shadow-lg" />

                  <div className="absolute bottom-10 right-20 h-24 w-16 rounded-lg bg-white shadow-lg" />
                </div>

                {/* Badge */}

                <div className="absolute left-6 top-6 rounded-full border border-white/60 bg-white/40 px-4 py-2 text-sm font-semibold text-[#0b285c] backdrop-blur">
                  E-commerce
                </div>

                {/* Texte */}

                <div className="absolute bottom-7 left-6">
                  <p className="text-sm text-[#0b285c]/70">Maroc</p>

                  <h2 className="mt-2 text-3xl font-bold text-[#0b285c]">
                    Maison Karité
                  </h2>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">
                {/* STATS */}

                <div className="grid grid-cols-3">
                  <div className="border-r border-[#dce5ef] text-center">
                    <TrendingUp
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +211%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">ROAS</p>
                  </div>

                  <div className="border-r border-[#dce5ef] text-center">
                    <BarChart3
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +156%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Ventes
                    </p>
                  </div>

                  <div className="text-center">
                    <Target
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +78%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Conversion
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <div className="mt-7 border-t border-[#e4ebf2] pt-6">
                  <button className="flex items-center gap-3 font-bold text-[#0b285c] transition hover:gap-5">
                    Voir l’étude de cas
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </article>

            {/* =================================================
                TECH SOLUTIONS
            ================================================== */}

            <article className="overflow-hidden rounded-[28px] border border-[#dce5ef] bg-white shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
              {/* IMAGE / COVER */}

              <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-[#6b7c80] via-[#9eacad] to-[#dce5e3]">
                {/* Décoration */}

                <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/50" />

                <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full border border-white/50" />

                {/* Bureau */}

                <div className="absolute bottom-0 left-0 right-0 h-28 bg-white/60" />

                <div className="absolute bottom-20 left-10 h-3 w-52 rounded-full bg-[#34454b]/70" />

                <div className="absolute bottom-24 left-20 h-20 w-3 bg-[#34454b]/70" />

                <div className="absolute bottom-24 left-60 h-20 w-3 bg-[#34454b]/70" />

                <div className="absolute bottom-24 right-16 h-16 w-20 rounded-lg bg-[#34454b]/50" />

                {/* Badge */}

                <div className="absolute left-6 top-6 rounded-full border border-white/40 bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
                  Services B2B
                </div>

                {/* Texte */}

                <div className="absolute bottom-7 left-6">
                  <p className="text-sm text-white/80">Belgique</p>

                  <h2 className="mt-2 text-3xl font-bold text-white">
                    Tech Solutions
                  </h2>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-7">
                {/* STATS */}

                <div className="grid grid-cols-3">
                  <div className="border-r border-[#dce5ef] text-center">
                    <CalendarIcon />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +91%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Rendez-vous
                    </p>
                  </div>

                  <div className="border-r border-[#dce5ef] text-center">
                    <Users
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +63%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Taux de closing
                    </p>
                  </div>

                  <div className="text-center">
                    <TrendingUp
                      className="mx-auto text-[#08afd0]"
                      size={25}
                    />

                    <p className="mt-4 text-2xl font-extrabold text-[#08afd0]">
                      +49%
                    </p>

                    <p className="mt-1 text-sm text-[#58708e]">
                      Chiffre d’affaires
                    </p>
                  </div>
                </div>

                {/* BUTTON */}

                <div className="mt-7 border-t border-[#e4ebf2] pt-6">
                  <button className="flex items-center gap-3 font-bold text-[#0b285c] transition hover:gap-5">
                    Voir l’étude de cas
                    <ArrowRight size={19} />
                  </button>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* =====================================================
          RESULTS CTA
      ====================================================== */}

      <section className="bg-[#f6fbfd] py-24">
        <div className="mx-auto max-w-[1100px] px-6 text-center">
          <p className="font-bold uppercase tracking-[0.25em] text-[#08afd0]">
            La performance qui compte
          </p>

          <h2 className="mt-5 text-5xl font-extrabold leading-tight text-[#0b285c]">
            Transformez votre acquisition
            <br />
            en croissance mesurable.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#58708e]">
            Construisez un système d’acquisition conçu pour générer du trafic,
            des leads qualifiés, des rendez-vous et du chiffre d’affaires.
          </p>

          <a
            href="/fr/contact"
            className="mt-9 inline-flex items-center gap-3 rounded-xl bg-[#0b285c] px-8 py-5 font-bold text-white shadow-lg transition hover:bg-[#123b7d]"
          >
            Démarrer mon projet
            <ArrowRight size={20} />
          </a>
        </div>
      </section>
    </main>
  );
}

/* =========================================================
   PETIT COMPOSANT POUR L'ICÔNE RENDEZ-VOUS
========================================================= */

function CalendarIcon() {
  return (
    <div className="mx-auto flex h-[25px] w-[25px] items-center justify-center">
      <svg
        width="25"
        height="25"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-[#08afd0]"
      >
        <rect
          x="3"
          y="4"
          width="18"
          height="17"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
        />

        <path
          d="M16 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M8 2V6"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />

        <path
          d="M3 10H21"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    </div>
  );
}