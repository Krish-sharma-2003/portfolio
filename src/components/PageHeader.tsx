import React from 'react';
import { motion, useReducedMotion } from 'framer-motion';


interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle }) => {
  const reduced = useReducedMotion();
  return (
    <motion.div
      initial={reduced ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduced ? 0 : 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="mx-auto mb-12 max-w-3xl text-center"
    >
      <h1 className="font-display text-4xl font-semibold text-white md:text-6xl">{title}</h1>
      <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-accent shadow-[0_0_24px_rgba(200,255,46,0.55)]" />
      {subtitle && (
        <p className="mx-auto mt-6 max-w-[640px] text-base leading-relaxed text-white/65 md:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default PageHeader;
