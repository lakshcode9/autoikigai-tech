import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";

const Footer = () => {
  const { toast } = useToast();
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast({
        title: "Please enter a valid email",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Submit to Supabase
      const { error } = await supabase
        .from('newsletter_subscriptions')
        .insert({ email });

      if (error) {
        // Check if it's a duplicate email error
        if (error.code === '23505') {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter."
          });
        } else {
          console.error('Error subscribing to newsletter:', error);
          toast({
            title: "Error",
            description: "There was a problem subscribing. Please try again.",
            variant: "destructive"
          });
        }
        setIsSubmitting(false);
        return;
      }

      toast({
        title: "Thanks for subscribing!",
        description: "You'll receive our updates soon."
      });
      setEmail("");
    } catch (err) {
      console.error('Unexpected error:', err);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer className="bg-card py-16 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl text-gradient mb-4">
              autoikigai.systems
            </div>
            <p className="text-muted-foreground mb-6">
              Transforming businesses through innovative technology solutions and AI-powered automation.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                <Facebook size={18} />
              </a>
              <a href="#" aria-label="Twitter" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                <Twitter size={18} />
              </a>
              <a href="#" aria-label="Instagram" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                <Instagram size={18} />
              </a>
              <a href="#" aria-label="LinkedIn" className="h-10 w-10 flex items-center justify-center rounded-full bg-secondary/50 text-muted-foreground hover:text-primary transition-colors">
                <Linkedin size={18} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Company</h3>
            <ul className="space-y-4">
              <li><a href="#about" className="text-muted-foreground hover:text-foreground transition-colors">About Us</a></li>
              <li><a href="#services" className="text-muted-foreground hover:text-foreground transition-colors">Services</a></li>
              <li><Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">Careers</Link></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Press</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-xl mb-6">Resources</h3>
            <ul className="space-y-4">
              <li><Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors">Blog</Link></li>
              <li><Link to="/case-studies" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</Link></li>
              <li><Link to="/documentation" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</Link></li>
              <li><Link to="/help-center" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</Link></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay updated with the latest tech trends and company news.</p>
            <form onSubmit={handleSubscribe} className="flex">
              <Input
                placeholder="Enter your email"
                className="rounded-r-none bg-secondary/50 border-white/5"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSubmitting}
              />
              <Button 
                type="submit" 
                className="rounded-l-none button-gradient"
                disabled={isSubmitting}
              >
                {isSubmitting ? 
                  <span className="animate-spin">⋯</span> : 
                  <Send size={16} />
                }
              </Button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} autoikigai.systems. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4 md:mt-0">
            <Link to="/terms-policy" className="hover:text-foreground transition-colors">Terms & Privacy Policy</Link>
            <Link to="/cookie-policy" className="hover:text-foreground transition-colors">Cookie Policy</Link>
            <a href="https://lakshpujary.me" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">
              View our founder's portfolio
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;