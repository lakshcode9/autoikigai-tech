
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';

const CaseStudies = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal>
                <h1 className="text-gradient text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Case Studies
                </h1>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <p className="text-muted-foreground text-lg mb-12">
                  See how our solutions have transformed businesses and delivered measurable results
                </p>
              </ScrollReveal>
              
              <ScrollReveal delay={200}>
                <div className="bg-card/50 border border-white/10 p-8 md:p-12 rounded-xl">
                  <h2 className="text-2xl md:text-3xl font-bold mb-4">
                    View Our Complete Case Studies
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Access detailed case studies showing real results from our clients
                  </p>
                  <a 
                    href="https://docs.google.com/spreadsheets/d/1Y_Ns4cvZKuZMChepMT4zUpEXj-OdwB_IN6dXRgf5GE8/edit?usp=sharing" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="button-gradient text-lg px-8 py-4">
                      View Case Studies
                      <ExternalLink className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={300}>
                <div className="mt-12">
                  <a href="https://tally.so/r/w85kvz">
                    <Button variant="outline" size="lg">
                      Discuss Your Project
                    </Button>
                  </a>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default CaseStudies;
