import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Innovation from './components/Innovation';
import Research from './components/Research'
import Capabilities from './components/Capabilities';
import Stats from './components/Stats';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function BiotechLandingPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50 font-sans selection:bg-cyan-500/30 relative">
      <Navbar />
      
      <main>
        <Hero />
        <About />
        <Innovation />
        <Research />
        <Capabilities />
        <Stats />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}