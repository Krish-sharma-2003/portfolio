import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/gsap';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;
      const words = root.querySelectorAll<HTMLElement>('[data-ph-word] > span');
      const underline = root.querySelector<HTMLElement>('[data-ph-underline]');
      const subtitleEl = root.querySelector<HTMLElement>('[data-ph-subtitle]');

      if (prefersReducedMotion()) {
        gsap.set(words, { yPercent: 0 });
        if (underline) gsap.set(underline, { scaleX: 1 });
        if (subtitleEl) gsap.set(subtitleEl, { autoAlpha: 1, y: 0 });
        return;
      }

      gsap.set(words, { yPercent: 110 });
      if (underline) gsap.set(underline, { scaleX: 0, transformOrigin: 'center center' });
      if (subtitleEl) gsap.set(subtitleEl, { autoAlpha: 0, y: 16 });

      const tl = gsap.timeline({ delay: 0.05 });
      tl.to(words, { yPercent: 0, duration: 0.7, ease: 'power3.out', stagger: 0.06 });
      if (underline) tl.to(underline, { scaleX: 1, duration: 0.6, ease: 'power2.out' }, 0.2);
      if (subtitleEl) tl.to(subtitleEl, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.3);
    },
    { scope: ref, dependencies: [title, subtitle] }
  );

  const words = title.split(' ');

  return (
    <div ref={ref} className="mx-auto mb-12 max-w-3xl text-center">
      <h1 className="font-display text-4xl font-semibold text-white md:text-6xl">
        {words.map((w, i) => (
          <span key={i} data-ph-word className="inline-block overflow-hidden align-bottom">
            <span className="inline-block">{w}&nbsp;</span>
          </span>
        ))}
      </h1>
      <div className="mx-auto mt-5 flex justify-center">
        <span data-ph-underline className="h-1 w-20 rounded-full bg-accent shadow-[0_0_24px_rgba(200,255,46,0.55)]" />
      </div>
      {subtitle && (
        <p data-ph-subtitle className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-white/65 md:text-lg">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default PageHeader;
