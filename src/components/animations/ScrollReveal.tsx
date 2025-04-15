
import { useEffect, useRef, useState, ReactNode } from "react";

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
        rootMargin: "0px 0px -50px 0px"
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
  
  let animationClass = "";
  
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
  
  return (
    <div 
      ref={ref} 
      className={`${animationClass} ${isVisible ? 'is-visible' : ''} ${className}`}
      style={{ transitionDuration: `${duration}ms` }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
