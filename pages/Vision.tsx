
import React from 'react';

const Vision: React.FC = () => {
  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Content */}
        <div className="space-y-8">
          <div className="inline-flex items-center gap-2 text-accent-coral tracking-[0.2em] uppercase text-xs font-bold">
            <span className="w-8 h-[1px] bg-accent-coral"></span>
            Filosofía de la Firma
          </div>
          <h2 className="text-5xl md:text-7xl font-display font-black text-white leading-tight">
            Nuestra Visión: <span className="text-primary italic">Integridad</span>, Rigor y Excelencia.
          </h2>
          <div className="w-20 h-1 bg-primary"></div>
          <p className="text-lg md:text-xl text-white/60 font-light leading-relaxed max-w-xl">
            Llevamos décadas transformando desafíos complejos en oportunidades de crecimiento sólido para nuestros clientes en todo el mundo.
          </p>
          <div className="pt-6">
            <button className="bg-primary text-white font-bold py-4 px-10 rounded-xl hover:shadow-[0_0_30px_rgba(29,78,88,0.5)] transition-all flex items-center gap-3 active:scale-95">
              Explorar Nuestra Trayectoria
              <span className="material-symbols-outlined text-sm">arrow_forward</span>
            </button>
          </div>
        </div>

        {/* Right Side: Glass Quote Panel */}
        <div className="glass-panel p-8 md:p-16 rounded-3xl relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-3xl rounded-full"></div>
          <div className="relative z-10 space-y-10">
            <div className="space-y-4">
              <span className="material-symbols-outlined text-primary text-5xl">format_quote</span>
              <blockquote className="font-serif text-2xl md:text-4xl italic text-white/90 leading-snug">
                "Nuestra misión es salvaguardar el patrimonio global a través de la excelencia inquebrantable, asegurando que nuestros clientes operen con total seguridad."
              </blockquote>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-white/10">
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">security</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Privacidad</h4>
                  <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest">Confidencialidad absoluta</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 size-10 rounded-lg bg-primary/20 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined text-xl">precision_manufacturing</span>
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Precisión</h4>
                  <p className="text-white/40 text-[10px] mt-1 uppercase tracking-widest">Atención al detalle</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="mt-32 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { icon: 'lightbulb', label: 'Innovación', desc: 'Marcos legales vanguardistas para activos digitales.' },
          { icon: 'shield_person', label: 'Discreción', desc: 'La privacidad como pilar fundamental de la confianza.' },
          { icon: 'workspace_premium', label: 'Excelencia', desc: 'Resultados excepcionales en cada proyecto.' },
          { icon: 'public', label: 'Alcance Global', desc: 'Conectando jurisdicciones internacionales.' }
        ].map((v, i) => (
          <div key={i} className="glass-panel p-8 rounded-xl text-center flex flex-col items-center gap-4 hover:border-primary/50 transition-colors">
            <span className="material-symbols-outlined text-primary text-3xl">{v.icon}</span>
            <h4 className="font-bold">{v.label}</h4>
            <p className="text-xs text-white/40 leading-relaxed">{v.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vision;
