import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  LineChart,
  MousePointerClick,
  Layout,
  Filter,
  BarChart3,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Optimisation de la conversion",
  description:
    "Transformez davantage de visiteurs en prospects et clients grâce à des landing pages, des funnels et une stratégie d’optimisation de la conversion.",
};

export default function FrenchConversionPage() {
  return (
    <main className="min-h-screen bg-white text-[#0b2454]">
      {/* HERO */}
      <section className="border-b border-slate-100 bg-gradient-to-br from-white via-white to-cyan-50">
        <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            {/* LEFT */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-semibold text-cyan-600">
                <span className="h-2 w-2 rounded-full bg-cyan-500" />
                OPTIMISATION DE LA CONVERSION
              </div>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Transformez vos visiteurs en
                <span className="block text-cyan-500">
                  clients qualifiés.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Créez des expériences digitales qui transforment davantage de
                visiteurs en prospects, en rendez-vous et en clients.
              </p>

              <div className="mt-9 flex flex-wrap gap-4">
                <Link
                  href="/fr#audit"
                  className="inline-flex items-center gap-3 rounded-xl bg-[#0b2454] px-6 py-4 font-bold !text-white shadow-lg transition hover:bg-cyan-500"
                >
                  <span className="!text-white">
                    Obtenir un audit gratuit
                  </span>

                  <ArrowRight
                    size={18}
                    className="!text-white"
                  />
                </Link>

                <Link
                  href="/fr/solutions"
                  className="inline-flex items-center gap-3 rounded-xl border border-slate-300 bg-white px-6 py-4 font-bold text-[#0b2454] transition hover:border-cyan-400 hover:text-cyan-500"
                >
                  Découvrir nos solutions
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative">
              <div className="rounded-3xl border border-cyan-100 bg-white p-8 shadow-xl">
                <div className="rounded-2xl bg-[#0b2454] p-7 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-semibold text-cyan-400">
                        Performance
                      </p>

                      <p className="mt-2 text-4xl font-extrabold">
                        +63%
                      </p>

                      <p className="mt-2 text-sm text-slate-300">
                        Taux de conversion
                      </p>
                    </div>

                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                      <LineChart size={30} />
                    </div>
                  </div>

                  {/* FAKE CHART */}
                  <div className="mt-10 flex h-32 items-end gap-3">
                    <div className="h-[35%] flex-1 rounded-t-lg bg-cyan-500/30" />
                    <div className="h-[48%] flex-1 rounded-t-lg bg-cyan-500/40" />
                    <div className="h-[42%] flex-1 rounded-t-lg bg-cyan-500/50" />
                    <div className="h-[65%] flex-1 rounded-t-lg bg-cyan-500/60" />
                    <div className="h-[78%] flex-1 rounded-t-lg bg-cyan-500/70" />
                    <div className="h-[95%] flex-1 rounded-t-lg bg-cyan-400" />
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <MousePointerClick
                      size={25}
                      className="text-cyan-500"
                    />

                    <p className="mt-4 text-2xl font-extrabold">
                      +91%
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Rendez-vous
                    </p>
                  </div>

                  <div className="rounded-2xl bg-cyan-50 p-5">
                    <BarChart3
                      size={25}
                      className="text-cyan-500"
                    />

                    <p className="mt-4 text-2xl font-extrabold">
                      +49%
                    </p>

                    <p className="mt-1 text-sm text-slate-500">
                      Chiffre d’affaires
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Conversion
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Chaque visite doit avoir une
              <span className="text-cyan-500">
                {" "}
                prochaine étape.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Nous concevons des parcours simples, rapides et orientés vers
              l’action afin de transformer votre trafic en opportunités
              commerciales.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <ConversionCard
              icon={<Layout size={28} />}
              title="Landing Pages"
              description="Des pages conçues pour présenter votre offre et générer davantage de prospects."
            />

            <ConversionCard
              icon={<MousePointerClick size={28} />}
              title="Expérience digitale"
              description="Des interfaces claires qui facilitent la navigation et encouragent l’action."
            />

            <ConversionCard
              icon={<Filter size={28} />}
              title="Funnels"
              description="Des parcours structurés qui accompagnent vos visiteurs jusqu’à la conversion."
            />

            <ConversionCard
              icon={<LineChart size={28} />}
              title="CRO"
              description="Une optimisation continue basée sur les données et le comportement des utilisateurs."
            />
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Notre approche
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Optimiser chaque étape du parcours.
            </h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <ProcessStep
              number="01"
              title="Comprendre"
              text="Analysez le comportement de vos visiteurs et identifiez les points de friction."
            />

            <ProcessStep
              number="02"
              title="Optimiser"
              text="Améliorez vos pages, vos messages, vos formulaires et vos parcours."
            />

            <ProcessStep
              number="03"
              title="Mesurer"
              text="Suivez les conversions et améliorez continuellement les performances."
            />
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
                Pourquoi optimiser la conversion ?
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Plus de résultats avec le même trafic.
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                Votre acquisition ne s’arrête pas lorsque quelqu’un arrive sur
                votre site. L’expérience proposée doit transformer cette
                attention en véritable opportunité commerciale.
              </p>
            </div>

            <div className="space-y-5">
              <Benefit text="Des landing pages pensées pour convertir" />
              <Benefit text="Des parcours utilisateurs simples et intuitifs" />
              <Benefit text="Des formulaires optimisés pour générer des leads" />
              <Benefit text="Des appels à l’action clairs et visibles" />
              <Benefit text="Une optimisation continue basée sur les données" />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b2454] px-8 py-16 text-center text-white md:px-16">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Passez à l’action
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Transformez davantage de visiteurs en clients.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Découvrez les opportunités d’amélioration de votre parcours
            utilisateur et augmentez votre taux de conversion.
          </p>

          <Link
            href="/fr#audit"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-cyan-500 px-7 py-4 font-bold !text-white transition hover:bg-cyan-400"
          >
            <span className="!text-white">
              Commencer mon audit gratuit
            </span>

            <ArrowRight
              size={18}
              className="!text-white"
            />
          </Link>
        </div>
      </section>
    </main>
  );
}

/* -------------------------------- */
/* COMPONENTS */
/* -------------------------------- */

function ConversionCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-7 transition hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg">
      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
        {icon}
      </div>

      <h3 className="text-xl font-bold text-[#0b2454]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {description}
      </p>
    </div>
  );
}

function ProcessStep({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-8">
      <span className="text-sm font-bold tracking-[0.2em] text-cyan-500">
        {number}
      </span>

      <h3 className="mt-5 text-2xl font-bold text-[#0b2454]">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {text}
      </p>
    </div>
  );
}

function Benefit({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-5">
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-50 text-cyan-500">
        <Check size={18} />
      </div>

      <p className="font-semibold text-[#0b2454]">
        {text}
      </p>
    </div>
  );
}