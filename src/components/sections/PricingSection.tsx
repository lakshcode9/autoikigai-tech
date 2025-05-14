
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollReveal from "@/components/animations/ScrollReveal";

interface PricingProps {
  pricingInterval: 'monthly' | 'annual';
  setPricingInterval: (interval: 'monthly' | 'annual') => void;
}

const PricingSection = ({ pricingInterval, setPricingInterval }: PricingProps) => {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-8">
          <ScrollReveal>
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gradient">
                Flexible Pricing Options
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Choose the plan that best fits your business needs and scale as you grow.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center space-x-2 bg-secondary/30 rounded-lg p-1 mb-8">
              <button
                onClick={() => setPricingInterval('monthly')}
                className={`px-4 py-2 rounded-md ${
                  pricingInterval === 'monthly'
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground'
                }`}
              >
                Monthly pricing
              </button>
              <button
                onClick={() => setPricingInterval('annual')}
                className={`px-4 py-2 rounded-md ${
                  pricingInterval === 'annual'
                    ? 'bg-primary text-white'
                    : 'text-muted-foreground'
                }`}
              >
                Annual pricing
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
            {/* Automation Partner Plan */}
            <ScrollReveal animation="left" delay={200}>
              <Card className="flex flex-col h-full bg-card border-white/10 overflow-hidden">
                <CardHeader className="pb-6">
                  <h3 className="text-2xl font-bold">Automation Partner</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    For B2B companies who want a senior automation partner.
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {pricingInterval === 'monthly' ? '$7,800' : '$84,240'}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {pricingInterval === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Unlimited system requests & maintenance on all systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Senior Automator (FAANG Engineer) + 1 full-time specialist</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>1 strategy meeting per week with Laksh (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Private Slack channel with M-F availability</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Make.com & N8N</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>No contracts, cancel anytime</span>
                    </li>
                  </ul>
                  
                  <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="mt-auto w-full">
                    <Button className="w-full">
                      Start now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            {/* Fractional COO Plan */}
            <ScrollReveal animation="right" delay={300}>
              <Card className="flex flex-col h-full bg-primary/10 border-primary/30 overflow-hidden">
                <CardHeader className="pb-6">
                  <h3 className="text-2xl font-bold">Fractional COO</h3>
                  <p className="text-muted-foreground text-sm mt-1">
                    For high-growth B2B businesses who want COO-level expertise.
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow">
                  <div className="mb-6 pb-6 border-b border-white/10">
                    <div className="flex items-baseline">
                      <span className="text-4xl font-bold">
                        {pricingInterval === 'monthly' ? '$12,300' : '$132,840'}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {pricingInterval === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Unlimited system requests & maintenance on all systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Laksh (NordVPN, Upwork, KOHO, Wise, & more) + 1 specialist</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>1 strategy meeting per week with Laksh (optional)</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Private Slack channel with M-F availability</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>Make.com & N8N</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-0.5" />
                      <span>No contracts, cancel anytime</span>
                    </li>
                  </ul>
                  
                  <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="mt-auto w-full">
                    <Button className="w-full button-gradient">
                      Start now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
