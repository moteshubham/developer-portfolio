import React from 'react';
import { motion } from 'framer-motion';
import { basics } from '../data/experience.js';
import { FaLinkedin, FaGithub, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';


const Contact = () => {
  const socialLinks = [
    { name: 'LinkedIn', icon: <FaLinkedin size={20} />, url: basics.links.linkedin, color: 'hover:text-blue-400' },
    { name: 'GitHub', icon: <FaGithub size={20} />, url: basics.links.github, color: 'hover:text-gray-300' },
    { name: 'Instagram', icon: <FaInstagram size={20} />, url: 'https://instagram.com/iamshubhammote', color: 'hover:text-pink-400' },
    { name: 'Twitter', icon: <FaTwitter size={20} />, url: 'https://twitter.com/iamshubhammote', color: 'hover:text-blue-300' },
    { name: 'YouTube', icon: <FaYoutube size={20} />, url: 'https://youtube.com/ShubhamMotePatil', color: 'hover:text-red-400' },
  ];
  

  return (
    <footer className="bg-zinc-900/50 border-t border-zinc-800">
      <div className="max-w-5xl mx-auto px-6 py-12">
        {/* Contact Info */}
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-2">Let's Connect</h2>
          <p className="text-zinc-400 mb-4">Based in {basics.location}</p>
          <div className="flex items-center justify-center gap-6 flex-wrap">
            <a 
              href={`mailto:${basics.email}`}
              className="px-6 py-3 rounded-xl bg-accent/10 border border-accent/30 text-accent-soft hover:bg-accent/20 transition-all duration-150 hover:scale-105"
            >
              📧 Email Me
            </a>
            <a 
              href="/Shubham_Mote_Software_Developer.pdf" 
              target="_blank" 
              rel="noreferrer"
              className="px-6 py-3 rounded-xl bg-zinc-800/60 border border-zinc-700 text-zinc-200 hover:border-accent/50 hover:bg-accent/10 transition-all duration-150 hover:scale-105"
            >
              📄 Resume
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-zinc-800 pt-8">
          <h3 className="text-lg font-semibold text-center mb-6 text-zinc-300">Follow Me</h3>
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {socialLinks.map((social, index) => (
              <motion.a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noreferrer"
              className={`w-12 h-12 rounded-full bg-zinc-800/40 border border-zinc-700/50 text-zinc-400 hover:border-zinc-600 transition-all duration-150 hover:scale-110 flex items-center justify-center ${social.color}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              title={social.name}
            >
              {social.icon}
            </motion.a>
            
            ))}
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
          <p className="text-zinc-500 text-sm">
            © 2025 Shubham Mote. Built with React, Vite & Tailwind CSS.
          </p>
          <p className="text-zinc-600 text-xs mt-1">
            Phone: {basics.phone}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;