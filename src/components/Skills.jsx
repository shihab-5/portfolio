"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skills = [
    'HTML5', 'CSS3', 'JavaScript', 'TypeScript', 
    'TailwindCSS', 'React.js', 'Node.js', 'Express.js',
    'MongoDB', 'Problem Solving', 'Data Structures', 'Algorithms'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="mb-16 grid grid-cols-1 md:grid-cols-2 gap-10" id="skills">
      <motion.div 
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 rounded-xl relative overflow-hidden border border-white/5"
      >
        <div className="scanline"></div>
        <div className="flex items-center gap-4 mb-10">
          <span className="material-symbols-outlined text-secondary-fixed-dim">terminal</span>
          <h3 className="text-3xl font-bold font-display text-secondary-fixed-dim uppercase italic">Proficiency</h3>
        </div>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-wrap gap-2"
        >
          {skills.map((skill) => (
            <motion.span 
              key={skill}
              variants={item}
              whileHover={{ 
                scale: 1.1, 
                backgroundColor: "rgba(0, 220, 230, 0.1)",
                borderColor: "#00dce6",
                boxShadow: "0 0 15px rgba(0, 220, 230, 0.3)"
              }}
              className="px-4 py-2 border border-secondary-fixed-dim/30 font-mono text-secondary-fixed-dim text-[10px] font-bold uppercase cursor-default transition-all duration-300"
            >
              {skill}
            </motion.span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-10 rounded-xl border border-white/5"
      >
        <div className="flex items-center gap-4 mb-10">
          <span className="material-symbols-outlined text-tertiary-fixed-dim">code</span>
          <h3 className="text-3xl font-bold font-display text-tertiary-fixed-dim uppercase italic">Competitive Logs</h3>
        </div>
        <p className="text-on-surface-variant mb-10 font-mono text-sm leading-relaxed">
          Actively solving complex algorithmic problems to maintain peak logic optimization and performance awareness.
        </p>
        <div className="space-y-4">
          {[
            { name: 'Codeforces', user: 'shihab544', href: 'https://codeforces.com/profile/shihab544', color: '#ffabf3' },
            { name: 'LeetCode', user: 'shihab544', href: 'https://leetcode.com/u/shihab544/', color: '#ffabf3' },
          ].map((platform) => (
            <motion.a 
              key={platform.name}
              href={platform.href} 
              target="_blank"
              whileHover={{ x: 10, backgroundColor: "rgba(255, 171, 243, 0.1)" }}
              className="flex justify-between items-center p-4 bg-white/5 rounded-lg transition-all border-l-2 border-tertiary-fixed-dim"
            >
              <span className="font-bold font-mono text-xs uppercase tracking-widest">{platform.name}</span>
              <span className="text-on-surface-variant font-mono text-[10px]">{platform.user}</span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
