import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  CalendarCheck,
  Database,
  MessageCircle,
  UserCheck,
  Workflow,
  Zap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Automatisation de l'acquisition client",
  description:
    "Automatisez votre acquisition client avec des agents IA, CRM, workflows, qualification des leads et prise de rendez-vous.",
};

export default function FrenchAutomationPage() {
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
                AUTOMATISATION DE L’ACQUISITION
              </div>

              <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
                Automatisez votre
                <span className="block text-cyan-500">
                  acquisition client.
                </span>
              </h1>

              <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600">
                Automatisez les tâches répétitives, qualifiez vos prospects
                plus rapidement et accélérez votre processus d’acquisition
                grâce à l’intelligence artificielle.
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
              <div className="rounded-3xl border border-cyan-100 bg-white p-7 shadow-xl">

                {/* AI HEADER */}
                <div className="rounded-2xl bg-[#0b2454] p-7 text-white">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
                        <Bot size={30} />
                      </div>

                      <div>
                        <p className="text-lg font-bold">
                          Agent IA Bringo
                        </p>

                        <p className="text-sm text-slate-300">
                          Automatisation active
                        </p>
                      </div>
                    </div>

                    <span className="flex h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)]" />
                  </div>

                  <div className="mt-8 rounded-xl bg-white/5 p-5">
                    <div className="flex items-center gap-3">
                      <Zap
                        size={20}
                        className="text-cyan-400"
                      />

                      <p className="text-sm font-semibold">
                        Nouveau prospect détecté
                      </p>
                    </div>

                    <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/10">
                      <div className="h-full w-[82%] rounded-full bg-cyan-400" />
                    </div>

                    <div className="mt-3 flex justify-between text-xs text-slate-400">
                      <span>Qualification</span>
                      <span>82%</span>
                    </div>
                  </div>
                </div>

                {/* AUTOMATION STEPS */}
                <div className="mt-5 space-y-3">

                  <AutomationRow
                    icon={<UserCheck size={20} />}
                    title="Lead qualifié"
                    text="Prospect identifié"
                    active
                  />

                  <AutomationRow
                    icon={<MessageCircle size={20} />}
                    title="Réponse automatique"
                    text="Message personnalisé envoyé"
                  />

                  <AutomationRow
                    icon={<CalendarCheck size={20} />}
                    title="Rendez-vous"
                    text="Créneau proposé automatiquement"
                  />

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
              Automatisation
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Votre acquisition fonctionne
              <span className="text-cyan-500">
                {" "}
                même lorsque vous dormez.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Connectez vos outils, automatisez vos processus et laissez
              l’intelligence artificielle gérer les tâches répétitives afin
              que votre équipe puisse se concentrer sur la croissance.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            <AutomationCard
              icon={<Bot size={28} />}
              title="Agents IA"
              description="Des agents intelligents capables de répondre, qualifier et orienter vos prospects."
            />

            <AutomationCard
              icon={<Database size={28} />}
              title="CRM"
              description="Centralisez vos prospects et automatisez le suivi de chaque opportunité."
            />

            <AutomationCard
              icon={<Workflow size={28} />}
              title="Workflows"
              description="Connectez vos outils et créez des processus automatisés adaptés à votre activité."
            />

            <AutomationCard
              icon={<CalendarCheck size={28} />}
              title="Rendez-vous"
              description="Automatisez la prise de rendez-vous et réduisez les échanges inutiles."
            />

          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Comment ça fonctionne
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Un système connecté de bout en bout.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600">
              Chaque étape de votre acquisition peut être connectée,
              automatisée et mesurée.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-4">

            <ProcessStep
              number="01"
              icon={<UserCheck size={25} />}
              title="Capturer"
              text="Capturez automatiquement les nouveaux prospects depuis vos différents canaux."
            />

            <ProcessStep
              number="02"
              icon={<Bot size={25} />}
              title="Qualifier"
              text="Utilisez l’IA pour identifier les prospects les plus intéressants."
            />

            <ProcessStep
              number="03"
              icon={<MessageCircle size={25} />}
              title="Engager"
              text="Envoyez automatiquement des messages personnalisés au bon moment."
            />

            <ProcessStep
              number="04"
              icon={<CalendarCheck size={25} />}
              title="Convertir"
              text="Transformez les prospects qualifiés en rendez-vous et en clients."
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
                Les avantages
              </p>

              <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
                Moins de tâches manuelles.
                <span className="block text-cyan-500">
                  Plus de croissance.
                </span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-slate-600">
                L’automatisation permet à votre équipe de gagner du temps,
                d’améliorer la réactivité et de ne manquer aucune opportunité
                commerciale.
              </p>
            </div>

            <div className="space-y-5">
              <Benefit text="Répondez rapidement à vos prospects" />
              <Benefit text="Qualifiez automatiquement les leads" />
              <Benefit text="Réduisez les tâches répétitives" />
              <Benefit text="Centralisez vos données commerciales" />
              <Benefit text="Automatisez la prise de rendez-vous" />
              <Benefit text="Suivez chaque étape de votre acquisition" />
            </div>

          </div>
        </div>
      </section>

      {/* INTEGRATIONS */}
      <section className="border-y border-slate-100 bg-slate-50 py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-cyan-500">
              Système connecté
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
              Tous vos outils travaillent ensemble.
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Connectez vos outils d’acquisition, votre CRM, vos canaux de
              communication et vos systèmes de prise de rendez-vous.
            </p>
          </div>

          <div className="mt-14 flex flex-wrap items-center justify-center gap-4">

            {[
              "CRM",
              "WhatsApp",
              "Email",
              "Formulaires",
              "Calendrier",
              "IA",
              "Analytics",
            ].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-slate-200 bg-white px-6 py-4 font-semibold text-[#0b2454] shadow-sm"
              >
                {item}
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl overflow-hidden rounded-3xl bg-[#0b2454] px-8 py-16 text-center text-white md:px-16">

          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500/10 text-cyan-400">
            <Bot size={32} />
          </div>

          <p className="mt-6 text-sm font-bold uppercase tracking-[0.25em] text-cyan-400">
            Automatisez votre acquisition
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-5xl">
            Construisez un système qui travaille pour vous.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-slate-300">
            Identifiez les tâches que vous pouvez automatiser et découvrez
            comment l’IA peut accélérer votre acquisition client.
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
/* AUTOMATION CARD */
/* -------------------------------- */

function AutomationCard({
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

/* -------------------------------- */
/* AUTOMATION ROW */
/* -------------------------------- */

function AutomationRow({
  icon,
  title,
  text,
  active = false,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  active?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-xl border p-4 ${
        active
          ? "border-cyan-200 bg-cyan-50"
          : "border-slate-200 bg-white"
      }`}
    >
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-cyan-500 shadow-sm">
        {icon}
      </div>

      <div>
        <p className="font-bold text-[#0b2454]">
          {title}
        </p>

        <p className="mt-1 text-xs text-slate-500">
          {text}
        </p>
      </div>

      <Check
        size={18}
        className="ml-auto text-cyan-500"
      />
    </div>
  );
}

/* -------------------------------- */
/* PROCESS STEP */
/* -------------------------------- */

function ProcessStep({
  number,
  icon,
  title,
  text,
}: {
  number: string;
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <div className="relative rounded-2xl border border-slate-200 bg-white p-7">

      <div className="flex items-center justify-between">
        <span className="text-sm font-bold tracking-[0.2em] text-cyan-500">
          {number}
        </span>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 text-cyan-500">
          {icon}
        </div>
      </div>

      <h3 className="mt-6 text-xl font-bold text-[#0b2454]">
        {title}
      </h3>

      <p className="mt-3 leading-7 text-slate-600">
        {text}
      </p>

    </div>
  );
}

/* -------------------------------- */
/* BENEFIT */
/* -------------------------------- */

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