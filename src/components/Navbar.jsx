import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
      <div className="glass-nav rounded-none px-6 py-3 flex items-center justify-between border-t-4 border-t-primary-container">
        {/* Logo */}
        <div className="text-lg font-bold tracking-tighter uppercase font-display neon-text-green text-primary-container">
          //LEO_CARTER_01
        </div>
        
        {/* Nav Links */}
        <div className="hidden md:flex items-center space-x-8 text-xs font-bold text-outline uppercase tracking-widest">
          <a className="hover:text-primary-container transition-colors" href="#projects">REPOSITORY</a>
          <a className="hover:text-primary-container transition-colors" href="#services">PROTOCOLS</a>
          <a className="hover:text-primary-container transition-colors" href="#testimonials">LOGS</a>
          <a className="hover:text-primary-container transition-colors" href="#faqs">INTEL</a>
        </div>
        
        {/* Action Button */}
        <div>
          <a 
            className="bg-primary-container hover:bg-surface-tint text-on-primary-container px-6 py-2 rounded-none text-xs font-bold transition-all shadow-[4px_4px_0px_#ff4a8d] hover:shadow-[2px_2px_0px_#ff4a8d] uppercase" 
            href="#"
          >
            Establish Link
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
