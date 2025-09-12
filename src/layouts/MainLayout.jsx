import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Sidebar from '../components/Sidebar.jsx';

const MainLayout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      {/* Desktop Sidebar */}
      <aside className="fixed left-4 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <Sidebar isOpen={false} onClose={closeSidebar} />
      </aside>

      {/* Mobile Hamburger Menu */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 right-6 z-50 lg:hidden w-12 h-12 rounded-full bg-zinc-800/60 backdrop-blur-sm border border-zinc-700/50 flex items-center justify-center hover:bg-accent/20 hover:border-accent/50 transition-all duration-150"
        aria-label="Open navigation menu"
      >
        <motion.div
          className="w-6 h-6 flex flex-col justify-center items-center"
          animate={{ rotate: isSidebarOpen ? 90 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.span
            className="w-5 h-0.5 bg-zinc-200 block"
            animate={{ 
              rotate: isSidebarOpen ? 45 : 0,
              y: isSidebarOpen ? 0 : -4
            }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-zinc-200 block mt-1"
            animate={{ opacity: isSidebarOpen ? 0 : 1 }}
            transition={{ duration: 0.2 }}
          />
          <motion.span
            className="w-5 h-0.5 bg-zinc-200 block mt-1"
            animate={{ 
              rotate: isSidebarOpen ? -45 : 0,
              y: isSidebarOpen ? -6 : 4
            }}
            transition={{ duration: 0.2 }}
          />
        </motion.div>
      </button>

      {/* Mobile Sidebar */}
      <div className="lg:hidden">
        <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />
      </div>

      {/* Main Content */}
      <main className="w-full">
        {children}
      </main>

      {/* Back to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-accent/20 backdrop-blur-sm border border-accent/30 flex items-center justify-center hover:bg-accent/30 hover:scale-110 transition-all duration-150 shadow-lg hover:shadow-accent/20"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Back to top"
      >
        <span className="text-accent-soft text-xl">↑</span>
      </motion.button>
    </div>
  );
};

export default MainLayout;


