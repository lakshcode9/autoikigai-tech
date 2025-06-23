
import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import ScrollReveal from "../animations/ScrollReveal";

interface CtaSectionProps {
  calLink?: string;
}

const CtaSection: React.FC<CtaSectionProps> = ({ calLink = "https://cal.com/laksh-pujary-7lvydw/intro-call-45" }) => {
  return (
    <section id="cta" className="section relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="glass-card p-6 md:p-10 flex flex-col items-center text-center max-w-3xl mx-auto">
          <ScrollReveal animation="fade">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-gradient">
              Ready to Transform Your Business with Advanced Tech Solutions?
            </h2>
          </ScrollReveal>

          <ScrollReveal animation="fade" delay={100}>
            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl">
              Schedule a consultation with our experts to discover how our solutions can drive growth and efficiency for your business.
            </p>
          </ScrollReveal>

          <ScrollReveal animation="fade" delay={200} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a href={calLink} target="_blank" rel="noopener noreferrer">
              <Button 
                size="lg" 
                className="button-gradient w-full sm:w-auto"
              >
                Schedule a Consultation
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </a>
            
            <a href={calLink} target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto">
                Learn our targeting strategy
                <ArrowRightIcon className="h-4 w-4" />
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Background gradient */}
      <div className="absolute -bottom-24 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent z-10"></div>
      
      {/* Background elements */}
      <div className="absolute -bottom-1/2 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-brand-blue/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default CtaSection;
