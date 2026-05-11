"use client";
import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(TextPlugin);

const Loader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const progressRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.8,
          ease: "power2.inOut",
          onComplete: onComplete
        });
      }
    });

    // Terminal Typing Effect
    tl.to(textRef.current, {
      duration: 1.5,
      text: {
        value: "INITIALIZING NEON_ARCHIVE...",
      },
      ease: "none",
    });

    // Progress Bar Animation
    tl.to({}, {
      duration: 2,
      onUpdate: function() {
        const val = Math.round(this.progress() * 100);
        setProgress(val);
        if (progressRef.current) {
          progressRef.current.style.width = `${val}%`;
        }
      }
    }, "-=0.5");

    // Grid reveal flash
    tl.to(containerRef.current, {
      backgroundColor: "#131313",
      duration: 0.5
    });

  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center font-mono"
    >
      <div className="w-full max-w-md px-6">
        <div ref={textRef} className="text-primary-fixed-dim text-sm mb-4 h-6">
          {/* Typing text will appear here */}
        </div>
        
        <div className="w-full h-[2px] bg-white/10 relative overflow-hidden">
          <div 
            ref={progressRef}
            className="absolute top-0 left-0 h-full bg-primary-fixed-dim shadow-[0_0_15px_#39ff14] transition-all duration-100"
            style={{ width: '0%' }}
          ></div>
        </div>
        
        <div className="flex justify-between mt-2">
          <span className="text-[10px] text-on-surface-variant">SECURE_UPLINK</span>
          <span className="text-[10px] text-primary-fixed-dim">{progress}%</span>
        </div>
      </div>
      
      {/* Background Grid Lines (Subtle) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
        <div className="w-full h-full" style={{ 
          backgroundImage: 'linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </div>
  );
};

export default Loader;
