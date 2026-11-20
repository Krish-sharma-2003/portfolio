import React, { useEffect } from 'react';
import Navbar from './Navbar';
import CustomCursor from './CustomCursor';
import MagneticLayer from './MagneticLayer';
import { ScrollTrigger } from '../lib/gsap';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useEffect(() => {
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(refresh).catch(() => {});
    }
    const imgs = Array.from(document.images);
    imgs.forEach((img) => {
      if (img.complete) return;
      img.addEventListener('load', refresh, { once: true });
      img.addEventListener('error', refresh, { once: true });
    });
    window.addEventListener('load', refresh);
    return () => {
      window.removeEventListener('load', refresh);
    };
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Navbar />
      <CustomCursor />
      <MagneticLayer />
      <div className="ambient-bg" aria-hidden="true">
        <span className="ambient-blob ambient-blob--1" />
        <span className="ambient-blob ambient-blob--2" />
        <span className="ambient-blob ambient-blob--3" />
      </div>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
