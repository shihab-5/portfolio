"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion, AnimatePresence } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);

  const roles = [
    { text: "Frontend Developer", color: "text-primary-fixed-dim" },
    { text: "Problem Solver", color: "text-secondary-fixed-dim" },
    { text: "Full Stack Enthusiast", color: "text-tertiary-fixed-dim" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line by line reveal
      gsap.from(".hero-line", {
        y: 40,
        opacity: 0,
        filter: "blur(10px)",
        stagger: 0.2,
        duration: 1.2,
        ease: "power3.out",
        delay: 0.5
      });

      gsap.from(textRef.current, {
        opacity: 0,
        x: -20,
        duration: 1,
        delay: 1.2,
        ease: "power2.out"
      });

      gsap.from(ctaRef.current, {
        opacity: 0,
        y: 20,
        duration: 0.8,
        delay: 1.5,
        ease: "back.out(1.7)"
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative mb-16 py-10 grid grid-cols-1 md:grid-cols-12 gap-10 items-center" id="about">
      <div className="md:col-span-7 z-10">
        <div className="mb-4 hero-line">
          <span className="text-xs text-primary-fixed-dim bg-primary-fixed-dim/10 px-4 py-1 rounded-full border border-primary-fixed-dim/30 font-mono">
            SYSTEM_OPERATOR_ONLINE // V.2.1
          </span>
        </div>
        <h1 ref={titleRef} className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight uppercase italic">
          <div className="hero-line">Crafting</div>
          <div className="hero-line text-primary-fixed-dim neon-text-glow">Digital Realities.</div>
        </h1>
        <div ref={textRef} className="text-lg text-on-surface-variant max-w-xl mb-10 leading-relaxed font-mono h-12">
          I am a{" "}
          <AnimatePresence mode="wait">
            <motion.span
              key={roles[roleIndex].text}
              initial={{ opacity: 0, y: 10, filter: "blur(5px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, y: -10, filter: "blur(5px)" }}
              transition={{ duration: 0.5 }}
              className={`font-bold underline decoration-white/10 ${roles[roleIndex].color}`}
            >
              {roles[roleIndex].text}
            </motion.span>
          </AnimatePresence>
          <br />
          I turn complex requirements into high-performance digital systems.
        </div>
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <motion.button 
            whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(57, 255, 20, 0.4)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-container text-on-primary px-8 py-4 font-bold uppercase tracking-widest rounded-lg transition-all font-mono text-sm shadow-[0_0_10px_rgba(57,255,20,0.2)]"
          >
            &gt; Let's Connect
          </motion.button>
          <motion.a 
            href="https://drive.google.com/file/d/1jdWRinVUx5yf8GqUoDtmusDIqLQM1mVi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(57, 255, 20, 0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 font-bold uppercase tracking-widest rounded-lg transition-all font-mono text-sm inline-flex items-center gap-2"
          >
            [ View Resume ]
          </motion.a>
        </div>
      </div>

      <div className="md:col-span-5 relative flex justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="relative w-72 h-72 md:w-96 md:h-96"
        >
          {/* Pulsing Background Glow */}
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 bg-primary-fixed-dim rounded-full blur-3xl"
          ></motion.div>
          
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 border-2 border-primary-fixed-dim/50 rounded-full border-dashed"
          ></motion.div>
          
          <motion.div 
            animate={{ y: [-10, 10, -10] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative w-full h-full rounded-full overflow-hidden border-4 border-primary-fixed-dim shadow-[0_0_50px_rgba(42,229,0,0.3)] group cursor-pointer"
          >
            <Image 
              src="/Gemini_Generated_Image_68545u68545u6854.jpg" 
              alt="Shihab Ul Islam" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            {/* Scanning Line */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-fixed-dim/10 to-transparent h-20 w-full animate-scan opacity-30"></div>
          </motion.div>

          {/* Stats Floating Badges */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            className="absolute -bottom-8 -left-4 glass-panel p-4 rounded-xl border border-primary-fixed-dim/30"
          >
            <div className="text-3xl font-bold text-primary-fixed-dim font-display">20+</div>
            <div className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">PROJECTS_DEPLOYED</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute top-10 -right-8 glass-panel p-4 rounded-xl border border-secondary-fixed-dim/30"
          >
            <div className="text-3xl font-bold text-secondary-fixed-dim font-display">300+</div>
            <div className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">PROBLEMS_SOLVED</div>
          </motion.div>
          
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
            className="absolute top-[50%] -right-12 glass-panel p-4 rounded-xl border border-tertiary-fixed-dim/30"
          >
            <div className="text-3xl font-bold text-tertiary-fixed-dim font-display">3Y+</div>
            <div className="text-[10px] text-on-surface-variant font-mono uppercase tracking-widest">RUNTIME_XP</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
