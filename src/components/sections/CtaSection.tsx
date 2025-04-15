
import ScrollReveal from "../animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="rounded-3xl overflow-hidden border border-white/10 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20"></div>
            <div className="grid-pattern absolute inset-0 opacity-30"></div>
            
            <div className="relative z-10 py-16 px-8 md:py-24 md:px-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                Ready to Transform Your Business with <span className="text-gradient">Technology?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 md:mb-10">
                Contact us today to discuss how our innovative solutions can help you achieve your business objectives and stay ahead of the competition.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <Button size="lg" className="button-gradient">
                    Get in Touch
                    <ArrowRightIcon className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <Button size="lg" variant="outline">
                  View Our Portfolio
                </Button>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CtaSection;
