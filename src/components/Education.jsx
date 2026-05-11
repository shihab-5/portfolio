"use client";
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Education = () => {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  const qualifications = [
    {
      period: '2023 - PRESENT',
      title: 'BSc in Computer Science & Engineering',
      institution: 'Sylhet Engineering College',
      active: true,
    },
    {
      period: '2019 - 2021',
      title: 'Higher Secondary Certificate',
      institution: 'Abdul Kadir Mollah City College',
      result: 'Result: GPA 5.00',
      active: false,
    },
    {
      period: 'GRADUATED 2019',
      title: 'Secondary School Certificate',
      institution: 'Nasima Kadir Mollah High School and Homes',
      result: 'Result: GPA 5.00',
      active: false,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate the vertical line
      gsap.fromTo(lineRef.current, 
        { scaleY: 0 },
        { 
          scaleY: 1, 
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top center",
            end: "bottom center",
            scrub: true
          }
        }
      );

      // Animate each qualification card
      gsap.utils.toArray(".qual-card").forEach((card, i) => {
        gsap.from(card, {
          x: i % 2 === 0 ? -50 : 50,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="mb-16 py-10" id="quals">
      <div className="mb-16 text-center">
        <h3 className="text-4xl font-bold font-display uppercase tracking-widest italic text-primary-fixed-dim neon-text-glow">
          Academic_Protocol
        </h3>
        <div className="w-32 h-[2px] bg-primary-fixed-dim/30 mx-auto mt-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-primary-fixed-dim animate-scan"></div>
        </div>
      </div>
      
      <div className="relative max-w-4xl mx-auto">
        {/* Animated Vertical Line */}
        <div 
          ref={lineRef}
          className="absolute left-8 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary-fixed-dim via-secondary-fixed-dim to-transparent origin-top"
        ></div>

        <div className="space-y-12">
          {qualifications.map((qual, index) => (
            <div key={index} className="relative pl-24 qual-card group">
              {/* Timeline Dot */}
              <div className={`absolute left-6 top-2 w-4 h-4 rounded-full z-10 transition-all duration-500 ${qual.active ? 'bg-primary-fixed-dim shadow-[0_0_15px_#39ff14] scale-125' : 'bg-outline group-hover:bg-primary-fixed-dim group-hover:shadow-[0_0_10px_#39ff14]'}`}>
                {qual.active && <div className="absolute inset-0 bg-primary-fixed-dim rounded-full animate-ping opacity-50"></div>}
              </div>

              <div className="glass-panel p-8 rounded-xl border border-white/5 group-hover:border-primary-fixed-dim/30 transition-all duration-500 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                  <span className="material-symbols-outlined text-6xl">school</span>
                </div>

                <span className={`text-xs mb-3 block font-mono font-bold tracking-widest ${qual.active ? 'text-primary-fixed-dim' : 'text-on-surface-variant'}`}>
                  {qual.period}
                </span>
                <h4 className="text-2xl font-bold mb-2 font-display tracking-tight text-white group-hover:text-primary-fixed-dim transition-colors">
                  {qual.title}
                </h4>
                <p className="text-on-surface-variant font-mono text-sm leading-relaxed mb-2">
                  {qual.institution}
                </p>
                {qual.result && (
                  <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-fixed-dim/10 rounded-full border border-primary-fixed-dim/20">
                    <span className="w-1.5 h-1.5 bg-primary-fixed-dim rounded-full"></span>
                    <span className="text-primary-fixed-dim font-mono text-[10px] font-bold uppercase">{qual.result}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
