
import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/animations/ScrollReveal';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeftIcon, Send } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const JobApplication = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [jobTitle, setJobTitle] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Form state
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [resumeLink, setResumeLink] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Find job title based on jobId
    if (jobId === '1') {
      setJobTitle('FAANG Engineer');
    } else if (jobId === '2') {
      setJobTitle('No-Code Specialist');
    } else {
      // Redirect to careers page if job is not found
      navigate('/careers');
    }
  }, [jobId, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!fullName || !email) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    // Submit form logic would go here
    // For now, show success message
    setFormSubmitted(true);
    toast({
      title: "Application Submitted",
      description: "Thank you for your application. We'll be in touch soon!",
    });
  };

  if (formSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
            <div className="container mx-auto max-w-2xl">
              <ScrollReveal>
                <div className="bg-card border border-white/5 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-primary/20 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <Send className="h-8 w-8" />
                  </div>
                  <h1 className="text-2xl md:text-3xl font-bold mb-4">Application Submitted</h1>
                  <p className="text-muted-foreground mb-6">
                    Thank you for applying for the {jobTitle} position. We will review your application and get back to you soon.
                  </p>
                  <Link to="/careers">
                    <Button>
                      <ArrowLeftIcon className="mr-2 h-4 w-4" />
                      Back to Careers
                    </Button>
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <section className="pt-32 md:pt-40 pb-16 md:pb-24 px-4 md:px-6">
          <div className="container mx-auto">
            <div className="max-w-3xl mx-auto">
              <ScrollReveal>
                <div className="mb-8">
                  <Link to="/careers" className="text-muted-foreground hover:text-primary flex items-center mb-4">
                    <ArrowLeftIcon className="mr-2 h-4 w-4" />
                    Back to All Positions
                  </Link>
                  <h1 className="text-gradient text-3xl md:text-4xl font-bold mb-4">
                    Apply for: {jobTitle}
                  </h1>
                  <p className="text-muted-foreground">
                    Complete the form below to apply for this position. Fields marked with * are required.
                  </p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal delay={100}>
                <div className="bg-card border border-white/5 rounded-lg p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input 
                        id="fullName" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Enter your full name" 
                        className="bg-secondary/50 border-white/5 mt-2" 
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email address" 
                        className="bg-secondary/50 border-white/5 mt-2" 
                        required
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="Enter your phone number" 
                        className="bg-secondary/50 border-white/5 mt-2" 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="resumeLink">Resume Link/Portfolio *</Label>
                      <Input 
                        id="resumeLink" 
                        value={resumeLink}
                        onChange={(e) => setResumeLink(e.target.value)}
                        placeholder="Link to your resume or portfolio" 
                        className="bg-secondary/50 border-white/5 mt-2" 
                        required
                      />
                      <p className="text-xs text-muted-foreground mt-1">
                        Please provide a link to your resume or portfolio (Google Drive, Dropbox, personal website, etc.)
                      </p>
                    </div>
                    
                    <div>
                      <Label htmlFor="coverLetter">Why should we hire you?</Label>
                      <Textarea 
                        id="coverLetter" 
                        value={coverLetter}
                        onChange={(e) => setCoverLetter(e.target.value)}
                        placeholder="Tell us why you're interested in this position and why we should hire you" 
                        className="bg-secondary/50 border-white/5 h-32 mt-2" 
                      />
                    </div>
                    
                    <Button type="submit" className="button-gradient w-full">
                      Submit Application
                    </Button>
                  </form>
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

export default JobApplication;
