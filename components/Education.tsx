import React from 'react';
import { EDUCATIONS } from '../constants';
import { SectionId } from '../types';

const Education = () => {
  return (
    <section id={SectionId.EDUCATION} className="py-24 bg-gray-50 dark:bg-[#0a0a0a] relative border-t border-gray-200 dark:border-[#1a1a1a] transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-12">
          Education & <span className="text-primary-500">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {EDUCATIONS.map((edu) => (
            <div key={edu.id} className="bg-white dark:bg-[#1a1a1a] p-8 rounded-2xl border border-gray-200 dark:border-[#2a2a2a] hover:border-primary-500/50 transition-all group">
               <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">{edu.school}</h3>
                  <span className="bg-gray-100 dark:bg-[#2a2a2a] text-gray-700 dark:text-slate-300 text-xs px-3 py-1 rounded-full font-mono">{edu.year}</span>
               </div>
               <div className="text-lg text-gray-800 dark:text-slate-200 font-medium mb-2">{edu.degree}</div>
               {edu.details && (
                   <p className="text-gray-600 dark:text-slate-400 text-sm">{edu.details}</p>
               )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;