
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
      
      <div className="container mx-auto relative z-10 px-2 md:px-6">
        <div className="flex flex-col items-center justify-center text-center">
          <ScrollReveal delay={0} animation="fade">
            <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-secondary text-xs md:text-sm font-medium text-foreground">
              Transforming Ideas into Digital Realities
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={100}>
            <h1 className="text-gradient text-2xl md:text-4xl lg:text-6xl xl:text-7xl font-bold max-w-4xl leading-tight mb-4 md:mb-6 text-center">
              Growth systems for B2B leaders who don't do guesswork.
            </h1>
          </ScrollReveal>
          
          <ScrollReveal animation="fade" delay={200}>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mb-6 md:mb-10 text-center">
              Autoikigai.tech delivers cutting-edge technology solutions that transform your business operations, enhance customer experiences, and drive growth in the digital age.
            </p>
          </ScrollReveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-center w-full max-w-6xl mx-auto">
            {/* Left side: Call to action buttons */}
            <div className="order-2 md:order-1">
              <ScrollReveal animation="scale" delay={300} className="flex flex-col sm:flex-row gap-4 w-full justify-center md:justify-start">
                <Button size={isMobile ? "default" : "lg"} className="button-gradient w-full sm:w-auto">
                  <a href="#about">Get Started</a>
                  <ArrowRightIcon className="ml-2 h-4 w-4" />
                </Button>
                <Button size={isMobile ? "default" : "lg"} variant="outline" className="w-full sm:w-auto">
                  <a href="https://cal.com/laksh-pujary-7lvydw/15min">Learn More</a>
                </Button>
              </ScrollReveal>

              <ScrollReveal animation="fade" delay={400} className="mt-6">
                <Button variant="link" className="text-muted-foreground hover:text-primary">
                  <a href="#about">Learn our targeting strategy</a>
                  <ArrowDownIcon className="ml-2 h-4 w-4" />
                </Button>
              </ScrollReveal>
            </div>
            
            {/* Right side: Pixel art graphic */}
            <div className="order-1 md:order-2 flex justify-center">
              <ScrollReveal animation="fade" delay={200}>
                <div className="w-full max-w-md">
                  <div className="aspect-square w-full relative overflow-hidden rounded-md bg-black/30 border border-white/10">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4/5 h-4/5 relative">
                        <div className="pixel-art-computer absolute w-full h-full" style={{
                          backgroundImage: "url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgdmlld0JveD0iMCAwIDIwMCAyMDAiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJlY3QgeD0iNTAiIHk9IjUwIiB3aWR0aD0iMTAwIiBoZWlnaHQ9IjgwIiBmaWxsPSIjMUVBRURCIi8+PHJlY3QgeD0iNDAiIHk9IjEzMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzdFNjlBQiIvPjxyZWN0IHg9IjcwIiB5PSIxNTAiIHdpZHRoPSI2MCIgaGVpZ2h0PSIyMCIgZmlsbD0iIzlCODdGNSIvPjxyZWN0IHg9IjU1IiB5PSI1NSIgd2lkdGg9IjkwIiBoZWlnaHQ9IjcwIiBmaWxsPSIjMUExRjJDIi8+PHJlY3QgeD0iNjAiIHk9IjYwIiB3aWR0aD0iODAiIGhlaWdodD0iMTAiIGZpbGw9IiM5Qjg3RjUiLz48cmVjdCB4PSI2MCIgeT0iNzUiIHdpZHRoPSI4MCIgaGVpZ2h0PSIxMCIgZmlsbD0iIzFFQUVEQiIvPjxyZWN0IHg9IjYwIiB5PSI5MCIgd2lkdGg9IjgwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjOUI4N0Y1Ii8+PHJlY3QgeD0iNjAiIHk9IjEwNSIgd2lkdGg9IjUwIiBoZWlnaHQ9IjEwIiBmaWxsPSIjMUVBRURCIi8+PC9zdmc+')",
                          backgroundSize: 'contain',
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'center'
                        }}></div>
                      </div>
                    </div>
                    <div className="absolute inset-0 pointer-events-none crt-effect"></div>
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          <ParallaxItem className="mt-10 md:mt-16" speed={0.2}>
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
