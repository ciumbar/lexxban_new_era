
import React, { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase.ts';

interface Lead {
  id: string;
  created_at: string;
  nombre: string;
  email: string;
  telefono: string;
  valor_vivienda: number;
  ahorro_aportado: number;
  ingresos_mensuales: number;
  situacion_laboral: string;
  score_cualificacion: string;
  estado: string;
}

const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLead, setSelectedLead] = useState<Lead | null>(null);

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads = async () => {
    setLoading(true);
    try {
      if (supabase && typeof supabase.from === 'function') {
        const { data, error } = await supabase
          .from('leads_hipotecarios')
          .select('*')
          .order('created_at', { ascending: false });
        
        if (!error && data) {
          setLeads(data);
        }
      }
    } catch (e) {
      console.error('Error fetching leads:', e);
    }
    setLoading(false);
  };

  const updateLeadStatus = async (leadId: string, newStatus: string) => {
    try {
      if (supabase && typeof supabase.from === 'function') {
        const { error } = await supabase
          .from('leads_hipotecarios')
          .update({ estado: newStatus })
          .eq('id', leadId);
        
        if (!error) {
          fetchLeads();
          setSelectedLead(null);
        }
      }
    } catch (e) {
      console.error('Error updating lead:', e);
    }
  };

  const filteredLeads = leads.filter(lead => {
    const matchesFilter = filter === 'all' || lead.estado === filter;
    const matchesSearch = !searchTerm || 
      lead.nombre?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      lead.telefono?.includes(searchTerm);
    return matchesFilter && matchesSearch;
  });

  const stats = {
    total: leads.length,
    nuevo: leads.filter(l => l.estado === 'nuevo').length,
    contactado: leads.filter(l => l.estado === 'contactado').length,
    analizando: leads.filter(l => l.estado === 'analizando').length,
    cerrado: leads.filter(l => l.estado === 'cerrado').length,
    alto: leads.filter(l => l.score_cualificacion === 'Alto').length,
    medio: leads.filter(l => l.score_cualificacion === 'Medio').length,
    bajo: leads.filter(l => l.score_cualificacion === 'Bajo').length,
  };

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'nuevo': return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
      case 'contactado': return 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30';
      case 'analizando': return 'bg-purple-500/20 text-purple-400 border-purple-500/30';
      case 'cerrado': return 'bg-green-500/20 text-green-400 border-green-500/30';
      default: return 'bg-slate-500/20 text-slate-400 border-slate-500/30';
    }
  };

  const getScoreColor = (score: string) => {
    switch(score) {
      case 'Alto': return 'text-green-400';
      case 'Medio': return 'text-yellow-400';
      case 'Bajo': return 'text-red-400';
      default: return 'text-slate-400';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white p-6 md:p-10">
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-display font-black text-white mb-2">
              CRM Admin Panel
            </h1>
            <p className="text-white/50 font-light">Gestión de Leads Hipotecarios - Lexxban</p>
          </div>
          <button 
            onClick={fetchLeads}
            className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-8 rounded-xl transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">refresh</span>
            Actualizar
          </button>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Total Leads</p>
            <p className="text-4xl font-black text-primary">{stats.total}</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Nuevos</p>
            <p className="text-4xl font-black text-blue-400">{stats.nuevo}</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">En Proceso</p>
            <p className="text-4xl font-black text-yellow-400">{stats.contactado + stats.analizando}</p>
          </div>
          <div className="glass-panel p-6 rounded-2xl border border-white/10">
            <p className="text-white/40 text-xs uppercase tracking-widest font-bold mb-2">Cerrados</p>
            <p className="text-4xl font-black text-green-400">{stats.cerrado}</p>
          </div>
        </div>

        {/* Qualification Distribution */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 mb-8">
          <h3 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Distribución por Score</h3>
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-black text-green-400">{stats.alto}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Alto</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-yellow-400">{stats.medio}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Medio</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-black text-red-400">{stats.bajo}</p>
              <p className="text-white/40 text-xs uppercase tracking-widest mt-1">Bajo</p>
            </div>
          </div>
        </div>

        {/* Filters and Search */}
        <div className="glass-panel p-6 rounded-2xl border border-white/10 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                placeholder="Buscar por nombre, email o teléfono..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl h-12 px-5 text-white placeholder:text-white/30 focus:border-primary focus:ring-1 focus:ring-primary outline-none"
              />
            </div>
            <div className="flex gap-2 flex-wrap">
              {['all', 'nuevo', 'contactado', 'analizando', 'cerrado'].map(status => (
                <button
                  key={status}
                  onClick={() => setFilter(status)}
                  className={`px-6 py-2 rounded-lg font-bold text-xs uppercase tracking-widest transition-all ${
                    filter === status 
                      ? 'bg-primary text-white' 
                      : 'bg-white/5 text-white/40 hover:bg-white/10'
                  }`}
                >
                  {status === 'all' ? 'Todos' : status}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Leads Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="size-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white/50">Cargando leads...</p>
          </div>
        ) : filteredLeads.length === 0 ? (
          <div className="glass-panel p-20 rounded-2xl text-center border border-white/10">
            <span className="material-symbols-outlined text-6xl text-white/20 mb-4">search_off</span>
            <p className="text-white/50 text-lg">No se encontraron leads</p>
          </div>
        ) : (
          <div className="space-y-4">
            {filteredLeads.map(lead => (
              <div 
                key={lead.id}
                className="glass-panel p-6 rounded-2xl border border-white/10 hover:border-primary/30 transition-all cursor-pointer"
                onClick={() => setSelectedLead(lead)}
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-white">{lead.nombre || 'Sin nombre'}</h3>
                      <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest border ${getStatusColor(lead.estado)}`}>
                        {lead.estado}
                      </span>
                      <span className={`text-sm font-bold uppercase tracking-widest ${getScoreColor(lead.score_cualificacion)}`}>
                        Score: {lead.score_cualificacion}
                      </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-white/50">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">email</span>
                        {lead.email || 'N/A'}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">call</span>
                        {lead.telefono || 'N/A'}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-base">schedule</span>
                        {new Date(lead.created_at).toLocaleDateString('es-ES')}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <p className="text-2xl font-black text-primary">
                      {lead.valor_vivienda?.toLocaleString()}€
                    </p>
                    <p className="text-xs text-white/40 uppercase tracking-widest">
                      Ahorro: {lead.ahorro_aportado?.toLocaleString()}€
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Lead Detail Modal */}
      {selectedLead && (
        <div 
          className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center p-6 z-50"
          onClick={() => setSelectedLead(null)}
        >
          <div 
            className="glass-panel max-w-2xl w-full p-8 rounded-3xl border border-white/20 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-start mb-6">
              <h2 className="text-3xl font-display font-black text-white">Detalle del Lead</h2>
              <button 
                onClick={() => setSelectedLead(null)}
                className="size-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-all"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-6">
              {/* Personal Info */}
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Información Personal</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Nombre</p>
                    <p className="text-white font-bold">{selectedLead.nombre || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Email</p>
                    <p className="text-white font-bold">{selectedLead.email || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Teléfono</p>
                    <p className="text-white font-bold">{selectedLead.telefono || 'N/A'}</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Fecha</p>
                    <p className="text-white font-bold">{new Date(selectedLead.created_at).toLocaleString('es-ES')}</p>
                  </div>
                </div>
              </div>

              {/* Financial Info */}
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Información Financiera</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Valor Vivienda</p>
                    <p className="text-white font-bold text-2xl">{selectedLead.valor_vivienda?.toLocaleString()}€</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Ahorro Aportado</p>
                    <p className="text-white font-bold text-2xl">{selectedLead.ahorro_aportado?.toLocaleString()}€</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Ingresos Mensuales</p>
                    <p className="text-white font-bold text-xl">{selectedLead.ingresos_mensuales?.toLocaleString()}€/mes</p>
                  </div>
                  <div>
                    <p className="text-white/40 text-xs uppercase tracking-widest mb-1">Situación Laboral</p>
                    <p className="text-white font-bold capitalize">{selectedLead.situacion_laboral || 'N/A'}</p>
                  </div>
                </div>
              </div>

              {/* Qualification */}
              <div className="border-b border-white/10 pb-6">
                <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Cualificación</h3>
                <div className="flex items-center gap-4">
                  <p className="text-white/40 text-sm">Score de Viabilidad:</p>
                  <p className={`text-3xl font-black uppercase tracking-widest ${getScoreColor(selectedLead.score_cualificacion)}`}>
                    {selectedLead.score_cualificacion}
                  </p>
                </div>
              </div>

              {/* Status Update */}
              <div>
                <h3 className="text-primary font-bold uppercase tracking-widest text-xs mb-4">Actualizar Estado</h3>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {['nuevo', 'contactado', 'analizando', 'cerrado'].map(status => (
                    <button
                      key={status}
                      onClick={() => updateLeadStatus(selectedLead.id, status)}
                      className={`py-3 px-4 rounded-xl font-bold text-xs uppercase tracking-widest transition-all border ${
                        selectedLead.estado === status
                          ? getStatusColor(status)
                          : 'bg-white/5 border-white/10 text-white/40 hover:bg-white/10'
                      }`}
                    >
                      {status}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminDashboard;
