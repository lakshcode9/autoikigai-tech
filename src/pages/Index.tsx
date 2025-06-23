
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
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="bg-background w-full overflow-hidden">
      <Navbar />
      <div className="relative pt-16 md:pt-20">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        
        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-28 pb-8 md:pb-12 px-4 md:px-6 overflow-hidden">
          {/* Background with subtle grid pattern */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
            <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-brand-cyan/10 dark:bg-brand-purple/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10 px-2 md:px-6 max-w-6xl">
            <div className="flex flex-col items-center justify-center text-center">
              <ScrollReveal delay={0} animation="fade">
                <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-secondary/20 text-xs md:text-sm font-medium text-secondary">
                  Sales System
                </span>
              </ScrollReveal>
              
              <ScrollReveal animation="fade" delay={100}>
                <h1 className="text-foreground dark:text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold max-w-5xl mx-auto leading-[1.1] mb-6 md:mb-8">
                  Our <span className="text-gradient">Sales System</span>
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade" delay={200}>
                <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
                  An accessible solution for businesses looking to improve their sales process efficiently.
                </p>
              </ScrollReveal>
              
              <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto">
                <a href="https://cal.com/laksh-pujary-7lvydw/intro-call-45" className="w-full sm:w-auto">
                  <Button size={isMobile ? "default" : "lg"} className="bg-primary text-white hover:bg-primary/90 w-full h-12 sm:h-14 text-base font-medium">
                    <span className="flex items-center justify-center w-full">
                      Get Started
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </a>
                <Link to="/enterprise" className="w-full sm:w-auto">
                  <Button size={isMobile ? "default" : "lg"} variant="outline" className="w-full h-12 sm:h-14 text-base border-primary/20 text-foreground hover:border-primary/50 hover:bg-primary/5">
                    <span className="flex items-center justify-center w-full">
                      Enterprise Solutions
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </span>
                  </Button>
                </Link>
              </ScrollReveal>
            </div>
          </div>

          {/* Subtle design elements */}
          <div className="absolute bottom-[10%] left-[15%] w-16 md:w-20 h-16 md:h-20 rotate-12 border border-primary/10 dark:border-white/10 rounded-lg backdrop-blur-sm bg-card/30 shadow-lg animate-float"></div>
          <div className="absolute top-[20%] right-[15%] w-12 md:w-16 h-12 md:h-16 -rotate-12 border border-primary/10 dark:border-white/10 rounded-lg backdrop-blur-sm bg-card/30 shadow-lg animate-float" style={{animationDelay: '1.5s'}}></div>
          
          {/* Additional decorative elements */}
          <div className="absolute bottom-[30%] right-[25%] w-8 h-8 bg-brand-cyan/20 dark:bg-brand-cyan/30 rounded-full blur-sm animate-float" style={{animationDelay: '0.8s'}}></div>
          <div className="absolute top-[35%] left-[28%] w-6 h-6 bg-brand-purple/20 dark:bg-brand-purple/30 rounded-full blur-sm animate-float" style={{animationDelay: '1.2s'}}></div>
        </section>
        
        {/* Sales System intro section */}
        <section className="py-16 md:py-24 px-4">
          <div className="container mx-auto">
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
        <CaseStudiesSection />
        <FaqSection />
        <TestimonialsSection />
        <AboutUsSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/intro-call-45" />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
