import React from 'react';
import { EDUCATIONS } from '../constants';
import { SectionId } from '../types';

const Education = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 bg-[#0a0a0a] relative border-t border-[#1a1a1a]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-12">
          Education & <span className="text-primary-500">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="bg-[#1a1a1a] p-8 rounded-2xl border border-[#2a2a2a] hover:border-primary-500/50 transition-all group">
               <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-white group-hover:text-primary-500 transition-colors">{edu.school}</h3>
                  <span className="bg-[#2a2a2a] text-slate-300 text-xs px-3 py-1 rounded-full font-mono">{edu.year}</span>
               </div>
               <div className="text-lg text-slate-200 font-medium mb-2">{edu.degree}</div>
               {edu.details && (
                   <p className="text-slate-400 text-sm">{edu.details}</p>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;