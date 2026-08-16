import React, { useEffect, useRef } from 'react';
import { motion, useInView, animate } from 'framer-motion';
import { Award, CircleDollarSign, TestTube2, Globe2 } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

// Naya Component: Scroll karne par numbers ko animate karne ke liye
const AnimatedCounter = ({ from, to, prefix = "", suffix = "", duration = 2 }) => {
  const nodeRef = useRef(null);
  const isInView = useInView(nodeRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          if (nodeRef.current) {
            nodeRef.current.textContent = `${prefix}${Math.round(value)}${suffix}`;
          }
        },
      });
      return () => controls.stop();
    }
  }, [isInView, from, to, duration, prefix, suffix]);

  return <span ref={nodeRef} className="tabular-nums">{prefix}{from}{suffix}</span>;
};

export default function Stats() {
  const stats = [
    { 
      id: 1,
      icon: <Award size={28} />,
      numericValue: 15,
      prefix: "",
      suffix: "+", 
      label: "Patented Therapies",
      desc: "FDA-approved and in-market"
    },
    { 
      id: 2,
      icon: <CircleDollarSign size={28} />,
      numericValue: 120,
      prefix: "$",
      suffix: "M", 
      label: "Research Funding",
      desc: "Backed by top tier VCs"
    },
    { 
      id: 3,
      icon: <TestTube2 size={28} />,
      numericValue: 40,
      prefix: "",
      suffix: "+", 
      label: "Clinical Trials",
      desc: "Active across 12 countries"
    },
    { 
      id: 4,
      icon: <Globe2 size={28} />,
      numericValue: 2,
      prefix: "",
      suffix: ".4M", // Using a string suffix for formatting
      label: "Lives Impacted",
      desc: "Patients treated globally"
    }
  ];

  return (
    <section id="statistics" className="py-24 px-6 lg:px-20 bg-slate-950 relative overflow-hidden border-y border-slate-900">
      
      {/* Animated Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(34,211,238,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      
      {/* Pulsing Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          
          {stats.map((stat, i) => (
            <ScrollReveal delay={i * 0.15} key={stat.id}>
              <div className="relative group p-8 rounded-2xl bg-slate-900/40 backdrop-blur-xl border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-900/80 transition-all duration-500 overflow-hidden">
                
                {/* Diagonal sweep hover effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 via-cyan-500/5 to-blue-500/0 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-700 ease-out"></div>
                
                <div className="relative z-10 flex flex-col items-center">
                  
                  {/* Floating Icon */}
                  <motion.div 
                    whileHover={{ y: -5, scale: 1.1 }}
                    className="mb-6 p-4 rounded-xl bg-slate-950 border border-slate-800 text-cyan-400 shadow-lg group-hover:bg-cyan-950 group-hover:text-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] transition-colors duration-300"
                  >
                    {stat.icon}
                  </motion.div>
                  
                  {/* The Animated Number Counter */}
                  <h4 className="text-5xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 mb-2 drop-shadow-md group-hover:from-cyan-400 group-hover:to-blue-500 transition-all duration-500 font-display">
                    <AnimatedCounter 
                      from={0} 
                      to={stat.numericValue} 
                      prefix={stat.prefix} 
                      suffix={stat.suffix} 
                      duration={2.5 + (i * 0.2)} // Har agla number thodi der se complete hoga
                    />
                  </h4>
                  
                  {/* Label */}
                  <p className="text-sm text-slate-300 uppercase tracking-widest font-semibold mb-3">
                    {stat.label}
                  </p>
                  
                  {/* Progress Line */}
                  <div className="w-12 h-1 bg-slate-800 rounded-full mb-3 group-hover:w-full group-hover:bg-cyan-500 transition-all duration-500"></div>
                  
                  {/* Description */}
                  <p className="text-xs text-slate-500">
                    {stat.desc}
                  </p>

                </div>
                
              </div>
            </ScrollReveal>
          ))}
          
        </div>
      </div>
    </section>
  );
}