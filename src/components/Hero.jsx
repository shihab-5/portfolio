"use client";
import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const textRef = useRef(null);
  const ctaRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const roles = [
    "Full-Stack Developer",
    "Frontend Developer",
    "Backend Developer",
    "AI-Assisted Software Engineer",
    "Problem Solver",
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/shihab-ul-islam/",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.2a1.62 1.62 0 0 0-1.63 1.62c0 .9.73 1.63 1.63 1.63.9 0 1.63-.73 1.63-1.63A1.63 1.63 0 0 0 7.83 6.2Z" />
        </svg>
      )
    },
    {
      name: "GitHub",
      href: "https://github.com/shihab-5",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2Z" />
        </svg>
      )
    },
    {
      name: "X (Twitter)",
      href: "https://x.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      )
    },
    {
      name: "Instagram",
      href: "https://instagram.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      )
    },
    {
      name: "Contact / Email",
      href: "mailto:shihabuli364@gmail.com",
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      )
    }
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timer;

    if (!isDeleting && displayedText.length < currentRole.length) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
      }, 75);
    } else if (!isDeleting && displayedText.length === currentRole.length) {
      timer = setTimeout(() => {
        setIsDeleting(true);
      }, 2000);
    } else if (isDeleting && displayedText.length > 0) {
      timer = setTimeout(() => {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
      }, 35);
    } else if (isDeleting && displayedText.length === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

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
    <section ref={heroRef} className="relative mb-16 py-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="hero">
      {/* Left Column: Intro & Headline */}
      <div className="lg:col-span-7 z-10">
        <div className="mb-5 hero-line">
          <span className="text-xs text-primary-fixed-dim bg-primary-fixed-dim/10 px-4 py-1 rounded-full border border-primary-fixed-dim/30 font-mono tracking-widest">
            {"> BUILDING_FULL_STACK_SYSTEMS"}
          </span>
        </div>
        <h1 ref={titleRef} className="text-5xl md:text-6xl font-bold mb-6 font-display leading-tight">
          <div className="hero-line text-on-surface">
            I&apos;m <span className="text-cyber-gradient text-cyber-glow italic">Shihabul Islam</span>
          </div>
          <div className="hero-line text-cyber-gradient text-cyber-glow uppercase italic text-3xl md:text-4xl mt-3 leading-snug">
            — I turn real-world problems<br />into working software.
          </div>
        </h1>

        {/* Animated role line */}
        <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-6 font-mono text-sm">
          <span className="text-on-surface-variant/50 tracking-widest shrink-0">
            {"// CURRENTLY_OPERATING_AS:"}
          </span>
          <div className="flex items-center min-w-0 min-h-[24px]">
            <span className="text-primary-fixed-dim font-bold tracking-wide">
              {displayedText}
            </span>
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
              className="text-primary-fixed-dim font-bold text-base ml-0.5 shrink-0"
            >
              _
            </motion.span>
          </div>
        </div>

        <div ref={textRef} className="text-base text-on-surface-variant max-w-xl mb-10 leading-relaxed font-mono">
          Responsive interfaces, scalable APIs,<br />
          and the databases that tie it all together.
        </div>
        <div ref={ctaRef} className="flex flex-wrap gap-4">
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05, boxShadow: "0 0 25px rgba(0, 229, 255, 0.6)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-cyber-gradient text-[#00171d] px-8 py-4 font-bold uppercase tracking-widest rounded-lg transition-all font-mono text-sm shadow-[0_0_20px_rgba(0,229,255,0.4)] hover:brightness-110 inline-flex items-center gap-2"
          >
            &gt; Let&apos;s Connect
          </motion.a>
          <motion.a 
            href="https://drive.google.com/file/d/1jdWRinVUx5yf8GqUoDtmusDIqLQM1mVi/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(0, 229, 255, 0.12)", borderColor: "#00e5ff" }}
            whileTap={{ scale: 0.95 }}
            className="border border-primary-fixed-dim text-primary-fixed-dim px-8 py-4 font-bold uppercase tracking-widest rounded-lg transition-all font-mono text-sm inline-flex items-center gap-2 hover:text-primary-container"
          >
            [ View Resume ]
          </motion.a>
        </div>
      </div>

      {/* Right Column: Profile Card matching the reference image layout */}
      <div className="lg:col-span-5 relative flex justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="relative w-full max-w-[360px] md:max-w-[380px]"
        >
          {/* Subtle Ambient Glow behind card */}
          <div className="absolute -inset-1 bg-gradient-to-b from-primary-fixed-dim/20 via-transparent to-primary-fixed-dim/10 rounded-[36px] blur-xl -z-10 pointer-events-none" />

          {/* Card Container */}
          <div className="bg-[#0b1016]/90 backdrop-blur-2xl border border-white/10 hover:border-primary-fixed-dim/40 rounded-[32px] p-5 shadow-[0_20px_60px_rgba(0,0,0,0.8)] transition-all duration-500 group">
            
            {/* Top Portrait Image Container (Squircle / Rounded Top Card) */}
            <div className="relative w-full aspect-[4/3.8] rounded-[24px] overflow-hidden bg-surface-container-high border border-white/5">
              <Image 
                src="/Gemini_Generated_Image_68545u68545u6854.jpg" 
                alt="Shihabul Islam" 
                fill
                priority
                className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />

              {/* Top Right Live Status Pill */}
              <div className="absolute top-3 right-3 bg-black/60 backdrop-blur-md border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping absolute" />
                <span className="w-2 h-2 rounded-full bg-emerald-400 relative" />
                <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider">AVAILABLE</span>
              </div>

              {/* Cyber Scanline Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-fixed-dim/10 to-transparent h-16 w-full animate-scan opacity-30 pointer-events-none" />
            </div>

            {/* Profile Identity Details */}
            <div className="pt-5 pb-2 text-center">
              {/* Name */}
              <h2 className="text-3xl font-bold font-display text-white tracking-wide">
                Shihab
              </h2>

              {/* Role */}
              <div className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase mt-1">
                AI & FULL-STACK DEVELOPER
              </div>

              {/* Email Link */}
              <a 
                href="mailto:shihabuli364@gmail.com" 
                className="inline-block text-sm md:text-base text-white hover:text-primary-fixed-dim font-mono underline underline-offset-4 decoration-white/40 hover:decoration-primary-fixed-dim mt-4 transition-colors duration-200"
              >
                shihabuli364@gmail.com
              </a>

              {/* Location */}
              <div className="text-xs text-on-surface-variant/70 font-mono mt-1">
                Based in Sylhet, Bangladesh
              </div>

              {/* Social Icons Row */}
              <div className="flex items-center justify-center gap-3 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    aria-label={social.name}
                    className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 hover:border-primary-fixed-dim/60 text-white/80 hover:text-primary-fixed-dim flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow-[0_0_15px_rgba(0,229,255,0.3)]"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
