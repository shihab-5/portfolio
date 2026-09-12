"use client";
import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const pillars = [
    {
      icon: "terminal",
      title: "Full-Stack Development",
      description: "Building scalable, high-performance web applications with React, Next.js, Node.js, PostgreSQL, and Prisma.",
      accent: "text-primary-fixed-dim border-primary-fixed-dim/30 hover:border-primary-fixed-dim"
    },
    {
      icon: "psychology",
      title: "Algorithmic Problem Solving",
      description: "Strong foundation in data structures and algorithms with 300+ solved problems across competitive programming platforms.",
      accent: "text-secondary-fixed-dim border-secondary-fixed-dim/30 hover:border-secondary-fixed-dim"
    },
    {
      icon: "auto_awesome",
      title: "Modern UI/UX & Motion",
      description: "Crafting fluid, accessible, and cinematic interfaces with Tailwind CSS, Framer Motion, and modern design principles.",
      accent: "text-tertiary-fixed-dim border-tertiary-fixed-dim/30 hover:border-tertiary-fixed-dim"
    }
  ];

  const quickStats = [
    { label: "EXPERIENCE", value: "3+ Years" },
    { label: "PROJECTS BUILT", value: "20+ Deployed" },
    { label: "PROBLEMS SOLVED", value: "300+ Solved" },
    { label: "LOCATION", value: "Bangladesh" },
  ];

  return (
    <section className="mb-16 py-10" id="about">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-xs text-primary-fixed-dim tracking-[0.3em] uppercase mb-2 font-mono">
          {"// 01. BIOMETRIC_PROFILE"}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-display uppercase italic text-cyber-gradient text-cyber-glow">
          About Me
        </h3>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Bio Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 space-y-6"
        >
          <div className="glass-panel p-8 rounded-2xl border border-primary-fixed-dim/20 relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary-fixed-dim/5 rounded-bl-full pointer-events-none transition-all duration-500 group-hover:scale-125" />
            
            <p className="text-on-surface-variant font-mono text-base leading-relaxed mb-4">
              Hi, I&apos;m <span className="text-primary-fixed-dim font-bold">Shihabul Islam</span> — a passionate Full-Stack Developer and Computer Science & Engineering undergraduate at <span className="text-on-surface font-semibold">Sylhet Engineering College</span>.
            </p>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-4">
              I specialize in transforming complex engineering problems into clean, intuitive, and performant web products. Whether architecting database schemas with PostgreSQL & Prisma, optimizing REST APIs, or building reactive frontends with Next.js & Tailwind CSS, I focus on crafting reliable and enjoyable digital experiences.
            </p>
            <p className="text-on-surface-variant font-mono text-sm leading-relaxed">
              When I&apos;m not writing code, I sharpen my analytical thinking through competitive programming, exploring new developer tooling, and staying on the cutting edge of AI-assisted software engineering.
            </p>
          </div>

          {/* Quick HUD Metrics */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {quickStats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-panel p-4 rounded-xl border border-white/5 text-center"
              >
                <div className="text-[10px] text-on-surface-variant/70 font-mono tracking-widest uppercase mb-1">
                  {stat.label}
                </div>
                <div className="text-sm md:text-base font-bold text-primary-fixed-dim font-display">
                  {stat.value}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Right Pillars Column */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-5 space-y-4"
        >
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              whileHover={{ x: 6 }}
              className={`glass-panel p-5 rounded-xl border ${pillar.accent} transition-all duration-300`}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="material-symbols-outlined text-primary-fixed-dim text-xl">
                  {pillar.icon}
                </span>
                <h4 className="text-sm font-bold font-display uppercase tracking-wider text-on-surface">
                  {pillar.title}
                </h4>
              </div>
              <p className="text-xs text-on-surface-variant font-mono leading-relaxed pl-8">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
