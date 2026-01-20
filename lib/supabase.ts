
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Estas variables se deben configurar en el archivo .env de Vercel/VS Code
const supabaseUrl = (typeof process !== 'undefined' && process.env.VITE_SUPABASE_URL) || '';
const supabaseAnonKey = (typeof process !== 'undefined' && process.env.VITE_SUPABASE_ANON_KEY) || '';

// Solo creamos el cliente si tenemos las credenciales, de lo contrario devolvemos un mock o manejamos el error
export const supabase = (supabaseUrl && supabaseAnonKey) 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : { 
      from: () => ({ 
        insert: async () => ({ error: 'Supabase no configurado' }),
        select: () => ({ error: 'Supabase no configurado' })
      }) 
    };

/**
 * Esquema sugerido para la tabla 'leads_hipotecarios' en Supabase:
 * id: uuid (primary key)
 * created_at: timestamp
 * nombre: text
 * email: text
 * telefono: text
 * valor_vivienda: numeric
 * ahorro_aportado: numeric
 * ingresos_mensuales: numeric
 * situacion_laboral: text (funcionario, indefinido, autonomo, otro)
 * score_cualificacion: text
 * estado: text (nuevo, contactado, analizando, cerrado)
 */
