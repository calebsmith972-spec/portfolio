
import React, { useState } from 'react';
import { motion } from 'framer-motion';

// Casting motion to any to bypass type issues with HTMLMotionProps in this environment
const m = motion as any;

export const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData as any).toString()
    })
      .then(() => setSubmitted(true))
      .catch((error) => alert(error));
  };

  return (
    <section id="contact" className="bg-black py-32 px-8 md:px-24 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-20 items-center relative z-10">
        <div>
          <m.h2 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-7xl font-black mb-6"
          >
            CONTACT
          </m.h2>
          <p className="text-gray-400 mb-12 max-w-sm text-lg">
            I check my email way too often, so you'll
            probably hear back from me sooner than you'd 
            expect.
          </p>
          
          {submitted ? (
            <m.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="bg-teal-accent/10 border border-teal-accent p-10 text-teal-accent rounded-sm"
            >
              <h3 className="text-2xl font-bold mb-2 uppercase">Message Received</h3>
              <p className="font-medium">The void will get back to you soon. Keep an eye on your inbox.</p>
            </m.div>
          ) : (
            <form 
              name="contact" 
              method="POST" 
              data-netlify="true" 
              onSubmit={handleSubmit}
              className="space-y-10"
            >
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">First Name</label>
                  <input 
                    name="firstName"
                    type="text" 
                    required
                    placeholder="John"
                    className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-teal-accent outline-none transition-colors text-white placeholder-gray-700 font-bold"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Last Name</label>
                  <input 
                    name="lastName"
                    type="text" 
                    required
                    placeholder="Doe"
                    className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-teal-accent outline-none transition-colors text-white placeholder-gray-700 font-bold"
                  />
                </div>
              </div>
              
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Email</label>
                <input 
                  name="email"
                  type="email" 
                  required
                  placeholder="john@example.com"
                  className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-teal-accent outline-none transition-colors text-white placeholder-gray-700 font-bold"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-gray-500 font-black">Message</label>
                <textarea 
                  name="message"
                  rows={4} 
                  required
                  placeholder="What's on your mind?"
                  className="w-full bg-transparent border-b border-gray-800 py-3 focus:border-teal-accent outline-none transition-colors resize-none text-white placeholder-gray-700 font-bold"
                ></textarea>
              </div>
              
              <m.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-teal-accent text-black font-black py-5 tracking-[0.3em] transition-all hover:bg-white uppercase"
              >
                SEND IT TO THE VOID
              </m.button>
            </form>
          )}
        </div>
        
        <div className="relative flex justify-center items-center h-[600px]">
          <m.div
            animate={{ 
              y: [0, -30, 0],
              filter: ["brightness(1)", "brightness(1.4)", "brightness(1)"]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-full h-full relative"
          >
            <img 
              src="images/contact-glow.png" 
              alt="Contact Glow Visual" 
              className="w-full h-full object-contain"
            />
          </m.div>
        </div>
      </div>
    </section>
  );
};
