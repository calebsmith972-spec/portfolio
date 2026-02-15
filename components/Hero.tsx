
import React from 'react';
import { motion } from 'framer-motion';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-8 md:px-24 pt-20 overflow-hidden bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="images/hero0image.jpg" 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/40 to-transparent"></div>
      </div>

      <div className="z-10 max-w-4xl relative">
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-black mb-2 drop-shadow-lg"
        >
          WELCOME TO
        </m.h2>
        <m.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-5xl md:text-8xl font-black text-teal-accent mb-8 drop-shadow-xl"
        >
          MY PORTFOLIO
        </m.h1>
        
        <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-gray-100 text-lg md:text-xl max-w-lg mb-4 font-medium"
        >
          A place where I incorporate all my design, ideas, projects
          and thoughts. All shared on the World Wide Web.
        </m.p>
        
        <m.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 text-sm max-w-md italic mb-10"
        >
          **Also spent a concerning amount of time worrying about the exact shade of teal used on this website.
        </m.p>
        
        <m.a 
          href="#projects"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="inline-block bg-teal-accent text-black font-bold px-10 py-4 rounded-sm transition-all hover:bg-white uppercase tracking-widest"
        >
          VIEW PROJECTS
        </m.a>
      </div>
    </section>
  );
};
