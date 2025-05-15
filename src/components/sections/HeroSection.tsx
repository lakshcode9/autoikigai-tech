
import { Button } from "@/components/ui/button";
import ScrollReveal from "../animations/ScrollReveal";
import ParallaxItem from "../animations/ParallaxItem";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-28 pb-8 md:pb-12 px-4 md:px-6 overflow-hidden">
      {/* Background with subtle grid pattern */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/10 dark:bg-brand-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-brand-cyan/10 dark:bg-brand-purple/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-2 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} animation="fade">
            <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-primary/10 text-xs md:text-sm font-medium text-primary">
              Enterprise-Grade Revenue Generation
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={100}>
            <h1 className="text-foreground dark:text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold max-w-5xl mx-auto leading-[1.1] mb-6 md:mb-8">
              Strategic Growth <br />
              <span className="text-gradient">for ambitious B2B leaders.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12">
              Advanced automation and precision targeting systems to generate high-quality leads for mid-market and enterprise businesses
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-6 justify-center w-full max-w-lg mx-auto">
            <Link to="/solutions" className="w-full sm:w-auto">
              <Button size={isMobile ? "default" : "lg"} className="bg-primary text-primary-foreground hover:bg-primary/90 w-full h-12 sm:h-14 text-base font-medium">
                <span className="flex items-center justify-center w-full">
                  View Solutions
                  <ArrowRight className="ml-2 h-5 w-5" />
                </span>
              </Button>
            </Link>
            <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="w-full sm:w-auto">
              <Button size={isMobile ? "default" : "lg"} variant="outline" className="w-full h-12 sm:h-14 text-base border-primary/20 text-foreground hover:border-primary/50 hover:bg-primary/5">
                <span className="flex items-center justify-center w-full">
                  Schedule a Demo
                </span>
              </Button>
            </a>
          </ScrollReveal>
        </div>
      </div>

      {/* Subtle design elements */}
      <div className="absolute bottom-[10%] left-[15%] w-16 md:w-20 h-16 md:h-20 rotate-12 border border-primary/10 dark:border-white/10 rounded-lg backdrop-blur-sm bg-card/30 shadow-lg animate-float"></div>
      <div className="absolute top-[20%] right-[15%] w-12 md:w-16 h-12 md:h-16 -rotate-12 border border-primary/10 dark:border-white/10 rounded-lg backdrop-blur-sm bg-card/30 shadow-lg animate-float" style={{animationDelay: '1.5s'}}></div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-[30%] right-[25%] w-8 h-8 bg-brand-cyan/20 dark:bg-brand-cyan/30 rounded-full blur-sm animate-float" style={{animationDelay: '0.8s'}}></div>
      <div className="absolute top-[35%] left-[28%] w-6 h-6 bg-brand-purple/20 dark:bg-brand-purple/30 rounded-full blur-sm animate-float" style={{animationDelay: '1.2s'}}></div>
    </section>
  );
};

export default HeroSection;
