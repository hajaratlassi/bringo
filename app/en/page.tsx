import Hero from "@/components/hero/Hero";
import Impact from "@/components/impact/Impact";
import CaseStudies from "@/components/case-studies/CaseStudies";
import Audit from "@/components/audit/Audit";
import Insights from "@/components/insights/Insights";

export default function EnglishHomePage() {
  return (
    <main>
      <Hero />
      <Impact />
      <CaseStudies />
      <Audit />
      <Insights />
    </main>
  );
}