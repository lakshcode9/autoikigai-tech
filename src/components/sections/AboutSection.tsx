
import ScrollReveal from "../animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const features = [
    "AI-Powered Solution Development",
    "Full-Stack Development Services",
    "User-Centered Design Approach",
    "Performance Optimization",
    "Technology Consulting",
    "Dedicated Support Team"
  ];

  return (
    <section id="about" className="section bg-card">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 lg:order-1">
            <ScrollReveal>
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden relative">
                  <img 
                    src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80" 
                    alt="Digital technology concept"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="absolute -top-5 -right-5 -bottom-5 -left-5 rounded-2xl border border-white/10 -z-10"></div>
                
                <Card className="absolute -bottom-6 -right-6 md:right-6 p-6 max-w-xs">
                  <div className="flex items-center justify-center mb-4">
                    <div className="h-16 w-16 rounded-full bg-primary/20 text-primary flex items-center justify-center">
                      <span className="text-2xl font-bold">5+</span>
                    </div>
                  </div>
                  <p className="text-center text-sm">
                    Years of experience in delivering cutting-edge technology solutions
                  </p>
                </Card>
              </div>
            </ScrollReveal>
          </div>
          
          <div className="order-1 lg:order-2">
            <ScrollReveal>
              <span className="inline-block text-sm font-medium text-primary mb-3">
                About autoikigai.tech
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                We create <span className="text-gradient">innovative solutions</span> for forward-thinking businesses
              </h2>
              <p className="text-muted-foreground mb-6">
                At autoikigai.tech, we combine advanced technologies with creative thinking to deliver solutions that not only meet the current needs of your business but also prepare you for future challenges and opportunities.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-primary mr-3" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              <Button className="button-gradient">
                Learn More About Us
              </Button>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
