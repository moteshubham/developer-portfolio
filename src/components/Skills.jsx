import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/skills.js';

const Group = ({ title, items }) => (
  <div className="mb-8">
    <h4 className="text-xl font-semibold mb-4 text-accent-soft">{title}</h4>
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {items.map((s) => (
        <motion.div
          key={s}
          className="px-4 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700/50 text-sm text-zinc-200 text-center hover:bg-accent/10 hover:border-accent/30 hover:scale-105 transition-all duration-300 cursor-pointer"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.98 }}
        >
          {s}
        </motion.div>
      ))}
    </div>
  </div>
);

const CodingGraphic = () => (
  <div className="flex items-center justify-center h-full">
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Large code brackets */}
      <div className="text-8xl md:text-9xl text-accent/20 font-bold">
        {'{ }'}
      </div>
      
      {/* Floating code elements */}
      <motion.div
        className="absolute -top-4 -right-4 text-2xl text-accent-soft"
        animate={{ 
          y: [0, -10, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        &lt;/&gt;
      </motion.div>
      
      <motion.div
        className="absolute -bottom-4 -left-4 text-xl text-zinc-400 font-mono"
        animate={{ 
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        console.log()
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 -left-8 text-lg text-zinc-500 font-mono"
        animate={{ 
          x: [0, 10, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        npm
      </motion.div>
    </motion.div>
  </div>
);

const Skills = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-12 text-center">Skills & Technologies</h2>
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left half - Skills */}
        <div className="space-y-8">
          <Group title="Frontend" items={skills.frontend} />
          <Group title="Backend" items={skills.backend} />
          <Group title="Tools" items={skills.tools} />
        </div>
        
        {/* Right half - Coding graphic */}
        <div className="hidden lg:block">
          <CodingGraphic />
        </div>
      </div>
    </div>
  );
};

export default Skills;


