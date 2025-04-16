
import { useEffect, useRef, useState, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: "fade" | "left" | "right" | "bottom" | "top" | "scale" | "rotate" | "none";
  duration?: number;
}

const ScrollReveal = ({ 
  children, 
  className = "", 
  threshold = 0.1,
  delay = 0,
  animation = "fade",
  duration = 700
}: ScrollRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, delay);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -20px 0px"
      }
    );
    
    if (ref.current) {
      observer.observe(ref.current);
    }
    
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, delay]);
  
  // Simplify animations on mobile
  let animationClass = "";
  
  if (isMobile) {
    // Use simpler animations on mobile
    switch (animation) {
      case "left":
      case "right":
      case "bottom":
      case "top":
      case "scale":
      case "rotate":
        animationClass = "fade-in";
        break;
      case "fade":
        animationClass = "fade-in";
        break;
      case "none":
        animationClass = "";
        break;
    }
  } else {
    // Use full animations on desktop
    switch (animation) {
      case "left":
        animationClass = "come-in-left";
        break;
      case "right":
        animationClass = "come-in-right";
        break;
      case "bottom":
        animationClass = "come-in-bottom";
        break;
      case "top":
        animationClass = "come-in-top";
        break;
      case "scale":
        animationClass = "scale-in";
        break;
      case "rotate":
        animationClass = "rotate-in";
        break;
      case "fade":
        animationClass = "fade-in";
        break;
      case "none":
        animationClass = "";
        break;
    }
  }
  
  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDuration: `${isMobile ? Math.min(duration, 500) : duration}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
