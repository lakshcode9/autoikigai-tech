
import { Button } from "@/components/ui/button";
import ScrollReveal from "../animations/ScrollReveal";
import ParallaxItem from "../animations/ParallaxItem";
import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-16 md:pt-20 pb-8 md:pb-12 px-4 md:px-6 overflow-hidden grid-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-48 md:w-72 h-48 md:h-72 bg-brand-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-48 md:w-72 h-48 md:h-72 bg-brand-cyan/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-2 md:px-6 max-w-4xl">
        <div className="flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} animation="fade">
            <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-secondary text-xs md:text-sm font-medium text-foreground">
              AI-Powered B2B Lead Generation
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={100}>
            <h1 className="text-gradient text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold max-w-3xl mx-auto leading-tight mb-4 md:mb-6 text-center">
              Increase Revenue with Automated Lead Generation
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={200}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 md:mb-10 text-center">
              Generate high-quality B2B leads with our AI-powered targeting system that focuses on real business pains
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
            <Link to="/sales-system">
              <Button size={isMobile ? "default" : "lg"} className="button-gradient w-full sm:w-auto">
                <span className="flex items-center justify-center w-full">
                  View Sales System
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </Link>
            <Button size={isMobile ? "default" : "lg"} variant="outline" className="w-full sm:w-auto">
              <a href="https://cal.com/laksh-pujary-7lvydw/15min" className="flex items-center justify-center w-full">
                Schedule a Demo
              </a>
            </Button>
          </ScrollReveal>

          <ParallaxItem className="mt-6 md:mt-12" speed={0.2}>
            <ScrollReveal animation="fade" delay={400}>
              <Link to="#pricing" className="flex flex-col items-center group">
                <span className="text-xs md:text-sm text-muted-foreground mb-2">View Pricing</span>
                <ArrowDownIcon className="h-5 w-5 md:h-6 md:w-6 animate-bounce text-primary" />
              </Link>
            </ScrollReveal>
          </ParallaxItem>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-[10%] left-[15%] w-16 md:w-24 h-16 md:h-24 rotate-12 border border-white/10 rounded-lg animate-float"></div>
      <div className="absolute top-[20%] right-[15%] w-12 md:w-16 h-12 md:h-16 -rotate-12 border border-white/10 rounded-lg animate-float" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default HeroSection;
