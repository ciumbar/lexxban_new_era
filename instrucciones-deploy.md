
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

## 4. Acceso al Panel de Administración CRM

### 4.1 Acceder al Admin Panel
1. Una vez desplegada la aplicación, navega a: `https://tu-dominio.vercel.app/#admin`
2. Ingresa la contraseña de administrador (por defecto: `lexxban2024` o `admin`)
3. El panel mostrará todos los leads capturados desde el calculador hipotecario

### 4.2 Funcionalidades del Admin Panel
- **Dashboard con Métricas**: Visualiza el total de leads, distribución por estado y score de cualificación
- **Gestión de Leads**: 
  - Ver información completa de cada lead (datos personales, financieros y cualificación)
  - Actualizar el estado del lead: Nuevo → Contactado → Analizando → Cerrado
  - Filtrar leads por estado
  - Buscar por nombre, email o teléfono
- **Analytics**: Distribución de leads por score de cualificación (Alto/Medio/Bajo)

### 4.3 Seguridad
- **Cambiar Contraseña**: Para cambiar la contraseña por defecto, modifica el archivo `pages/AdminLogin.tsx` línea 13
- **Recomendación**: En producción, considera implementar un sistema de autenticación más robusto (Auth0, Supabase Auth, etc.)

### 4.4 Workflow Recomendado
1. **Leads Nuevos**: Revisa diariamente los leads con estado "nuevo"
2. **Contactar**: Marca como "contactado" cuando hagas el primer contacto
3. **Análisis**: Cambia a "analizando" durante la evaluación de viabilidad
4. **Cierre**: Marca como "cerrado" cuando se complete el proceso (exitoso o no)

## 5. Gestión Alternativa del CRM
- Si prefieres, puedes ver todos los leads directamente en el panel de **Table Editor** en Supabase
- Puedes configurar **Webhooks** en Supabase para recibir notificaciones por email cada vez que entre un nuevo lead cualificado

## 6. Notas Importantes
- El admin panel funciona completamente offline si Supabase no está configurado (modo demo)
- Los leads se guardan automáticamente en Supabase cuando un usuario completa el calculador hipotecario
- El diseño del admin panel coincide con la identidad visual de Lexxban

---
*Lexxban System - 2024*
