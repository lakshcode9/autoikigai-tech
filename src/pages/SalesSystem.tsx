
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ComparisonSection from "@/components/sections/ComparisonSection";
import ResultsSection from '@/components/sections/ResultsSection';
import ScaleSection from '@/components/sections/ScaleSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import FaqSection from '@/components/sections/FaqSection';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const SalesSystem = () => {
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
      <div className="relative pt-16 md:pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        {/* Sales System intro section */}
        <section className="pt-24 md:pt-32 pb-12 md:pb-16 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <ScrollReveal delay={0}>
                <span className="inline-block py-1 px-3 mb-4 rounded-full bg-secondary/20 text-sm font-medium text-secondary">
                  Sales System
                </span>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Our <span className="text-gradient">Sales System</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <p className="text-lg text-muted-foreground dark:text-gray-300 mb-8">
                  An accessible solution for businesses looking to improve their sales process efficiently.
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/solutions">
                    <Button variant="outline" className="flex items-center gap-2">
                      Looking for enterprise solutions?
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal delay={400}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-card/50 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Accessible Pricing</h3>
                  <p className="text-muted-foreground">Designed to fit various budgets while still delivering excellent results</p>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Streamlined Features</h3>
                  <p className="text-muted-foreground">Core functionality focused on what matters most to your business</p>
                </div>
                
                <div className="bg-card/50 p-6 rounded-lg border border-white/10">
                  <h3 className="text-xl font-bold mb-3">Quick Implementation</h3>
                  <p className="text-muted-foreground">Get up and running quickly with minimal setup requirements</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
        
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ComparisonSection />
        <ResultsSection />
        <ScaleSection />
        <FaqSection />
        <TestimonialsSection />
        <AboutUsSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/15min" />
      </div>
      <Footer />
    </div>
  );
};

export default SalesSystem;
