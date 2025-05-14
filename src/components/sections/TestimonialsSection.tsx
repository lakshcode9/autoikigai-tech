
import React from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ScrollReveal from "@/components/animations/ScrollReveal";

const testimonials = [
  {
    name: "Sarah Thompson",
    role: "CEO, TechNova Solutions",
    content: "The autoikigai.systems team transformed our lead generation process. With their AI-powered targeting system, we're now connecting with prospects who truly need our solutions. Our conversion rates have skyrocketed!",
  },
  {
    name: "Michael Rodriguez",
    role: "COO, Global Logistics Inc.",
    content: "Working with Laksh and his team has been game-changing for our business. Their automation expertise allowed us to scale our operations without adding headcount, and their lead qualification system ensures we're focusing on the right opportunities.",
  },
  {
    name: "Jennifer Wu",
    role: "Marketing Director, FinEdge Capital",
    content: "The customized CRM implementation and AI nurture systems have revolutionized how we manage client relationships. We're seeing higher retention rates and increased customer satisfaction across the board.",
  },
  {
    name: "Robert Keller",
    role: "VP of Sales, Quantum Software",
    content: "I was skeptical about AI-powered lead generation at first, but the results speak for themselves. Our sales team is now focusing on qualified leads and closing deals faster than ever before.",
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-secondary/5">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gradient">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Trusted by forward-thinking companies to deliver exceptional automation solutions
            </p>
          </ScrollReveal>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="h-full bg-card/50 border-white/5">
                <CardHeader className="pb-2">
                  <div className="flex items-center mb-2">
                    <div className="h-1 w-12 bg-primary rounded-full"></div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-6 text-lg italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-muted-foreground">{testimonial.role}</p>
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

export default TestimonialsSection;
