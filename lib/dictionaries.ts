import type { Language } from "./i18n";

const dictionaries = {
  en: {
    nav: {
      solutions: "Solutions",
      aiSearch: "AI Search (GEO)",
      industries: "Industries",
      caseStudies: "Case Studies",
      insights: "Insights",
      company: "Company",
      audit: "Get a free audit",
    },

    common: {
      buildSystem: "Build my system",
      learnMore: "Learn more",
      getStarted: "Get started",
    },
  },

  fr: {
    nav: {
      solutions: "Solutions",
      aiSearch: "Recherche IA (GEO)",
      industries: "Secteurs",
      caseStudies: "Études de cas",
      insights: "Insights",
      company: "Entreprise",
      audit: "Obtenir mon audit gratuit",
    },

    common: {
      buildSystem: "Construire mon système",
      learnMore: "En savoir plus",
      getStarted: "Commencer",
    },
  },
};

export type Dictionary = typeof dictionaries.en;

export function getDictionary(
  language: Language
): Dictionary {
  return dictionaries[language];
}