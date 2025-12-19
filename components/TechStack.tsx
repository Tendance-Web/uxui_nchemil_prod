import React from 'react';
import { SKILLS_DATA } from '../constants';
import { Check } from 'lucide-react';

export const TechStack: React.FC = () => {
  return (
    <section id="stack" className="py-24 px-6 border-y border-border bg-background/50">
      <div className="max-w-[1440px] mx-auto">
        <div className="mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Compétences</h2>
            <p className="text-text-secondary max-w-xl">
                Expertise technique et méthodologique pour piloter des projets digitaux de A à Z.
            </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {SKILLS_DATA.map((category) => (
            <div key={category.title} className="bg-zinc-900/50 rounded-xl p-8 border border-border flex flex-col h-full hover:border-zinc-600 transition-all">
              <div className="mb-6 pb-4 border-b border-border/50">
                <h3 className="text-xl font-bold text-white flex items-center gap-3">
                  <span className={`w-1.5 h-6 rounded-full ${
                    category.title === 'UX' ? 'bg-primary' : 
                    category.title === 'UI' ? 'bg-indigo-500' : 'bg-amber-500'
                  }`}></span>
                  {category.title}
                </h3>
              </div>
              
              <ul className="space-y-4 flex-1">
                {category.skills.map((skill, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-base text-text-secondary leading-relaxed">
                    <Check className="w-5 h-5 text-primary shrink-0 mt-0.5 opacity-70" />
                    <span>{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};