
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.39.7';

// Estas variables se deben configurar en el archivo .env de Vercel/VS Code
const supabaseUrl = process.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/**
 * Esquema sugerido para la tabla 'leads' en Supabase:
 * id: uuid (primary key)
 * created_at: timestamp
 * nombre: text
 * email: text
 * telefono: text
 * valor_vivienda: numeric
 * ahorro_aportado: numeric
 * ingresos_mensuales: numeric
 * situacion_laboral: text (funcionario, indefinido, autonomo, otro)
 * score_cualificacion: numeric (calculado por el frontend)
 * estado: text (nuevo, contactado, analizando, cerrado)
 */
