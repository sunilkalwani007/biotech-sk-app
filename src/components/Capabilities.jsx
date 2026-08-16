import React from 'react';
import { motion } from 'framer-motion';
import { Microscope, Dna, Activity, Database, Syringe, ShieldCheck, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export default function Capabilities() {
  const capabilitiesList = [
    {
      icon: <Microscope size={28} />,
      title: "Cellular Engineering",
      desc: "Advanced CRISPR-Cas9 editing and cell line development for precision medicine and targeted therapies.",
    },
    {
      icon: <Dna size={28} />,
      title: "Next-Gen Sequencing",
      desc: "High-throughput genomic, transcriptomic, and epigenomic sequencing with rapid turnaround times.",
    },
    {
      icon: <Activity size={28} />,
      title: "Protein Design",
      desc: "Computational design and synthesis of novel proteins, enzymes, and antibodies for immunotherapies.",
    },
    {
      icon: <Database size={28} />,
      title: "Bio-Data Analytics",
      desc: "AI-driven mapping of complex genomic pathways using multi-omics data integration.",
    },
    {
      icon: <Syringe size={28} />,
      title: "Therapeutic Delivery",
      desc: "Proprietary Lipid Nanoparticle (LNP) technology for safe and targeted intracellular drug delivery.",
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Clinical Manufacturing",
      desc: "cGMP-compliant scalable manufacturing facilities for clinical-grade therapeutics and testing.",
    }
  ];

  return (
    <section id="capabilities" className="py-24 px-6 lg:px-20 bg-slate-900 relative overflow-hidden">
      
      {/* Subtle Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-cyan-900/10 rounded-[100%] blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Core <span className="text-cyan-400">Capabilities.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              State-of-the-art infrastructure and proprietary technologies powering the next generation of genomic medicine.
            </p>
          </ScrollReveal>
        </div>
        
        {/* Capabilities Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilitiesList.map((item, index) => (
            <ScrollReveal delay={index * 0.1} key={index}>
              <div className="h-full group relative p-8 rounded-2xl bg-slate-950 border border-slate-800 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.1)] overflow-hidden cursor-pointer flex flex-col">
                
                {/* Background Hover Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 flex-1">
                  {/* Icon Container */}
                  <div className="mb-6 inline-flex p-4 rounded-xl bg-slate-900 border border-slate-800 text-cyan-400 group-hover:bg-cyan-950 group-hover:scale-110 group-hover:text-cyan-300 transition-all duration-300 shadow-lg">
                    {item.icon}
                  </div>
                  
                  {/* Text Content */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-50 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                {/* Animated "Learn More" Link */}
                <div className="relative z-10 mt-auto flex items-center gap-2 text-sm font-semibold text-cyan-400 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                  Learn more <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}