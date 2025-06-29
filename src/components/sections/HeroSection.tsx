import { Button } from "@/components/ui/button";
import ScrollReveal from "../animations/ScrollReveal";
import ParallaxItem from "../animations/ParallaxItem";
import { ArrowRight } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-28 pb-8 md:pb-12 px-4 md:px-6 overflow-hidden animated-bg particle-bg">
      {/* Animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 -left-20 w-64 md:w-96 h-64 md:h-96 bg-brand-blue/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 -right-20 w-64 md:w-96 h-64 md:h-96 bg-brand-cyan/20 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        
        {/* Rotating elements */}
        <div className="absolute top-1/3 left-1/4 w-32 h-32 border-2 border-primary/20 rounded-lg rotate-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-24 h-24 border-2 border-brand-cyan/30 rounded-full rotate-reverse"></div>
        
        {/* Morphing shapes */}
        <div className="absolute top-1/2 left-1/6 w-16 h-16 bg-brand-purple/30 morph-shape"></div>
        <div className="absolute top-2/3 right-1/6 w-20 h-20 bg-brand-blue/30 morph-shape" style={{animationDelay: '2s'}}></div>
        
        {/* Floating particles */}
        <div className="absolute top-1/4 left-1/3 w-4 h-4 bg-primary/50 rounded-full bounce-slow"></div>
        <div className="absolute top-3/4 left-2/3 w-3 h-3 bg-brand-cyan/50 rounded-full bounce-slow" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-1/2 right-1/3 w-5 h-5 bg-brand-purple/50 rounded-full bounce-slow" style={{animationDelay: '0.5s'}}></div>
      </div>
      
      <div className="container mx-auto relative z-10 px-2 md:px-6 max-w-6xl">
        <div className="flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} animation="fade">
            <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-primary/20 text-xs md:text-sm font-medium text-primary pulse-glow">
              Enterprise-Grade Revenue Generation
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={100}>
            <h1 className="text-foreground dark:text-white text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-bold max-w-5xl mx-auto leading-[1.1] mb-6 md:mb-8 hover-lift">
              Strategic Growth <br />
              <span className="text-gradient glitch" data-text="for ambitious B2B leaders.">for ambitious B2B leaders.</span>
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={200}>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground dark:text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 slide-in-up">
              From complete automation systems to comprehensive enterprise solutions, we generate high-quality leads for businesses at every scale
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-4 justify-center w-full max-w-md mx-auto">
            <Link to="/solutions" className="w-full sm:w-auto">
              <Button size="default" className="bg-primary text-white hover:bg-primary/90 w-full h-10 text-sm font-medium button-gradient hover-lift pulse-glow">
                <span className="flex items-center justify-center w-full">
                  Enterprise Solutions
                  <ArrowRight className="ml-2 h-4 w-4" />
                </span>
              </Button>
            </Link>
            <Link to="/sales-system" className="w-full sm:w-auto">
              <Button size="default" variant="outline" className="w-full h-10 text-sm border-primary/20 text-foreground hover:border-primary/50 hover:bg-primary/5 hover-lift">
                <span className="flex items-center justify-center w-full">
                  Sales System
                </span>
              </Button>
            </Link>
          </ScrollReveal>
        </div>
      </div>

      {/* Enhanced floating design elements */}
      <ParallaxItem speed={0.1} className="absolute bottom-[10%] left-[15%]">
        <div className="w-16 md:w-20 h-16 md:h-20 rotate-12 border border-primary/20 rounded-lg backdrop-blur-sm bg-card/30 shadow-lg animate-float hover-lift pulse-glow"></div>
      </ParallaxItem>
      
      <ParallaxItem speed={0.15} className="absolute top-[20%] right-[15%]">
        <div className="w-12 md:w-16 h-12 md:h-16 -rotate-12 border border-primary/20 rounded-lg backdrop-blur-sm bg-card/30 shadow-lg animate-float hover-lift" style={{animationDelay: '1.5s'}}></div>
      </ParallaxItem>
      
      {/* Additional animated decorative elements */}
      <ParallaxItem speed={0.08} className="absolute bottom-[30%] right-[25%]">
        <div className="w-8 h-8 bg-brand-cyan/30 rounded-full blur-sm animate-float bounce-slow" style={{animationDelay: '0.8s'}}></div>
      </ParallaxItem>
      
      <ParallaxItem speed={0.12} className="absolute top-[35%] left-[28%]">
        <div className="w-6 h-6 bg-brand-purple/30 rounded-full blur-sm animate-float bounce-slow" style={{animationDelay: '1.2s'}}></div>
      </ParallaxItem>

      {/* New animated elements */}
      <div className="absolute top-[15%] left-[10%] w-2 h-2 bg-primary/60 rounded-full animate-ping"></div>
      <div className="absolute bottom-[20%] right-[10%] w-3 h-3 bg-brand-cyan/60 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>
      <div className="absolute top-[60%] left-[5%] w-1 h-1 bg-brand-purple/60 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background/20 pointer-events-none"></div>
    </section>
  );
};

export default HeroSection;