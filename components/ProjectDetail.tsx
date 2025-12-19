import React, { useEffect } from 'react';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, UserCog, Lightbulb, Target, Flag, ArrowUpRight } from 'lucide-react';
import { PROJECTS_DATA } from '../constants';
import { FadeIn } from './FadeIn';
import { useLenis } from './SmoothScroll';

export const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const lenis = useLenis();
  const project = PROJECTS_DATA.find(p => p.id === id);

  // Scroll en haut de page à chaque changement de route (changement de projet)
  useEffect(() => {
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, lenis]);

  if (!project || !project.fullDetails) {
    return (
      <div className="min-h-screen pt-32 px-6 text-center text-white animate-fade-in flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold uppercase tracking-tight mb-4">404 // Projet introuvable</h2>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-3 bg-primary text-white uppercase text-sm font-mono font-bold tracking-tight hover:bg-primary-hover transition-colors rounded"
        >
          Retour à l'accueil
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-36 pb-32 px-6">
      <div className="max-w-6xl mx-auto space-y-8 md:space-y-24">
        
        {/* Navigation & Header */}
        <FadeIn className="space-y-12">
          <button 
            onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
            className="group flex items-center gap-3 text-text-secondary hover:text-white transition-colors"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            <span className="text-sm font-mono font-bold uppercase tracking-tight">Retour aux projets</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">
             <div className="space-y-6">
               <div className="flex items-center gap-3">
                 <span className="tech-label text-primary">
                   // {project.client}
                 </span>
                 <span className="w-px h-4 bg-zinc-700"></span>
                 <span className="text-sm font-mono uppercase text-zinc-400">
                   {project.category}
                 </span>
               </div>
               <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tighter uppercase leading-[0.9]">
                 {project.title}
               </h1>
             </div>
             
             <div className="flex flex-wrap gap-2 lg:justify-end">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1.5 border border-zinc-800 text-zinc-300 text-sm font-mono font-bold uppercase tracking-tight rounded">
                    {tag}
                  </span>
                ))}
             </div>
          </div>
        </FadeIn>

        {/* 1. Image de Couverture Hero */}
        <FadeIn delay={200}>
          <div className="w-full border border-zinc-800 bg-surface shadow-2xl relative group rounded overflow-hidden">
            <img 
              src={project.image} 
              alt={`Couverture ${project.title}`} 
              className="w-full h-auto max-h-[80vh] object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-700"
            />
          </div>
        </FadeIn>

        {/* 2. Grid Contexte / Mission / Challenge */}
        <FadeIn delay={300}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 border-y border-zinc-800 py-6 md:py-16">
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-zinc-500">01</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Contexte</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.fullDetails.context}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-zinc-500">02</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Mission</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.fullDetails.mission}
              </p>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-sm font-mono text-zinc-500">03</span>
                <h3 className="text-base font-bold text-white uppercase tracking-tight">Challenges</h3>
              </div>
              <p className="text-text-secondary leading-relaxed text-base">
                {project.fullDetails.challenges}
              </p>
            </div>
          </div>
        </FadeIn>

        {/* 3. Mon Rôle */}
        {project.fullDetails.role && (
          <FadeIn delay={200}>
            <div className="bg-zinc-900/50 p-6 md:p-12 border border-zinc-800 rounded">
              <div className="flex flex-col md:flex-row gap-12 items-start">
                <div className="md:w-64 shrink-0">
                  <span className="text-primary font-mono text-sm">// ROLE</span>
                  <h3 className="text-2xl font-bold text-white uppercase tracking-tight mt-2">Mon Rôle</h3>
                </div>
                <div className="flex-1">
                  <p className="text-zinc-300 leading-relaxed text-lg">
                    {project.fullDetails.role}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* 4. Solutions Section */}
        <div className="space-y-8 md:space-y-16">
          <FadeIn>
            <div className="flex flex-col gap-4 max-w-2xl">
              <span className="tech-label text-primary">// PROCESS</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white uppercase tracking-tight">Design & Solutions</h2>
            </div>
          </FadeIn>
          
          {project.fullDetails.solutionBlocks ? (
            <div className="space-y-8 md:space-y-24">
              {project.fullDetails.solutionBlocks.map((block, index) => {
                if (block.type === 'text') {
                   return (
                     <FadeIn key={index} delay={100}>
                       <div className="max-w-3xl ml-auto md:mr-[10%] border-l border-primary pl-8 py-2">
                         <div className="text-text-main leading-relaxed text-lg whitespace-pre-line">
                           {block.content}
                         </div>
                       </div>
                     </FadeIn>
                   );
                } else if (block.type === 'image') {
                   return (
                     <FadeIn key={index} delay={100}>
                       <figure className="space-y-4">
                         <div className="border border-zinc-800 bg-surface rounded overflow-hidden">
                            <img 
                                src={block.url} 
                                alt={block.caption || "Illustration de la solution"} 
                                className="w-full h-auto object-cover"
                            />
                         </div>
                         {block.caption && (
                           <figcaption className="flex items-center gap-2 text-sm font-mono uppercase text-zinc-400 mt-2">
                             <span className="w-4 h-px bg-zinc-600"></span>
                             {block.caption}
                           </figcaption>
                         )}
                       </figure>
                     </FadeIn>
                   );
                }
                return null;
              })}
            </div>
          ) : (
             /* Fallback for legacy content */
            <div className="space-y-8">
               <FadeIn>
                <div className="text-zinc-300 leading-relaxed text-lg whitespace-pre-line max-w-4xl border-l-2 border-zinc-800 pl-6">
                  {project.fullDetails.solution}
                </div>
              </FadeIn>
              
              {project.fullDetails.solutionImages?.map((img, index) => (
                <FadeIn key={index} delay={100}>
                   <div className="border border-zinc-800 bg-surface mb-4 rounded overflow-hidden">
                      <img src={img.url} alt={img.caption} className="w-full h-auto object-cover"/>
                   </div>
                   {img.caption && <p className="text-sm font-mono uppercase text-zinc-400 mb-12">// {img.caption}</p>}
                </FadeIn>
              ))}
            </div>
          )}
        </div>

        {/* 5. KPI & Résultats */}
        <FadeIn delay={100}>
          <div className="border border-zinc-800 bg-zinc-900/50 p-6 md:p-12 rounded">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">Impact & Résultats</h3>
                <span className="tech-label text-primary border border-primary/20 px-3 py-1 rounded">Metrics</span>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {project.fullDetails.kpi?.map((kpi, index) => (
                <div key={index} className="flex flex-col gap-3">
                  <span className="text-4xl font-bold text-zinc-700 font-mono select-none">0{index + 1}</span>
                  <div className="h-px w-full bg-zinc-800"></div>
                  <p className="text-white font-medium text-base uppercase tracking-wide leading-relaxed">
                    {kpi}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Footer Navigation */}
        <div className="flex justify-center pt-16 border-t border-zinc-900">
           <button 
             onClick={() => navigate('/', { state: { scrollTo: 'projects' } })}
             className="px-8 py-4 bg-primary text-white text-sm font-mono font-bold uppercase tracking-tight hover:bg-primary-hover transition-all flex items-center gap-2 rounded"
           >
             Voir d'autres projets
             <ArrowUpRight size={16} />
           </button>
        </div>

      </div>
    </div>
  );
};