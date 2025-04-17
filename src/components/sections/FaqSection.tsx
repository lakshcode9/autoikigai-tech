
import { useState } from 'react';
import ScrollReveal from "@/components/animations/ScrollReveal";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FaqSection = () => {
  const [expanded, setExpanded] = useState<string | undefined>(undefined);
  
  const faqs = [
    {
      id: "faq-1",
      question: "Why do this instead of hiring an SDR?",
      answer: "Unlike traditional SDRs that require extensive training and management, our solutions provide immediate value with lower costs. We leverage specialized technology and proven systems to generate high-quality leads consistently without the overhead of hiring, onboarding, and managing full-time staff."
    },
    {
      id: "faq-2",
      question: "How much more cost-effective is this, really?",
      answer: "Our solutions typically cost 30-50% less than hiring full-time SDRs when you consider total employment costs (salary, benefits, training, management time). Additionally, our performance-based pricing models ensure you only pay for results, further reducing your risk and increasing ROI."
    },
    {
      id: "faq-3",
      question: "How does payment work?",
      answer: "We offer flexible payment structures tailored to your business needs. Options include monthly retainers, performance-based models (pay per qualified lead), or hybrid approaches. All contracts include clear deliverables, reporting metrics, and regular performance reviews to ensure transparency."
    },
    {
      id: "faq-4",
      question: "How quickly do we see results?",
      answer: "Most clients begin seeing initial results within 2-4 weeks of implementation. The first month typically involves setup, targeting refinement, and initial campaign launches. By month two, you should expect a steady flow of qualified opportunities, with continuous optimization improving results over time."
    },
    {
      id: "faq-5",
      question: "What's your refund policy?",
      answer: "We stand behind our services with a satisfaction guarantee. If we fail to deliver on the agreed-upon metrics within the first 60 days, we offer a partial refund or additional service credits. Specific refund terms are outlined in your service agreement based on your chosen package."
    }
  ];

  const handleChange = (value: string) => {
    setExpanded(value === expanded ? undefined : value);
  };

  return (
    <section id="faq" className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4 mx-auto">
              <HelpCircle size={24} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Commonly asked <span className="text-gradient">questions</span>
            </h2>
            <p className="text-muted-foreground">
              Find answers to the most common questions about our services and approach.
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Accordion type="single" collapsible className="bg-secondary/50 rounded-lg border border-white/5 overflow-hidden">
              {faqs.map((faq, index) => (
                <AccordionItem key={faq.id} value={faq.id} className="border-white/10">
                  <AccordionTrigger className="px-6 py-4 text-left text-lg font-medium hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
