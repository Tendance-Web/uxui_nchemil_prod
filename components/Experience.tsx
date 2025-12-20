import React from 'react';
import { EXPERIENCE_DATA, SOCIAL_LINKS } from '../constants';
import { Download } from 'lucide-react';


export const Experience: React.FC = () => {

  // Fonction pour générer un son de Sonar via Web Audio API
  // Intégration d'un écho (Delay), d'un filtre (Lowpass) et d'une boucle de feedback
  const playSonarSound = () => {
    try {
      const AudioContext = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContext) return;

      const ctx = new AudioContext();
      
      // 1. Création des nœuds
      const osc = ctx.createOscillator();
      const mainGain = ctx.createGain(); // Contrôle le volume principal (le "Ping")
      
      const delayNode = ctx.createDelay();
      const feedbackGain = ctx.createGain();
      const filterNode = ctx.createBiquadFilter();

      // 2. Configuration
      
      // Oscillateur
      osc.type = 'sine';
      osc.frequency.setValueAtTime(400, ctx.currentTime); // Fréquence abaissée à 400Hz (plus grave)

      // Delay (L'écho)
      delayNode.delayTime.value = 0.4; // 400ms entre les répétitions
      
      // Feedback (La répétition)
      feedbackGain.gain.value = 0.15; // Réduit à 15% (moins résonant)
      
      // Filtre (L'effet "sous l'eau")
      filterNode.type = 'lowpass';
      filterNode.frequency.value = 800; // Filtre plus fermé pour étouffer l'écho

      // 3. Câblage (Routing)
      
      // Chaîne directe (Dry) : Osc -> MainGain -> Sortie
      osc.connect(mainGain);
      mainGain.connect(ctx.destination);

      // Chaîne d'effet (Wet) avec boucle :
      // MainGain -> Delay -> Filter -> Feedback -> Delay (Boucle)
      mainGain.connect(delayNode);
      delayNode.connect(filterNode);
      filterNode.connect(feedbackGain);
      feedbackGain.connect(delayNode); // Bouclage

      // Sortie de l'effet vers les haut-parleurs
      filterNode.connect(ctx.destination);

      // 4. Enveloppe de volume (Le "Ping")
      const now = ctx.currentTime;
      mainGain.gain.setValueAtTime(0, now);
      
      // Attaque rapide mais douce
      mainGain.gain.linearRampToValueAtTime(0.2, now + 0.05); 
      
      // Decay exponentiel rapide pour le son initial
      mainGain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

      // 5. Lecture
      osc.start(now);
      // On laisse tourner l'oscillateur pour que la boucle de delay puisse vivre sa vie
      osc.stop(now + 2.5); 

    } catch (error) {
      console.error("AudioContext non supporté par ce navigateur");
    }
  };

  return (
    <section id="experience" className="py-24 px-6 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        
        {/* Left Col: Header */}
        <div className="lg:col-span-4 space-y-6">
          <h2 className="text-3xl font-bold text-white">Expérience</h2>
          <p className="text-text-secondary leading-relaxed text-base">
            J'allie les méthodes UX/UI avec la technologie de l'information pour concevoir des interfaces accessibles, cohérentes et intuitives. 
            Je collabore activement avec les équipes techniques, comprends les architectures numériques et transforme la complexité en expériences utilisateur claires et efficaces.
          </p>
          
          <a 
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-primary font-medium font-mono hover:text-primary-hover transition-colors mt-4 text-sm"
          >
            <span>Voir mon LinkedIn</span>
            <Download size={16} />
          </a>
        </div>

        {/* Right Col: Timeline */}
        <div className="lg:col-span-8 space-y-12 relative">
           {/* Vertical Line */}
           <div className="absolute left-0 top-2 bottom-2 w-px bg-border hidden md:block"></div>

           {EXPERIENCE_DATA.map((exp) => (
             <div 
             key={exp.id} 
             className="relative md:pl-12 group"
             onMouseEnter={playSonarSound}
             >
             
               {/* Sonar Dot Animation */}
               <div className="absolute left-[-4px] top-2 hidden md:flex items-center justify-center w-2 h-2">
                 {/* Ripple 1 - Ring effect */}
                 <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple"></div>
                 {/* Ripple 2 (Delayed) */}
                 <div className="absolute w-full h-full rounded-full border border-primary opacity-0 group-hover:animate-ripple" style={{ animationDelay: '0.6s' }}></div>
                 
                 {/* Center Dot */}
                 <div className="relative w-2 h-2 rounded-full bg-zinc-600 group-hover:bg-primary transition-colors border border-background z-10"></div>
               </div>

               
               <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                 <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                 <span className="text-sm font-mono text-zinc-400">{exp.period}</span>
               </div>
               
               <p className="text-primary text-base font-medium mb-4">{exp.company}</p>
               
               <ul className="space-y-6">
                 {exp.description.map((item, idx) => (
                   <li key={idx} className="text-text-secondary text-base pl-4 border-l border-zinc-700 leading-relaxed">
                     {item}
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