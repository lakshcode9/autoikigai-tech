
import { Button } from "@/components/ui/button";
import ScrollReveal from "../animations/ScrollReveal";
import ParallaxItem from "../animations/ParallaxItem";
import { ArrowRightIcon, ArrowDownIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden grid-pattern">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-brand-blue/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-brand-cyan/20 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col items-center text-center">
          <ScrollReveal>
            <span className="inline-block py-1 px-3 mb-6 rounded-full bg-secondary text-sm font-medium text-foreground">
              Transforming Ideas into Digital Realities
            </span>
          </ScrollReveal>
          
          <ScrollReveal delay={200}>
            <h1 className="text-gradient text-4xl md:text-6xl lg:text-7xl font-bold max-w-4xl leading-tight mb-6">
              Revolutionize Your Business with AI-Powered Solutions
            </h1>
          </ScrollReveal>
          
          <ScrollReveal delay={400}>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10">
              autoikigai.tech delivers cutting-edge technology solutions that transform your business operations, enhance customer experiences, and drive growth in the digital age.
            </p>
          </ScrollReveal>
          
          <ScrollReveal delay={600} className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="button-gradient">
              Get Started
              <ArrowRightIcon className="ml-2 h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </ScrollReveal>

          <ParallaxItem className="mt-20" speed={0.2}>
            <ScrollReveal delay={800}>
              <a href="#about" className="flex flex-col items-center group">
                <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
                <ArrowDownIcon className="h-6 w-6 animate-bounce text-primary" />
              </a>
            </ScrollReveal>
          </ParallaxItem>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute bottom-[10%] left-[15%] w-24 h-24 rotate-12 border border-white/10 rounded-lg animate-float"></div>
      <div className="absolute top-[20%] right-[15%] w-16 h-16 -rotate-12 border border-white/10 rounded-lg animate-float" style={{animationDelay: '1.5s'}}></div>
    </section>
  );
};

export default HeroSection;
