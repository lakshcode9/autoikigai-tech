
import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRightIcon } from 'lucide-react';
import ScrollReveal from '@/components/animations/ScrollReveal';

const Contact = () => {
  // Remove cal.com script as we're now using Tally.so
  
  return (
    <div className="bg-background min-h-screen w-full overflow-hidden">
      <Navbar />
      <main className="pt-24 md:pt-32 px-4 md:px-6 pb-16">
        <div className="container mx-auto">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold text-center mb-6 text-gradient">
              Contact Us
            </h1>
            <p className="text-center text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              Schedule a call to discuss how our AI-powered automation solutions can help your business grow
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <ScrollReveal animation="left">
              <div className="space-y-6">
                <h2 className="text-2xl font-bold">Book a Call</h2>
                <p className="text-muted-foreground">
                  Schedule a 15-minute discovery call with our team to discuss your business needs and how we can help.
                </p>
                <div className="mt-6">
                  <a href="https://tally.so/r/w85kvz">
                    <Button size="lg" className="button-gradient">
                      Schedule a Call 
                      <ArrowRightIcon className="ml-2 h-5 w-5" />
                    </Button>
                  </a>
                </div>
              </div>
            </ScrollReveal>
            
            <ScrollReveal animation="right">
              <Card className="bg-card/50 border-white/10">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">info@autoikigai.systems</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Business Hours</h4>
                      <p className="text-muted-foreground">Monday to Friday: 9am - 5pm EST</p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Follow Us</h4>
                      <div className="flex space-x-4 mt-2">
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          Twitter
                        </a>
                        <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
