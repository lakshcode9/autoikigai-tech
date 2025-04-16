
import ScrollReveal from "../animations/ScrollReveal";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResultsSection = () => {
  return (
    <section className="section bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="container mx-auto px-4">
        <ScrollReveal delay={0}>
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="text-gradient">Real results</span> for real businesses
            </h2>
            <p className="text-lg text-muted-foreground">
              We don't just talk about leads - we deliver revenue. See some of our recent case studies below.
            </p>
          </div>
        </ScrollReveal>

        {/* First Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
          <ScrollReveal animation="left" delay={100}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight break-words">
                <span className="text-gradient">+$145,888</span> in new revenue added in 3 months
              </h3>
              
              <p className="text-lg text-muted-foreground">
                We secured seven new major partnerships for our client, resulting in over 250,000€ in revenue.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono break-words">
                    <span className="text-gradient">+$145,000</span> added to sales pipeline/month
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono break-words">
                    <span className="text-gradient">15+</span> meetings/month
                  </p>
                </div>
              </div>
              
              <div>
                <Button className="button-gradient mt-4">
                  Case Study Coming Soon
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="right" delay={200}>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-xl">
              <img 
                src="https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6f1b59334015ef72e84c9_%24145%2C000%20(5).png"
                alt="$145,000 revenue case study" 
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
        </div>

        {/* Second Case Study */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center lg:mt-20">
          <ScrollReveal animation="left" className="order-2 lg:order-2" delay={100}>
            <div className="relative rounded-lg overflow-hidden border border-white/10 shadow-xl">
              <img 
                src="https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6f0b7171fc1eb2b675727_case%20study%201.png"
                alt="Multiple new clients case study" 
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>
          
          <ScrollReveal animation="right" delay={200} className="order-1 lg:order-1">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold leading-tight break-words">
                Multiple new clients from <span className="text-gradient">multiple new markets</span>
              </h3>
              
              <p className="text-lg text-muted-foreground">
                Our client went from operating locally to operating globally. We were able to get them a meeting with Indeed.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono break-words">
                    <span className="text-gradient">+$85,000</span> added to sales pipeline/month
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono break-words">
                    <span className="text-gradient">+4</span> high-ticket clients
                  </p>
                </div>
              </div>
              
              <div>
                <Button className="button-gradient mt-4">
                  Case Study Coming Soon
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
