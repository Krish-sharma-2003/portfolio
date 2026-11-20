import React from 'react';
import Navbar from './Navbar';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen text-white">
      <Navbar />
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
