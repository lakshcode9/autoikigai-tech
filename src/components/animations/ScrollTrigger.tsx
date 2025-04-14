
import { useEffect, useRef, ReactNode } from "react";
import gsap from "gsap";
import { ScrollTrigger as ScrollTriggerGsap } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTriggerGsap);

interface ScrollTriggerProps {
  children: ReactNode;
  animation?: "fade" | "slide" | "scale" | "custom";
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  className?: string;
  id?: string;
}

const ScrollTrigger = ({
  children,
  animation = "fade",
  start = "top 80%",
  end = "bottom 20%",
  scrub = false,
  markers = false,
  from,
  to,
  className = "",
  id
}: ScrollTriggerProps) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    let tl: gsap.core.Timeline;
    let defaultFrom: gsap.TweenVars = {};
    let defaultTo: gsap.TweenVars = {};

    switch (animation) {
      case "fade":
        defaultFrom = { opacity: 0 };
        defaultTo = { opacity: 1, duration: 0.8, ease: "power2.out" };
        break;
      case "slide":
        defaultFrom = { y: 100, opacity: 0 };
        defaultTo = { y: 0, opacity: 1, duration: 1, ease: "power2.out" };
        break;
      case "scale":
        defaultFrom = { scale: 0.8, opacity: 0 };
        defaultTo = { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" };
        break;
      case "custom":
        defaultFrom = from || {};
        defaultTo = to || {};
        break;
    }

    tl = gsap.timeline({
      scrollTrigger: {
        trigger: element,
        start,
        end,
        scrub: scrub === true ? true : scrub ? scrub : false,
        markers,
        toggleActions: scrub ? undefined : "play none none none",
        id
      }
    });

    tl.fromTo(element, { ...defaultFrom, ...from }, { ...defaultTo, ...to });

    return () => {
      tl.kill();
    };
  }, [animation, start, end, scrub, markers, from, to, id]);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollTrigger;
