
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ExternalLink } from "lucide-react";
import ScrollReveal from "@/components/animations/ScrollReveal";

const caseStudies = [
  {
    title: "TechNova Solutions",
    description: "How we increased qualified leads by 347% with our AI-powered targeting system",
    industry: "SaaS",
    results: "347% increase in qualified leads"
  },
  {
    title: "Global Logistics Inc.",
    description: "Automated lead qualification process resulting in 62% higher conversion rates",
    industry: "Logistics",
    results: "62% higher conversion rates"
  },
  {
    title: "FinEdge Capital",
    description: "Customized CRM implementation led to 83% improvement in client relationship management",
    industry: "Financial Services",
    results: "83% improvement in client relations"
  }
];

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
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {caseStudies.map((caseStudy, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full flex flex-col bg-card/50 border-white/5 hover:border-primary/30 transition-all duration-300">
                <CardHeader>
                  <CardTitle>{caseStudy.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Industry: {caseStudy.industry}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p>{caseStudy.description}</p>
                  <p className="mt-4 font-semibold text-primary">
                    Results: {caseStudy.results}
                  </p>
                </CardContent>
                <CardFooter>
                  <a 
                    href="https://docs.google.com/spreadsheets/d/1Y_Ns4cvZKuZMChepMT4zUpEXj-OdwB_IN6dXRgf5GE8/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <Button variant="outline" className="w-full">
                      View Details
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </a>
                </CardFooter>
              </Card>
            </ScrollReveal>
          ))}
        </div>
        
        <div className="text-center">
          <ScrollReveal delay={300}>
            <a 
              href="https://docs.google.com/spreadsheets/d/1Y_Ns4cvZKuZMChepMT4zUpEXj-OdwB_IN6dXRgf5GE8/edit?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="outline">
                View All Case Studies
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
