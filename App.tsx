
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Vision from './pages/Vision';
import Contact from './pages/Contact';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  // Handle Theme Persistence
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

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
        {/* Usamos etiquetas section con IDs únicos para la navegación One-Page */}
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
