import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Dna, Microscope, Brain, Activity, FlaskConical, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export default function Research() {
  const [activeTab, setActiveTab] = useState(0);

  // Research Data
  const researchAreas = [
    {
      id: "oncology",
      title: "Targeted Oncology",
      icon: <Activity size={24} />,
      phase: "Phase II Clinical Trials",
      desc: "Developing next-generation CAR-T cell therapies targeting solid tumors that are resistant to conventional immunotherapies.",
      stats: [
        { label: "Efficacy Rate", value: "84%" },
        { label: "Active Trials", value: "3" },
        { label: "Target", value: "Solid Tumors" }
      ],
      progress: 65, // Percentage for progress bar
    },
    {
      id: "neuro",
      title: "Neurodegeneration",
      icon: <Brain size={24} />,
      phase: "Pre-clinical",
      desc: "Using proprietary RNA-editing tools to halt and reverse protein misfolding in Alzheimer's and Parkinson's models.",
      stats: [
        { label: "Neural Recovery", value: "42%" },
        { label: "In-vivo Models", value: "Validated" },
        { label: "Target", value: "Tau Proteins" }
      ],
      progress: 30,
    },
    {
      id: "genetic",
      title: "Rare Genetics",
      icon: <Dna size={24} />,
      phase: "Phase I Clinical Trials",
      desc: "In-vivo CRISPR therapeutics designed to permanently correct single-gene mutations causing rare metabolic disorders.",
      stats: [
        { label: "Delivery", value: "LNP Tech" },
        { label: "Safety Profile", value: "High" },
        { label: "Target", value: "Liver Cells" }
      ],
      progress: 45,
    },
    {
      id: "longevity",
      title: "Cellular Longevity",
      icon: <FlaskConical size={24} />,
      phase: "Discovery Phase",
      desc: "Identifying small molecules that induce cellular reprogramming to rejuvenate aging tissues without increasing cancer risk.",
      stats: [
        { label: "Markers", value: "Telomeres" },
        { label: "Status", value: "Screening" },
        { label: "Target", value: "Epigenome" }
      ],
      progress: 15,
    }
  ];

  return (
    <section id="research" className="py-24 px-6 lg:px-20 bg-slate-950 relative border-t border-slate-900">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Research <span className="text-cyan-400">Pipeline.</span>
            </h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">
              Advancing breakthrough therapies from discovery to clinical validation across four primary therapeutic areas.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Interactive Navigation Tabs */}
          <div className="lg:col-span-4 flex flex-col gap-3">
            {researchAreas.map((area, index) => {
              const isActive = activeTab === index;
              return (
                <ScrollReveal delay={index * 0.1} key={area.id}>
                  <button
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left p-5 rounded-xl border transition-all duration-300 flex items-center gap-4 ${
                      isActive 
                        ? 'bg-cyan-950/30 border-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.1)]' 
                        : 'bg-slate-900/50 border-slate-800 hover:bg-slate-800 hover:border-slate-700'
                    }`}
                  >
                    <div className={`p-3 rounded-lg transition-colors ${isActive ? 'bg-cyan-500 text-slate-950' : 'bg-slate-800 text-cyan-400'}`}>
                      {area.icon}
                    </div>
                    <div>
                      <h3 className={`font-bold text-lg ${isActive ? 'text-white' : 'text-slate-300'}`}>
                        {area.title}
                      </h3>
                      <p className="text-xs text-slate-500 uppercase tracking-wider font-semibold mt-1">
                        {area.phase}
                      </p>
                    </div>
                  </button>
                </ScrollReveal>
              );
            })}
          </div>

          {/* Right Column: Dynamic Content Display */}
          <div className="lg:col-span-8">
            <ScrollReveal delay={0.3}>
              <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 min-h-[450px] relative overflow-hidden">
                
                {/* Background decorative element */}
                <div className="absolute -right-20 -top-20 opacity-5 pointer-events-none">
                  <Microscope size={400} />
                </div>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="relative z-10 h-full flex flex-col"
                  >
                    <div className="inline-block px-4 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-cyan-400 text-sm font-semibold mb-6 w-max">
                      {researchAreas[activeTab].phase}
                    </div>
                    
                    <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                      {researchAreas[activeTab].title}
                    </h3>
                    
                    <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-2xl">
                      {researchAreas[activeTab].desc}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-3 gap-6 mb-12">
                      {researchAreas[activeTab].stats.map((stat, idx) => (
                        <div key={idx} className="border-l-2 border-cyan-500/30 pl-4">
                          <p className="text-2xl font-bold text-white mb-1">{stat.value}</p>
                          <p className="text-sm text-slate-500 uppercase tracking-wider">{stat.label}</p>
                        </div>
                      ))}
                    </div>

                    <div className="mt-auto">
                      {/* Pipeline Progress Bar */}
                      <div className="mb-4 flex justify-between text-xs font-semibold text-slate-500 uppercase tracking-wider">
                        <span>Discovery</span>
                        <span>Pre-clinical</span>
                        <span>Phase I</span>
                        <span>Phase II</span>
                        <span>Phase III</span>
                      </div>
                      <div className="w-full bg-slate-800 rounded-full h-2 mb-6">
                        <motion.div 
                          initial={{ width: 0 }}
                          animate={{ width: `${researchAreas[activeTab].progress}%` }}
                          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                          className="bg-gradient-to-r from-cyan-500 to-blue-500 h-2 rounded-full relative shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                        >
                          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full border-2 border-cyan-500 shadow-lg"></div>
                        </motion.div>
                      </div>

                      <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-semibold group">
                        Explore specific trials 
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                      </button>
                    </div>

                  </motion.div>
                </AnimatePresence>
                
              </div>
            </ScrollReveal>
          </div>
          
        </div>
      </div>
    </section>
  );
}