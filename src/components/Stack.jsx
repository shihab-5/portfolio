"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Stack = () => {
  const tools = [
    { icon: 'code_blocks', label: 'Next.js 16' },
    { icon: 'terminal', label: 'TypeScript' },
    { icon: 'database', label: 'MongoDB' },
    { icon: 'api', label: 'Express.js' },
    { icon: 'deployed_code', label: 'React.js' },
    { icon: 'javascript', label: 'Node.js' },
    { icon: 'key', label: 'BetterAuth / JWT' },
    { icon: 'payments', label: 'Stripe' },
    { icon: 'local_fire_department', label: 'Firebase' },
    { icon: 'style', label: 'Tailwind / Shadcn' },
  ];

  return (
    <section className="mb-16" id="stack">
      <div className="mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-xs text-primary-fixed-dim tracking-[0.3em] uppercase mb-2 font-mono">// CORE_INFRASTRUCTURE</h2>
          <h3 className="text-3xl font-bold font-display uppercase italic">MERN Stack Ecosystem</h3>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {tools.map((tool, i) => (
          <motion.div 
            key={tool.label} 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ 
              scale: 1.05, 
              borderColor: "rgba(57, 255, 20, 0.4)",
              backgroundColor: "rgba(57, 255, 20, 0.05)"
            }}
            className="glass-panel p-6 flex flex-col items-center justify-center gap-4 group cursor-default border border-white/5 transition-colors duration-500"
          >
            <motion.span 
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.8 }}
              className="material-symbols-outlined text-[32px] text-primary-fixed-dim group-hover:drop-shadow-[0_0_10px_#39ff14]"
            >
              {tool.icon}
            </motion.span>
            <div className="text-[10px] font-bold font-mono text-center tracking-tighter uppercase">{tool.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Stack;
