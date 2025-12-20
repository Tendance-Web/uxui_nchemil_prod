import React from 'react';
import { SKILLS_DATA } from '../constants';

export const TechStack: React.FC = () => {

  // Fonction pour générer un son de Sonar via Web Audio API
  const playSonarSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      
      const osc = ctx.createOscillator();
      const mainGain = ctx.createGain();
      
      const delayNode = ctx.createDelay();
      const feedbackGain = ctx.createGain();
      const filterNode = ctx.createBiquadFilter();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime);

      delayNode.delayTime.value = 0.4;
      feedbackGain.gain.value = 0.15;
      
      filterNode.type = 'lowpass';
      filterNode.frequency.value = 800;

      osc.connect(mainGain);
      mainGain.connect(ctx.destination);

      mainGain.connect(delayNode);
      delayNode.connect(filterNode);
      filterNode.connect(feedbackGain);
      feedbackGain.connect(delayNode);

      filterNode.connect(ctx.destination);

      const now = ctx.currentTime;
      mainGain.gain.setValueAtTime(0, now);
      mainGain.gain.linearRampToValueAtTime(0.2, now + 0.05); 
      mainGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      osc.start(now);
      osc.stop(now + 2.5); 

    } catch (error) {
      console.error("AudioContext non supporté par ce navigateur");
    }
  };

  return (
    <section id="stack" className="py-24 px-6 max-w-[1440px] mx-auto">
      {/* Header Section */}
      <div className="mb-16">
         <h2 className="text-3xl font-bold text-white mb-4">Compétences</h2>
         <p className="text-text-secondary leading-relaxed text-base max-w-2xl">
            Expertise technique et méthodologique pour piloter des projets digitaux de A à Z.
         </p>
      </div>
      
      {/* 3 Columns Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {SKILLS_DATA.map((category) => (
          <div 
            key={category.title} 
            className="group p-8 border border-zinc-800 bg-surface/50 rounded hover:border-primary/50 hover:-translate-y-1 transition-all duration-300"
            onMouseEnter={playSonarSound}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="w-1 h-8 bg-primary rounded-full"></span>
              <h3 className="text-xl font-bold text-white uppercase tracking-tight">
                {category.title}
              </h3>
            </div>
            
            <ul className="space-y-4">
              {category.skills.map((skill, idx) => (
                <li key={idx} className="text-text-secondary text-sm leading-relaxed pl-4 border-l border-zinc-800 group-hover:border-zinc-600 transition-colors">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};