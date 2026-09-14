export const languages = {
  en: "English",
  fr: "Français",
} as const;

export type Language = keyof typeof languages;

export const defaultLanguage: Language = "en";

export function isValidLanguage(
  language: string
): language is Language {
  return language === "en" || language === "fr";
}