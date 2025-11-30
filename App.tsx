import React from 'react';
import Navbar from './components/Navbar';
import Animated3D from './components/Animated3D';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import { SectionId } from './types';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white font-sans selection:bg-primary-500 selection:text-white transition-colors duration-300">
      <Navbar />
      
      {/* Hero Section */}
      <div id={SectionId.HERO} className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <Animated3D />
        <div className="absolute z-10 text-center px-4">
          <h2 className="text-primary-500 font-mono tracking-widest text-sm md:text-base mb-4 animate-pulse">
            ● LIVE ODDS UPDATING
          </h2>
          <h1 className="text-5xl md:text-8xl font-display font-bold text-gray-900 dark:text-white mb-6 tracking-tighter drop-shadow-2xl">
            DENIZ FIRAT
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 dark:text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Specialized Frontend Developer for <span className="text-gray-900 dark:text-white font-semibold">Horse Racing</span> & <span className="text-primary-500 font-semibold">Online Betting</span> Industries.
          </p>
          <div className="mt-10 flex flex-col md:flex-row gap-4 justify-center">
             <button onClick={() => document.getElementById(SectionId.EXPERIENCE)?.scrollIntoView({behavior: 'smooth'})} className="px-8 py-3 rounded-full border border-gray-400 dark:border-slate-500 hover:border-primary-500 hover:bg-primary-500/10 text-gray-900 dark:text-white transition-all backdrop-blur-sm">
                View Track Record
             </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-gray-500 dark:text-slate-500">
           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
        </div>
      </div>

      <Experience />
      <Skills />
      <Education />
      <Contact />
    </div>
  );
}

export default App;