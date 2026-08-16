import { Activity, Dna, Microscope } from 'lucide-react';
import { ScrollReveal } from './ui/ScrollReveal';

export default function Impact() {
  const services = [
    { title: "Cellular Engineering", icon: <Microscope className="text-cyan-400" size={32}/>, desc: "Advanced CRISPR-Cas9 editing for precision medicine." },
    { title: "Protein Synthesis", icon: <Dna className="text-cyan-400" size={32}/>, desc: "Designing novel proteins for targeted immunotherapy." },
    { title: "Bio-Data Analytics", icon: <Activity className="text-cyan-400" size={32}/>, desc: "AI-driven mapping of complex genomic pathways." }
  ];

  return (
    <section id="impact" className="py-24 bg-slate-900 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-center">Core Impact</h2>
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ScrollReveal delay={index * 0.2} key={index}>
              <div className="p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-cyan-500/30 hover:bg-slate-800 transition-all group cursor-pointer">
                <div className="mb-6 p-4 rounded-xl bg-slate-900/50 inline-block group-hover:scale-110 transition-transform">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-400 leading-relaxed">{service.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}