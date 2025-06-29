import { useRef, useEffect, ReactNode } from 'react';

interface ParallaxItemProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  direction?: 'up' | 'down';
  rotateSpeed?: number;
  scaleRange?: [number, number];
}

const ParallaxItem = ({ 
  children, 
  speed = 0.1, 
  className = "", 
  direction = 'up',
  rotateSpeed = 0,
  scaleRange = [1, 1]
}: ParallaxItemProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const multiplier = direction === 'up' ? -1 : 1;

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const scrollY = window.scrollY;
      const translateY = scrollY * speed * multiplier;
      const rotate = scrollY * rotateSpeed;
      const scale = scaleRange[0] + (scaleRange[1] - scaleRange[0]) * (scrollY / window.innerHeight);
      
      ref.current.style.transform = `translateY(${translateY}px) rotate(${rotate}deg) scale(${Math.max(scaleRange[0], Math.min(scaleRange[1], scale))})`;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed, multiplier, rotateSpeed, scaleRange]);

  return (
    <div ref={ref} className={`${className} transition-transform duration-100 ease-out`}>
      {children}
    </div>
  );
};

export default ParallaxItem;