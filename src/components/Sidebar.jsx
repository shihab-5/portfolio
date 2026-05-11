"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Sidebar = () => {
  const menuItems = [
    { icon: 'layers', label: 'Stack', href: '#stack' },
    { icon: 'terminal', label: 'Skills', href: '#skills' },
    { icon: 'workspace_premium', label: 'Quals', href: '#quals' },
    { icon: 'folder_special', label: 'Logs', href: '#work' },
    { icon: 'alternate_email', label: 'Ping', href: '#contact' },
  ];

  return (
    <motion.aside 
      initial={{ x: -260 }}
      animate={{ x: 0 }}
      transition={{ duration: 0.8, ease: "circOut" }}
      className="fixed left-0 top-0 h-full w-20 md:w-64 z-40 bg-surface-container-lowest/80 backdrop-blur-xl border-r border-white/5 hidden lg:flex flex-col py-10 mt-20"
    >
      <div className="px-6 mb-10">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-4xl font-bold text-secondary-fixed-dim font-display leading-none tracking-tighter italic"
        >
          SHIHAB
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-[10px] text-on-surface-variant font-mono mt-2 tracking-widest font-bold"
        >
          MERN_ARCHITECT // V2.1
        </motion.div>
      </div>
      
      <div className="flex flex-col gap-1">
        <motion.a 
          href="#about" 
          whileHover={{ x: 8, backgroundColor: "rgba(0, 220, 230, 0.15)" }}
          className="flex items-center gap-4 bg-secondary-fixed-dim/20 text-secondary-fixed-dim border-l-4 border-secondary-fixed-dim px-6 py-4 transition-all duration-300"
        >
          <span className="material-symbols-outlined">person_4</span>
          <span className="text-[10px] uppercase tracking-widest font-mono font-bold">Bio_Metric</span>
        </motion.a>
        
        {menuItems.map((item, i) => (
          <motion.a 
            key={item.label}
            href={item.href}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 + (i * 0.1) }}
            whileHover={{ 
              x: 8, 
              backgroundColor: "rgba(0, 220, 230, 0.05)",
              color: "#00dce6" 
            }}
            className="flex items-center gap-4 text-on-surface-variant px-6 py-4 transition-all duration-300 border-l-4 border-transparent hover:border-secondary-fixed-dim/30"
          >
            <motion.span 
              whileHover={{ rotate: 15 }}
              className="material-symbols-outlined"
            >
              {item.icon}
            </motion.span>
            <span className="text-[10px] uppercase tracking-widest font-mono font-bold">{item.label}</span>
          </motion.a>
        ))}
      </div>

      {/* Decorative System Stats */}
      <div className="mt-auto px-6 py-8 border-t border-white/5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[9px] text-on-surface-variant uppercase font-mono">System_Load</span>
          <motion.span 
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="text-[9px] text-primary-fixed-dim font-mono"
          >
            STABLE
          </motion.span>
        </div>
        <div className="w-full h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div 
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 h-full w-1/3 bg-primary-fixed-dim shadow-[0_0_10px_#39ff14]"
          />
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
