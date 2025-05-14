
import { Button } from "@/components/ui/button";
import ScrollReveal from "../animations/ScrollReveal";
import ParallaxItem from "../animations/ParallaxItem";
import { ArrowRight, ArrowDown } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-28 pb-8 md:pb-12 px-4 md:px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none bg-muted">
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-brand-cyan/5 rounded-full blur-3xl"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-2 md:px-6 max-w-5xl">
        <div className="flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} animation="fade">
            <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-primary/10 text-xs md:text-sm font-medium text-primary">
              AI-Powered B2B Lead Generation
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={100}>
            <h1 className="text-gradient text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold max-w-4xl mx-auto leading-tight mb-6 md:mb-8">
              Increase Revenue with Strategic Automation
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8 md:mb-12">
              Generate high-quality B2B leads with our enterprise-grade targeting system focused on genuine business challenges
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto">
            <Link to="/solutions" className="w-full sm:w-auto">
              <Button size={isMobile ? "default" : "lg"} className="button-gradient w-full h-12 sm:h-14 text-base">
                <span className="flex items-center justify-center w-full">
                  View Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="w-full sm:w-auto">
              <Button size={isMobile ? "default" : "lg"} variant="outline" className="w-full h-12 sm:h-14 text-base border-primary/20 hover:border-primary/50">
                <span className="flex items-center justify-center w-full">
                  Schedule a Demo
                </span>
              </Button>
            </a>
          </ScrollReveal>

          <ParallaxItem className="mt-12 md:mt-16" speed={0.2}>
            <ScrollReveal animation="fade" delay={400}>
              <Link to="#pricing" className="flex flex-col items-center group">
                <span className="text-sm md:text-base text-muted-foreground mb-3">Scroll to View Pricing</span>
                <ArrowDown className="h-5 w-5 md:h-6 md:w-6 animate-bounce text-primary" />
              </Link>
            </ScrollReveal>
          </ParallaxItem>
        </div>
      </div>

      {/* Subtle design elements */}
      <div className="absolute bottom-[10%] left-[15%] w-16 md:w-20 h-16 md:h-20 rotate-12 border border-primary/10 rounded-lg animate-float"></div>
      <div className="absolute top-[20%] right-[15%] w-12 md:w-16 h-12 md:h-16 -rotate-12 border border-primary/10 rounded-lg animate-float" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default HeroSection;
