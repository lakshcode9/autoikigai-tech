
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingSection from '@/components/sections/PricingSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import HeroSection from '@/components/sections/HeroSection';

const Index = () => {
  const [pricingInterval, setPricingInterval] = useState<'monthly' | 'annual'>('monthly');
  
  // Add cal.com script
  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cal.com/embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-background">
        <FeaturesSection />
        <CaseStudiesSection />
        <PricingSection
          pricingInterval={pricingInterval}
          setPricingInterval={setPricingInterval}
        />
        <TestimonialsSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/15min" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
