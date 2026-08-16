import React from 'react';
import { Hexagon, Mail, ArrowRight, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-20 pb-10 px-6 lg:px-20 text-slate-400">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 text-white font-bold text-xl tracking-wide">
            <Hexagon className="text-cyan-400" size={28} />
            <span>Bio<span className="text-cyan-400">Tech</span></span>
          </div>
          <p className="text-sm leading-relaxed max-w-xs">
            Pioneering breakthrough synthetic biology to develop targeted therapies and decode the future of human health.
          </p>
          <div className="flex items-center gap-4 pt-2">
            <ul className="space-y-3 text-sm">
            <li><a href="mailto:info@biotech.com" className="hover:text-cyan-400 transition-colors"><Mail size={20} className="mr-2 inline" />info@biotech.com</a></li>
            <li><a href="callto:+919784350553" className="hover:text-cyan-400 transition-colors"><Phone size={20} className="mr-2 inline" />+91.97483.50553</a></li>
            </ul>
          </div>
        </div>

        {/* Links Column 1 */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Research</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#innovation" className="hover:text-cyan-400 transition-colors">Innovation</a></li>
            <li><a href="#research" className="hover:text-cyan-400 transition-colors">Research</a></li>
            <li><a href="#capabilities" className="hover:text-cyan-400 transition-colors">Capabilities</a></li>
          </ul>
        </div>

        {/* Links Column 2 */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Company</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-cyan-400 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-cyan-400 transition-colors">Contact</a></li>
            <li><a href="#statistics" className="hover:text-cyan-400 transition-colors">Statistics</a></li>
          </ul>
        </div>

        {/* Newsletter Column */}
        <div>
          <h4 className="text-white font-semibold mb-6 uppercase tracking-wider text-sm">Stay Updated</h4>
          <p className="text-sm mb-4">Subscribe to our newsletter for the latest breakthroughs and research news.</p>
          <form className="flex group" onSubmit={(e) => e.preventDefault()}>
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="w-full bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2.5 text-sm text-white focus:outline-none focus:border-cyan-500 transition-colors"
            />
            <button type="submit" className="bg-cyan-600 hover:bg-cyan-500 px-4 py-2.5 rounded-r-lg text-white transition-colors flex items-center justify-center">
              <ArrowRight size={18} />
            </button>
          </form>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row items-center justify-between text-xs gap-4">
        <p>&copy; {new Date().getFullYear()} BioTech. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}