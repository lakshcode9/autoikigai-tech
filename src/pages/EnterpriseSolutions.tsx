
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import PricingSection from '@/components/sections/PricingSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const EnterpriseSolutions = () => {
  const [pricingInterval, setPricingInterval] = React.useState<'monthly' | 'annual'>('monthly');
  
  return (
    <div className="bg-background w-full overflow-hidden">
      <Navbar />
      <div className="relative pt-16 md:pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto">
              <ScrollReveal>
                <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                  Enterprise Solutions
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-gradient">Enterprise-Grade</span> Pricing
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300 mb-8">
                  Choose the plan that best aligns with your enterprise growth strategy
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        <PricingSection 
          pricingInterval={pricingInterval}
          setPricingInterval={setPricingInterval}
        />
        <FaqSection />
        <CtaSection calLink="https://tally.so/r/w85kvz" />
      </div>
      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
