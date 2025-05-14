
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
    <section className="py-16 md:py-20" id="pricing">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center space-y-10">
          <ScrollReveal>
            <div className="space-y-4 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gradient">
                Enterprise-Grade Solutions
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground">
                Choose the plan that best aligns with your enterprise growth strategy
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <div className="flex items-center bg-muted rounded-lg p-1 mb-12">
              <button
                onClick={() => setPricingInterval('monthly')}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition ${
                  pricingInterval === 'monthly'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:bg-muted-foreground/10'
                }`}
              >
                Monthly billing
              </button>
              <button
                onClick={() => setPricingInterval('annual')}
                className={`px-5 py-2.5 rounded-md text-sm font-medium transition ${
                  pricingInterval === 'annual'
                    ? 'bg-primary text-white shadow-sm'
                    : 'text-muted-foreground hover:bg-muted-foreground/10'
                }`}
              >
                Annual billing
                {pricingInterval === 'annual' && <span className="ml-2 text-xs font-medium bg-white/20 text-white px-2 py-0.5 rounded-full">Save 10%</span>}
              </button>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 w-full max-w-5xl">
            {/* Automation Partner Plan */}
            <ScrollReveal animation="left" delay={200}>
              <Card className="flex flex-col h-full bg-card border-border overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
                <CardHeader className="pb-6 border-b border-border/50">
                  <h3 className="text-2xl font-bold">Automation Partner</h3>
                  <p className="text-muted-foreground text-base mt-2">
                    For B2B companies seeking expert automation support
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow p-6 pt-8">
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold">
                        {pricingInterval === 'monthly' ? '$7,800' : '$84,240'}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {pricingInterval === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                    {pricingInterval === 'annual' && 
                      <p className="text-brand-blue text-sm mt-2">Save $9,360 annually</p>
                    }
                  </div>
                  
                  <ul className="space-y-5 mb-10 flex-grow">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Unlimited system requests & maintenance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Senior Automator (FAANG Engineer) + 1 full-time specialist</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Weekly strategy meeting with Director</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Private Slack channel with dedicated support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Enterprise automation platform access</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Flexible terms, 30-day notice period</span>
                    </li>
                  </ul>
                  
                  <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="mt-auto w-full">
                    <Button className="w-full h-12 bg-primary hover:bg-primary/90">
                      Schedule Consultation
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </CardContent>
              </Card>
            </ScrollReveal>
            
            {/* Fractional COO Plan */}
            <ScrollReveal animation="right" delay={300}>
              <Card className="flex flex-col h-full bg-primary/5 border-primary/20 overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 relative">
                <div className="absolute top-5 right-5">
                  <span className="bg-brand-blue text-white text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
                <CardHeader className="pb-6 border-b border-primary/10">
                  <h3 className="text-2xl font-bold">Fractional COO</h3>
                  <p className="text-muted-foreground text-base mt-2">
                    For high-growth enterprises seeking executive-level expertise
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-grow p-6 pt-8">
                  <div className="mb-8">
                    <div className="flex items-baseline">
                      <span className="text-4xl md:text-5xl font-bold">
                        {pricingInterval === 'monthly' ? '$12,300' : '$132,840'}
                      </span>
                      <span className="text-muted-foreground ml-2">
                        {pricingInterval === 'monthly' ? '/month' : '/year'}
                      </span>
                    </div>
                    {pricingInterval === 'annual' && 
                      <p className="text-brand-blue text-sm mt-2">Save $14,760 annually</p>
                    }
                  </div>
                  
                  <ul className="space-y-5 mb-10 flex-grow">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Unlimited system requests & maintenance on all systems</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Laksh (ex-NordVPN, Upwork, KOHO, Wise) + dedicated specialist</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Bi-weekly executive strategy sessions</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Priority Slack channel with 24/7 support</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Enterprise automation platform with premium features</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-brand-blue mt-0.5 flex-shrink-0" />
                      <span>Flexible terms, 30-day notice period</span>
                    </li>
                  </ul>
                  
                  <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="mt-auto w-full">
                    <Button className="w-full h-12 button-gradient">
                      Schedule Consultation
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
