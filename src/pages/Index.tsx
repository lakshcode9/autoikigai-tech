
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import PricingSection from '@/components/sections/PricingSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import HeroSection from '@/components/sections/HeroSection';
import { Link } from 'react-router-dom';

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
        <section className="section px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
              <span className="inline-block text-sm font-medium text-primary mb-3">
                Our Offerings
              </span>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
                Solutions for Every Business
              </h2>
              <p className="text-muted-foreground">
                Choose the right solution for your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card/50 border border-white/10 p-6 md:p-8 rounded-lg">
                <div className="mb-4 inline-block py-1 px-3 rounded-full bg-secondary/20 text-sm font-medium text-secondary">
                  Sales System
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Sales System</h3>
                <p className="text-muted-foreground mb-6">
                  Our accessible solution designed for businesses looking to improve their sales process efficiently.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary text-xs">✓</span>
                    </div>
                    <span>Core sales automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary text-xs">✓</span>
                    </div>
                    <span>Basic targeting capabilities</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-secondary text-xs">✓</span>
                    </div>
                    <span>Standard reporting</span>
                  </li>
                </ul>
                <Link to="/sales-system" className="inline-block w-full">
                  <button className="w-full py-2 px-4 border-2 border-secondary/30 text-foreground rounded-md hover:bg-secondary/10 transition-colors text-center">
                    Learn More
                  </button>
                </Link>
              </div>
              
              <div className="bg-primary/5 border border-primary/20 p-6 md:p-8 rounded-lg relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                  RECOMMENDED
                </div>
                <div className="mb-4 inline-block py-1 px-3 rounded-full bg-primary/20 text-sm font-medium text-primary">
                  Enterprise
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3">Enterprise Solutions</h3>
                <p className="text-muted-foreground mb-6">
                  Comprehensive, customized strategies for mid-market and enterprise businesses seeking significant revenue growth.
                </p>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Advanced AI-powered automation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Precision targeting systems</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Dedicated success team</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="h-5 w-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xs">✓</span>
                    </div>
                    <span>Comprehensive analytics</span>
                  </li>
                </ul>
                <Link to="/enterprise" className="inline-block w-full">
                  <button className="w-full py-2 px-4 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors text-center">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
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
