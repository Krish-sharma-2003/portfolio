import React, { useEffect, useRef, useState } from 'react';
import TransitionLink from './TransitionLink';
import { ArrowUpRight, Download } from 'lucide-react';
import { useGSAP } from '@gsap/react';
import { gsap } from '../lib/gsap';
import { prefersReducedMotion } from '../lib/gsap';
import TypewriterText from './TypewriterText';

const BASE = import.meta.env.BASE_URL;

const socials: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/Krish-sharma-2003' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krish-sharma-43b625302/' },
];

const Hero: React.FC = () => {
  const reduced = prefersReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const playedRef = useRef(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    document.documentElement.style.colorScheme = 'dark';
    return () => {
      document.documentElement.style.colorScheme = document.documentElement.classList.contains('dark')
        ? 'dark'
        : 'light';
    };
  }, []);

  useEffect(() => {
    if (reduced) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    if (!mq.matches) return;

    const onMove = (e: MouseEvent) => {
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      setOffset({ x: dx * 6, y: dy * 6 });
    };
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [reduced]);

  useGSAP(
    () => {
      const root = sectionRef.current;
      if (!root) return;

      const eyebrowLine = root.querySelector<HTMLElement>('.hero-eyebrow-line');
      const eyebrow = root.querySelector<HTMLElement>('.hero-eyebrow');
      const hiInner = root.querySelector<HTMLElement>('.hero-hi-inner');
      const tagline = root.querySelector<HTMLElement>('.hero-tagline');
      const divider = root.querySelector<HTMLElement>('.hero-divider');
      const bio = root.querySelector<HTMLElement>('.hero-bio');
      const cta = root.querySelector<HTMLElement>('.hero-cta');
      const socialEls = root.querySelectorAll<HTMLElement>('.hero-social');
      const photo = root.querySelector<HTMLElement>('.hero-photo');

      if (reduced) {
        gsap.set([eyebrowLine, eyebrow, hiInner, tagline, divider, bio, cta, ...Array.from(socialEls), photo].filter(Boolean), {
          autoAlpha: 1,
          y: 0,
          x: 0,
          scaleX: 1,
        });
        return;
      }

      gsap.set(eyebrowLine, { scaleX: 0, transformOrigin: 'left center' });
      if (hiInner) gsap.set(hiInner, { yPercent: 110 });
      gsap.set(tagline, { autoAlpha: 0, y: 16 });
      gsap.set(divider, { scaleX: 0, transformOrigin: 'left center' });
      gsap.set(bio, { autoAlpha: 0, y: 16 });
      gsap.set(cta, { autoAlpha: 0, y: 16 });
      gsap.set(socialEls, { autoAlpha: 0, x: 16 });
      gsap.set(photo, { autoAlpha: 0 });

      const play = () => {
        if (playedRef.current) return;
        playedRef.current = true;
        const tl = gsap.timeline();
        if (eyebrowLine) tl.to(eyebrowLine, { scaleX: 1, duration: 0.5, ease: 'power2.out' }, 0);
        if (hiInner) tl.to(hiInner, { yPercent: 0, duration: 0.7, ease: 'power3.out' }, 0.1);
        tl.to(tagline, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.3);
        if (divider) tl.to(divider, { scaleX: 1, duration: 0.4, ease: 'power2.out' }, 0.35);
        tl.to(bio, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.4);
        tl.to(cta, { autoAlpha: 1, y: 0, duration: 0.5, ease: 'power2.out' }, 0.5);
        tl.to(socialEls, { autoAlpha: 1, x: 0, duration: 0.5, ease: 'power2.out', stagger: 0.06 }, 0.6);
        if (photo) tl.to(photo, { autoAlpha: 1, duration: 0.9, ease: 'power2.out' }, 0.2);
      };

      const onReveal = () => play();
      window.addEventListener('app:page-revealed', onReveal);
      const fallback = window.setTimeout(play, 500);

      return () => {
        window.removeEventListener('app:page-revealed', onReveal);
        window.clearTimeout(fallback);
      };
    },
    { scope: sectionRef }
  );

  const desktopMask: React.CSSProperties = {
    maskImage:
      'linear-gradient(to right, transparent 0%, black 28%), linear-gradient(to top, transparent 0%, black 12%)',
    WebkitMaskImage:
      'linear-gradient(to right, transparent 0%, black 28%), linear-gradient(to top, transparent 0%, black 12%)',
    maskComposite: 'intersect',
    WebkitMaskComposite: 'source-in',
  };

  const mobileMask: React.CSSProperties = {
    maskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
    WebkitMaskImage: 'linear-gradient(to bottom, black 82%, transparent 100%)',
  };

  return (
    <section
      ref={sectionRef}
      className="-mt-16 relative min-h-[100svh] overflow-hidden bg-[var(--bg-hero)] text-white"
    >
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-30" />

      <div
        className="hidden lg:block absolute right-0"
        style={{
          top: 'var(--nav-h)',
          width: 'min(100%, calc((100svh - var(--nav-h)) * 16 / 9))',
          aspectRatio: '16 / 9',
          ...desktopMask,
        }}
      >
        <div
          className="absolute inset-0"
          style={reduced ? undefined : { transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <img
            className="hero-photo h-full w-full object-contain"
            src={`${BASE}hero-portrait.png`}
            alt="Krish Sharma sitting in a black leather chair holding a coffee cup, cinematic emerald lighting"
            width={1671}
            height={941}
            decoding="async"
            fetchpriority="high"
            style={{ objectPosition: 'center' }}
          />
        </div>
      </div>

      <div className="lg:hidden" style={{ paddingTop: 'var(--nav-h)' }}>
        <div className="relative w-full aspect-[4/5] sm:aspect-[4/3] overflow-hidden" style={mobileMask}>
          <img
            src={`${BASE}hero-portrait.png`}
            alt="Krish Sharma sitting in a black leather chair holding a coffee cup, cinematic emerald lighting"
            width={1671}
            height={941}
            decoding="async"
            fetchpriority="high"
            className="h-full w-full object-cover object-[74%_20%]"
          />
        </div>
      </div>

      <div className="pointer-events-none absolute left-0 top-[var(--nav-h)] bottom-0 hidden w-[35%] max-w-md bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:block" />

      <div className="pointer-events-none absolute right-[8%] top-[32%] h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 -mt-10 text-shadow-soft lg:mt-0 lg:absolute lg:inset-0 lg:flex lg:items-center lg:top-[var(--nav-h)] lg:px-6">
        <div className="max-w-xl">
          <div className="hero-eyebrow mb-5 flex items-center gap-3">
            <span className="hero-eyebrow-line block h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent md:text-sm">
              SOFTWARE DEVELOPER &amp; PROBLEM SOLVER
            </span>
          </div>

          <h1
            className="mb-5 font-display font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            <span className="block overflow-hidden">
              <span className="hero-hi-inner block text-white">Hi, I&apos;m</span>
            </span>
            <span className="block text-accent">
              <TypewriterText text="Krish Sharma" delay={120} />
            </span>
          </h1>

          <p className="hero-tagline mb-5 font-serif text-xl leading-tight text-white/90 md:text-3xl">
            I build practical software and real-world systems.
          </p>

          <div className="hero-divider mb-5 h-px w-16 bg-white/30" />

          <p className="hero-bio mb-8 max-w-md text-sm leading-relaxed text-gray-400 md:text-base">
            I&apos;m Krish, a passionate computer science student who fell in love with coding during my first
            &quot;Hello World&quot; program. I build interactive, real-world systems end to end.
          </p>

          <div className="hero-cta flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4">
            <TransitionLink
              to="/projects"
              aria-label="Explore my work"
              className="btn-shine group inline-flex h-12 w-full items-center justify-between gap-3 rounded-full bg-accent px-5 font-display text-base font-semibold tracking-normal text-black shadow-[0_0_0_1px_rgba(200,255,46,0.4),0_0_24px_rgba(200,255,46,0.45),0_0_60px_rgba(200,255,46,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(200,255,46,0.6),0_0_32px_rgba(200,255,46,0.6),0_0_80px_rgba(200,255,46,0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto sm:justify-between"
            >
              <span>Explore My Work</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-colors group-hover:bg-black/25">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </TransitionLink>

            <a
              href={`${BASE}Krish_Sharma_Resume.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="View resume"
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-accent/50 bg-white/5 px-5 font-display text-base font-semibold tracking-normal text-white backdrop-blur-md shadow-[0_0_16px_rgba(200,255,46,0.08)] transition-all duration-300 hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_24px_rgba(200,255,46,0.25)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto"
            >
              <Download className="h-4 w-4" />
              View Resume
            </a>
          </div>

          <div className="mt-8 flex flex-wrap gap-5 lg:hidden">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="hero-social inline-flex items-center gap-1 font-display text-base font-medium text-white/80 transition-colors hover:text-accent"
              >
                {s.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-6 z-20 hidden flex-col items-end gap-2 lg:flex md:right-12">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="hero-social inline-flex items-center gap-1 font-display text-base font-medium text-white/80 transition-all hover:translate-x-1 hover:text-accent"
          >
            {s.label} <span className="text-white/40">↗</span>
          </a>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-30" />
    </section>
  );
};

export default Hero;
