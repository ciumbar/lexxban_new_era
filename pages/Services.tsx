
import React from 'react';

const Services: React.FC = () => {
  const services = [
    {
      title: "Asesoría Fiscal",
      description: "Optimización tributaria estratégica y cumplimiento normativo nacional para estructuras corporativas complejas y grandes patrimonios.",
      icon: "account_balance_wallet"
    },
    {
      title: "Gestión de Patrimonios",
      description: "Preservación y crecimiento de activos familiares mediante estrategias discretas de inversión y planificación sucesoria personalizada.",
      icon: "castle"
    },
    {
      title: "Derecho Mercantil",
      description: "Asesoramiento integral en fusiones, adquisiciones y transacciones con un enfoque en la seguridad jurídica institucional.",
      icon: "gavel"
    },
    {
      title: "Consultoría Estratégica",
      description: "Acompañamiento en la toma de decisiones críticas para la expansión y el posicionamiento competitivo de su organización.",
      icon: "insights"
    }
  ];

  return (
    <div className="w-full max-w-[1200px] mx-auto px-6 py-12">
      <div className="mb-24 space-y-6 max-w-3xl">
        <div className="flex items-center gap-3">
          <span className="h-px w-8 bg-primary"></span>
          <span className="text-primary font-bold tracking-[0.3em] text-[10px] uppercase">Servicios Exclusivos</span>
        </div>
        <h1 className="text-5xl md:text-7xl font-display font-black leading-[1.1] tracking-tight dark:text-white text-slate-900">
          Arquitectura legal para la <span className="italic text-primary">empresa moderna.</span>
        </h1>
        <p className="text-lg dark:text-white/50 text-slate-500 leading-relaxed max-w-xl font-light">
          Diseñamos soluciones financieras y jurídicas con precisión para proteger su legado y potenciar su crecimiento en el mercado español.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <div key={index} className="glass-panel p-10 md:p-14 rounded-2xl flex flex-col gap-8 group hover:border-primary/40 transition-all duration-500">
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-3xl">{service.icon}</span>
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-display font-bold dark:text-white text-slate-800">{service.title}</h3>
              <p className="dark:text-white/50 text-slate-500 text-base leading-relaxed font-light">
                {service.description}
              </p>
            </div>
            <div className="mt-auto pt-6 border-t dark:border-white/5 border-black/5">
              <a href="#contact" className="inline-flex items-center gap-3 text-primary font-bold text-xs tracking-widest uppercase group/btn">
                Ver Detalles
                <span className="material-symbols-outlined !text-sm group-hover/btn:translate-x-2 transition-transform">east</span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section CTA - Divided for Calendly Integration */}
      <section className="mt-32 w-full glass-panel rounded-3xl overflow-hidden relative shadow-2xl">
        <div className="absolute -top-24 -right-24 size-80 bg-primary/10 blur-[100px] rounded-full"></div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 relative z-10">
          {/* Left Content */}
          <div className="p-10 md:p-20 flex flex-col justify-center text-left space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-display font-bold dark:text-white text-slate-900 leading-tight">
                ¿Busca una gestión <span className="text-primary italic">excepcional</span> de sus activos?
              </h2>
              <p className="dark:text-white/50 text-slate-500 text-lg font-light leading-relaxed">
                Reserve una sesión estratégica privada con nuestros consultores senior. Analizaremos su situación patrimonial con total discreción y rigor institucional.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <a href="#contact" className="w-full sm:w-auto bg-primary text-white text-center font-bold tracking-widest uppercase text-[10px] py-4 px-10 rounded-xl hover:bg-primary/90 transition-all shadow-xl shadow-primary/20 active:scale-95">
                Consultar Disponibilidad
              </a>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1,2,3].map(i => (
                    <div key={i} className="size-8 rounded-full border-2 border-white dark:border-slate-800 bg-slate-200 overflow-hidden">
                       <img src={`https://i.pravatar.cc/100?u=lexxban${i}`} alt="Consultor" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-primary/70">Equipo Senior</span>
              </div>
            </div>
          </div>

          {/* Right Placeholder for Calendly */}
          <div className="bg-slate-900/5 dark:bg-white/5 p-6 md:p-12 border-l border-black/5 dark:border-white/5 flex items-center justify-center min-h-[450px]">
            <div className="w-full h-full border-2 border-dashed border-black/10 dark:border-white/10 rounded-2xl flex flex-col items-center justify-center text-center p-8 space-y-6 group">
              <div className="size-20 rounded-full bg-primary/10 flex items-center justify-center text-primary/40 group-hover:scale-110 transition-transform duration-700">
                <span className="material-symbols-outlined text-4xl">event_available</span>
              </div>
              <div className="space-y-2">
                <p className="text-primary font-bold uppercase tracking-[0.2em] text-[10px]">Portal de Citas</p>
                <h4 className="dark:text-white text-slate-800 font-bold text-xl">Calendario de Consultoría</h4>
                <p className="dark:text-white/40 text-slate-400 text-sm font-light max-w-[280px] mx-auto">
                  Este espacio está reservado para la integración directa con Calendly. Próximamente podrá agendar sus sesiones aquí.
                </p>
              </div>
              {/* Shimmer effect to indicate dynamic area */}
              <div className="w-full max-w-[240px] space-y-3">
                <div className="h-2 w-full bg-primary/10 rounded-full overflow-hidden relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite]"></div>
                </div>
                <div className="h-2 w-2/3 bg-primary/10 rounded-full mx-auto overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-x-full animate-[shimmer_2s_infinite_0.5s]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes shimmer {
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
};

export default Services;
