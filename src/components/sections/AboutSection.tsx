
import ScrollReveal from "../animations/ScrollReveal";
import { Button } from "@/components/ui/button";
import { CheckCircle, XCircle } from "lucide-react";

const AboutSection = () => {
  const oldSchoolApproach = [
    "Broad targeting by 'persona' or 'spray and pray'",
    "Cold emails flooding inboxes with irrelevant content",
    "Focusing only on job titles and company profiles",
    "Generic messaging that gets ignored",
    "High volume, low conversion approach"
  ];

  const ourApproach = [
    "Target prospects based on specific business pains",
    "Send personalized messages that actually resonate",
    "Focus on problems you can solve, not just titles",
    "Build meaningful connections that convert",
    "Quality over quantity approach"
  ];

  return (
    <section id="about" className="section bg-card">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              THE HARD TRUTH
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              Why most lead gen agencies <span className="text-gradient">FAIL</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              99% of agencies rely on broad targeting strategies that don't work anymore.
              Today's buyers are overwhelmed with cold sales emails. Their inboxes are
              flooded with irrelevant junk.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pixel-border p-4 md:p-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4 text-destructive">THE OLD GAME</h3>
            
            <div className="space-y-4">
              {oldSchoolApproach.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-card border border-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4 text-primary break-words">THE AUTOIKIGAI WAY</h3>
            
            <div className="space-y-4">
              {ourApproach.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <p className="text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-black/30 border border-white/10 rounded">
              <p className="text-gradient font-bold">THE SECRET FORMULA:</p>
              <p className="mt-2">
                Target prospects based on the specific business pains you can solve, 
                rather than just their job title and company.
              </p>
            </div>
          </div>
        </div>
        
        <ScrollReveal>
          <div className="mt-12 text-center">
            <Button className="button-gradient">
              Learn Our Targeting Strategy
            </Button>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutSection;
