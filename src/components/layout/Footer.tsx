
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Facebook, Twitter, Instagram, Linkedin, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-card py-16 px-6 border-t border-white/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-1">
            <div className="font-bold text-2xl text-gradient mb-4">
              autoikigai.tech
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
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Blog</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Case Studies</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Documentation</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground transition-colors">Help Center</a></li>
            </ul>
          </div>
          
          <div className="lg:col-span-1">
            <h3 className="font-semibold text-xl mb-6">Subscribe to Our Newsletter</h3>
            <p className="text-muted-foreground mb-4">Stay updated with the latest tech trends and company news.</p>
            <div className="flex">
              <Input
                placeholder="Enter your email"
                className="rounded-r-none bg-secondary/50 border-white/5"
              />
              <Button type="submit" className="rounded-l-none button-gradient">
                <Send size={16} />
              </Button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} autoikigai.tech. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/terms-policy" className="hover:text-foreground transition-colors">Terms & Privacy Policy</Link>
            <a href="#" className="hover:text-foreground transition-colors">Cookie Policy</a>
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
