
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import AboutSection from '@/components/sections/AboutSection';
import ProcessSection from '@/components/sections/ProcessSection';
import AboutUsSection from '@/components/sections/AboutUsSection';
import FaqSection from '@/components/sections/FaqSection';
import CtaSection from '@/components/sections/CtaSection';

const About = () => {
  return (
    <div className="bg-background w-full overflow-hidden">
      <Navbar />
      <div className="pt-20 md:pt-24">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient text-center">About Autoikigai</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
            Learn more about our mission, values, and the solutions we provide to drive business growth.
          </p>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>
        <AboutSection />
        <ProcessSection />
        <AboutUsSection />
        <FaqSection />
        <CtaSection calLink="https://cal.com/laksh-pujary-7lvydw/15min" />
      </div>
      <Footer />
    </div>
  );
};

export default About;
