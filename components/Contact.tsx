import React from 'react';
import { SectionId } from '../types';

const Contact = () => {
  return (
    <section id={SectionId.CONTACT} className="py-24 bg-[#0a0a0a] border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8">
          Ready to Make Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-400">Dream Project?</span>
        </h2>
        <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
          I'm currently available for projects especially in horse racing and betting industries and other frontend development projects you have in mind or need help with contact me.
        </p>
        
        <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-16">
          <a href="mailto:dnnzz0@icloud.com" className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary-500/30 w-full md:w-auto">
            Get in Touch
          </a>
          <a href="https://linkedin.com/in/denizfirat1" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-[#1a1a1a] hover:bg-[#2a2a2a] text-white rounded-full font-bold text-lg transition-all border border-[#2a2a2a] w-full md:w-auto">
            LinkedIn Profile
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left border-t border-[#1a1a1a] pt-12">
           <div>
              <h4 className="text-white font-bold mb-4">Deniz Firat</h4>
              <p className="text-slate-500 text-sm">Frontend Developer specialized in high-performance sports betting interfaces and racing data visualization.</p>
           </div>
           <div>
              <h4 className="text-white font-bold mb-4">Expertise</h4>
              <ul className="text-slate-500 text-sm space-y-2">
                 <li>Vue & Nuxt & Vuex</li>
                 <li>HTML & CSS & JavaScript</li>
                 <li>Betting Mathematics</li>
              </ul>
           </div>
           <div>
              <h4 className="text-white font-bold mb-4">Contact</h4>
              <ul className="text-slate-500 text-sm space-y-2">
                 <li>dnnzz0@icloud.com</li>
                 <li>Antalya, Turkey (Remote)</li>
              </ul>
           </div>
        </div>

        <div className="mt-12 pt-8 border-t border-[#1a1a1a] text-slate-600 text-sm">
           © {new Date().getFullYear()} Deniz Firat
        </div>
      </div>
    </section>
  );
};

export default Contact;