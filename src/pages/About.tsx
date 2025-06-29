import React from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Check, ArrowRightIcon } from 'lucide-react';

const About = () => {
  // Remove cal.com script as we're now using Tally.so

  const team = [
    {
      name: "Laksh Pujary",
      role: "Founder & CEO",
      bio: "Former engineer at NordVPN, Upwork, KOHO and Wise. Expert in automation and AI systems."
    },
    {
      name: "Alex Smith",
      role: "Senior Automation Engineer",
      bio: "10+ years experience in building automated systems for enterprise clients. Specializes in AI integration."
    },
    {
      name: "Maria Johnson",
      role: "Lead Sales Strategist",
      bio: "Background in B2B sales optimization with expertise in CRM implementation and sales process automation."
    }
  ];

  const values = [
    {
      title: "Client Success First",
      description: "We measure our success by the measurable results we deliver to our clients."
    },
    {
      title: "Data-Driven Approach",
      description: "Every solution we build is backed by data analysis and performance metrics."
    },
    {
      title: "Continuous Improvement",
      description: "We're constantly refining our systems and processes to deliver better results."
    },
    {
      title: "Transparent Communication",
      description: "We believe in clear, honest communication at every step of the process."
    }
  ];

  return (
    <div className="bg-background w-full overflow-hidden">
      <Navbar />
      <div className="pt-24 md:pt-32">
        <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
          <ScrollReveal>
            <h1 className="text-3xl md:text-5xl font-bold mb-6 text-gradient text-center">
              About Autoikigai
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-center mb-12">
              We're a team of automation experts dedicated to helping B2B businesses generate high-quality leads and streamline their operations.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Mission Section */}
        <section className="py-12 md:py-24 bg-secondary/5 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <ScrollReveal animation="left">
                <div>
                  <h2 className="text-3xl font-bold mb-6 text-gradient">Our Mission</h2>
                  <p className="text-lg mb-6">
                    At autoikigai.systems, we're on a mission to revolutionize how B2B companies generate leads and manage their sales operations.
                  </p>
                  <p className="text-lg mb-6">
                    We combine cutting-edge AI technology with deep expertise in automation to create systems that deliver measurable results for our clients.
                  </p>
                  <p className="text-lg">
                    Our goal is to help businesses scale efficiently by focusing their resources on qualified prospects who truly need their solutions.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="right">
                <div className="bg-card/50 border border-white/5 rounded-lg p-8">
                  <h3 className="text-xl font-bold mb-6">Why Choose Autoikigai?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-1" />
                      <span>AI-powered targeting that identifies prospects with real business needs</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-1" />
                      <span>Complete automation systems that work 24/7 to generate and nurture leads</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-1" />
                      <span>Experienced team with background at leading tech companies</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-1" />
                      <span>Proven results with 200%+ ROI for our clients</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="mr-3 h-5 w-5 text-primary mt-1" />
                      <span>Flexible engagement models to suit your business needs</span>
                    </li>
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-12 md:py-24 px-4">
          <div className="container mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
                Our Team
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((member, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <Card className="h-full bg-card/50 border-white/5">
                    <CardContent className="p-6">
                      <div className="h-20 w-20 bg-primary/10 rounded-full mb-6 flex items-center justify-center">
                        <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                      <p className="text-primary mb-4">{member.role}</p>
                      <p className="text-muted-foreground">{member.bio}</p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-12 md:py-24 bg-secondary/5 px-4">
          <div className="container mx-auto">
            <ScrollReveal>
              <h2 className="text-3xl font-bold mb-12 text-center text-gradient">
                Our Values
              </h2>
            </ScrollReveal>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <ScrollReveal key={index} delay={index * 100}>
                  <div className="bg-card/50 border border-white/5 rounded-lg p-6">
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-muted-foreground">{value.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <ScrollReveal delay={400}>
                <a href="https://cal.com/laksh-pujary/intro-call-45">
                  <Button size="lg" className="button-gradient">
                    Schedule a Consultation
                    <ArrowRightIcon className="ml-2 h-5 w-5" />
                  </Button>
                </a>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default About;