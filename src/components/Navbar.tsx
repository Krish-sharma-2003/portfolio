import React, { useEffect, useRef, useState } from 'react';
import { useLocation } from 'react-router-dom';
import TransitionLink from './TransitionLink';
import { useLenis } from '../contexts/SmoothScrollContext';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(location.pathname);
  const navRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();

  useEffect(() => {
    setActivePath(location.pathname);
    setScrolled(false);
    if (navRef.current) {
      navRef.current.style.transform = '';
    }
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      if (progressRef.current) {
        const doc = document.documentElement;
        const max = doc.scrollHeight - window.innerHeight;
        const pct = max > 0 ? (window.scrollY / max) * 100 : 0;
        progressRef.current.style.width = `${pct}%`;
      }
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    if (lenis) lenis.stop();
    return () => {
      document.body.style.overflow = previous;
      if (lenis) lenis.start();
    };
  }, [isMenuOpen, lenis]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            if (id) {
              const match = navigation.find((item) => item.path === `/${id}`);
              if (match) setActivePath(match.path);
            }
          }
        });
      },
      { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavigate = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <div ref={progressRef} className="fixed top-0 left-0 z-[60] h-[2px] w-0 bg-accent shadow-[0_0_8px_rgba(200,255,46,0.8)]" />
      <div
        ref={navRef}
        data-scrolled={scrolled ? 'true' : 'false'}
        className="navbar fixed top-0 left-0 right-0 z-50"
      >
        <div
          className={
            'mx-auto flex items-center justify-between gap-4 transition-all duration-300 ease-out ' +
            (scrolled
              ? 'mt-3 w-full max-w-[1100px] rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
              : 'mt-0 w-full max-w-none rounded-none border-transparent bg-transparent px-6 py-4')
          }
        >
          {/* Logo */}
          <TransitionLink
            to="/"
            onClick={() => handleNavigate()}
            className="font-display text-xl font-bold tracking-tight text-white outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded"
          >
            Krish<span className="text-accent">.</span>
          </TransitionLink>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => {
              const active = activePath === item.path;
              return (
                <TransitionLink
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavigate()}
                  className={`relative font-display text-base font-medium transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded ${
                    active ? 'text-white' : 'text-white/70 hover:text-white'
                  }`}
                >
                  {item.name}
                  {active && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute -bottom-2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-accent shadow-[0_0_12px_rgba(200,255,46,0.9)]"
                      transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                    />
                  )}
                </TransitionLink>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <TransitionLink
              to="/resume"
              onClick={() => handleNavigate()}
              className="hidden rounded-full border border-accent/50 bg-white/5 px-4 py-2 font-display text-base font-medium text-white backdrop-blur-md shadow-[0_0_16px_rgba(200,255,46,0.08)] transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_24px_rgba(200,255,46,0.25)] focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:inline-flex"
            >
              Resume
            </TransitionLink>

            <button
              type="button"
              data-mobile-toggle
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-sheet"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent/40 hover:text-white focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-nav-sheet"
            data-mobile-sheet
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
            style={{ paddingTop: 'var(--nav-h)' }}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
              onClick={() => setIsMenuOpen(false)}
            />
            <motion.div
              initial={{ opacity: 0, y: -12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.2 }}
              className="relative mx-auto max-w-7xl px-6"
            >
              <div className="rounded-3xl border border-white/15 bg-[#0a0a0f]/95 p-4 backdrop-blur-xl">
                <div className="flex flex-col gap-1">
                  {navigation.map((item) => {
                    const active = activePath === item.path;
                    return (
                      <TransitionLink
                        key={item.name}
                        to={item.path}
                        onClick={() => handleNavigate()}
                        className={`flex min-h-[48px] items-center justify-between rounded-2xl px-4 font-display text-lg font-medium transition-colors outline-none focus:outline-none focus-visible:ring-2 focus-visible:ring-accent ${
                          active ? 'text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        <span>{item.name}</span>
                        {active && <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-[0_0_12px_rgba(200,255,46,0.9)]" />}
                      </TransitionLink>
                    );
                  })}
                  <TransitionLink
                    to="/resume"
                    onClick={() => handleNavigate()}
                    className="mt-3 flex min-h-[48px] items-center justify-center rounded-full border border-accent/50 bg-white/5 px-4 font-display text-lg font-medium text-white backdrop-blur-md shadow-[0_0_16px_rgba(200,255,46,0.08)] transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_24px_rgba(200,255,46,0.25)]"
                  >
                    Resume
                  </TransitionLink>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
