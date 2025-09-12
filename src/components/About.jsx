import React from 'react';
import { motion } from 'framer-motion';
import { basics, experience, education } from '../data/experience.js';

const About = () => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="grid md:grid-cols-3 gap-8 items-start">
        <motion.img
          src="/profile.jpg"
          alt="Profile of Shubham Mote"
          className="w-40 h-40 md:w-48 md:h-48 rounded-2xl object-cover mx-auto md:mx-0 border border-zinc-700"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        />

        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold">About</h2>
          <p className="mt-3 text-zinc-300">
            {basics.summary}
          </p>
          <p className="mt-3 text-zinc-300">
            Interests: {basics.interests}
          </p>
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">Experience</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {experience.map((role) => (
            <div key={role.company} className="card p-5 card-hover">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="font-medium">{role.company}</h4>
                  <p className="text-sm text-zinc-400">{role.title}</p>
                </div>
                <span className="text-xs text-zinc-400">{role.period}</span>
              </div>
              <ul className="list-disc list-inside mt-3 space-y-1 text-zinc-300">
                {role.points.map((p, i) => (
                  <li key={i}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10">
        <h3 className="text-xl font-semibold">Education</h3>
        <div className="mt-4 grid md:grid-cols-2 gap-6">
          {education.map((e, i) => (
            <div key={i} className="card p-5">
              <h4 className="font-medium">{e.degree}</h4>
              <p className="text-sm text-zinc-400">{e.institution}</p>
              <p className="text-sm text-zinc-400">{e.period}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;


