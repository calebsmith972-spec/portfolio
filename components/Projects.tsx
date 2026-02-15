
import React from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="bg-white text-black py-32 px-8 md:px-24">
      <div className="text-center mb-20">
        <m.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-teal-600 font-bold uppercase tracking-widest mb-4"
        >
          BUILT WITH LOVE AND SOME CRYING
        </m.p>
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-6xl md:text-7xl font-black mb-6"
        >
          PROJECTS
        </m.h2>
        <p className="text-gray-500 max-w-xl mx-auto text-lg">A few companies I've had the pleasure to work with over the years.</p>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {PROJECTS.map((project, index) => (
          <m.a
            key={project.id}
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
            className="group relative aspect-square bg-gray-50 flex flex-col items-center justify-center p-8 overflow-hidden border border-gray-100 rounded-lg transition-all"
          >
            <div className="z-10 w-full h-full flex flex-col items-center justify-center transition-transform duration-500 group-hover:scale-110">
              <div className="w-full h-1/2 flex items-center justify-center mb-4">
                <img 
                  src={project.logo} 
                  alt={project.name} 
                  className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300" 
                />
              </div>
              <span className="text-[11px] font-bold text-gray-400 mt-3 block opacity-0 group-hover:opacity-100 transition-opacity tracking-widest uppercase">
                Visit Website
              </span>
            </div>
            
            {/* Subtle brand overlay background */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-5 bg-teal-accent transition-opacity duration-300"></div>
          </m.a>
        ))}
      </div>
    </section>
  );
};
