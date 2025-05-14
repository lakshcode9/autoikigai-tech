
import React from 'react';
import ScrollReveal from "@/components/animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const features = [
  {
    category: "Lead Generation",
    items: [
      "AI Cold Email Systems", 
      "Application Systems", 
      "Content Systems"
    ]
  },
  {
    category: "Project Management",
    items: [
      "AI Automated Fulfillment", 
      "AI Onboarding Systems", 
      "PM Systems"
    ]
  },
  {
    category: "Hiring Systems",
    items: [
      "Intake Systems", 
      "AI Scoring Systems", 
      "Trial Systems"
    ]
  },
  {
    category: "Sales Administration",
    items: [
      "Customized CRMs", 
      "AI Asset Generators", 
      "AI Nurture Systems"
    ]
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gradient">
            WHAT YOU GET
          </h2>
        </ScrollReveal>
        
        <div className="space-y-6">
          {features.map((feature, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="bg-card/50 border-white/5">
                <CardContent className="p-0">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-4 p-6">
                    <div className="flex items-center">
                      <h3 className="text-xl font-bold">{feature.category}</h3>
                    </div>
                    
                    {feature.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center p-4 bg-background/30 rounded-md">
                        <p className="text-lg">{item}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
