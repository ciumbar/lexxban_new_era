
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const offices = [
    {
      city: "Oficina Central Madrid",
      address: "Paseo de la Castellana, 259C, Torre de Cristal, 28046",
      phone: "+34 917 61 25 00",
      email: "contacto@lexxban.com",
      isMain: true
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Solicitud recibida. Un socio de Lexxban contactará con usted en breve.`);
  };

  return (
    <div className="w-full flex flex-col items-center px-6 py-12 md:py-20">
      <div className="max-w-[1000px] w-full text-center mb-16 space-y-4">
        <h1 className="dark:text-white text-slate-900 tracking-tight text-5xl md:text-7xl font-display font-black leading-tight">
          Sede en <span className="text-primary italic">Madrid</span>
        </h1>
        <p className="dark:text-white/50 text-slate-500 text-lg max-w-2xl mx-auto font-light leading-relaxed">
          Ubicados en el centro neurálgico de las finanzas en España, nuestra sede en la Torre de Cristal es el punto de encuentro de la excelencia.
        </p>
      </div>

      <div className="max-w-[1200px] w-full grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
        {/* Office Details */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          {offices.map((office, idx) => (
            <div key={idx} className="glass-panel p-10 rounded-3xl border-l-8 border-primary flex-grow">
              <h3 className="text-3xl font-display font-bold dark:text-white text-primary mb-6">{office.city}</h3>
              <div className="space-y-6 text-base dark:text-white/60 text-slate-600 font-light">
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">location_on</span>
                  <p className="flex-grow">{office.address}</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <p>{office.phone}</p>
                </div>
                <div className="flex gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <p className="text-primary font-bold">{office.email}</p>
                </div>
              </div>
              
              <div className="mt-12 pt-8 border-t dark:border-white/10 border-black/5">
                <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-slate-400 mb-2">Horario de Atención</p>
                <p className="text-sm dark:text-white text-slate-800">Lunes a Viernes: 09:00 - 19:00</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-7 glass-panel p-10 md:p-14 rounded-3xl relative">
          <h2 className="text-3xl font-display font-bold dark:text-white text-slate-900 mb-10">Solicitud de Audiencia</h2>
          
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col gap-3">
              <label className="dark:text-white/40 text-slate-400 text-[11px] uppercase font-bold tracking-widest">Nombre Completo</label>
              <input required className="bg-slate-50 dark:bg-white/5 border dark:border-white/10 border-slate-200 rounded-2xl h-14 px-5 dark:text-white text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="Sr./Sra. Nombre" />
            </div>
            
            <div className="flex flex-col gap-3">
              <label className="dark:text-white/40 text-slate-400 text-[11px] uppercase font-bold tracking-widest">Email Corporativo</label>
              <input required type="email" className="bg-slate-50 dark:bg-white/5 border dark:border-white/10 border-slate-200 rounded-2xl h-14 px-5 dark:text-white text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all" placeholder="email@compañia.es" />
            </div>

            <div className="flex flex-col gap-3 md:col-span-2">
              <label className="dark:text-white/40 text-slate-400 text-[11px] uppercase font-bold tracking-widest">Detalles de la Consulta</label>
              <textarea required className="bg-slate-50 dark:bg-white/5 border dark:border-white/10 border-slate-200 rounded-2xl p-6 dark:text-white text-slate-800 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all min-h-[160px]" placeholder="Breve descripción de su necesidad patrimonial..."></textarea>
            </div>

            <div className="md:col-span-2 pt-6">
              <button type="submit" className="w-full bg-primary text-white font-bold py-5 rounded-2xl uppercase tracking-[0.2em] text-sm hover:bg-primary/90 transition-all shadow-2xl shadow-primary/30 active:scale-[0.98]">
                Enviar Mensaje Confidencial
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Map visualization - Focused on Madrid */}
      <div className="max-w-[1200px] w-full mt-20 rounded-[40px] h-[450px] overflow-hidden relative glass-panel border dark:border-white/10 border-slate-200 shadow-inner">
        <div 
          className="absolute inset-0 grayscale contrast-125 dark:opacity-40 opacity-80" 
          style={{ 
            backgroundImage: "url('https://images.unsplash.com/photo-1543783232-f79f0c679b0e?auto=format&fit=crop&q=80&w=1200')",
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }} 
        />
        <div className="absolute inset-0 bg-gradient-to-t dark:from-background-dark from-white/95 via-transparent"></div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
           <div className="bg-primary text-white px-8 py-3 rounded-full font-black text-sm tracking-widest uppercase shadow-2xl animate-bounce">
            Lexxban Madrid
          </div>
          <p className="text-[10px] font-bold uppercase tracking-widest text-slate-500 dark:text-white/40">Torre de Cristal, Paseo de la Castellana</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
