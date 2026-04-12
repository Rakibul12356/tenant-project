import React from 'react';
import HeroSection from './sections/HeroSection';
import TrustedBySection from './sections/TrustedBySection';
import FeaturesSection from './sections/FeaturesSection';
import HowItWorksSection from './sections/HowItWorksSection';
import BenefitsSection from './sections/BenefitsSection';
import TestimonialsSection from './sections/TestimonialsSection';
import PricingSection from './sections/PricingSection';
import StatsSection from './sections/StatsSection';
import CTASection from './sections/CTASection';

const Home = () => {
  return (
    <div className="min-h-screen font-sans" style={{ backgroundColor: "var(--home-page-bg)" }}>
      <HeroSection />
      <TrustedBySection />
      <FeaturesSection />
      <HowItWorksSection />
      <BenefitsSection />
      <TestimonialsSection />
      <PricingSection />
      <StatsSection />
      <CTASection />
    </div>
  );
};

export default Home;