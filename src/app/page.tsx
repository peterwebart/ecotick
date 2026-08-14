import { Hero } from "@/components/home/Hero";
import { TierStrip } from "@/components/home/TierStrip";
import { TrustBar } from "@/components/home/TrustBar";
import { ServiceTiers } from "@/components/home/ServiceTiers";
import { HowItWorks } from "@/components/home/HowItWorks";
import { GarlicPanel } from "@/components/home/GarlicPanel";
import { BadgeRow } from "@/components/home/BadgeRow";
import { Fleet } from "@/components/home/Fleet";
import { KnowledgeHub } from "@/components/home/KnowledgeHub";
import { SocialProof } from "@/components/home/SocialProof";
import { FaqSection } from "@/components/home/FaqSection";
import { FinalCta } from "@/components/home/FinalCta";
import { buildMetadata } from "@/lib/seo";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/content/home";

export const metadata = buildMetadata({
  title: "Tick & Mosquito Control in Ontario | Eco-Tick Solutions",
  description:
    "Seasonal tick and mosquito control for homes, cottages, businesses and large properties in Ontario. A natural garlic-based approach, applied by trained technicians.",
  path: "/",
});

export default function HomePage() {
  return (
    <>
      {/* FAQ markup matches the visible FAQ section below - required by brief §25. */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }}
      />
      <Hero />
      <TierStrip />
      <TrustBar />
      <ServiceTiers />
      <HowItWorks />
      <Fleet />
      <GarlicPanel />
      <BadgeRow />
      <KnowledgeHub />
      <SocialProof />
      <FaqSection />
      <FinalCta />
    </>
  );
}
