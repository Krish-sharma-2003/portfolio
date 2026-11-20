import React, { createContext, useContext, useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Lenis from 'lenis';
import { gsap, ScrollTrigger } from '../lib/gsap';
import { prefersReducedMotion, canHover } from '../lib/gsap';

interface SmoothScrollContextValue {
  lenis: Lenis | null;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({ lenis: null });

export function useLenis(): Lenis | null {
  return useContext(SmoothScrollContext).lenis;
}

export const SmoothScrollProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lenis, setLenis] = useState<Lenis | null>(null);
  const lenisRef = useRef<Lenis | null>(null);
  const location = useLocation();

  useEffect(() => {
    if (!canHover() || prefersReducedMotion()) {
      return;
    }

    const instance = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    lenisRef.current = instance;
    setLenis(instance);

    const onScroll = () => ScrollTrigger.update();
    instance.on('scroll', onScroll);

    const tickerCb = (time: number) => {
      instance.raf(time * 1000);
    };
    gsap.ticker.add(tickerCb);
    gsap.ticker.lagSmoothing(0);

    return () => {
      instance.off('scroll', onScroll);
      gsap.ticker.remove(tickerCb);
      instance.destroy();
      lenisRef.current = null;
      setLenis(null);
    };
  }, []);

  // scroll to top on route change
  useEffect(() => {
    const instance = lenisRef.current;
    if (instance) {
      instance.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [location.pathname]);

  return <SmoothScrollContext.Provider value={{ lenis }}>{children}</SmoothScrollContext.Provider>;
};
