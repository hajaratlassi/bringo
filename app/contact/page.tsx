import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Bringo",
  description:
    "Contact Bringo to discuss your customer acquisition goals, AI Search, conversion, automation or full acquisition system.",
};

export default function ContactLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}