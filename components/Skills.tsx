import React from 'react';
import { SKILLS } from '../constants';
import { SectionId } from '../types';

const Skills = () => {
  return (
    <section id={SectionId.SKILLS} className="py-24 bg-gray-50 dark:bg-[#0a0a0a] relative transition-colors duration-300">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 dark:text-white mb-16 text-center">
          Technical <span className="text-primary-500">Expertise</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Frontend & Specialized */}
          <div className="space-y-8">
             <h3 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-[#2a2a2a] pb-4">
                Core Stack
             </h3>
             <div className="space-y-6">
                {SKILLS.filter(s => s.category === 'frontend' || s.category === 'specialized').map((skill) => (
                    <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                            <span className="text-gray-800 dark:text-slate-200 font-medium">{skill.name}</span>
                            <span className="text-primary-500 font-mono">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 dark:bg-[#1a1a1a] rounded-full overflow-hidden">
                            <div 
                                className="h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"
                                style={{ width: `${skill.level}%` }}
                            />
                        </div>
                    </div>
                ))}
             </div>
          </div>

          {/* Cards Style for other skills */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white border-b border-gray-300 dark:border-[#2a2a2a] pb-4 mb-8">
                Industry Knowledge
             </h3>
             <div className="grid grid-cols-2 gap-4">
                <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-[#2a2a2a] hover:border-primary-500 transition-colors group">
                    <div className="text-primary-500 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        🐎
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-bold mb-1">Horse Racing</h4>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Deep understanding of horse racing and betting logic.</p>
                </div>
                <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-[#2a2a2a] hover:border-primary-500 transition-colors group">
                    <div className="text-primary-500 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        🎲
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-bold mb-1">Odds</h4>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Expertise in fixed odds data analysis  and make exchange betting mechanics via API.</p>
                </div>
                 <div className="bg-white dark:bg-[#1a1a1a] p-6 rounded-xl border border-gray-200 dark:border-[#2a2a2a] hover:border-primary-500 transition-colors group col-span-2">
                    <div className="text-primary-500 text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                        ⚡
                    </div>
                    <h4 className="text-gray-900 dark:text-white font-bold mb-1">Real-time Data</h4>
                    <p className="text-sm text-gray-600 dark:text-slate-400">Building low-latency WebSocket && WebService interfaces for instant betting data updates and race list visualization.</p>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;