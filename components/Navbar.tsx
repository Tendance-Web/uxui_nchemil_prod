import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

export const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavigation = (sectionId: string) => {
    setIsMobileMenuOpen(false);
    if (isHome) {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/', { state: { scrollTo: sectionId } });
    }
  };

  const getLabel = (item: string) => {
    switch (item) {
      case 'projects': return 'Projets';
      case 'experience': return 'Expérience';
      case 'stack': return 'Compétences';
      default: return item;
    }
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 h-20 border-b border-white/5 bg-background/80 backdrop-blur-md">
        <div className="max-w-[1440px] mx-auto px-6 h-full flex items-center justify-between">
          
          {/* Logo */}
          <button 
            onClick={() => handleNavigation('root')} 
            className="text-white font-bold font-mono text-base tracking-tight uppercase hover:text-primary transition-colors z-50"
          >
            Nassim Chemil
          </button>
          
          {/* Desktop Menu - Font Mono - Text SM (14px) */}
          <div className="hidden md:flex items-center gap-10">
            {['projects', 'stack', 'skills','experience'].map((item) => (
              <button 
                key={item}
                onClick={() => handleNavigation(item)} 
                className="font-bold font-mono text-sm text-text-secondary hover:text-primary uppercase tracking-tight transition-colors"
              >
                {getLabel(item)}
              </button>
            ))}
          </div>

          {/* Mobile Hamburger Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(true)}
              className="text-white p-2 hover:bg-white/5 transition-colors rounded"
              aria-label="Ouvrir le menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-background z-[100] flex flex-col md:hidden">
           <div className="flex items-center justify-between px-6 h-20 border-b border-white/5">
              <button 
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  handleNavigation('root');
                }}
                className="text-white font-bold font-mono text-base tracking-tight uppercase"
              >
                Nassim Chemil
              </button>

              <button 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-white p-2 hover:text-primary transition-colors rounded"
                aria-label="Fermer le menu"
              >
                <X size={24} />
              </button>
           </div>

           <div className="flex flex-col px-6 space-y-8 mt-12 animate-fade-in">
              {['projects', 'stack', 'skills','experience'].map((item) => (
                <button 
                  key={item}
                  onClick={() => handleNavigation(item)} 
                  className="text-left text-2xl font-bold font-mono text-white uppercase tracking-tighter hover:text-primary transition-colors"
                >
                  {getLabel(item)}
                </button>
              ))}
           </div>
        </div>
      )}
    </>
  );
};