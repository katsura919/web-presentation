import { ReactLenis } from 'lenis/react';
import HeroSection from '@/components/lenis/hero-section';
import IntroSection from '@/components/lenis/intro-section';
import PainPointsSection from '@/components/lenis/horizontal-scroll';
import PainSection from '@/components/lenis/pain-section';
import PainCards from '@/components/lenis/pain-cards';
import Reframe from '@/components/lenis/reframe-section';
import StagesSection from '@/components/lenis/stages-section';
import PricingSection from '@/components/lenis/pricing-section';
import { FinalCTASection } from '@/components/lenis/final-cta-section';
import { Footer } from '@/components/lenis/footer';
import { SparklesCore } from '@/components/ui/sparkles';
import CustomWebsiteSection from '@/components/lenis/custom-website-section';
import BrandingRevampSection from '@/components/lenis/branding-revamp-section';
import SystemAccessSection from '@/components/lenis/system-access-section';


export default function index() {
  return (
    <ReactLenis root>
      {/* Global Sparkles Background */}
      <div className="bg-[#030303] fixed inset-0 w-full h-full z-0">
        <SparklesCore
          id="tsparticles"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={20}
          className="w-full h-full"
          particleColor="#868686ff"
        />
      </div>

      <main className='bg-transparent relative z-10'>
        <div className='wrapper'>
          <HeroSection />
          <IntroSection />
          <PainPointsSection />
          {/* <PainCards /> */}
          <Reframe />
          <StagesSection />
          <PricingSection />
          <CustomWebsiteSection />
          <BrandingRevampSection />
          <SystemAccessSection />
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}
