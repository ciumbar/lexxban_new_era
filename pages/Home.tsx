
import React, { useState, useEffect } from 'react';
import MortgageCalculator from '../components/MortgageCalculator';

const Home: React.FC = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center px-6 pb-20 overflow-hidden">
      {/* Hero Section - España */}
      <section className="w-full max-w-[1100px] glass-panel rounded-[40px] p-10 md:p-24 text-center flex flex-col items-center gap-10 relative overflow-hidden">
        {/* Parallax Background Orbs */}
        <div 
          className="absolute -top-32 -left-32 w-64 h-64 bg-primary/10 blur-[80px] rounded-full transition-transform duration-75 ease-out"
          style={{ transform: `translate3d(${scrollY * 0.1}px, ${scrollY * 0.2}px, 0)` }}
        ></div>
        <div 
          className="absolute -bottom-32 -right-32 w-64 h-64 bg-primary/5 blur-[80px] rounded-full transition-transform duration-75 ease-out"
          style={{ transform: `translate3d(${scrollY * -0.05}px, ${scrollY * -0.15}px, 0)` }}
        ></div>
        
        <div 
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20 text-[11px] font-bold uppercase tracking-[0.25em] dark:text-white text-primary transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.05}px)` }}
        >
          <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
          Liderazgo Patrimonial en España
        </div>
        
        <div className="flex flex-col gap-8 max-w-[900px]">
          <h1 
            className="text-5xl md:text-8xl font-black leading-[1] tracking-tighter dark:text-white text-slate-900 font-display transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollY * 0.1}px)` }}
          >
            Gestión de <span className="text-primary italic">Activos</span> de Alta Dirección.
          </h1>
          <p 
            className="text-lg md:text-2xl dark:text-white/60 text-slate-500 font-light leading-relaxed max-w-[700px] mx-auto transition-transform duration-100 ease-out"
            style={{ transform: `translateY(${scrollY * 0.08}px)` }}
          >
            Soluciones estratégicas exclusivas para el mercado español. Seguridad jurídica y financiera desde el corazón financiero de Madrid.
          </p>
        </div>
        
        <div 
          className="flex flex-wrap items-center justify-center gap-5 mt-4 transition-transform duration-100 ease-out"
          style={{ transform: `translateY(${scrollY * 0.04}px)` }}
        >
          <a 
            href="#hipoteca"
            className="bg-primary hover:bg-primary/90 text-white font-bold py-4 px-12 rounded-2xl transition-all shadow-2xl shadow-primary/30 text-base active:scale-95"
          >
            Análisis Hipotecario
          </a>
          <a 
            href="#services"
            className="glass-panel hover:bg-white/10 dark:text-white text-slate-700 font-bold py-4 px-12 rounded-2xl transition-all text-base active:scale-95"
          >
            Servicios Senior
          </a>
        </div>
        
        <div className="grid grid-cols-3 gap-10 w-full mt-20 pt-16 border-t dark:border-white/10 border-black/5">
          <div className="flex flex-col items-center gap-3">
            <span className="dark:text-white/40 text-slate-400 text-[11px] uppercase tracking-widest font-bold">Patrimonio</span>
            <span className="text-2xl md:text-4xl font-black text-primary dark:text-white">1.8B€+</span>
          </div>
          <div className="flex flex-col items-center gap-3 border-x dark:border-white/10 border-black/5">
            <span className="dark:text-white/40 text-slate-400 text-[11px] uppercase tracking-widest font-bold">Sede</span>
            <span className="text-2xl md:text-4xl font-black text-primary dark:text-white">MADRID</span>
          </div>
          <div className="flex flex-col items-center gap-3">
            <span className="dark:text-white/40 text-slate-400 text-[11px] uppercase tracking-widest font-bold">Expertise</span>
            <span className="text-2xl md:text-4xl font-black text-primary dark:text-white">25 AÑOS</span>
          </div>
        </div>
      </section>

      {/* Mortgage Calculator Section */}
      <section id="hipoteca" className="w-full mt-32 scroll-mt-32 relative">
        <MortgageCalculator />
      </section>

      {/* Feature Cards */}
      <section className="w-full max-w-[1200px] mt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: 'gavel', title: 'Jurisprudencia Nacional', desc: 'Dominio absoluto del marco legal español para su total tranquilidad.' },
            { icon: 'account_balance', title: 'Banca Privada', desc: 'Conexiones institucionales del más alto nivel en el sector bancario nacional.' },
            { icon: 'verified', title: 'Cumplimiento', desc: 'Protocolos de compliance rigurosos adaptados a la normativa vigente.' }
          ].map((card, i) => (
            <div key={i} className="glass-panel p-10 rounded-3xl group hover:border-primary/50 transition-all duration-500">
              <div className="bg-primary/10 size-14 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <span className="material-symbols-outlined !text-3xl">{card.icon}</span>
              </div>
              <h3 className="text-2xl font-bold mb-4 dark:text-white text-slate-800">{card.title}</h3>
              <p className="dark:text-white/50 text-slate-500 leading-relaxed text-base font-light">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
