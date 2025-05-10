
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MenuIcon, X } from "lucide-react";

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
        isScrolled ? 'bg-background/90 backdrop-blur-lg py-3 shadow-md' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl text-gradient">
          autoikigai.systems
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <ul className="flex space-x-8 font-medium">
            <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
            <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
            <li><a href="#process" className="hover:text-primary transition-colors">Process</a></li>
            <li><a href="#testimonials" className="hover:text-primary transition-colors">Testimonials</a></li>
          </ul>
          <Link to="/contact">
            <Button className="button-gradient">Contact Us</Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div 
          className={`fixed top-[60px] right-0 h-screen w-full bg-background md:hidden transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <nav className="container py-8">
            <ul className="flex flex-col space-y-6 text-xl">
              <li>
                <a 
                  href="#about" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  About
                </a>
              </li>
              <li>
                <a 
                  href="#services" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Services
                </a>
              </li>
              <li>
                <a 
                  href="#process" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Process
                </a>
              </li>
              <li>
                <a 
                  href="#testimonials" 
                  className="block py-2 hover:text-primary transition-colors"
                  onClick={toggleMenu}
                >
                  Testimonials
                </a>
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
