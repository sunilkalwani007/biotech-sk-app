import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, ShieldCheck, Users, Zap, CheckCircle2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export default function FinalCTA() {
  const benefits = [
    "Access to 50,000 sq ft. clinical manufacturing facilities.",
    "Collaborate with 200+ PhDs and AI engineers.",
    "Leverage our proprietary CRISPR delivery systems."
  ];

  return (
    <section id="contact" className="py-24 px-6 lg:px-20 bg-slate-900 relative overflow-hidden border-t border-slate-900">
      
      {/* Background Subtle Glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-cyan-900/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Visual Composition (Images) */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-4/5 h-[50%] rounded-3xl overflow-hidden border border-slate-800 shadow-2xl z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=800" 
              alt="Scientists collaborating in lab" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
          </motion.div>

          {/* Floating Secondary Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50, y: -50 }}
            whileInView={{ opacity: 1, x: 0, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-10 w-2/5 h-2/5 rounded-2xl overflow-hidden border-4 border-slate-950 shadow-2xl z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&q=80&w=600" 
              alt="Laboratory equipment" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Floating Glassmorphism Data Card */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-10 bottom-20 z-30 p-5 rounded-2xl bg-slate-900/80 backdrop-blur-xl border border-slate-700 shadow-[0_0_30px_rgba(34,211,238,0.15)] flex flex-col gap-3"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <Users size={20} />
              </div>
              <div>
                <p className="text-white font-bold text-lg leading-none">40+ Active</p>
                <p className="text-slate-400 text-xs mt-1">Global Partnerships</p>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Extended Text & Direct Action */}
        <div className="sm:mt-4">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-xs font-semibold tracking-wider uppercase">Join The Network</span>
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
              Let's scale the <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                future of health.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              We are actively expanding our global ecosystem. Whether you're a VC firm, an academic institution, or a pharmaceutical leader, BioSynth offers unparalleled infrastructure to accelerate your biotech ambitions.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            {/* Added Value Proposition Points */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle2 size={20} className="text-cyan-500 mt-1 flex-shrink-0" />
                  <p className="text-slate-300">{benefit}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            {/* Direct Email Action Button */}
            <a 
              href="mailto:info@biotech.com"
              className="inline-flex px-10 py-5 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-[0_0_30px_rgba(34,211,238,0.3)] items-center justify-center gap-3 group mb-8"
            >
              <Mail size={22} className="group-hover:scale-110 transition-transform" />
              info@biotech.com
            </a>
            
            {/* Info Badges */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-slate-500 text-sm font-medium">
              <div className="flex items-center gap-2">
                <MapPin size={18} className="text-cyan-600" /> HQ: Jodhpur, Rajasthan
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-slate-700"></div>
              <div className="flex items-center gap-2">
                <ShieldCheck size={18} className="text-cyan-600" /> Secure Communications
              </div>
            </div>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}