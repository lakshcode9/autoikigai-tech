
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';
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

const Index = () => {
  return (
    <div className="bg-background">
      <Navbar />
      <HeroSection />
      <div className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <AboutSection />
        <ServicesSection />
        <ProcessSection />
        <ComparisonSection />
        <ResultsSection />
        <ScaleSection />
        <FaqSection />
        <TestimonialsSection />
        <AboutUsSection />
        <CtaSection />
      </div>
      <Footer />
    </div>
  );
};

export default Index;
