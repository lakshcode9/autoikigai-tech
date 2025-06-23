
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FeaturesSection from '@/components/sections/FeaturesSection';
import TestimonialsSection from '@/components/sections/TestimonialsSection';
import CtaSection from '@/components/sections/CtaSection';
import HeroSection from '@/components/sections/HeroSection';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const EnterpriseSolutions = () => {
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
                  Enterprise Solutions
                </span>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
                  <span className="text-gradient">Enterprise-Grade</span> Solutions
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="text-lg md:text-xl text-muted-foreground mb-8">
                  Comprehensive enterprise solutions designed for ambitious B2B leaders seeking strategic growth.
                </p>
              </ScrollReveal>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <ScrollReveal delay={300}>
                <div className="bg-primary/5 border border-primary/20 p-8 md:p-12 rounded-xl relative overflow-hidden">
                  <div className="absolute top-0 right-0 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                    ENTERPRISE
                  </div>
                  
                  <div className="mb-6 inline-block py-2 px-4 rounded-full bg-primary/20 text-base font-medium text-primary">
                    Enterprise Solutions
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Complete Business Transformation</h3>
                  
                  <p className="text-lg text-muted-foreground mb-8">
                    Get comprehensive enterprise-grade solutions with advanced automation, AI-powered targeting, and complete revenue acceleration systems.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Complete automation systems</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">AI-powered targeting</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Advanced analytics & reporting</span>
                      </li>
                    </ul>
                    
                    <ul className="space-y-4">
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Custom integrations</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Priority support</span>
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                          <span className="text-primary text-sm">✓</span>
                        </div>
                        <span className="text-base">Strategic consulting</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="https://cal.com/laksh-pujary-7lvydw/intro-call-45" className="flex-1">
                      <Button className="w-full h-12 bg-primary text-white hover:bg-primary/90 text-base">
                        Schedule Enterprise Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </a>
                    <Link to="/" className="flex-1">
                      <Button variant="outline" className="w-full h-12 text-base">
                        View Sales System
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Button>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        <FeaturesSection />
        <TestimonialsSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/intro-call-45" />
      </div>
      <Footer />
    </div>
  );
};

export default EnterpriseSolutions;
