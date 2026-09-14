import type { Metadata } from "next";
import Insights from "@/components/insights/Insights";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Explore Bringo insights on AI Search, customer acquisition, SEO, conversion, automation and growth.",
};

export default function InsightsPage() {
  return (
    <main>
      <Insights />
    </main>
  );
}