import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects.js';

const Projects = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Featured Projects</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((p, index) => (
          <motion.div 
            key={p.title} 
            className="card p-8 card-hover group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <div className="mb-6">
              <h3 className="font-bold text-2xl mb-3 group-hover:text-accent-soft transition-colors">
                {p.title}
              </h3>
              <p className="text-zinc-300 text-lg leading-relaxed">
                {p.description}
              </p>
            </div>
            
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wide">
                Tech Stack
              </h4>
              <div className="flex flex-wrap gap-3">
                {p.tech.map((t) => (
                  <span 
                    key={t} 
                    className="px-4 py-2 rounded-full bg-zinc-800/80 text-sm border border-zinc-700/50 group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {p.github && (
                  <motion.a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent/10 border border-accent/30 text-accent-soft hover:bg-accent/20 hover:scale-105 transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>🔗</span>
                    <span className="font-medium">View Code</span>
                  </motion.a>
                )}
              </div>
              
              <div className="text-sm text-zinc-500">
                Project #{index + 1}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;


