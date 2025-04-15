
import ScrollReveal from "../animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { QuoteIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  
  const testimonials = [
    {
      quote: "Working with autoikigai.tech has transformed how we approach technology. Their AI solutions have increased our productivity by 40% in just three months.",
      author: "Sarah Johnson",
      position: "CTO, TechInnovate Inc."
    },
    {
      quote: "The team's attention to detail and technical expertise is unmatched. They delivered a complex web application that exceeded our expectations and delighted our customers.",
      author: "Michael Chen",
      position: "Founder, DataFlow Systems"
    },
    {
      quote: "autoikigai.tech doesn't just provide technology solutions – they become true partners in your business success. Their strategic insights were invaluable to our growth.",
      author: "Elena Rodriguez",
      position: "VP of Operations, Nexus Group"
    }
  ];

  return (
    <section id="testimonials" className="section">
      <div className="container mx-auto">
        <ScrollReveal animation="bottom">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Testimonials
            </span>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">
              What Our <span className="text-gradient">Clients Say</span> About Us
            </h2>
            <p className="text-sm md:text-base text-muted-foreground">
              Don't just take our word for it – hear from the businesses we've helped transform through technology and innovation.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <ScrollReveal 
              key={index} 
              delay={index * 100} 
              animation={isMobile ? "bottom" : index === 0 ? "left" : index === 1 ? "bottom" : "right"}
              className="h-full"
            >
              <Card className="bg-secondary/50 border border-white/5 h-full group hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 md:p-8 flex flex-col h-full">
                  <QuoteIcon className="h-8 w-8 md:h-10 md:w-10 text-primary mb-4 md:mb-6 group-hover:text-brand-cyan transition-colors duration-300" />
                  <p className="text-base md:text-lg mb-6 md:mb-8 flex-grow">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-xs md:text-sm text-muted-foreground">{testimonial.position}</p>
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
