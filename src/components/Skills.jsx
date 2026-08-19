"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Frontend Development',
      skills: [
        { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
        { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
        { name: 'HTML5', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
        { name: 'CSS3', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
        { name: 'Tailwind CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
        { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
        { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
      ]
    },
    {
      category: 'Backend & Database',
      skills: [
        { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
        { name: 'Express.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' },
        { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
        { name: 'Prisma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg' },
        { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
        { name: 'SQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
        { name: 'Firebase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg' },
        { name: 'BetterAuth', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg' },
        { name: 'RESTful APIs', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg' },
      ]
    },
    {
      category: 'Languages & Core',
      skills: [
        { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
        { name: 'C', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg' },
        { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
        { name: 'Problem Solving', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/gcc/gcc-original.svg' },
      ]
    },
    {
      category: 'Tools & Ecosystem',
      skills: [
        { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
        { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
        { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
        { name: 'VS Code', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
        { name: 'Figma', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
        { name: 'Vercel', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg' },
        { name: 'Netlify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg' },
        { name: 'Stripe', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg' },
      ]
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const item = {
    hidden: { opacity: 0, scale: 0.8 },
    show: { opacity: 1, scale: 1 }
  };

  return (
    <section className="mb-16" id="skills">
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs text-secondary-fixed-dim tracking-[0.3em] uppercase mb-2 font-mono">// TECHNICAL_CAPABILITIES</h2>
          <h3 className="text-3xl font-bold font-display uppercase italic text-white">Skills & Technologies</h3>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
        {skillCategories.map((cat, idx) => (
          <motion.div 
            key={cat.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="glass-panel p-6 rounded-xl border border-white/5 relative overflow-hidden bg-surface-container-low"
          >
            <div className="flex items-center gap-3 mb-6 border-b border-white/10 pb-3">
              <span className="material-symbols-outlined text-secondary-fixed-dim text-xl">terminal</span>
              <h4 className="text-sm font-bold font-mono uppercase tracking-widest text-secondary-fixed-dim">{cat.category}</h4>
            </div>

            <motion.div 
              variants={container}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {cat.skills.map((skill) => (
                <motion.div 
                  key={skill.name}
                  variants={item}
                  whileHover={{ 
                    scale: 1.08, 
                    backgroundColor: "rgba(0, 220, 230, 0.12)",
                    borderColor: "rgba(0, 220, 230, 0.6)",
                    boxShadow: "0 0 20px rgba(0, 220, 230, 0.25)"
                  }}
                  className="flex items-center gap-2 px-3 py-2 border border-secondary-fixed-dim/20 rounded-lg bg-surface-container-lowest/50 backdrop-blur-md transition-all duration-300 group cursor-default"
                >
                  {/* Technology Logo */}
                  <img 
                    src={skill.icon} 
                    alt={skill.name} 
                    className="w-5 h-5 object-contain grayscale-[30%] group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />
                  <span className="font-mono text-secondary-fixed-dim text-[11px] font-bold uppercase tracking-wider">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* Competitive Coding Badges */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass-panel p-8 rounded-xl border border-white/5 relative bg-surface-container-low"
      >
        <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-tertiary-fixed-dim text-2xl">code</span>
            <div>
              <h3 className="text-xl font-bold font-display text-tertiary-fixed-dim uppercase italic">Competitive Programming</h3>
              <p className="text-on-surface-variant font-mono text-xs">Solved 300+ coding problems across LeetCode & Codeforces</p>
            </div>
          </div>
          <span className="text-xs font-mono bg-tertiary-fixed-dim/10 text-tertiary-fixed-dim border border-tertiary-fixed-dim/30 px-3 py-1 rounded-full font-bold">
            300+_PROBLEMS_SOLVED
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            { 
              name: 'Codeforces', 
              user: 'shihab544', 
              href: 'https://codeforces.com/profile/shihab544', 
              color: '#ffabf3',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeforces/codeforces-original.svg' 
            },
            { 
              name: 'LeetCode', 
              user: 'shihab544', 
              href: 'https://leetcode.com/u/shihab544/', 
              color: '#ffabf3',
              icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/leetcode/leetcode-original.svg' 
            },
          ].map((platform) => (
            <motion.a 
              key={platform.name}
              href={platform.href} 
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 8, backgroundColor: "rgba(255, 171, 243, 0.1)" }}
              className="flex justify-between items-center p-4 bg-white/5 rounded-xl transition-all border-l-4 border-tertiary-fixed-dim group"
            >
              <div className="flex items-center gap-3">
                <img 
                  src={platform.icon} 
                  alt={platform.name} 
                  className="w-6 h-6 object-contain grayscale-[20%] group-hover:grayscale-0 transition-transform group-hover:scale-110"
                  onError={(e) => { e.target.style.display = 'none'; }}
                />
                <span className="font-bold font-mono text-xs uppercase tracking-widest text-white">{platform.name}</span>
              </div>
              <span className="text-tertiary-fixed-dim font-mono text-xs font-bold flex items-center gap-1">
                @{platform.user}
                <span className="material-symbols-outlined text-[14px]">open_in_new</span>
              </span>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
