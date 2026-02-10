import { HeroSection } from "@/components/landing/HeroSection";
import { PainSection } from "@/components/landing/PainSection";
import { BigIdeaSection } from "@/components/landing/BigIdeaSection";
import { RoadmapSection } from "@/components/landing/RoadmapSection";
import { PackagesSection } from "@/components/landing/PackagesSection";
import { CostOfInaction } from "@/components/landing/CostOfInaction";
import { SocialProof } from "@/components/landing/SocialProof";
import { HowItStarts } from "@/components/landing/HowItStarts";
import { FinalCTA } from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <SocialProof />
      <PainSection />
      <BigIdeaSection />
      <RoadmapSection />
      <PackagesSection />
      <CostOfInaction />
      <HowItStarts />
      <FinalCTA />

      {/* Footer / CTA Area */}
      <footer className="py-12 bg-muted/50 text-center border-t border-border">
        <p className="text-muted-foreground text-sm font-sans">
          © {new Date().getFullYear()} Agency Success Path. All rights reserved.
        </p>
      </footer>
    </main>
  );
}
