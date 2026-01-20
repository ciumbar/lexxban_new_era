
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar.tsx';
import Footer from './components/Footer.tsx';
import Home from './pages/Home.tsx';
import Services from './pages/Services.tsx';
import Vision from './pages/Vision.tsx';
import Contact from './pages/Contact.tsx';
import AdminLogin from './pages/AdminLogin.tsx';
import AdminDashboard from './pages/AdminDashboard.tsx';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    try {
      const saved = localStorage.getItem('theme');
      return saved ? saved === 'dark' : true;
    } catch (e) {
      return true;
    }
  });

  const [showAdmin, setShowAdmin] = useState(false);
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(() => {
    try {
      return localStorage.getItem('lexxban_admin_auth') === 'true';
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    // Check URL hash for admin access
    if (window.location.hash === '#admin') {
      setShowAdmin(true);
    }

    const handleHashChange = () => {
      if (window.location.hash === '#admin') {
        setShowAdmin(true);
      } else {
        setShowAdmin(false);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  const handleAdminLogin = () => {
    setIsAdminAuthenticated(true);
  };

  const handleAdminLogout = () => {
    localStorage.removeItem('lexxban_admin_auth');
    setIsAdminAuthenticated(false);
    window.location.hash = '';
    setShowAdmin(false);
  };

  // Show admin interface if accessed via #admin
  if (showAdmin) {
    if (!isAdminAuthenticated) {
      return <AdminLogin onLogin={handleAdminLogin} />;
    }
    return (
      <div className="min-h-screen">
        <div className="bg-slate-900 border-b border-white/10 px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary text-2xl">admin_panel_settings</span>
            <span className="text-white font-bold">Modo Administrador</span>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => { window.location.hash = ''; setShowAdmin(false); }}
              className="text-white/60 hover:text-white font-bold text-sm transition-all"
            >
              Ver Sitio Web
            </button>
            <button
              onClick={handleAdminLogout}
              className="bg-red-500/20 text-red-400 hover:bg-red-500/30 font-bold py-2 px-6 rounded-lg text-sm transition-all"
            >
              Cerrar Sesión
            </button>
          </div>
        </div>
        <AdminDashboard />
      </div>
    );
  }

  return (
    <div className={`min-h-screen flex flex-col relative transition-colors duration-500 ${isDarkMode ? 'text-white' : 'text-slate-900'}`}>
      {/* Background Orbs */}
      <div className="glowing-orb w-[600px] h-[600px] bg-primary top-[-10%] left-[-10%]" />
      <div className="glowing-orb w-[500px] h-[500px] bg-blue-900/50 bottom-[-10%] right-[-10%]" />
      
      <Navbar 
        isDarkMode={isDarkMode} 
        onToggleTheme={toggleTheme} 
      />
      
      <main className="flex-grow pt-24">
        <section id="home" className="relative">
          <Home />
        </section>
        
        <section id="services" className="relative py-12">
          <Services />
        </section>
        
        <section id="vision" className="relative py-12">
          <Vision />
        </section>
        
        <section id="contact" className="relative py-12">
          <Contact />
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
