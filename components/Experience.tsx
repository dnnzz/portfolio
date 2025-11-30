import React from 'react';
import { EXPERIENCES } from '../constants';
import { SectionId } from '../types';

const Experience = () => {
  return (
    <section id={SectionId.EXPERIENCE} className="py-24 relative overflow-hidden bg-gray-50 dark:bg-[#0a0a0a] transition-colors duration-300">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-500/5 -skew-x-12 pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16">
            <div>
                 <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-4">
                  Career <span className="text-primary-500">Track</span>
                </h2>
                <p className="text-gray-600 dark:text-slate-400 max-w-xl text-lg">
                  A timeline of high-performance delivery in the frontend development industry.
                </p>
            </div>
            <div className="hidden md:block">
                <div className="w-24 h-1 bg-primary-500 rounded-full mb-1"></div>
                <div className="w-16 h-1 bg-slate-700 rounded-full ml-auto"></div>
            </div>
        </div>

        <div className="relative border-l-2 border-gray-300 dark:border-slate-800 ml-3 md:ml-6 space-y-12">
          {EXPERIENCES.map((job, index) => (
            <div key={job.id} className="relative pl-8 md:pl-12 group">
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-0 w-5 h-5 rounded-full border-4 border-gray-50 dark:border-[#0a0a0a] bg-gray-300 dark:bg-slate-700 group-hover:bg-primary-500 transition-colors duration-300" />
              
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors">
                    {job.role}
                  </h3>
                  <div className="text-xl text-gray-700 dark:text-slate-300 font-medium mb-1">
                    {job.company}
                  </div>
                </div>
                <div className="text-primary-500 font-mono font-semibold bg-primary-500/20 px-3 py-1 rounded w-fit mt-2 md:mt-0">
                  {job.period}
                </div>
              </div>

              <p className="text-gray-600 dark:text-slate-400 mb-6 text-lg leading-relaxed max-w-3xl">
                {job.description}
              </p>

              <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-[#2a2a2a] hover:border-primary-500/50 transition-all mb-6">
                 <h4 className="text-sm uppercase tracking-wider text-gray-500 dark:text-slate-500 font-semibold mb-3">Highlights</h4>
                 <ul className="space-y-2">
                    {job.highlights.map((h, i) => (
                        <li key={i} className="flex items-start text-gray-700 dark:text-slate-300">
                            <span className="mr-2 text-primary-500 mt-1.5">▹</span>
                            {h}
                        </li>
                    ))}
                 </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {job.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-sm bg-gray-100 dark:bg-[#1a1a1a] text-gray-700 dark:text-slate-300 rounded-full border border-gray-300 dark:border-[#2a2a2a] hover:border-primary-500 hover:text-primary-500 transition-colors cursor-default">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;