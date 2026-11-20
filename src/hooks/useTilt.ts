import { useEffect, useRef } from 'react';

export function useTilt<T extends HTMLElement>(enabled: boolean = true) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || !enabled) return;

    const hoverQuery = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!hoverQuery.matches || reducedMotionQuery.matches) return;

    let frame = 0;
    let leaveTimer = 0;

    const handleEnter = () => {
      if (leaveTimer) {
        window.clearTimeout(leaveTimer);
        leaveTimer = 0;
      }
      element.style.transition = 'none';
      element.style.willChange = 'transform';
      element.style.backfaceVisibility = 'hidden';
      element.style.transform =
        'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(-4px) scale(1.01)';
    };

    const handleMove = (event: PointerEvent) => {
      const rect = element.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      const rotateY = (x - 0.5) * 8;
      const rotateX = (0.5 - y) * 8;

      element.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
      element.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);

      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        element.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-4px) scale(1.01)`;
      });
    };

    const handleLeave = () => {
      if (frame) cancelAnimationFrame(frame);
      element.style.transition = 'transform 320ms ease';
      element.style.transform =
        'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0px) scale(1)';
      leaveTimer = window.setTimeout(() => {
        element.style.willChange = 'auto';
        element.style.transition = '';
      }, 340);
    };

    element.addEventListener('pointerenter', handleEnter);
    element.addEventListener('pointermove', handleMove);
    element.addEventListener('pointerleave', handleLeave);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      if (leaveTimer) window.clearTimeout(leaveTimer);
      element.removeEventListener('pointerenter', handleEnter);
      element.removeEventListener('pointermove', handleMove);
      element.removeEventListener('pointerleave', handleLeave);
      element.style.willChange = '';
      element.style.transform = '';
      element.style.transition = '';
      element.style.backfaceVisibility = '';
    };
  }, [enabled]);

  return ref;
}
