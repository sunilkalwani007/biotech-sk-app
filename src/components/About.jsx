import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, Play } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export default function About() {
  const missionPoints = [
    "Rewriting the rules of synthetic biology.",
    "Accelerating clinical trials with AI.",
    "Making gene therapy accessible globally."
  ];

  return (
    <section id="about" className="py-24 px-6 lg:px-20 bg-slate-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Image Composition */}
        <div className="relative w-full h-[500px] md:h-[600px] flex items-center justify-center">
          
          {/* Main Large Image */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-3/4 h-[55%] rounded-2xl overflow-hidden border border-slate-800 shadow-2xl z-10"
          >
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800" 
              alt="Biotech Lab Research" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-cyan-900/10 mix-blend-overlay"></div>
          </motion.div>

          {/* Top Right Floating Image */}
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="absolute right-0 top-0 w-1/2 h-[45%] rounded-2xl overflow-hidden border-2 border-slate-900 shadow-2xl z-20"
          >
            <img 
              src="https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=600" 
              alt="Molecular Structure" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </motion.div>

          {/* Bottom Right Floating Video/Play Badge */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="absolute right-10 bottom-10 z-30 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md border border-slate-700 shadow-[0_0_30px_rgba(34,211,238,0.15)] flex items-center gap-4 cursor-pointer group hover:bg-slate-800 transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-cyan-500 text-slate-950 flex items-center justify-center group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(34,211,238,0.5)]">
              <Play size={20} className="ml-1" />
            </div>
            <div>
              <p className="text-white font-bold text-sm">Watch the facility</p>
              <p className="text-cyan-400 text-xs font-mono">2:45 MIN</p>
            </div>
          </motion.div>

        </div>

        {/* Right Column: Text Content */}
        <div>
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              We don't just treat disease. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                We engineer cures.
              </span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal delay={0.2}>
            <p className="text-slate-400 text-lg mb-6 leading-relaxed">
              Founded at the intersection of computer science and molecular biology, BioSynth is on a mission to completely eliminate untreatable genetic disorders. 
            </p>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Our state-of-the-art facilities in Jodhpur and globally house the brightest minds working with proprietary AI models to simulate millions of protein structures in seconds. We are moving science from discovery to design.
            </p>
          </ScrollReveal>

          {/* Mission Bullet Points */}
          <div className="space-y-4 mb-10">
            {missionPoints.map((point, index) => (
              <ScrollReveal delay={0.3 + (index * 0.1)} key={index}>
                <div className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-cyan-400 flex-shrink-0" />
                  <span className="text-slate-200 font-medium">{point}</span>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.6}>
            <button className="flex items-center gap-2 px-8 py-4 bg-transparent border border-cyan-500/50 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 rounded-lg font-semibold transition-all group">
              Read Our Full Story
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </ScrollReveal>
        </div>

      </div>
    </section>
  );
}