import React from 'react';
import { useTilt } from '../hooks/useTilt';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  interactive?: boolean;
  tilt?: boolean;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className = '', interactive = false, tilt = false }) => {
  const tiltRef = useTilt<HTMLDivElement>(tilt);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!interactive) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    e.currentTarget.style.setProperty('--mx', `${(x * 100).toFixed(1)}%`);
    e.currentTarget.style.setProperty('--my', `${(y * 100).toFixed(1)}%`);
  };

  return (
    <div
      ref={tiltRef}
      onPointerMove={handlePointerMove}
      className={`glass relative ${interactive ? 'glass-interactive' : ''} ${className}`}
    >
      {interactive && (
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(circle at var(--mx, 50%) var(--my, 50%), rgba(255, 255, 255, 0.12), transparent 42%)',
          }}
        />
      )}
      {children}
    </div>
  );
};

export default GlassCard;
