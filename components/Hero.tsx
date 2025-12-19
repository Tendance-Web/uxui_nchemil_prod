import React from 'react';
import { ArrowUpRight, User } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };
  
  const scrollToAbout = () => {
    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col justify-center px-6 max-w-[1440px] mx-auto pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
        
        {/* Left Content */}
        <div className="lg:col-span-10 space-y-10">
          
          {/* Label Tech */}
          <div className="flex items-center gap-3 animate-fade-in">
            <span className="text-primary font-mono text-sm">//</span>
            <span className="tech-label text-primary tracking-widest">PORTFOLIO</span>
          </div>

          {/* Main Title - Massive & Uppercase */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[0.9] tracking-tighter uppercase animate-slide-up-fade break-words">
            <span className="block">UX UI</span>
            <span className="block">Designer</span>
            <span className="block text-zinc-500">NoCode & AI</span>
          </h1>
          
          <p className="text-lg md:text-xl text-text-secondary max-w-xl font-light leading-relaxed animate-slide-up-delay">
            Je conçois des écosystèmes digitaux depuis 10 ans. 
            Une approche hybride mêlant design d'interfaces complexes, méthodologies UX, IA et NoCode, enfin un petit peu de code quand même !
          </p>
          
          {/* Tech Buttons - Condensed Uppercase & Mono Font - Min 14px */}
          <div className="flex flex-col sm:flex-row gap-4 pt-6 animate-slide-up-delay">
            <button 
              onClick={scrollToProjects}
              className="group relative px-6 py-4 bg-primary text-white text-sm font-mono font-bold uppercase tracking-tight rounded hover:bg-primary-hover transition-all flex items-center justify-center gap-2"
            >
              Voir les projets
              <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </button>
            
            <button 
              onClick={scrollToAbout}
              className="group px-6 py-4 bg-transparent border border-zinc-700 text-white text-sm font-mono font-bold uppercase tracking-tight rounded hover:border-primary hover:text-primary transition-all flex items-center justify-center gap-2"
            >
              Mon Parcours
              <User size={16} />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};