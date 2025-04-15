
import ScrollReveal from "../animations/ScrollReveal";
import { ArrowRightIcon } from "lucide-react";
import { Button } from "@/components/ui/button";

const ResultsSection = () => {
  return (
    <section className="section bg-background relative overflow-hidden">
      <div className="absolute inset-0 grid-pattern opacity-20"></div>
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <ScrollReveal>
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                We <span className="text-gradient">connect you</span> with your dream clients.
              </h2>
              
              <p className="text-lg text-muted-foreground">
                We handle all the prospecting and lead generation. Your sales team just takes the calls and closes deals.
              </p>
              
              <div className="pixel-border bg-black/20 p-6 space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono">
                    <span className="text-primary">PIPELINE STATUS:</span> $10,000,000+ in pipeline for companies this year
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono">
                    <span className="text-primary">LEADS BOOKED:</span> Highly qualified decision-makers
                  </p>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="h-3 w-3 bg-primary rounded-full animate-pulse"></div>
                  <p className="font-mono">
                    <span className="text-primary">YOUR FOCUS:</span> Just take the sales calls and close deals
                  </p>
                </div>
              </div>
              
              <div>
                <Button className="button-gradient mt-4">
                  Get Your Dream Clients <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <div className="relative">
              <div className="crt-effect rounded-md overflow-hidden border border-white/20">
                <div className="bg-black/80 p-3 border-b border-white/20 flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-destructive"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500"></div>
                  <div className="text-xs text-center flex-1">INBOX.EXE</div>
                </div>
                
                <div className="bg-gray-900 p-4 overflow-hidden">
                  <div className="mb-4 flex items-center justify-between text-xs text-gray-400">
                    <div className="flex items-center">
                      <span className="mr-2">INBOX</span>
                      <span className="bg-primary/80 text-white px-1 rounded">33</span>
                    </div>
                    <span>1-50 OF 1,158</span>
                  </div>
                  
                  <div className="space-y-1">
                    {Array.from({ length: 8 }).map((_, index) => (
                      <div 
                        key={index}
                        className="bg-gray-800 hover:bg-gray-700 cursor-pointer flex items-center p-2 border-l-4 border-primary transition-all"
                      >
                        <div className="mr-3 w-6 text-center">
                          <span className="text-primary text-xs">&gt;</span>
                        </div>
                        <div className="flex-1 flex items-center gap-2">
                          <div className="font-bold text-xs text-white">Dream Team</div>
                          <div className="bg-primary/80 text-white text-[10px] px-1 rounded">NEW</div>
                          <div className="text-xs text-white truncate">New Booked Lead: Interested</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="absolute -right-4 -bottom-4 h-24 w-24 border-4 border-primary bg-black/50 rounded-full grid place-items-center z-10">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-white/80">SUCCESS</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
