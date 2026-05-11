import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full py-10 mt-16 border-t border-white/5 bg-surface-container-lowest/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-gutter max-w-[1280px] mx-auto">
        <div className="text-xs text-primary-fixed-dim mb-4 md:mb-0 font-mono font-bold tracking-tighter">
          SHIHAB_UL_ISLAM // NEON_ARCHIVE
        </div>
        
        <div className="flex gap-10 mb-4 md:mb-0">
          <a 
            className="text-xs text-on-surface-variant hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100 font-mono" 
            href="https://github.com/shihab-5"
            target="_blank"
          >
            Github
          </a>
          <a 
            className="text-xs text-on-surface-variant hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100 font-mono" 
            href="https://www.linkedin.com/in/shihab-ul-islam/"
            target="_blank"
          >
            LinkedIn
          </a>
          <a 
            className="text-xs text-on-surface-variant hover:text-primary-fixed-dim transition-colors opacity-80 hover:opacity-100 font-mono" 
            href="https://suunymart-orpin.vercel.app/"
            target="_blank"
          >
            Live_Ops
          </a>
        </div>
        
        <div className="text-xs text-on-surface-variant text-center md:text-right font-mono">
          © {new Date().getFullYear()} NEON_ARCHIVE. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
