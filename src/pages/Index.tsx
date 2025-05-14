
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingSection from '@/components/sections/PricingSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import { Button } from '@/components/ui/button';
import { ArrowRightIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/animations/ScrollReveal';

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
    <div className="bg-background w-full overflow-hidden">
      <Navbar />
      <div className="mt-16">
        <section className="pt-16 md:pt-24 pb-16 md:pb-24 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <ScrollReveal>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient">
                  AI-Powered B2B Lead Generation
                </h1>
                <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
                  Generate high-quality B2B leads with AI-powered targeting that focuses on real business pains
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="flex flex-wrap justify-center gap-4">
                  <Link to="/sales-system">
                    <Button size="lg" className="button-gradient">
                      Explore Our Sales System
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                  <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="no-underline">
                    <Button size="lg" variant="outline">
                      Schedule a Demo
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>
            
            <PricingSection
              pricingInterval={pricingInterval}
              setPricingInterval={setPricingInterval}
            />
          </div>
        </section>
        
        <FeaturesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/15min" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
