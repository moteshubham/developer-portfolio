import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { id: 'hero', label: 'Home', icon: '🏠' },
  { id: 'about', label: 'About', icon: '👤' },
  { id: 'skills', label: 'Skills', icon: '🛠️' },
  { id: 'projects', label: 'Projects', icon: '📦' },
  { id: 'contact', label: 'Contact', icon: '✉️' },
];

const Sidebar = ({ isOpen, onClose }) => {
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.id);
      const scrollPosition = window.scrollY + 200; // Increased offset for better detection

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
      
      // Special handling for contact section (last section)
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        const { offsetTop } = contactElement;
        if (scrollPosition >= offsetTop) {
          setActiveSection('contact');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      // Close mobile sidebar after clicking
      if (onClose) {
        onClose();
      }
    }
  };

  return (
    <>
      {/* Desktop Sidebar */}
      <nav className="hidden lg:flex flex-col gap-3">
        {links.map((link, idx) => {
          const isActive = activeSection === link.id;
          return (
            <div key={link.id} className="relative group">
              <motion.button
                onClick={() => handleScroll(link.id)}
                className={`w-12 h-12 rounded-full backdrop-blur-sm border transition-all duration-150 grid place-items-center shadow-lg ${
                  isActive 
                    ? 'bg-accent/30 border-accent/60 text-accent-soft shadow-accent/20' 
                    : 'bg-zinc-800/60 border-zinc-700/50 hover:bg-accent/20 hover:border-accent/50 hover:scale-110 hover:shadow-accent/20'
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * idx, type: "spring", stiffness: 100 }}
                whileHover={{ scale: isActive ? 1.05 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={link.label}
              >
                <span className={`text-lg transition-colors ${isActive ? 'text-accent-soft' : 'group-hover:text-accent-soft'}`} aria-hidden>
                  {link.icon}
                </span>
                <span className="sr-only">{link.label}</span>
              </motion.button>
              
              {/* Tooltip */}
              <motion.div
                className="absolute left-16 top-1/2 -translate-y-1/2 px-3 py-2 bg-zinc-800/90 backdrop-blur-sm border border-zinc-700/50 rounded-lg text-sm text-zinc-200 whitespace-nowrap pointer-events-none z-50 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                initial={{ opacity: 0, x: -10, scale: 0.8 }}
                whileHover={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
              >
                {link.label}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1 w-2 h-2 bg-zinc-800/90 border-l border-b border-zinc-700/50 rotate-45"></div>
              </motion.div>
            </div>
          );
        })}
      </nav>

      {/* Mobile Sidebar Overlay */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={onClose}
            />
            
            {/* Mobile Sidebar */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 bg-zinc-900/95 backdrop-blur-sm border-l border-zinc-800 z-50 lg:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-xl font-bold text-zinc-200">Navigation</h2>
                  <button
                    onClick={onClose}
                    className="w-8 h-8 rounded-full bg-zinc-800/60 border border-zinc-700/50 flex items-center justify-center hover:bg-zinc-700/60 transition-colors"
                  >
                    ✕
                  </button>
                </div>
                
                <nav className="flex flex-col gap-4">
                  {links.map((link, idx) => {
                    const isActive = activeSection === link.id;
                    return (
                      <motion.button
                        key={link.id}
                        onClick={() => handleScroll(link.id)}
                        className={`flex items-center gap-4 px-4 py-3 rounded-xl transition-all duration-150 ${
                          isActive 
                            ? 'bg-accent/20 border border-accent/30 text-accent-soft' 
                            : 'bg-zinc-800/60 border border-zinc-700/50 text-zinc-300 hover:bg-accent/10 hover:border-accent/30'
                        }`}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-xl">{link.icon}</span>
                        <span className="font-medium">{link.label}</span>
                      </motion.button>
                    );
                  })}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Sidebar;


