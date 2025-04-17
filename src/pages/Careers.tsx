
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRightIcon, Briefcase, Code, Blocks, Rocket, GraduationCap, Users } from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "FAANG Engineer",
    department: "Engineering",
    location: "Remote / Global",
    type: "Full-time",
    description: "Join our team as a FAANG Engineer and leverage your experience from top tech companies to build cutting-edge solutions that transform businesses.",
    requirements: [
      "5+ years of experience in software engineering",
      "Previous experience at FAANG companies (Facebook, Amazon, Apple, Netflix, Google) or equivalent",
      "Strong proficiency in frontend and backend technologies",
      "Experience with cloud infrastructure and microservices architecture",
      "Excellent problem-solving skills and attention to detail"
    ],
    responsibilities: [
      "Design and develop scalable, high-performance applications",
      "Collaborate with cross-functional teams to define and implement features",
      "Mentor junior engineers and contribute to engineering best practices",
      "Drive technical decisions and architectural improvements",
      "Participate in code reviews and ensure code quality"
    ],
    icon: Code
  },
  {
    id: 2,
    title: "No-Code Specialist",
    department: "Product",
    location: "Remote / Global",
    type: "Full-time",
    description: "We're looking for a No-Code Specialist to help create powerful applications without traditional programming, making technology more accessible.",
    requirements: [
      "Experience with no-code/low-code platforms (Bubble.io, Webflow, Zapier, Airtable, etc.)",
      "Strong problem-solving skills and logical thinking",
      "Understanding of user experience design principles",
      "Excellent communication and documentation skills",
      "Portfolio of projects built with no-code tools"
    ],
    responsibilities: [
      "Build complex applications using no-code platforms",
      "Design efficient workflows and automations",
      "Collaborate with clients to understand requirements",
      "Provide training and support for no-code implementations",
      "Stay current with emerging no-code tools and techniques"
    ],
    icon: Blocks,
    highlighted: true
  }
];

const Careers = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 px-4 md:px-6 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-1/4 -left-20 w-48 md:w-72 h-48 md:h-72 bg-brand-blue/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-20 w-48 md:w-72 h-48 md:h-72 bg-brand-cyan/20 rounded-full blur-3xl"></div>
          </div>
          
          <div className="container mx-auto relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <ScrollReveal delay={0} animation="fade">
                <span className="inline-block py-1 px-3 mb-4 md:mb-6 rounded-full bg-secondary text-xs md:text-sm font-medium text-foreground">
                  Join Our Team
                </span>
              </ScrollReveal>
              
              <ScrollReveal animation="fade" delay={100}>
                <h1 className="text-gradient text-3xl md:text-5xl font-bold mb-6 leading-tight">
                  Build Your Career at Autoikigai
                </h1>
              </ScrollReveal>
              
              <ScrollReveal animation="fade" delay={200}>
                <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Join a team of passionate innovators dedicated to transforming businesses through cutting-edge technology solutions.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="section bg-card">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                  Why Join <span className="text-gradient">Autoikigai</span>
                </h2>
                <p className="text-muted-foreground">
                  We're building a team of talented individuals who are passionate about creating innovative solutions that make a difference.
                </p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <ScrollReveal delay={100}>
                <div className="bg-secondary/50 border border-white/5 rounded-lg p-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                    <Rocket size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Innovation First</h3>
                  <p className="text-muted-foreground">
                    We embrace cutting-edge technologies and encourage creative thinking to solve complex problems.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="bg-secondary/50 border border-white/5 rounded-lg p-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                    <GraduationCap size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Continuous Learning</h3>
                  <p className="text-muted-foreground">
                    We value skills and experience over formal education, providing opportunities to grow professionally.
                  </p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <div className="bg-secondary/50 border border-white/5 rounded-lg p-6">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-4">
                    <Users size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Inclusive Culture</h3>
                  <p className="text-muted-foreground">
                    We celebrate diversity and create an environment where everyone can thrive and contribute their unique perspectives.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="section">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-2xl md:text-4xl font-bold mb-6 leading-tight">
                  Open <span className="text-gradient">Positions</span>
                </h2>
                <p className="text-muted-foreground">
                  Explore our current job openings and find the perfect role for your skills and passion.
                </p>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <ScrollReveal key={job.id} delay={index * 100}>
                  <Card className={`overflow-hidden ${job.highlighted ? 'border-primary/30' : 'border-white/5'}`}>
                    {job.highlighted && (
                      <div className="bg-primary/20 text-primary text-sm py-1 px-4 text-center font-medium">
                        Featured Position - No Degree Required
                      </div>
                    )}
                    <CardHeader className="bg-secondary/50">
                      <div className="flex items-start justify-between">
                        <div>
                          <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-primary/20 text-primary mb-3">
                            <job.icon size={20} />
                          </div>
                          <CardTitle className="text-xl md:text-2xl">{job.title}</CardTitle>
                          <CardDescription className="flex flex-col md:flex-row gap-2 md:gap-6 mt-2 text-sm text-muted-foreground">
                            <span className="flex items-center">
                              <Briefcase className="mr-1 h-4 w-4" />
                              {job.department}
                            </span>
                            <span>{job.location}</span>
                            <span>{job.type}</span>
                          </CardDescription>
                        </div>
                        <Link to={`/careers/${job.id}`}>
                          <Button variant="outline" size="sm">
                            Apply Now
                            <ArrowRightIcon className="ml-2 h-4 w-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardHeader>
                    <CardContent className="pt-6">
                      <p className="mb-6">{job.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                          <h4 className="font-semibold text-lg mb-3">Requirements</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.requirements.map((req, i) => (
                              <li key={i} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                                {req}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-lg mb-3">Responsibilities</h4>
                          <ul className="space-y-2 text-sm text-muted-foreground">
                            {job.responsibilities.map((resp, i) => (
                              <li key={i} className="flex items-start">
                                <div className="h-1.5 w-1.5 rounded-full bg-primary mt-1.5 mr-2"></div>
                                {resp}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section bg-card">
          <div className="container mx-auto">
            <ScrollReveal>
              <div className="rounded-3xl overflow-hidden border border-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-brand-blue/20 to-brand-purple/20"></div>
                <div className="grid-pattern absolute inset-0 opacity-30"></div>
                
                <div className="relative z-10 py-16 px-8 md:py-24 md:px-12 text-center max-w-3xl mx-auto">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight">
                    Don't See the <span className="text-gradient">Right Fit?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 md:mb-10">
                    We're always looking for talented individuals to join our team. Send us your resume and let us know how you can contribute.
                  </p>
                  <Link to="/contact">
                    <Button size="lg" className="button-gradient">
                      Send an Open Application
                      <ArrowRightIcon className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Careers;
