import React from "react";
import { motion } from "framer-motion";
import { basics } from "../data/experience.js";
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="text-left max-w-5xl mx-auto sm:px-12 lg:pl-0 lg:pr-12 w-full">
      <motion.h1
         className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none
         bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
         bg-clip-text text-transparent"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {basics.name}
      </motion.h1>
      <motion.p
        className="mt-6 text-xl sm:text-2xl md:text-3xl text-zinc-300 font-light"
        initial={{ opacity: 0, y: 25 }}
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
          hidden: { opacity: 0, y: 25 },
          show: { opacity: 1, y: 0, transition: { staggerChildren: 0.15 } },
        }}
      >
        {/* Social Media Icons */}
        {[
          { name: 'LinkedIn', icon: <FaLinkedin size={20} />, url: basics.links.linkedin, color: 'hover:text-blue-400' },
          { name: 'GitHub', icon: <FaGithub size={20} />, url: basics.links.github, color: 'hover:text-gray-300' },
          { name: 'Instagram', icon: <FaInstagram size={20} />, url: 'https://instagram.com/iamshubhammote', color: 'hover:text-pink-400' },
          { name: 'Twitter', icon: <FaTwitter size={20} />, url: 'https://twitter.com/iamshubhammote', color: 'hover:text-blue-300' },
          { name: 'YouTube', icon: <FaYoutube size={20} />, url: 'https://youtube.com/ShubhamMotePatil', color: 'hover:text-red-400' },
        ].map((social) => (
          <motion.a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noreferrer"
            className={`w-12 h-12 rounded-full bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 hover:border-zinc-600 transition-all duration-150 hover:scale-110 flex items-center justify-center ${social.color}`}
            variants={{
              hidden: { opacity: 0, y: 10 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.95 }}
            title={social.name}
          >
            {social.icon}
          </motion.a>
        ))}
        
      </motion.div>
    </div>
  );
};

export default Hero;
