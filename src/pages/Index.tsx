
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/sections/FeaturesSection';
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import HeroSection from '@/components/sections/HeroSection';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  return (
    <div className="w-full overflow-hidden">
      <Navbar />
      <HeroSection />
      <div className="bg-background">
        <section className="section px-4 md:px-6">
          <div className="container mx-auto">
            <div className="text-center max-w-4xl mx-auto mb-12 md:mb-16">
              <ScrollReveal>
                <span className="inline-block text-sm font-medium text-primary mb-3">
                  Our Main Solution
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-gradient">Sales System</span> - Your Complete Solution
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Our accessible solution designed for businesses looking to improve their sales process efficiently.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={300}>
                <div className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    RECOMMENDED
                  </div>
                  
                  <div className="mb-6 inline-block py-2 px-4 rounded-full bg-primary/20 text-base font-medium text-primary">
                    Sales System
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Transform Your Sales Process</h3>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    Get the core functionality you need to automate your sales process, target the right prospects, and grow your revenue efficiently.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Core sales automation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Smart targeting capabilities</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Comprehensive reporting</span>
                      </li>
                    </ul>
                    
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Quick implementation</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Affordable pricing</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Dedicated support</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Link to="/sales-system" className="flex-1">
                      <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 text-base">
                        Learn More About Sales System
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                    <a href="https://tally.so/r/w85kvz" className="flex-1">
                      <Button variant="outline" className="w-full h-12 text-base">
                        Get Started Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={400}>
                <div className="mt-12 text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Looking for enterprise-grade solutions?
                  </p>
                  <Link to="/enterprise">
                    <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                      View Enterprise Options
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <FeaturesSection />
        <CaseStudiesSection />
        <TestimonialsSection />
        <CtaSection calLink="https://tally.so/r/w85kvz" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
