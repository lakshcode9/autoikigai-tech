
import ScrollReveal from "../animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, Code, BarChart, Lightbulb, CheckCircle, Globe } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Bot className="h-10 w-10" />,
      title: "AI Solutions",
      description: "Custom AI solutions tailored to optimize your business processes and decision-making."
    },
    {
      icon: <Code className="h-10 w-10" />,
      title: "Web Development",
      description: "Responsive, high-performance websites and web applications built with modern technologies."
    },
    {
      icon: <Globe className="h-10 w-10" />,
      title: "Digital Transformation",
      description: "End-to-end digital transformation strategies to revolutionize your business operations."
    },
    {
      icon: <BarChart className="h-10 w-10" />,
      title: "Data Analytics",
      description: "Turn your data into actionable insights with our advanced analytics solutions."
    },
    {
      icon: <Lightbulb className="h-10 w-10" />,
      title: "Innovation Consulting",
      description: "Strategic guidance to help you identify and implement innovative technologies."
    },
    {
      icon: <CheckCircle className="h-10 w-10" />,
      title: "Quality Assurance",
      description: "Comprehensive testing and quality assurance to ensure flawless digital products."
    }
  ];

  return (
    <section id="services" className="section">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Comprehensive <span className="text-gradient">Tech Solutions</span> for Every Business Need
            </h2>
            <p className="text-muted-foreground">
              We offer a wide range of services designed to help businesses harness the full potential of technology and achieve their goals in the digital landscape.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <ScrollReveal key={index} delay={index * 100} className="h-full">
              <Card className="bg-secondary/50 border border-white/5 h-full hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex flex-col h-full">
                  <div className="mb-5 text-primary group-hover:text-brand-cyan transition-colors duration-300">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
