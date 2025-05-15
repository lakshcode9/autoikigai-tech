
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import ServicesSection from '@/components/sections/ServicesSection';
import ComparisonSection from "@/components/sections/ComparisonSection";
import ResultsSection from '@/components/sections/ResultsSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import FaqSection from '@/components/sections/FaqSection';

const EnterpriseSolutions = () => {
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
        
        {/* Hero Section */}
        <section className="pt-24 md:pt-32 pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
              <div className="space-y-6 md:space-y-8">
                <ScrollReveal>
                  <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-sm font-medium text-primary mb-4">
                    Enterprise Solutions
                  </span>
                </ScrollReveal>
                
                <ScrollReveal delay={100}>
                  <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
                    <span className="text-gradient">Comprehensive</span> Growth <span className="text-gradient">Strategy</span> for Enterprise Leaders
                  </h1>
                </ScrollReveal>
                
                <ScrollReveal delay={200}>
                  <p className="text-lg md:text-xl text-muted-foreground dark:text-gray-300">
                    Our enterprise-grade solutions deliver advanced automation and precision targeting systems designed specifically for mid-market and enterprise businesses seeking significant revenue growth.
                  </p>
                </ScrollReveal>
                
                <ScrollReveal delay={300}>
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href="https://cal.com/laksh-pujary-7lvydw/15min">
                      <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
                        Schedule a Consultation
                      </Button>
                    </a>
                  </div>
                </ScrollReveal>
              </div>
              
              <ScrollReveal delay={400} className="hidden lg:block">
                <div className="relative p-6">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-2xl blur-xl"></div>
                  <div className="glass-card relative p-8 rounded-xl border border-white/10">
                    <h3 className="text-2xl font-bold mb-4">Enterprise Benefits</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-medium">Customized Strategic Planning</p>
                          <p className="text-sm text-muted-foreground">Tailored approach for your specific industry and business challenges</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-medium">Advanced AI Technology</p>
                          <p className="text-sm text-muted-foreground">Proprietary algorithms for unprecedented targeting accuracy</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-medium">Dedicated Success Team</p>
                          <p className="text-sm text-muted-foreground">Personal support from our senior strategists</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <div>
                          <p className="font-medium">Comprehensive Analytics</p>
                          <p className="text-sm text-muted-foreground">In-depth reporting and strategic recommendations</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        <ServicesSection />
        <ComparisonSection />
        <ResultsSection />
        <FaqSection />
        <TestimonialsSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/15min" />
      </div>
      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
