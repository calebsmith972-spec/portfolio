
import React from 'react';
import { motion } from 'framer-motion';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const About: React.FC = () => {
  return (
    <section className="bg-gray-100 text-black py-24 px-8 md:px-24 text-center">
      <div className="max-w-4xl mx-auto">
        <m.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-teal-600 font-bold uppercase tracking-widest mb-2"
        >
          WHO EVEN IS HE?
        </m.p>
        <m.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-5xl font-black mb-12"
        >
          ABOUT MR. CALEB
        </m.h2>
        
        <div className="space-y-6 text-lg text-gray-700 font-medium leading-relaxed">
          <m.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            My journey started with a simple question: "How hard can it be to become a designer?" Ten years later, I've realized
            the answer is "Actually, quite hard, but it's worth it." I love the process of turning a messy idea into a clean,
            functional digital product.
          </m.p>
          
          <m.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            When I'm not building or designing, I'm probably making weird noises on a computer, enjoying nature, building my
            body to become a nerd with muscles, or trying to convince my gecko Dexter that I'm the one who runs the house
            (I'm not).
          </m.p>
        </div>
      </div>
    </section>
  );
};
