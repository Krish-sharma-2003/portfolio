import React, { useEffect, useRef } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion, canHover } from '../lib/gsap';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!canHover() || prefersReducedMotion()) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    const xDot = gsap.quickTo(dot, 'x', { duration: 0.15, ease: 'power3.out' });
    const yDot = gsap.quickTo(dot, 'y', { duration: 0.15, ease: 'power3.out' });
    const xRing = gsap.quickTo(ring, 'x', { duration: 0.45, ease: 'power3.out' });
    const yRing = gsap.quickTo(ring, 'y', { duration: 0.45, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      xDot(e.clientX);
      yDot(e.clientY);
      xRing(e.clientX);
      yRing(e.clientY);

      const target = e.target as Element | null;
      const isProject = !!target?.closest('[data-project-card]');
      const isInteractive = !!target?.closest('a, button, .btn-primary, .btn-glass');
      const isInput = !!target?.closest('input, textarea, select, [contenteditable="true"]');

      if (isInput) {
        gsap.to(dot, { opacity: 0, duration: 0.15 });
        gsap.to(ring, { opacity: 0, duration: 0.15 });
      } else {
        gsap.to(dot, { opacity: 1, duration: 0.15 });
        gsap.to(ring, { opacity: 1, duration: 0.15 });
      }

      const size = isProject ? 80 : isInteractive ? 20 : 36;
      const label = isProject ? 'View' : '';
      gsap.to(ring, { width: size, height: size, duration: 0.25, ease: 'power3.out' });
      if (ring.textContent !== label) ring.textContent = label;
    };

    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
    };
  }, []);

  if (!canHover() || prefersReducedMotion()) return null;

  return (
    <>
      <div
        ref={dotRef}
        className="pointer-events-none fixed top-0 left-0 z-[110] h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent"
        style={{ willChange: 'transform' }}
      />
      <div
        ref={ringRef}
        className="pointer-events-none fixed top-0 left-0 z-[109] flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-accent/60 text-[10px] font-semibold text-accent"
        style={{ willChange: 'transform' }}
      />
    </>
  );
};

export default CustomCursor;
