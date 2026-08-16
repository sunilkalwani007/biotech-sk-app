import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BrainCircuit, TestTube2, Fingerprint, ChevronRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';
import { ArrowRight, Dna, Microscope, Activity, Beaker, Network, Menu, X, PlayCircle } from 'lucide-react';

export default function Innovation() {
  const features = [
    {
      icon: <BrainCircuit size={20} className="text-cyan-400" />,
      title: "AI-Powered Drug Discovery",
      desc: "Machine learning algorithms that predict molecular folding with 99.8% accuracy."
    },
    {
      icon: <TestTube2 size={20} className="text-cyan-400" />,
      title: "Synthetic Cell Libraries",
      desc: "Proprietary database of over 2 million engineered cellular constructs."
    },
    {
      icon: <Fingerprint size={20} className="text-cyan-400" />,
      title: "Personalized Genomics",
      desc: "Therapies customized down to the individual patient's DNA sequencing."
    }
  ];

  // Mouse Interaction Logic for Parallax Effect
  const visualRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!visualRef.current) return;
    const rect = visualRef.current.getBoundingClientRect();
    // Center point se mouse ka distance calculate kar rahe hain
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setMousePosition({ x, y });
  };

  // Interactive Nodes Data (Molecules/Cells)
  const nodes = [
    { id: 1, size: 60, top: '20%', left: '20%', factor: 0.05, color: 'from-cyan-400 to-blue-500' },
    { id: 2, size: 40, top: '70%', left: '15%', factor: 0.1, color: 'from-blue-500 to-purple-500' },
    { id: 3, size: 90, top: '40%', left: '60%', factor: 0.02, color: 'from-cyan-300 to-cyan-600' },
    { id: 4, size: 30, top: '80%', left: '70%', factor: 0.15, color: 'from-blue-400 to-indigo-500' },
    { id: 5, size: 50, top: '15%', left: '75%', factor: 0.08, color: 'from-cyan-500 to-blue-600' },
  ];

  return (
    <section id="innovation" className="py-24 px-6 lg:px-20 bg-slate-900 relative overflow-hidden">
      
      <div className="absolute top-1/2 -translate-y-1/2 left-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Left Column: Text & Features (Static) */}
        <div>
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-300 mb-6">
              <Sparkles size={16} className="text-cyan-400" />
              <span className="text-xs font-semibold tracking-wider uppercase">Our Innovation Engine</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white leading-tight">
              Where Biology <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                Meets Computation.
              </span>
            </h2>
            
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Interact with the simulation. By combining high-throughput synthetic biology with deep learning, we compress years of research into weeks.
            </p>
          </ScrollReveal>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <ScrollReveal delay={index * 0.15} key={index}>
                <div className="flex gap-4 group">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-cyan-500/50 group-hover:bg-cyan-950/30 transition-colors">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-200 mb-1">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>

        {/* Right Column: INTERACTIVE VISUAL ELEMENT */}
        <ScrollReveal delay={0.3}>
          <div 
            ref={visualRef}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
              setIsHovered(false);
              setMousePosition({ x: 0, y: 0 }); // Reset to center on leave
            }}
            className="relative w-full h-[500px] md:h-[600px] bg-slate-900/40 rounded-3xl border border-slate-800 overflow-hidden group shadow-2xl"
          >
            {/**/}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative lg:h-[600px] flex items-center justify-center"
            >
               <div className="relative w-full max-w-md aspect-square rounded-full border border-slate-200/50 flex items-center justify-center p-8">
                  {/* Spinning decorative rings */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 rounded-full border border-dashed border-teal-200/50"
                  />
                   <motion.div 
                    animate={{ rotate: -360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-8 rounded-full border border-slate-200"
                  />
                  
                  {/* Core visual container */}
                  <div className="relative w-full h-full rounded-full bg-white shadow-2xl overflow-hidden shadow-teal-900/5 flex items-center justify-center p-6 border border-slate-100">
                    {/* Simulated 3D or complex graphic placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-teal-50 to-blue-50 opacity-50" />
                    
                    <svg className="w-full h-full text-teal-600 relative z-10" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        d="M20 50 Q 35 20, 50 50 T 80 50" 
                        stroke="currentColor" strokeWidth="2" strokeLinecap="round" 
                      />
                      <motion.path 
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 3, delay: 1.5, ease: "easeInOut", repeat: Infinity, repeatType: "reverse" }}
                        d="M20 50 Q 35 80, 50 50 T 80 50" 
                        stroke="#0ea5e9" strokeWidth="2" strokeLinecap="round" 
                      />
                      {/* Nodes */}
                      <circle cx="20" cy="50" r="4" fill="currentColor" />
                      <circle cx="50" cy="50" r="4" fill="#0ea5e9" />
                      <circle cx="80" cy="50" r="4" fill="currentColor" />
                    </svg>
                    
                    {/* Floating elements */}
                    <motion.div 
                      animate={{ y: [0, -10, 0] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute top-1/4 left-1/4 bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700"
                    >
                      <Activity size={14} className="text-emerald-500" />
                      Synthesis
                    </motion.div>
                     <motion.div 
                      animate={{ y: [0, 15, 0] }}
                      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                      className="absolute bottom-1/4 right-1/4 bg-white p-2 rounded-xl shadow-lg border border-slate-100 flex items-center gap-2 text-xs font-semibold text-slate-700"
                    >
                      <Fingerprint size={14} className="text-blue-500" />
                      Targeting
                    </motion.div>
                  </div>
               </div>
            </motion.div>            
            {/**/}            
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}