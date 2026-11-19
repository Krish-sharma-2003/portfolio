import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../contexts/ThemeContext';

const navigation = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Projects', path: '/projects' },
  { name: 'Skills', path: '/skills' },
  { name: 'Contact', path: '/contact' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activePath, setActivePath] = useState(location.pathname);

  useEffect(() => {
    setActivePath(location.pathname);
  }, [location.pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isMenuOpen]);

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

  const handleNavigate = (path: string) => {
    setIsMenuOpen(false);
    if (location.pathname !== path) {
      navigate(path);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const baseBar =
    'fixed left-1/2 z-50 -translate-x-1/2 transition-all duration-300 ease-out';

  const barClasses = scrolled
    ? 'top-3 w-[min(1200px,calc(100%-1.5rem))] rounded-2xl border border-white/10 bg-black/40 px-5 py-3 backdrop-blur-xl shadow-[0_12px_40px_rgba(0,0,0,0.45)]'
    : 'top-0 w-full rounded-none border-transparent bg-transparent px-6 py-4';

  return (
    <>
      <div className={baseBar + ' ' + barClasses}>
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
          {/* Logo */}
          <Link
            to="/"
            onClick={() => handleNavigate('/')}
            className="font-display text-xl font-bold tracking-tight text-white"
          >
            Krish<span className="text-accent">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => {
              const active = activePath === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  onClick={() => handleNavigate(item.path)}
                  className={`relative font-display text-base font-medium transition-colors ${
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
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-3">
            <Link
              to="/resume"
              onClick={() => handleNavigate('/resume')}
              className="hidden rounded-full border border-accent/50 bg-white/5 px-4 py-2 font-display text-base font-medium text-white backdrop-blur-md shadow-[0_0_16px_rgba(200,255,46,0.08)] transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_24px_rgba(200,255,46,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:inline-flex"
            >
              Resume
            </Link>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              type="button"
              data-mobile-toggle
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-nav-sheet"
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/70 transition-colors hover:border-accent/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent md:hidden"
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
                      <Link
                        key={item.name}
                        to={item.path}
                        onClick={() => handleNavigate(item.path)}
                        className={`flex min-h-[48px] items-center rounded-2xl px-4 font-display text-lg font-medium transition-colors ${
                          active ? 'bg-white/10 text-white' : 'text-white/70 hover:bg-white/5 hover:text-white'
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <Link
                    to="/resume"
                    onClick={() => handleNavigate('/resume')}
                    className="mt-3 flex min-h-[48px] items-center justify-center rounded-full border border-accent/50 bg-white/5 px-4 font-display text-lg font-medium text-white backdrop-blur-md shadow-[0_0_16px_rgba(200,255,46,0.08)] transition-all hover:border-accent hover:bg-accent/10 hover:shadow-[0_0_24px_rgba(200,255,46,0.25)]"
                  >
                    Resume
                  </Link>
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
