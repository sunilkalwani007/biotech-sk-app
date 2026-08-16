import React from 'react';
import { motion } from 'framer-motion';
import { Dna, ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6 lg:px-20 bg-slate-950">
      
      {/* 🎬 Background Video Section */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-60"
        >
          <source src="https://mammoth.bio/wp-content/uploads/2020/01/Mammoth-BG-Final.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Dark Gradient Overlay for Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950/60 to-slate-950"></div>
      </div>
      
      {/* ✍️ Main Hero Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center mt-20 md:mt-0">
        
        {/* Animated Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: -20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-slate-900/50 border border-cyan-500/30 text-cyan-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(34,211,238,0.15)]"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          >
            <Dna size={18} />
          </motion.div>
          <span className="text-sm font-semibold tracking-wider uppercase drop-shadow-md">Next-Gen Genomics</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 text-white drop-shadow-2xl"
        >
          Decoding the Future of <br className="hidden md:block"/> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 drop-shadow-lg">
            Human Health.
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed drop-shadow-md"
        >
          Pioneering breakthrough synthetic biology and cellular research to develop targeted therapies for complex diseases.
        </motion.p>

        {/* Call to Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5"
        >
          <a href="#contact" className="w-full sm:w-auto px-8 py-4 bg-cyan-600/90 hover:bg-cyan-500 text-white rounded-xl font-semibold transition-all transform hover:scale-105 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2 group backdrop-blur-sm">
            Contact Our Team 
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          
        </motion.div>
      </div>
    </section>
  );
}