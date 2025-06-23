
import React from 'react';
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const CaseStudiesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              Case Studies
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              See how our automation solutions have helped real businesses achieve exceptional results
            </p>
          </ScrollReveal>
        </div>
        
        <div className="text-center">
          <ScrollReveal delay={200}>
            <a 
              href="https://docs.google.com/spreadsheets/d/1Y_Ns4cvZKuZMChepMT4zUpEXj-OdwB_IN6dXRgf5GE8/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" className="button-gradient">
                View Case Studies
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
