
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// Function to initialize scroll effects for various elements
export const initScrollAnimations = () => {
  // Detect if we're on a mobile device
  const isMobile = window.innerWidth < 768;
  
  // Set up scroll-triggered animations for elements with specific classes
  gsap.utils.toArray('.fade-in-element').forEach((element: any) => {
    gsap.fromTo(
      element,
      { opacity: 0, y: 50 },
      {
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none'
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out'
      }
    );
  });

  // Staggered animations for list items
  gsap.utils.toArray('.stagger-list').forEach((list: any) => {
    const items = list.querySelectorAll('.stagger-item');
    
    gsap.fromTo(
      items,
      { opacity: 0, y: 20 },
      {
        scrollTrigger: {
          trigger: list,
          start: 'top 75%',
        },
        opacity: 1,
        y: 0,
        stagger: 0.1,
        duration: 0.6,
        ease: 'power2.out'
      }
    );
  });

  // Parallax effect (desktop only)
  if (!isMobile) {
    gsap.utils.toArray('.parallax-element').forEach((element: any) => {
      gsap.to(element, {
        scrollTrigger: {
          trigger: element.parentElement,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true
        },
        y: isMobile ? 0 : '20%',
        ease: 'none'
      });
    });
  }
};

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (
  animation: 'fade' | 'slide' | 'scale' = 'fade',
  delay: number = 0
) => {
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    
    let from = {};
    let to = {};
    
    switch (animation) {
      case 'fade':
        from = { opacity: 0 };
        to = { opacity: 1, duration: 0.8 };
        break;
      case 'slide':
        from = { y: 50, opacity: 0 };
        to = { y: 0, opacity: 1, duration: 0.8 };
        break;
      case 'scale':
        from = { scale: 0.9, opacity: 0 };
        to = { scale: 1, opacity: 1, duration: 0.8 };
        break;
    }
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
    
    tl.fromTo(element, from, { ...to, delay });
    
    return () => {
      tl.kill();
    };
  }, [animation, delay]);
  
  return ref;
};
