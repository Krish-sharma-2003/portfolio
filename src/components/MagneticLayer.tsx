import React, { useEffect } from 'react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion, canHover } from '../lib/gsap';

const MagneticLayer: React.FC = () => {
  useEffect(() => {
    if (!canHover() || prefersReducedMotion()) return;

    const cache = new WeakMap<Element, { x: (v: number) => void; y: (v: number) => void }>();
    let current: Element | null = null;

    const getFx = (el: Element) => {
      let fx = cache.get(el);
      if (!fx) {
        const xTo = gsap.quickTo(el, 'x', { duration: 0.4, ease: 'power3.out' });
        const yTo = gsap.quickTo(el, 'y', { duration: 0.4, ease: 'power3.out' });
        fx = { x: xTo, y: yTo };
        cache.set(el, fx);
      }
      return fx;
    };

    const reset = (el: Element) => {
      const fx = cache.get(el);
      if (fx) {
        fx.x(0);
        fx.y(0);
      }
    };

    const onMove = (e: MouseEvent) => {
      const target = (e.target as Element | null)?.closest('.btn-primary, .btn-glass');
      if (target !== current) {
        if (current) reset(current);
        current = target;
      }
      if (target) {
        const rect = target.getBoundingClientRect();
        const relX = e.clientX - rect.left - rect.width / 2;
        const relY = e.clientY - rect.top - rect.height / 2;
        const fx = getFx(target);
        fx.x(relX * 0.25);
        fx.y(relY * 0.25);
      }
    };

    const onLeave = () => {
      if (current) {
        reset(current);
        current = null;
      }
    };

    document.addEventListener('mousemove', onMove);
    document.addEventListener('mouseleave', onLeave);
    return () => {
      document.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return null;
};

export default MagneticLayer;
