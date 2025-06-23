
import { useState } from "react";
import ScrollReveal from "../animations/ScrollReveal";
import { Plus, Minus } from "lucide-react";

const FaqSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqs = [
    {
      question: "How quickly do we see results?",
      answer: "Most clients begin seeing initial results within 3-5 days of implementation. The first month typically involves setup, targeting refinement, and initial campaign launches. By month two, you should expect a steady flow of qualified opportunities, with continuous optimization improving results over time."
    },
    {
      question: "What makes your approach different from other lead generation services?",
      answer: "We focus on quality over quantity. Our multi-channel approach combines targeted outreach, content marketing, and strategic partnerships to generate highly qualified leads that are more likely to convert into actual revenue."
    },
    {
      question: "Do you work with companies in specific industries?",
      answer: "We work with B2B companies across various industries, with particular expertise in SaaS, professional services, manufacturing, and technology sectors. Our strategies are customized based on your specific industry and target market."
    },
    {
      question: "What's included in your service?",
      answer: "Our comprehensive service includes strategy development, campaign setup, content creation, lead qualification, CRM integration, ongoing optimization, and detailed reporting. We handle the entire lead generation process from start to finish."
    },
    {
      question: "How do you ensure lead quality?",
      answer: "We use advanced targeting criteria, thorough prospect research, and multi-step qualification processes. Every lead is scored and validated before being passed to your sales team, ensuring you only spend time on high-probability opportunities."
    },
    {
      question: "What kind of reporting do you provide?",
      answer: "We provide comprehensive weekly and monthly reports covering campaign performance, lead quality metrics, conversion rates, ROI analysis, and strategic recommendations for continuous improvement."
    }
  ];

  return (
    <section className="section bg-background">
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our lead generation services
            </p>
          </div>
        </ScrollReveal>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border-b border-border/20 last:border-b-0">
                <button
                  className="w-full py-6 text-left flex items-center justify-between hover:text-primary transition-colors"
                  onClick={() => toggleItem(index)}
                >
                  <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                  {openItems.includes(index) ? (
                    <Minus className="h-5 w-5 text-primary flex-shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                </button>
                
                <div className={`overflow-hidden transition-all duration-300 ${
                  openItems.includes(index) ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FaqSection;
