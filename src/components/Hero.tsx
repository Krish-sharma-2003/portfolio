import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Download } from 'lucide-react';
import TypewriterText from './TypewriterText';

const BASE = import.meta.env.BASE_URL;

const socials: { label: string; href: string }[] = [
  { label: 'GitHub', href: 'https://github.com/Krish-sharma-2003' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/krish-sharma-43b625302/' },
];

const Hero: React.FC = () => {
  const reduced = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
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

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const } },
  };

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
      {/* hairline top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-white/10 z-30" />

      {/* desktop photo: full image, no crop */}
      <div
        className="hidden lg:block absolute right-0"
        style={{
          top: 'var(--nav-h)',
          width: 'min(100%, calc((100svh - var(--nav-h)) * 16 / 9))',
          aspectRatio: '16 / 9',
          ...desktopMask,
        }}
      >
        <motion.div
          className="absolute inset-0"
          style={reduced ? undefined : { transform: `translate(${offset.x}px, ${offset.y}px)` }}
        >
          <motion.img
            src={`${BASE}hero-portrait.png`}
            alt="Krish Sharma sitting in a black leather chair holding a coffee cup, cinematic emerald lighting"
            width={1671}
            height={941}
            decoding="async"
            fetchpriority="high"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="h-full w-full object-contain"
            style={{ objectPosition: 'center' }}
          />
        </motion.div>
      </div>

      {/* mobile / tablet photo block */}
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

      {/* soft dark gradient only behind the left text column */}
      <div className="pointer-events-none absolute left-0 top-[var(--nav-h)] bottom-0 hidden w-[35%] max-w-md bg-gradient-to-r from-black/70 via-black/35 to-transparent lg:block" />

      {/* subtle green glow near subject edge */}
      <div className="pointer-events-none absolute right-[8%] top-[32%] h-56 w-56 rounded-full bg-accent/10 blur-3xl" />

      {/* content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-10 -mt-10 text-shadow-soft lg:mt-0 lg:absolute lg:inset-0 lg:flex lg:items-center lg:top-[var(--nav-h)] lg:px-6">
        <div className="max-w-xl">
          {/* eyebrow */}
          <motion.div variants={itemVariants} initial="hidden" animate="show" className="mb-5 flex items-center gap-3">
            <span className="block h-px w-10 bg-accent" />
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-accent md:text-sm">
              SOFTWARE DEVELOPER &amp; PROBLEM SOLVER
            </span>
          </motion.div>

          {/* heading */}
          <motion.h1
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="mb-5 font-display font-bold leading-[0.95] tracking-tight"
            style={{ fontSize: 'clamp(2rem, 5vw, 4.5rem)' }}
          >
            <span className="block text-white">Hi, I&apos;m</span>
            <span className="block text-accent">
              <TypewriterText text="Krish Sharma" delay={120} />
            </span>
          </motion.h1>

          {/* tagline serif */}
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="mb-5 font-serif text-xl leading-tight text-white/90 md:text-3xl"
          >
            I build practical software and real-world systems.
          </motion.p>

          {/* divider */}
          <motion.div variants={itemVariants} initial="hidden" animate="show" className="mb-5 h-px w-16 bg-white/30" />

          {/* description */}
          <motion.p
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="mb-8 max-w-md text-sm leading-relaxed text-gray-400 md:text-base"
          >
            I&apos;m Krish, a passionate computer science student who fell in love with coding during my
            first &quot;Hello World&quot; program. I build interactive, real-world systems end to end.
          </motion.p>

          {/* CTA row */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4"
          >
            <Link
              to="/projects"
              aria-label="Explore my work"
              className="btn-shine group inline-flex h-12 w-full items-center justify-between gap-3 rounded-full bg-accent px-5 font-display text-base font-semibold tracking-normal text-black shadow-[0_0_0_1px_rgba(200,255,46,0.4),0_0_24px_rgba(200,255,46,0.45),0_0_60px_rgba(200,255,46,0.25)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(200,255,46,0.6),0_0_32px_rgba(200,255,46,0.6),0_0_80px_rgba(200,255,46,0.35)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black sm:w-auto sm:justify-between"
            >
              <span>Explore My Work</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-black/15 transition-colors group-hover:bg-black/25">
                <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:rotate-45" />
              </span>
            </Link>

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
          </motion.div>

          {/* mobile / tablet social row under buttons */}
          <motion.div
            variants={itemVariants}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap gap-5 lg:hidden"
          >
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="inline-flex items-center gap-1 font-display text-base font-medium text-white/80 transition-colors hover:text-accent"
              >
                {s.label} <span aria-hidden="true">↗</span>
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* desktop socials bottom-right */}
      <div className="absolute bottom-8 right-6 z-20 hidden flex-col items-end gap-2 lg:flex md:right-12">
        {socials.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            className="inline-flex items-center gap-1 font-display text-base font-medium text-white/80 transition-all hover:translate-x-1 hover:text-accent"
          >
            {s.label} <span className="text-white/40">↗</span>
          </a>
        ))}
      </div>

      {/* hairline bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10 z-30" />
    </section>
  );
};

export default Hero;
