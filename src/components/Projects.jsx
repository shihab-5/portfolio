"use client";
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Projects = () => {
  const projects = [
    {
      title: 'Sunnymart',
      description: 'Comprehensive E-commerce platform with real-time asset management and secure checkout.',
      live: 'https://suunymart-orpin.vercel.app/',
      repo: 'https://github.com/shihab-5/suunymart',
      image: '/sunnymart-mockup.png',
      color: 'rgba(57, 255, 20, 0.4)'
    },
    {
      title: 'Kee-keeper',
      description: 'Secure credential vault with AES-256 encryption patterns and intuitive UI.',
      live: 'https://rococo-dolphin-50e67f.netlify.app/',
      repo: 'https://github.com/shihab-5/kee-keeper',
      image: '/keekeeper-mockup.png',
      color: 'rgba(0, 241, 253, 0.4)'
    },
    {
      title: 'Book-vibe',
      description: 'Social discovery platform for bibliophiles with community logs and algorithmic vibes.',
      live: 'https://spectacular-sprinkles-2d4d8a.netlify.app/',
      repo: 'https://github.com/shihab-5/book-vibe',
      image: null, // We'll use the CSS fallback
      color: 'rgba(255, 171, 243, 0.4)'
    },
  ];

  return (
    <section className="mb-16 py-10" id="work">
      <div className="flex justify-between items-end mb-10">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs text-primary-fixed-dim tracking-[0.3em] uppercase mb-2 font-mono">// DEPLOYED_ASSETS</h2>
          <h3 className="text-3xl font-bold font-display uppercase italic text-white">Selected Operations</h3>
        </motion.div>
        <motion.a 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          href="https://github.com/shihab-5" 
          target="_blank"
          className="text-primary-fixed-dim text-xs font-mono underline decoration-primary-fixed-dim/50 hover:decoration-primary-fixed-dim transition-all"
        >
          VIEW_ALL_REPOS
        </motion.a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.2 }}
            whileHover={{ y: -10 }}
            className="glass-panel group overflow-hidden rounded-xl border border-white/5 relative bg-surface-container-low"
          >
            <div className="aspect-video relative overflow-hidden bg-black/40">
              {project.image ? (
                <Image 
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-110 grayscale-[50%] group-hover:grayscale-0"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-surface-container-high to-black">
                   <motion.div 
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.3, 0.5, 0.3]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                    className="text-primary-fixed-dim font-display text-4xl font-bold uppercase tracking-tighter"
                  >
                    {project.title}
                  </motion.div>
                </div>
              )}
              
              {/* Animated Overlays */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
              <motion.div 
                className="absolute inset-0 bg-primary-fixed-dim/5 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ background: ["rgba(57,255,20,0.02)", "rgba(0,241,253,0.02)", "rgba(57,255,20,0.02)"] }}
                transition={{ duration: 4, repeat: Infinity }}
              />
              
              {/* Scanline Effect */}
              <div className="absolute top-0 left-0 w-full h-[2px] bg-primary-fixed-dim/20 shadow-[0_0_10px_#39ff14] animate-scan opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            
            <div className="p-6 relative z-10">
              <div className="flex items-center gap-2 mb-2">
                <motion.div 
                  animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className={`w-1.5 h-1.5 rounded-full bg-primary-fixed-dim`}
                ></motion.div>
                <h4 className="text-xl font-bold text-primary-fixed-dim font-display tracking-tight uppercase italic">{project.title}</h4>
              </div>
              <p className="text-on-surface-variant text-[11px] mb-8 font-mono leading-relaxed h-10 overflow-hidden line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex gap-4">
                <motion.a 
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-1 text-[10px] font-bold font-mono text-primary-fixed-dim hover:neon-text-glow transition-all" 
                  href={project.live}
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">open_in_new</span> INITIALIZE_LIVE
                </motion.a>
                <motion.a 
                  whileHover={{ scale: 1.05, x: 5 }}
                  className="flex items-center gap-1 text-[10px] font-bold font-mono text-on-surface-variant hover:text-white transition-all" 
                  href={project.repo}
                  target="_blank"
                >
                  <span className="material-symbols-outlined text-[16px]">terminal</span> SOURCE_CODE
                </motion.a>
              </div>
            </div>

            {/* Premium Glow interaction */}
            <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-primary-fixed-dim/10 blur-[80px] rounded-full group-hover:bg-primary-fixed-dim/20 transition-all duration-700" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
