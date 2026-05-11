"use client";
import React from 'react';

const Contact = () => {
  return (
    <section className="glass-panel p-10 rounded-2xl relative overflow-hidden" id="contact">
      <div className="scanline"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <h3 className="text-4xl font-bold mb-6 font-display">Initiate <span className="text-primary-fixed-dim">Communication</span></h3>
          <p className="text-on-surface-variant mb-10 font-mono">
            Available for MERN stack collaborations, algorithmic consulting, and high-performance digital architecture projects.
          </p>
          <div className="space-y-6">
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">alternate_email</span>
              <div>
                <div className="text-xs text-primary-fixed-dim uppercase font-mono">Direct Email</div>
                <div className="text-sm font-mono">shihabuli364@gmail.com</div>
              </div>
            </div>
            <div className="flex items-center gap-6">
              <span className="material-symbols-outlined text-primary-fixed-dim text-3xl">hub</span>
              <div>
                <div className="text-xs text-primary-fixed-dim uppercase font-mono">Source Archive</div>
                <a href="https://github.com/shihab-5" target="_blank" className="text-sm font-mono hover:text-primary-fixed-dim transition-colors">github.com/shihab-5</a>
              </div>
            </div>
          </div>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="group">
            <label className="block text-xs text-on-surface-variant mb-1 group-focus-within:text-primary-fixed-dim transition-colors font-mono">USER_ID</label>
            <input 
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed-dim focus:ring-0 text-primary transition-all p-2 font-mono" 
              placeholder="Your Name" 
              type="text"
            />
          </div>
          <div className="group">
            <label className="block text-xs text-on-surface-variant mb-1 group-focus-within:text-primary-fixed-dim transition-colors font-mono">RETURN_PATH</label>
            <input 
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed-dim focus:ring-0 text-primary transition-all p-2 font-mono" 
              placeholder="your@email.com" 
              type="email"
            />
          </div>
          <div className="group">
            <label className="block text-xs text-on-surface-variant mb-1 group-focus-within:text-primary-fixed-dim transition-colors font-mono">DATA_PAYLOAD</label>
            <textarea 
              className="w-full bg-transparent border-b border-outline-variant focus:border-primary-fixed-dim focus:ring-0 text-primary transition-all p-2 font-mono" 
              placeholder="How can I help?" 
              rows="4"
            ></textarea>
          </div>
          <button className="w-full bg-primary-container text-on-primary py-4 font-bold uppercase tracking-widest flex justify-center items-center gap-4 group hover:neon-border-glow transition-all font-mono text-sm">
            SEND_TRANSMISSION
            <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">send</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
