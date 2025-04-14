
import ScrollReveal from "../animations/ScrollReveal";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { CheckCircle, XCircle } from "lucide-react";
import { cn } from "@/lib/utils";

const ServicesSection = () => {
  const traditionalApproaches = [
    {
      title: "Generic Outreach:",
      description: "Messaging is too broad and fails to resonate with prospect's unique pain points."
    },
    {
      title: "Missed Opportunities:",
      description: "You might overlook potential clients who need your help but don't fit the usual criteria."
    },
    {
      title: "Wasted Resources:",
      description: "Time and effort are spent on leads that aren't interested, leading to you losing money and time."
    },
    {
      title: "Advertising Cost Spiral:",
      description: "When generic cold emails fail to convert, companies panic-pivot to paid ads, and spend way too much cash on pricey PPC campaigns and inflated CPAs - a budget-draining cycle that rarely solves the core prospecting problem."
    },
    {
      title: "Opportunity Cost Creep:",
      description: "While your team wastes billable hours chasing unqualified prospects, your competitors are closing deals."
    }
  ];

  const autoikigaiApproach = [
    {
      title: "Personalized Messaging:",
      description: "We speak directly to the issues your prospects face, making them more relevant and timely."
    },
    {
      title: "Better Conversion Rates:",
      description: "Prospects are more likely to buy from you when they see you providing solutions to their problems (simple math)."
    },
    {
      title: "No time wasted on prospection:",
      description: "We target leads that really need your services, making your outreach more effective."
    },
    {
      title: "Build Trust:",
      description: "Showing you understand their challenges and can solve their problem helps build trust and get them on retainers aka long-term relationships for your business."
    },
    {
      title: "Faster Revenue Generation:",
      description: "By targeting only the most relevant prospects, the autoikigai.tech Method shortens the sales cycle, helping you close deals quicker and get cash flowing faster, accelerating revenue growth."
    }
  ];

  return (
    <section id="services" className="section overflow-x-auto">
      <div className="container mx-auto">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block text-sm font-medium text-primary mb-3">
              Our Service
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
              <span className="text-gradient">AI-Powered</span> Growth Systems
            </h2>
            <p className="text-muted-foreground">
              Discover how our unique approach differs from traditional agencies and delivers superior results.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pixel-border p-4 md:p-6">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">What 99% of SDRs/lead gen agencies do</h3>
            <p className="text-muted-foreground mb-6">Let's target all CTOs at technology companies with 500+ employees.</p>
            
            <div className="space-y-6">
              {traditionalApproaches.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <XCircle className="h-6 w-6 text-destructive shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6 bg-card border border-white/10 p-6 rounded-lg">
            <h3 className="text-2xl font-bold mb-4">The "autoikigai.tech Way"</h3>
            <p className="text-muted-foreground mb-6">Let's target companies struggling with digital transformation or looking to implement AI solutions in their operations.</p>
            
            <div className="space-y-6">
              {autoikigaiApproach.map((item, index) => (
                <div key={index} className="flex gap-4">
                  <CheckCircle className="h-6 w-6 text-primary shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold text-lg">{item.title}</h4>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
