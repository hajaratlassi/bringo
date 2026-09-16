import Hero from "@/components/hero/Hero";
import Partners from "@/components/partners/Partners";
import BringoSystem from "@/components/system/BringoSystem";
import AISearch from "@/components/ai-search/AISearch";
import Solutions from "@/components/solutions/Solutions";
import Impact from "@/components/impact/Impact";
import CaseStudies from "@/components/case-studies/CaseStudies";
import Audit from "@/components/audit/Audit";
import Insights from "@/components/insights/Insights";

export default function Home() {
  return (
    <main>
      <Hero />
      <Partners />
      <BringoSystem />
      <AISearch />
      <Solutions />
      <Impact />
      <CaseStudies />
      <Audit />
      <Insights />
    </main>
  );
}