
import React from 'react';
import { motion } from 'framer-motion';
import { CAPABILITIES } from '../constants';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const Capabilities: React.FC = () => {
  return (
    <section className="bg-white text-black pt-24 overflow-hidden relative">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start px-8 md:px-24">
        <div className="flex flex-col min-h-[500px] md:min-h-[600px] justify-between h-full">
          <div>
            <m.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-teal-600 font-bold uppercase tracking-widest mb-2"
            >
              CAPABILITIES
            </m.p>
            <m.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-6xl md:text-7xl font-black leading-none mb-12"
            >
              THINGS I'M<br />REASONABLY<br />GOOD AT
            </m.h2>
          </div>
          
          <m.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full mt-auto flex items-end"
          >
             <img 
              src="images/capabilities-image.png" 
              alt="Capabilities" 
              className="w-full h-auto object-contain block grayscale hover:grayscale-0 transition-all duration-700"
              style={{ marginBottom: '-1px' }} // Ensures it touches the grey section below
            />
          </m.div>
        </div>
        
        <div className="space-y-16 pb-32 self-center">
          {CAPABILITIES.map((cap, index) => (
            <m.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-t-4 border-black pt-8 group"
            >
              <h3 className="text-3xl font-black mb-4 group-hover:text-teal-600 transition-colors uppercase">
                {cap.title}
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed font-medium">
                {cap.description}
              </p>
            </m.div>
          ))}
        </div>
      </div>
    </section>
  );
};
