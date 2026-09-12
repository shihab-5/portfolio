"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { motion } from 'framer-motion';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const cardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(cardRef.current, {
        y: 40,
        opacity: 0,
        duration: 0.9,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-16 py-10" id="education">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-xs text-primary-fixed-dim tracking-[0.3em] uppercase mb-2 font-mono">
          {"// 03. ACADEMIC_PROTOCOL"}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-display uppercase italic text-cyber-gradient text-cyber-glow">
          Education
        </h3>
      </motion.div>

      {/* Single Education Card */}
      <div ref={cardRef} className="relative">
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary-fixed-dim/40 transition-all duration-500 relative overflow-hidden bg-[#0d131a]/80 backdrop-blur-xl group">
          
          {/* Subtle Background Icon Accent */}
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
            <span className="material-symbols-outlined text-8xl text-primary-fixed-dim">
              school
            </span>
          </div>

          {/* Header Row: Badge & Graduation Date */}
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-primary-fixed-dim bg-primary-fixed-dim/10 border border-primary-fixed-dim/30 px-3 py-1 rounded-md flex items-center gap-1.5">
              <span className="material-symbols-outlined text-xs">school</span>
              EDUCATION
            </span>
            <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-mono">
              <span className="material-symbols-outlined text-sm text-on-surface-variant/70">
                calendar_today
              </span>
              <span>Graduation: 2027</span>
            </div>
          </div>

          {/* Degree Title */}
          <h4 className="text-2xl md:text-3xl font-bold mb-2 font-display tracking-tight text-white group-hover:text-primary-fixed-dim transition-colors">
            B.Sc. in Computer Science & Engineering
          </h4>

          {/* Institution & Location */}
          <div className="flex flex-wrap items-center gap-2 mb-4 font-mono text-sm">
            <span className="text-primary-fixed-dim font-semibold text-base">
              Sylhet Engineering College
            </span>
            <span className="text-on-surface-variant/40">•</span>
            <div className="flex items-center gap-1 text-on-surface-variant text-xs">
              <span className="material-symbols-outlined text-xs text-on-surface-variant/70">
                location_on
              </span>
              <span>Sylhet, Bangladesh</span>
            </div>
          </div>

          {/* Description */}
          <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed max-w-3xl">
            Building a strong foundation in data structures, algorithms, software engineering, databases, and web technologies — while shipping real-world projects alongside coursework.
          </p>

        </div>
      </div>
    </section>
  );
};

export default Education;
