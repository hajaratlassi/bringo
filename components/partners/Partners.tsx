import {
  BarChart3,
  MessageCircle,
  MousePointer2,
  Search,
  Sparkles,
} from "lucide-react";

export default function Partners() {
  const partners = [
    {
      name: "Google",
      label: "Partner",
      icon: <span className="text-xl font-bold">G</span>,
    },
    {
      name: "Meta",
      label: "Partner",
      icon: <span className="text-xl font-bold">∞</span>,
    },
    {
      name: "TikTok",
      label: "Marketing Partner",
      icon: <span className="text-xl font-bold">♪</span>,
    },
    {
      name: "HubSpot",
      label: "",
      icon: <span className="text-xl font-bold">◈</span>,
    },
    {
      name: "WhatsApp",
      label: "Business",
      icon: <MessageCircle size={22} />,
    },
    {
      name: "Google",
      label: "Analytics",
      icon: <BarChart3 size={22} />,
    },
    {
      name: "OpenAI",
      label: "Partner",
      icon: <Sparkles size={21} />,
    },
  ];

  return (
    <section className="border-y border-slate-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-10">

        {/* Texte au-dessus */}
        <div className="flex justify-center pt-5">
          <p className="text-xs font-medium text-slate-400">
            We partner with the best to deliver results
          </p>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 py-6 lg:justify-between lg:gap-x-6">

          {partners.map((partner, index) => (
            <div
              key={`${partner.name}-${index}`}
              className="flex min-w-[100px] items-center justify-center gap-2 text-slate-600 transition-all duration-200 hover:-translate-y-0.5 hover:text-bringo-navy"
            >

              {/* Icône */}
              <div className="flex h-9 w-9 items-center justify-center text-bringo-cyan">
                {partner.icon}
              </div>

              {/* Nom */}
              <div className="leading-tight">

                <p className="text-sm font-bold">
                  {partner.name}
                </p>

                {partner.label && (
                  <p className="text-[9px] font-medium uppercase tracking-wide text-slate-400">
                    {partner.label}
                  </p>
                )}

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}