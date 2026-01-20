
import React, { useState } from 'react';

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin: React.FC<AdminLoginProps> = ({ onLogin }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple password protection - in production, use proper authentication
    if (password === 'lexxban2024' || password === 'admin') {
      localStorage.setItem('lexxban_admin_auth', 'true');
      onLogin();
    } else {
      setError('Contraseña incorrecta');
      setTimeout(() => setError(''), 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
      <div className="glass-panel max-w-md w-full p-10 rounded-3xl border border-white/20">
        <div className="text-center mb-8">
          <div className="size-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-4xl text-primary">admin_panel_settings</span>
          </div>
          <h1 className="text-3xl font-display font-black text-white mb-2">Admin Panel</h1>
          <p className="text-white/50 text-sm font-light">Lexxban CRM System</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2 block">
              Contraseña de Acceso
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Ingrese la contraseña"
              className="w-full bg-white/5 border border-white/10 rounded-xl h-14 px-5 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none transition-all"
              required
            />
          </div>

          {error && (
            <div className="bg-red-500/20 border border-red-500/30 text-red-400 px-4 py-3 rounded-xl text-sm text-center">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl uppercase tracking-widest text-sm transition-all shadow-2xl shadow-primary/30 active:scale-95"
          >
            Acceder al Panel
          </button>
        </form>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="text-white/30 text-xs">
            Sistema protegido. Solo personal autorizado.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
