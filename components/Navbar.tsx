
import React from 'react';

interface NavbarProps {
  isDarkMode: boolean;
  onToggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isDarkMode, onToggleTheme }) => {
  const navItems = [
    { label: 'Inicio', href: '#home' },
    { label: 'Servicios', href: '#services' },
    { label: 'Visión', href: '#vision' },
    { label: 'Contacto', href: '#contact' },
  ];

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 w-[calc(100%-48px)] max-w-[1200px] z-50">
      <nav className="glass-panel rounded-full px-4 md:px-8 py-3.5 flex items-center justify-between shadow-xl">
        {/* Logo Section */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="text-primary transition-all duration-500 origin-bottom">
            <svg 
              className="w-10 h-10 group-hover:-translate-y-1 transition-transform duration-500" 
              viewBox="0 0 100 100" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="25" y="45" width="10" height="40" fill="currentColor" className="opacity-40 group-hover:opacity-100 transition-all duration-300" />
              <rect x="40" y="30" width="10" height="55" fill="currentColor" className="opacity-70 group-hover:opacity-100 transition-all duration-500" />
              <rect x="55" y="15" width="10" height="70" fill="currentColor" className="group-hover:scale-y-105 transition-transform duration-700 origin-bottom" />
              <path d="M25 45L40 30L55 15L70 30V85H25V45Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" className="opacity-20" />
            </svg>
          </div>
          <h2 className={`text-2xl font-black uppercase tracking-tighter font-display transition-colors ${isDarkMode ? 'text-white' : 'text-primary'}`}>
            Lexxban
          </h2>
        </a>

        {/* Desktop Nav - Anchors */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-[10px] font-bold uppercase tracking-[0.15em] transition-all duration-300 ${isDarkMode ? 'text-white/40 hover:text-white' : 'text-slate-400 hover:text-primary'}`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button 
            onClick={onToggleTheme}
            className={`p-2 rounded-full transition-all border ${isDarkMode ? 'border-white/10 hover:bg-white/5 text-white/50 hover:text-white' : 'border-slate-200 hover:bg-slate-100 text-slate-400 hover:text-primary'}`}
            title="Cambiar Modo"
          >
            <span className="material-symbols-outlined text-sm">
              {isDarkMode ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
          
          <a 
            href="#contact"
            className="bg-primary hover:bg-primary/90 text-white text-[9px] font-bold px-6 py-2.5 rounded-full transition-all uppercase tracking-widest active:scale-95 shadow-lg shadow-primary/20"
          >
            Contacto
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
