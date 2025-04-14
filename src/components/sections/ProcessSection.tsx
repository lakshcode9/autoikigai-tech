
import ScrollReveal from "../animations/ScrollReveal";
import { Card, CardContent } from "@/components/ui/card";

const ProcessSection = () => {
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We begin by understanding your business objectives, challenges, and vision to tailor the perfect solution."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a comprehensive strategy with a clear roadmap for implementation and success metrics."
    },
    {
      number: "03",
      title: "Design",
      description: "We create user-centered designs that align with your brand identity and deliver exceptional experiences."
    },
    {
      number: "04",
      title: "Development",
      description: "Our experts build robust, scalable solutions using the latest technologies and best practices."
    },
    {
      number: "05",
      title: "Testing",
      description: "Rigorous quality assurance ensures that every solution meets our high standards before deployment."
    },
    {
      number: "06",
      title: "Launch & Support",
      description: "We ensure a smooth deployment and provide ongoing support to optimize performance and address issues."
    }
  ];

  return (
    <section id="process" className="section bg-card">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              A <span className="text-gradient">Systematic Approach</span> to Problem Solving
            </h2>
            <p className="text-muted-foreground">
              We follow a structured methodology that ensures clarity, efficiency, and exceptional results for every project we undertake.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processSteps.map((step, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <Card className="bg-secondary/50 border border-white/5 overflow-hidden">
                <CardContent className="p-0">
                  <div className="bg-background p-6 flex items-center justify-between border-b border-white/5">
                    <span className="text-gradient text-5xl font-bold">
                      {step.number}
                    </span>
                    <div className="w-16 h-1 bg-gradient-to-r from-brand-blue to-brand-cyan rounded-full"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </CardContent>
              </Card>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
