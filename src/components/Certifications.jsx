"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Certifications = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const certificateUrl = "https://drive.google.com/file/d/1qEAzUG_CfaOiduPnxkUOoxPOGJTsynH2/view?usp=sharing";
  const certificateImg = "/certificate-preview.png";

  return (
    <section className="mb-16 py-10" id="certifications">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-xs text-primary-fixed-dim tracking-[0.3em] uppercase mb-2 font-mono">
          {"// 04. VERIFIED_CREDENTIALS"}
        </h2>
        <h3 className="text-3xl md:text-4xl font-bold font-display uppercase italic text-cyber-gradient text-cyber-glow">
          Certification
        </h3>
      </motion.div>

      {/* Certification Card with 70% content on left, 30% certificate photo on right */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative"
      >
        <div className="glass-panel p-6 md:p-8 rounded-2xl border border-white/10 hover:border-primary-fixed-dim/40 transition-all duration-500 relative overflow-hidden bg-[#0d131a]/80 backdrop-blur-xl group">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left Content Column (~70% space on desktop) */}
            <div className="md:col-span-8 space-y-4">
              {/* Badge & Year */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-primary-fixed-dim bg-primary-fixed-dim/10 border border-primary-fixed-dim/30 px-3 py-1 rounded-md flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-xs">verified</span>
                  CERTIFICATION
                </span>
                <div className="flex items-center gap-1.5 text-xs text-on-surface-variant font-mono">
                  <span className="material-symbols-outlined text-sm text-on-surface-variant/70">
                    calendar_today
                  </span>
                  <span>2026</span>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-2xl md:text-3xl font-bold font-display tracking-tight text-white group-hover:text-primary-fixed-dim transition-colors">
                Complete Web Development Course
              </h4>

              {/* Issuer & Batch */}
              <div className="flex flex-wrap items-center gap-2 font-mono text-sm">
                <span className="text-primary-fixed-dim font-semibold text-base">
                  Programming Hero
                </span>
                <span className="text-on-surface-variant/40">•</span>
                <div className="flex items-center gap-1 text-on-surface-variant text-xs">
                  <span className="material-symbols-outlined text-xs text-on-surface-variant/70">
                    token
                  </span>
                  <span>Batch 13</span>
                </div>
              </div>

              {/* Description */}
              <p className="text-on-surface-variant font-mono text-sm md:text-base leading-relaxed">
                Comprehensive full-stack web development certification covering the MERN stack, authentication, payment integration, deployment, and production-grade application architecture.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <motion.button
                  onClick={() => setIsModalOpen(true)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-fixed-dim/15 hover:bg-primary-fixed-dim text-primary-fixed-dim hover:text-[#00171d] font-mono text-xs font-bold uppercase tracking-wider border border-primary-fixed-dim/40 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,229,255,0.4)] cursor-pointer"
                >
                  <span className="material-symbols-outlined text-sm">
                    zoom_in
                  </span>
                  <span>View Certificate</span>
                </motion.button>
              </div>
            </div>

            {/* Right Photo Column (~30% space on desktop) */}
            <div className="md:col-span-4">
              <motion.div
                onClick={() => setIsModalOpen(true)}
                whileHover={{ scale: 1.03 }}
                className="relative block rounded-xl overflow-hidden border border-white/15 hover:border-primary-fixed-dim/60 shadow-2xl group/photo transition-all duration-300 bg-surface-container-high aspect-[4/3] cursor-pointer"
              >
                {/* Certificate Image */}
                <Image
                  src={certificateImg}
                  alt="Programming Hero Complete Web Development Certificate"
                  fill
                  sizes="(max-width: 768px) 100vw, 30vw"
                  className="object-cover transition-transform duration-500 group-hover/photo:scale-105"
                />

                {/* Subtle Scanline Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-fixed-dim/10 to-transparent h-12 w-full animate-scan opacity-40 pointer-events-none" />

                {/* Hover Overlay with Preview Badge */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/photo:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-[2px]">
                  <div className="bg-surface-container-lowest/90 border border-primary-fixed-dim/50 text-primary-fixed-dim px-3 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-widest flex items-center gap-1.5 shadow-[0_0_15px_rgba(0,229,255,0.4)]">
                    <span className="material-symbols-outlined text-sm">zoom_in</span>
                    <span>Enlarge</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

        </div>
      </motion.div>

      {/* Full-Screen Certificate Modal Lightbox */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full bg-[#0d131a] border border-primary-fixed-dim/40 rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(0,229,255,0.3)] p-4"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed-dim">verified</span>
                  <span className="font-display font-bold text-white text-base md:text-lg">
                    Programming Hero — Complete Web Development
                  </span>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all cursor-pointer"
                  aria-label="Close modal"
                >
                  <span className="material-symbols-outlined text-sm">close</span>
                </button>
              </div>

              {/* Certificate Full Preview */}
              <div className="relative w-full aspect-[16/11] rounded-lg overflow-hidden bg-black/40 border border-white/5">
                <Image
                  src={certificateImg}
                  alt="Programming Hero Certificate Full Preview"
                  fill
                  className="object-contain"
                />
              </div>

              {/* Modal Footer */}
              <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-3">
                <span className="text-xs font-mono text-on-surface-variant">
                  Batch 13 • Issued 2026
                </span>
                <a
                  href={certificateUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-primary-fixed-dim hover:underline uppercase font-bold tracking-wider"
                >
                  <span>Open Drive Link</span>
                  <span className="material-symbols-outlined text-xs">open_in_new</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
