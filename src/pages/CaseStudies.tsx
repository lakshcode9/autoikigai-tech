
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const caseStudies = [
  {
    title: "TechNova Solutions: 347% Increase in Qualified Leads",
    description: "B2B SaaS platform specializing in workflow automation",
    challenge: "TechNova was struggling to generate qualified leads despite significant ad spend. Their sales team was wasting time on prospects who weren't a good fit.",
    solution: "We implemented our AI-powered targeting system to identify companies experiencing specific pain points that TechNova's solutions could address. We created personalized outreach campaigns based on these insights.",
    results: [
      "347% increase in qualified leads",
      "68% reduction in customer acquisition cost",
      "Sales cycle shortened from 45 days to 21 days",
      "ROI of 592% in the first 6 months"
    ],
    quote: "The autoikigai.systems team transformed our lead generation process. With their AI-powered targeting, we're now connecting with prospects who truly need our solutions."
  },
  {
    title: "Global Logistics Inc.: 62% Higher Conversion Rates",
    description: "International logistics provider serving B2B customers",
    challenge: "Global Logistics was struggling with lead qualification, resulting in their sales team pursuing too many unqualified leads and missing opportunities with high-value prospects.",
    solution: "We built an automated lead qualification system using AI to analyze prospect behavior, engagement patterns, and company data to prioritize leads based on their likelihood to convert.",
    results: [
      "62% increase in conversion rates",
      "42% improvement in sales productivity",
      "$1.2M additional revenue in first year",
      "89% of sales team reported improved lead quality"
    ],
    quote: "Working with Laksh and his team has been game-changing for our business. Their automation expertise allowed us to scale our operations without adding headcount."
  },
  {
    title: "FinEdge Capital: 83% Improvement in Client Relations",
    description: "Financial services firm providing investment solutions",
    challenge: "FinEdge was using multiple disconnected systems to manage client relationships, leading to information silos, missed follow-ups, and inconsistent client experiences.",
    solution: "We implemented a customized CRM integrated with AI nurture systems to centralize client data, automate routine communications, and provide timely insights to relationship managers.",
    results: [
      "83% improvement in client relationship scores",
      "76% reduction in administrative tasks",
      "32% increase in assets under management",
      "91% client retention rate (up from 74%)"
    ],
    quote: "The customized CRM implementation and AI nurture systems have revolutionized how we manage client relationships. We're seeing higher retention rates and increased customer satisfaction."
  },
  {
    title: "Quantum Software: 215% ROI on Lead Generation",
    description: "Enterprise software provider for data management",
    challenge: "Quantum Software had a long sales cycle and was struggling to keep prospects engaged throughout the process, leading to high drop-off rates.",
    solution: "We designed an AI-powered nurture system with personalized content delivery based on prospect engagement patterns and specific interests.",
    results: [
      "215% ROI on lead generation activities",
      "54% decrease in prospect drop-off",
      "42% increase in deal size",
      "3x more marketing qualified leads converting to sales qualified leads"
    ],
    quote: "I was skeptical about AI-powered lead generation at first, but the results speak for themselves. Our sales team is now focusing on qualified leads and closing deals faster than ever before."
  }
];

const CaseStudies = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <ScrollReveal>
                <h1 className="text-gradient text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Case Studies
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-muted-foreground text-lg mb-12">
                  See how our AI-powered automation solutions have transformed businesses and delivered measurable results
                </p>
              </ScrollReveal>
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="bg-card/50 border-white/5 overflow-hidden">
                    <CardHeader className="border-b border-white/5 bg-secondary/10">
                      <CardTitle className="text-2xl md:text-3xl">{study.title}</CardTitle>
                      <CardDescription className="text-muted-foreground text-lg">
                        {study.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold mb-2">Challenge</h3>
                            <p>{study.challenge}</p>
                          </div>
                          <div>
                            <h3 className="text-xl font-bold mb-2">Solution</h3>
                            <p>{study.solution}</p>
                          </div>
                        </div>
                        <div className="space-y-6">
                          <div>
                            <h3 className="text-xl font-bold mb-2">Results</h3>
                            <ul className="list-disc pl-5 space-y-2">
                              {study.results.map((result, i) => (
                                <li key={i}>{result}</li>
                              ))}
                            </ul>
                          </div>
                          <div className="bg-primary/5 border-l-4 border-primary p-4">
                            <p className="italic">"{study.quote}"</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="text-center mt-16">
              <ScrollReveal>
                <a href="https://cal.com/laksh-pujary-7lvydw/15min">
                  <Button size="lg" className="button-gradient">
                    Discuss Your Project
                  </Button>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
