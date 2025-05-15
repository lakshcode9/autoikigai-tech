
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-lg py-3 shadow-sm border-b border-border/60' : 'bg-transparent py-6'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-heading font-bold text-xl md:text-2xl text-gradient">
          autoikigai.systems
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium">
            <li><Link to="/sales-system" className="text-foreground hover:text-primary transition-colors">Sales System</Link></li>
            <li><Link to="/case-studies" className="text-foreground hover:text-primary transition-colors">Case Studies</Link></li>
            <li><Link to="/about" className="text-foreground hover:text-primary transition-colors">About</Link></li>
            <li><Link to="/blog" className="text-foreground hover:text-primary transition-colors">Blog</Link></li>
          </ul>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <Link to="/contact">
              <Button className="button-gradient h-11">Contact Us</Button>
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <ThemeToggle />
          <button 
            className="text-foreground"
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-[60px] right-0 h-screen w-full bg-background/95 backdrop-blur-lg md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="container py-8">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <Link
                  to="/sales-system"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Sales System
                </Link>
              </li>
              <li>
                <Link
                  to="/case-studies"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 text-foreground hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
              </li>
              <li className="pt-4">
                <Link to="/contact" onClick={toggleMenu}>
                  <Button className="button-gradient w-full">
                    Contact Us
                  </Button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
