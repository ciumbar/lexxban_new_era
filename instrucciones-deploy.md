
# Instrucciones de Despliegue - Lexxban CRM & Landing

Este documento detalla los pasos para poner en producción la aplicación Lexxban con integración de Supabase.

## 1. Configuración de Supabase (Backend CRM)
1. Ve a [supabase.com](https://supabase.com) y crea un nuevo proyecto llamado `Lexxban-CRM`.
2. En el **SQL Editor**, ejecuta el siguiente script para crear la tabla de leads:
```sql
create table leads_hipotecarios (
  id uuid default gen_random_uuid() primary key,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null,
  nombre text,
  email text,
  telefono text,
  valor_vivienda numeric,
  ahorro_aportado numeric,
  ingresos_mensuales numeric,
  situacion_laboral text,
  score_cualificacion text,
  estado text default 'nuevo'
);
```
3. Ve a **Project Settings > API** y copia la `URL` y la `anon key`.

## 2. Preparación en VS Code (Local)
1. Abre tu terminal en la raíz del proyecto.
2. Crea un archivo `.env` y añade:
```env
VITE_SUPABASE_URL=tu_url_aqui
VITE_SUPABASE_ANON_KEY=tu_key_aqui
```

## 3. Despliegue en Vercel
1. Sube tu código a un repositorio privado en **GitHub**.
2. Conecta el repositorio en [vercel.com](https://vercel.com).
3. En la sección **Environment Variables** de Vercel, añade las mismas variables:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
4. Haz clic en **Deploy**.

## 4. Gestión del CRM
- Puedes ver todos los leads directamente en el panel de **Table Editor** en Supabase.
- Puedes configurar **Webhooks** en Supabase para recibir notificaciones por email cada vez que entre un nuevo lead cualificado.

---
*Lexxban System - 2024*
