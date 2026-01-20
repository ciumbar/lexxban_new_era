
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto py-20 px-6 border-t border-black/5 dark:border-white/5 bg-slate-50/50 dark:bg-background-dark/80 backdrop-blur-3xl relative z-20">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-16">
        <div className="flex flex-col items-center md:items-start gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 text-primary">
              <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="25" y="45" width="10" height="40" fill="currentColor" />
                <rect x="40" y="30" width="10" height="55" fill="currentColor" />
                <rect x="55" y="15" width="10" height="70" fill="currentColor" />
              </svg>
            </div>
            <span className="text-2xl font-black tracking-tighter uppercase font-display dark:text-white text-primary">LEXXBAN</span>
          </div>
          <p className="dark:text-white/40 text-slate-500 text-sm max-w-[280px] text-center md:text-left leading-relaxed font-light">
            Asesoría jurídica y financiera de élite. Compromiso inquebrantable con la excelencia y la discreción en el mercado nacional.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6">
          <div className="flex flex-col items-center md:items-start gap-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-primary">Navegación</h5>
            <a href="#home" className="text-xs dark:text-white/50 text-slate-600 hover:text-primary transition-colors">Inicio</a>
            <a href="#services" className="text-xs dark:text-white/50 text-slate-600 hover:text-primary transition-colors">Servicios</a>
            <a href="#contact" className="text-xs dark:text-white/50 text-slate-600 hover:text-primary transition-colors">Contacto</a>
          </div>
          <div className="flex flex-col items-center md:items-start gap-4">
            <h5 className="text-[10px] font-black uppercase tracking-widest text-primary">Legal</h5>
            <button className="text-xs dark:text-white/50 text-slate-600 hover:text-primary transition-colors">Privacidad</button>
            <button className="text-xs dark:text-white/50 text-slate-600 hover:text-primary transition-colors">Cookies</button>
            <button className="text-xs dark:text-white/50 text-slate-600 hover:text-primary transition-colors">Aviso Legal</button>
          </div>
        </div>
        
        <div className="flex flex-col items-center md:items-end gap-6">
          <div className="flex gap-5">
            <div className="size-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-base">verified_user</span>
            </div>
            <div className="size-10 rounded-full border border-black/10 dark:border-white/10 flex items-center justify-center text-slate-400 dark:text-white/40 hover:text-primary hover:border-primary transition-all cursor-pointer">
              <span className="material-symbols-outlined text-base">lock</span>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[11px] dark:text-white/30 text-slate-400 uppercase tracking-[0.2em] font-bold">
              © 2024 Lexxban España.
            </p>
            <p className="text-[9px] dark:text-white/10 text-slate-300 uppercase tracking-widest mt-1">
              Torre de Cristal, Madrid.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
