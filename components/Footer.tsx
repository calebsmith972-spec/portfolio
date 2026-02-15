
import React from 'react';
import { motion } from 'framer-motion';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black py-24 px-8 text-center flex flex-col items-center border-t border-gray-900">
      <m.div 
        whileHover={{ scale: 1.1 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="h-14 mb-10 cursor-pointer"
      >
        <img src="images/CS-Logo-white.png" alt="CS Logo" className="h-full object-contain" />
      </m.div>
      <p className="text-gray-600 text-[11px] font-bold tracking-[0.2em] mb-6 uppercase">
        &copy; {new Date().getFullYear()} CALEB SMITH DESIGN. ALL RIGHTS RESERVED.
      </p>
      <div className="flex space-x-10 text-gray-400 text-[10px] uppercase tracking-[0.3em] font-black">
        <a href="https://calebsmithdesign.com" className="hover:text-teal-accent transition-colors">Website</a>
        <a href="#" className="hover:text-teal-accent transition-colors">LinkedIn</a>
        <a href="#" className="hover:text-teal-accent transition-colors">Dribbble</a>
      </div>
    </footer>
  );
};
