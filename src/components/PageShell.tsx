import React from 'react';

interface PageShellProps {
  children: React.ReactNode;
  className?: string;
}

const PageShell: React.FC<PageShellProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`relative min-h-screen text-white ${className}`}
      style={{ paddingTop: 'calc(var(--nav-h) + 48px)', paddingBottom: '96px' }}
    >
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6">{children}</div>
    </div>
  );
};

export default PageShell;
