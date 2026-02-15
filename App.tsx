
import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Capabilities } from './components/Capabilities';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

/**
 * Main application component that assembles all sections.
 */
function App() {
  return (
    <div className="bg-black text-white min-h-screen font-sans selection:bg-teal-accent selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Capabilities />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
