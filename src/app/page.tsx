import { ReactLenis } from 'lenis/react';
import HeroSection from '@/components/lenis/hero-section';
import PainSection from '@/components/lenis/pain-section';
import PainCards from '@/components/lenis/pain-cards';
import Reframe from '@/components/lenis/reframe-section';
import StagesSection from '@/components/lenis/stages-section';
import PricingSection from '@/components/lenis/pricing-section';
import { FinalCTASection } from '@/components/lenis/final-cta-section';
import { Footer } from '@/components/lenis/footer';

export default function index() {
  return (
    <ReactLenis root>
      <main className='bg-background'>
        <div className='wrapper'>
          <HeroSection />
          <PainCards />
          <Reframe />
          <StagesSection />
          <PricingSection />
          <FinalCTASection />
          <Footer />
        </div>
      </main>
    </ReactLenis>
  );
}
