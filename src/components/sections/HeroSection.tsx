
import { Button } from "@/components/ui/button";
import ScrollReveal from "../animations/ScrollReveal";
import ParallaxItem from "../animations/ParallaxItem";
import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const isMobile = useIsMobile();
  
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 md:pt-24 pb-8 md:pb-12 px-4 md:px-6 overflow-hidden grid-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-48 md:w-72 h-48 md:h-72 bg-brand-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-48 md:w-72 h-48 md:h-72 bg-brand-cyan/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <ScrollReveal delay={0} animation="fade">
            <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-secondary text-xs md:text-sm font-medium text-foreground">
              Transforming Ideas into Digital Realities
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={100}>
            <h1 className="text-gradient text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-bold max-w-4xl leading-tight mb-4 md:mb-6">
              Growth systems for B2B leaders who don't do guesswork.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={200}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-6 md:mb-10">
              Autoikigai.tech delivers cutting-edge technology solutions that transform your business operations, enhance customer experiences, and drive growth in the digital age.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <Link to="/contact">
              <Button size={isMobile ? "default" : "lg"} className="button-gradient w-full sm:w-auto">
                Get Started
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Button>
            </Link>
            <Link to="/about">
              <Button size={isMobile ? "default" : "lg"} variant="outline" className="w-full sm:w-auto">
                Learn More
              </Button>
            </Link>
          </ScrollReveal>

          <ParallaxItem className="mt-12 md:mt-20" speed={0.2}>
            <ScrollReveal animation="fade" delay={400}>
              <a href="#about" className="flex flex-col items-center group">
                <span className="text-xs md:text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <ArrowDownIcon className="h-5 w-5 md:h-6 md:w-6 animate-bounce text-primary" />
              </a>
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
