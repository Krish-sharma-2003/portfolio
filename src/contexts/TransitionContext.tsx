import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { gsap } from '../lib/gsap';

interface TransitionContextValue {
  isTransitioning: boolean;
  transitionTo: (to: string, title?: string) => void;
}

const TransitionContext = createContext<TransitionContextValue>({
  isTransitioning: false,
  transitionTo: () => {},
});

export function useTransition(): TransitionContextValue {
  return useContext(TransitionContext);
}

const ROUTE_TITLES: Record<string, string> = {
  '/': 'Home',
  '/about': 'About',
  '/projects': 'Projects',
  '/skills': 'Skills',
  '/contact': 'Contact',
  '/resume': 'Resume',
};

function titleFor(path: string): string {
  const clean = path.split('?')[0].split('#')[0];
  return ROUTE_TITLES[clean] ?? 'Page';
}

export const TransitionProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isTransitioning, setIsTransitioning] = useState(false);
  const transitioningRef = useRef(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const safetyTimerRef = useRef<number | null>(null);
  const reduced = useRef(typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches);

  const forceClear = useCallback(() => {
    transitioningRef.current = false;
    setIsTransitioning(false);
    const overlay = overlayRef.current;
    if (overlay) {
      gsap.set(overlay, { pointerEvents: 'none' });
      if (topRef.current) gsap.set(topRef.current, { yPercent: -100 });
      if (bottomRef.current) gsap.set(bottomRef.current, { yPercent: 100 });
      if (lineRef.current) gsap.set(lineRef.current, { scaleX: 0, opacity: 0 });
      if (titleRef.current) gsap.set(titleRef.current, { opacity: 0, y: 20 });
    }
    if (safetyTimerRef.current) {
      window.clearTimeout(safetyTimerRef.current);
      safetyTimerRef.current = null;
    }
  }, []);

  const transitionTo = useCallback(
    (to: string, title?: string) => {
      if (transitioningRef.current) return;
      const targetPath = to.split('?')[0].split('#')[0];
      const currentPath = location.pathname;
      if (targetPath === currentPath) return;

      if (reduced.current) {
        navigate(to);
        window.setTimeout(() => {
          window.dispatchEvent(new Event('app:page-revealed'));
        }, 150);
        return;
      }

      transitioningRef.current = true;
      setIsTransitioning(true);

      safetyTimerRef.current = window.setTimeout(forceClear, 2000);

      const overlay = overlayRef.current;
      const top = topRef.current;
      const bottom = bottomRef.current;
      const line = lineRef.current;
      const titleEl = titleRef.current;
      if (!overlay || !top || !bottom || !line || !titleEl) {
        navigate(to);
        forceClear();
        return;
      }

      const destTitle = title ?? titleFor(to);

      gsap.set(overlay, { pointerEvents: 'auto' });
      gsap.set(top, { yPercent: -100 });
      gsap.set(bottom, { yPercent: 100 });
      gsap.set(line, { scaleX: 0, opacity: 1, transformOrigin: 'left center' });
      gsap.set(titleEl, { opacity: 0, y: 20 });
      titleEl.textContent = destTitle;

      const tl = gsap.timeline({
        onComplete: () => {
          // navigate after cover
        },
      });

      // cover
      tl.to(top, { yPercent: 0, duration: 0.45, ease: 'power3.inOut' }, 0)
        .to(bottom, { yPercent: 0, duration: 0.45, ease: 'power3.inOut' }, 0)
        .to(line, { scaleX: 1, duration: 0.45, ease: 'power3.inOut' }, 0)
        .to(titleEl, { opacity: 1, y: 0, duration: 0.25, ease: 'power2.out' }, 0.2);

      tl.add(() => {
        navigate(to);
      });

      // wait for render then reveal
      tl.add(() => {
        // delay to allow new route render
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const revealTl = gsap.timeline({
              onComplete: () => {
                forceClear();
                window.dispatchEvent(new Event('app:page-revealed'));
              },
            });
            revealTl
              .to(titleEl, { opacity: 0, y: -20, duration: 0.2, ease: 'power2.in' }, 0)
              .to(line, { scaleX: 0, transformOrigin: 'right center', duration: 0.3, ease: 'power3.inOut' }, 0)
              .to(top, { yPercent: -100, duration: 0.5, ease: 'power3.inOut' }, 0.1)
              .to(bottom, { yPercent: 100, duration: 0.5, ease: 'power3.inOut' }, 0.1);
          });
        });
      });
    },
    [location.pathname, navigate, forceClear]
  );

  // handle popstate: play a quick in reveal only
  useEffect(() => {
    const onPop = () => {
      if (transitioningRef.current) return;
      // reset scroll handled by provider
      window.setTimeout(() => window.dispatchEvent(new Event('app:page-revealed')), 50);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, []);

  // initial page load: play quick in
  useEffect(() => {
    if (reduced.current) {
      window.dispatchEvent(new Event('app:page-revealed'));
      return;
    }
    // quick in reveal of overlay? none on initial; just dispatch
    const t = window.setTimeout(() => window.dispatchEvent(new Event('app:page-revealed')), 100);
    return () => window.clearTimeout(t);
  }, []);

  return (
    <TransitionContext.Provider value={{ isTransitioning, transitionTo }}>
      {children}
      <div
        ref={overlayRef}
        aria-hidden="true"
        style={{ pointerEvents: 'none' }}
        className="fixed inset-0 z-[100]"
      >
        <div ref={topRef} className="absolute top-0 left-0 right-0 h-1/2 bg-[#050806]" style={{ transform: 'translateY(-100%)' }} />
        <div ref={bottomRef} className="absolute bottom-0 left-0 right-0 h-1/2 bg-[#050806]" style={{ transform: 'translateY(100%)' }} />
        <div ref={lineRef} className="absolute left-0 right-0 top-1/2 h-[2px] bg-accent shadow-[0_0_12px_rgba(200,255,46,0.8)]" style={{ transform: 'scaleX(0)', transformOrigin: 'left center' }} />
        <div ref={titleRef} className="absolute inset-0 flex items-center justify-center font-display text-4xl font-bold text-white md:text-6xl" style={{ opacity: 0 }} />
      </div>
    </TransitionContext.Provider>
  );
};
