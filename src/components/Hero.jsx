import React from 'react';
import { motion } from 'framer-motion';
import { basics } from '../data/experience.js';

const Hero = () => {
  return (
    <div className="text-left max-w-6xl mx-auto px-6">
      <motion.h1
        className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold tracking-tight leading-none"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {basics.name}
      </motion.h1>
      <motion.p
        className="mt-6 text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {basics.role}
      </motion.p>
      <motion.div
        className="mt-8 flex items-start gap-4 flex-wrap"
        initial="hidden"
        animate="show"
        variants={{
          hidden: { opacity: 0, y: 20 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
        }}
      >
        {["About", "Skills", "Projects", "Contact"].map((label) => (
          <motion.a
            key={label}
            href={`#${label.toLowerCase()}`}
            className="px-6 py-3 rounded-xl border border-accent/30 bg-accent/10 text-accent-soft hover:bg-accent/20 transition-all duration-300 hover:scale-105"
            variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
          >
            {label}
          </motion.a>
        ))}
      </motion.div>
    </div>
  );
};

export default Hero;


