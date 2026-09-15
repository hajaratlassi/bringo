import type { Metadata } from "next";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://bringo.fr";

export function createLocalizedMetadata({
  title,
  description,
  path,
  french = false,
}: {
  title: string;
  description: string;
  path: string;
  french?: boolean;
}): Metadata {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;

  const englishPath = cleanPath === "/" ? "/" : cleanPath;
  const frenchPath =
    cleanPath === "/" ? "/fr" : `/fr${cleanPath}`;

  const currentPath = french ? frenchPath : englishPath;

  return {
    title,
    description,

    alternates: {
      canonical: `${SITE_URL}${currentPath}`,

      languages: {
        en: `${SITE_URL}${englishPath}`,
        fr: `${SITE_URL}${frenchPath}`,
      },
    },

    openGraph: {
      title,
      description,
      url: `${SITE_URL}${currentPath}`,
      type: "website",
      siteName: "Bringo",
    },

    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}