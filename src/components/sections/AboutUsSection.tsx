
import ScrollReveal from "../animations/ScrollReveal";
import { useIsMobile } from "@/hooks/use-mobile";

const AboutUsSection = () => {
  const isMobile = useIsMobile();

  return (
    <section className="section bg-card">
      <div className="container mx-auto">
        <ScrollReveal animation={isMobile ? "fade" : "bottom"}>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 leading-tight overflow-hidden">
              About <span className="text-gradient">Us</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden border border-white/10">
                <img 
                  src="https://cdn.prod.website-files.com/66ddd8483555ab75c693c7bd/66f6f0b7171fc1eb2b675727_case%20study%201.png"
                  alt="Founder" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="text-left space-y-4 px-2">
                <p className="text-lg">
                  Founded by Laksh Pujary, autoikigai is the culmination of extensive experience in digital innovation and business transformation.
                </p>
                
                <p className="text-lg">
                  With a background spanning from software engineering to digital marketing and business development, Laksh created autoikigai to help businesses leverage technology to achieve sustainable growth.
                </p>
                
                <p className="text-lg">
                  Our approach combines cutting-edge technical expertise with strategic business insights to deliver solutions that not only solve today's challenges but position your business for future success.
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutUsSection;
