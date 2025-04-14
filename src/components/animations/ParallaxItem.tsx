
import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxItemProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
}

const ParallaxItem = ({ 
  children, 
  speed = 0.1, 
  className = "", 
  direction = 'up' 
}: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const multiplier = direction === 'up' ? -1 : 1;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const translateY = scrollY * speed * multiplier;
      ref.current.style.transform = `translateY(${translateY}px)`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, multiplier]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ParallaxItem;
