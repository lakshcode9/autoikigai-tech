import { useEffect, useRef, useState, ReactNode } from "react";
import { useIsMobile } from "@/hooks/use-mobile";

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  threshold?: number;
  delay?: number;
  animation?: "fade" | "left" | "right" | "bottom" | "top" | "scale" | "rotate" | "none" | "bounce" | "slide-up" | "slide-down" | "zoom" | "flip";
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
    // Reduce delay on mobile for better responsiveness
    const actualDelay = isMobile ? Math.min(delay, 100) : delay;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsVisible(true);
          }, actualDelay);
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
  }, [threshold, delay, isMobile]);
  
  // Enhanced animations with more variety
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
      case "bounce":
      case "slide-up":
      case "slide-down":
      case "zoom":
      case "flip":
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
      case "bounce":
        animationClass = "bounce-in";
        break;
      case "slide-up":
        animationClass = "slide-in-up";
        break;
      case "slide-down":
        animationClass = "slide-in-down";
        break;
      case "zoom":
        animationClass = "zoom-in";
        break;
      case "flip":
        animationClass = "flip-in";
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
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className} hover-lift`}
      style={{ 
        transitionDuration: `${isMobile ? Math.min(duration, 500) : duration}ms`,
        width: "100%" // Ensure content is contained
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;