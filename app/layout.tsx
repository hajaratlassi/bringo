import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
  title: {
    default: "Bringo — AI-Powered Customer Acquisition",
    template: "%s | Bringo",
  },
  description:
    "Bringo builds AI-powered customer acquisition systems combining paid acquisition, AI Search, conversion and automation.",
  keywords: [
    "AI customer acquisition",
    "AI Search",
    "GEO",
    "SEO",
    "digital marketing",
    "lead generation",
    "conversion",
    "marketing automation",
  ],
  authors: [{ name: "Bringo" }],
  creator: "Bringo",
  publisher: "Bringo",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "Bringo — AI-Powered Customer Acquisition",
    description:
      "Build a smarter customer acquisition system with AI Search, paid acquisition, conversion and automation.",
    type: "website",
    siteName: "Bringo",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bringo — AI-Powered Customer Acquisition",
    description: "AI-powered customer acquisition systems built for growth.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}