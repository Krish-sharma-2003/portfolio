import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/gsap';

interface ScrollRevealProps {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, delay = 0, className = '' }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;
      if (prefersReducedMotion()) {
        gsap.set(el, { autoAlpha: 1, y: 0, clearProps: 'willChange' });
        return;
      }
      gsap.set(el, { autoAlpha: 0, y: 32, willChange: 'transform, opacity' });
      gsap.to(el, {
        autoAlpha: 1,
        y: 0,
        duration: 0.6,
        delay,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          once: true,
        },
        onComplete: () => {
          gsap.set(el, { clearProps: 'willChange' });
        },
      });
    },
    { scope: ref, dependencies: [delay] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
};

export default ScrollReveal;
