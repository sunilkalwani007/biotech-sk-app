import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Hexagon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect karke navbar ka background change karne ke liye
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = ["About", "Innovation", "Research", "Capabilities", "Statistics", "Contact"];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-20">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wide cursor-pointer">
            <Hexagon className="text-cyan-400" size={28} />
            <span>Bio<span className="text-cyan-400">Tech</span></span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
            {navLinks.map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="hover:text-cyan-400 transition-colors">
                {link}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a href="#contact" className="inline-block px-5 py-2.5 bg-cyan-600/10 border border-cyan-500/50 hover:bg-cyan-600 text-cyan-400 hover:text-white rounded-lg text-sm font-semibold transition-all">Contact Our Team</a>
          </div>          

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-300 hover:text-white focus:outline-none">
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-slate-900 border-b border-slate-800 overflow-hidden"
          >
            <div className="px-6 py-4 space-y-4 flex flex-col">
              {navLinks.map((link) => (
                <a 
                  key={link} 
                  href={`#${link.toLowerCase()}`} 
                  onClick={() => setIsOpen(false)}
                  className="block text-slate-300 hover:text-cyan-400 text-lg font-medium transition-colors"
                >
                  {link}
                </a>
              ))}
              <div className="pt-4 border-t border-slate-800">
                <a href="#contact" className="w-full px-5 py-3 bg-cyan-600 text-white rounded-lg font-semibold transition-all">Contact Our Team</a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}