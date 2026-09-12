"use client";
import React from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#work' },
    { name: 'Contact Me', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 bg-surface-container-lowest/70 backdrop-blur-xl border-b border-white/5 shadow-2xl">
      <div className="flex justify-between items-center px-gutter py-4 max-w-[1280px] mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-xl font-bold text-cyber-gradient text-cyber-glow font-display uppercase tracking-tighter cursor-default"
        >
          SHIHABUL ISLAM
        </motion.div>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05, color: "#00e5ff" }}
              className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold transition-colors duration-300 relative group"
              href={link.href}
            >
              {link.name}
              <motion.span
                className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary-fixed-dim transition-all group-hover:w-full"
              />
            </motion.a>
          ))}
        </nav>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-primary-fixed-dim flex items-center gap-4"
        >
          <motion.span
            whileHover={{ scale: 1.2, rotate: 180 }}
            className="material-symbols-outlined p-2 hover:bg-primary-fixed-dim/10 rounded-full transition-all cursor-pointer"
          >
            terminal
          </motion.span>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
