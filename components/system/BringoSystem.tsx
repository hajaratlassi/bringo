import {
  Search,
  MousePointerClick,
  FileText,
  UserCheck,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

export default function BringoSystem() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      icon: Search,
      items: [
        "Organic Search",
        "AI Search",
        "Social Search",
        "Paid Search",
        "Referrals",
      ],
    },
    {
      number: "02",
      title: "Attract",
      icon: MousePointerClick,
      items: [
        "Paid Ads",
        "SEO & GEO",
        "Content",
        "Social Visibility",
      ],
    },
    {
      number: "03",
      title: "Convert",
      icon: FileText,
      items: [
        "Landing Pages",
        "Webinars",
        "Forms",
        "Offers",
      ],
    },
    {
      number: "04",
      title: "Qualify",
      icon: UserCheck,
      items: [
        "AI Qualification",
        "Lead Scoring",
        "CRM",
        "WhatsApp",
      ],
    },
    {
      number: "05",
      title: "Close",
      icon: CheckCircle2,
      items: [
        "Appointments",
        "Follow-up",
        "Analytics",
        "Customers",
      ],
    },
  ];

  return (
    <section
      id="system"
      className="border-b border-slate-100 bg-white py-20"
    >
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* =====================================================
            TITRE DE LA SECTION
        ====================================================== */}

        <div className="mb-14 text-center">

          <p className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-bringo-cyan">
            One system. Every customer touchpoint.
          </p>

          <h2 className="text-4xl font-extrabold tracking-tight text-bringo-navy sm:text-5xl">
            The Bringo System
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-500">
            A complete customer acquisition system that connects every
            stage of the customer journey.
          </p>

        </div>

        {/* =====================================================
            LES 5 ÉTAPES
        ====================================================== */}

        <div className="relative">

          {/* Ligne horizontale sur desktop */}
          <div className="absolute left-[10%] right-[10%] top-[45px] hidden h-px bg-gradient-to-r from-transparent via-bringo-cyan/40 to-transparent lg:block" />

          <div className="grid gap-8 lg:grid-cols-5 lg:gap-4">

            {steps.map((step, index) => {

              const Icon = step.icon;

              return (
                <div
                  key={step.number}
                  className="group relative"
                >

                  {/* =================================================
                      NUMÉRO + ICÔNE
                  ================================================== */}

                  <div className="relative z-10 flex justify-center">

                    <div className="flex h-[90px] w-[90px] items-center justify-center rounded-full border border-cyan-100 bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-bringo-cyan group-hover:shadow-lg">

                      <div className="flex h-[62px] w-[62px] items-center justify-center rounded-full bg-cyan-50 transition-colors duration-300 group-hover:bg-cyan-100">

                        <Icon
                          size={27}
                          strokeWidth={1.8}
                          className="text-bringo-cyan"
                        />

                      </div>

                    </div>

                  </div>

                  {/* =================================================
                      CONTENU
                  ================================================== */}

                  <div className="mt-6 text-center">

                    <div className="mb-1 text-xs font-bold text-bringo-cyan">
                      {step.number}
                    </div>

                    <h3 className="text-lg font-bold text-bringo-navy">
                      {step.title}
                    </h3>

                    <ul className="mt-4 space-y-2">

                      {step.items.map((item) => (
                        <li
                          key={item}
                          className="text-sm text-slate-500 transition-colors group-hover:text-slate-700"
                        >
                          {item}
                        </li>
                      ))}

                    </ul>

                  </div>

                  {/* =================================================
                      FLÈCHE
                  ================================================== */}

                  {index < steps.length - 1 && (
                    <div className="absolute right-[-18px] top-[35px] z-20 hidden lg:block">

                      <ArrowRight
                        size={22}
                        strokeWidth={1.5}
                        className="text-bringo-cyan"
                      />

                    </div>
                  )}

                </div>
              );
            })}

          </div>
        </div>

        {/* =====================================================
            BAS DE SECTION
        ====================================================== */}

        <div className="mt-16 flex justify-center">

          <div className="inline-flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-5 py-3">

            <CheckCircle2
              size={18}
              className="text-bringo-cyan"
            />

            <span className="text-sm font-semibold text-bringo-navy">
              One system. Every customer touchpoint.
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}