
import React from 'react';
import { motion } from 'framer-motion';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 flex justify-between items-center backdrop-blur-md bg-black/40 border-b border-white/10">
      <m.div 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="h-10 cursor-pointer"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <img src="images/CS-Logo-white.png" alt="CS Logo" className="h-full object-contain" />
      </m.div>
    </nav>
  );
};
