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
import CaseStudiesSection from '@/components/sections/CaseStudiesSection';
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/animations/ScrollReveal';
import ParallaxItem from '@/components/animations/ParallaxItem';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";
import HeroSection from '@/components/sections/HeroSection';

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-background w-full overflow-hidden">
      <Navbar />
      <div className="relative pt-16 md:pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        <HeroSection />
        
        {/* Sales System intro section with enhanced animations */}
        <section className="py-16 md:py-24 px-4 particle-bg">
          <div className="container mx-auto">
            <ScrollReveal delay={400} animation="bounce">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <ParallaxItem speed={0.05} className="hover-lift">
                  <div className="bg-card/50 p-6 rounded-lg border border-white/10 glass-card pulse-glow">
                    <h3 className="text-xl font-bold mb-3 text-gradient">Accessible Pricing</h3>
                    <p className="text-muted-foreground">Designed to fit various budgets while still delivering excellent results</p>
                  </div>
                </ParallaxItem>
                
                <ParallaxItem speed={0.08} className="hover-lift">
                  <div className="bg-card/50 p-6 rounded-lg border border-white/10 glass-card pulse-glow" style={{animationDelay: '0.5s'}}>
                    <h3 className="text-xl font-bold mb-3 text-gradient">Streamlined Features</h3>
                    <p className="text-muted-foreground">Core functionality focused on what matters most to your business</p>
                  </div>
                </ParallaxItem>
                
                <ParallaxItem speed={0.03} className="hover-lift">
                  <div className="bg-card/50 p-6 rounded-lg border border-white/10 glass-card pulse-glow" style={{animationDelay: '1s'}}>
                    <h3 className="text-xl font-bold mb-3 text-gradient">Quick Implementation</h3>
                    <p className="text-muted-foreground">Get up and running quickly with minimal setup requirements</p>
                  </div>
                </ParallaxItem>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Floating background elements */}
          <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-brand-cyan/10 rounded-full blur-xl animate-float" style={{animationDelay: '2s'}}></div>
        </section>
        
        {/* Enhanced sections with motion graphics */}
        <div className="relative">
          {/* Animated background for sections */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 left-0 w-32 h-32 bg-gradient-to-r from-brand-blue/20 to-brand-purple/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-0 w-40 h-40 bg-gradient-to-r from-brand-cyan/20 to-brand-blue/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '3s'}}></div>
          </div>
          
          <AboutSection />
          <ServicesSection />
          <ProcessSection />
          <ComparisonSection />
          <ResultsSection />
          <ScaleSection />
          <CaseStudiesSection />
          <FaqSection />
          <TestimonialsSection />
          <AboutUsSection />
          <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/intro-call-45" />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Index;