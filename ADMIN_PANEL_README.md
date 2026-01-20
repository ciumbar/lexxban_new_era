# Panel de Administración CRM - Lexxban

## 📋 Descripción

Panel de administración profesional para gestionar leads hipotecarios capturados a través del sitio web de Lexxban. Diseñado específicamente para el negocio de asesoría financiera y legal de alto patrimonio.

## 🚀 Acceso Rápido

**URL de Acceso**: `https://tu-dominio.com/#admin`

**Credenciales por Defecto**:
- Contraseña: `lexxban2024` o `admin`

## 📊 Características Principales

### 1. Dashboard Analítico
- **Métricas en Tiempo Real**:
  - Total de leads capturados
  - Leads nuevos sin contactar
  - Leads en proceso (contactados + analizando)
  - Leads cerrados
  
- **Distribución por Cualificación**:
  - Leads con score Alto (perfil óptimo)
  - Leads con score Medio (requieren análisis)
  - Leads con score Bajo (riesgo elevado)

### 2. Gestión de Leads

#### Información Capturada
Cada lead incluye:
- **Datos Personales**: Nombre, email, teléfono
- **Datos Financieros**: 
  - Valor de la vivienda deseada
  - Ahorro aportado inicial
  - Ingresos mensuales netos del hogar
  - Situación laboral (indefinido, funcionario, autónomo, otro)
- **Análisis Automático**:
  - Score de cualificación (Alto/Medio/Bajo)
  - Ratio de endeudamiento calculado
  - Porcentaje de financiación

#### Estados del Lead
Workflow completo de seguimiento:

1. **Nuevo**: Lead recién capturado, pendiente de primera revisión
2. **Contactado**: Ya se ha establecido contacto inicial con el cliente
3. **Analizando**: Lead en proceso de evaluación de viabilidad hipotecaria
4. **Cerrado**: Proceso finalizado (exitoso o descartado)

### 3. Herramientas de Búsqueda y Filtrado

- **Filtros por Estado**: Ver leads específicos por su etapa en el funnel
- **Búsqueda Inteligente**: Localiza leads por:
  - Nombre completo
  - Dirección de email
  - Número de teléfono
- **Ordenamiento**: Los leads más recientes aparecen primero

### 4. Vista Detallada de Leads

Modal interactivo con información completa:
- Datos personales y de contacto
- Información financiera detallada
- Fecha y hora de captura
- Score de cualificación con código de color
- Botones de acción rápida para cambiar estado

## 🎯 Flujo de Trabajo Recomendado

### Para Consultores Senior

1. **Revisión Matutina** (09:00):
   - Accede al panel
   - Revisa leads con estado "Nuevo"
   - Prioriza los de score "Alto"

2. **Primer Contacto**:
   - Contacta al lead vía email/teléfono
   - Actualiza estado a "Contactado"
   - Agenda sesión de análisis

3. **Análisis de Viabilidad**:
   - Durante la evaluación, marca como "Analizando"
   - Prepara propuesta hipotecaria
   - Evalúa aprobación bancaria

4. **Cierre**:
   - Al finalizar (exitoso o no), marca como "Cerrado"
   - Documentar resultado en CRM externo si aplica

### Métricas de Conversión

Monitorea constantemente:
- **Tasa de Contacto**: (Contactados / Nuevos) × 100
- **Tasa de Análisis**: (Analizando / Contactados) × 100
- **Tasa de Cierre**: (Cerrados / Total) × 100

## 🔐 Seguridad

### Cambiar Contraseña

**Ubicación**: `pages/AdminLogin.tsx` (línea 13)

```typescript
// Cambiar esta línea:
if (password === 'lexxban2024' || password === 'admin') {
// Por tu contraseña personalizada:
if (password === 'TuContraseñaSegura123!') {
```

### Recomendaciones de Seguridad

Para entornos de producción, considera implementar:
- **Supabase Auth**: Sistema de autenticación robusto con usuarios múltiples
- **Auth0**: Solución enterprise con 2FA y SSO
- **Firebase Auth**: Alternativa con buena integración
- **Row Level Security (RLS)**: Configura políticas en Supabase para proteger datos

### Protección de Datos

- Los datos de leads son confidenciales bajo normativa GDPR
- Asegúrate de tener consentimiento del usuario (incluido en el formulario)
- No compartas credenciales del admin panel
- Usa HTTPS siempre en producción

## 🛠️ Configuración Técnica

### Requisitos
- Node.js 18+
- Cuenta de Supabase (proyecto configurado)
- Variables de entorno configuradas

### Variables de Entorno Necesarias

```env
VITE_SUPABASE_URL=https://tu-proyecto.supabase.co
VITE_SUPABASE_ANON_KEY=tu_anon_key_aqui
```

### Modo Offline / Demo

El panel funciona sin Supabase configurado:
- Muestra interfaz completa
- No carga leads reales
- Útil para demos y desarrollo

## 📱 Responsive Design

El panel está optimizado para:
- **Desktop**: Experiencia completa con tablas expandidas
- **Tablet**: Vista adaptada con cards colapsables
- **Mobile**: Interfaz simplificada para gestión sobre la marcha

## 🎨 Diseño

El admin panel mantiene la identidad visual de Lexxban:
- **Color Primario**: `#1d4e58` (Azul corporativo)
- **Estilo Glass Morphism**: Paneles translúcidos modernos
- **Tipografía**: Epilogue (display), Noto Sans (body)
- **Tema**: Modo oscuro por defecto (profesional y elegante)

## 🔄 Integración con el Sitio Web

### Flujo de Captura de Leads

1. Cliente visita `/#hipoteca`
2. Completa el calculador hipotecario en 3 pasos
3. Lead se guarda automáticamente en Supabase
4. Aparece instantáneamente en el admin panel
5. Consultor recibe notificación (si configurado)

### Tabla Supabase

```sql
-- Estructura de la tabla leads_hipotecarios
id: uuid (primary key)
created_at: timestamp
nombre: text
email: text
telefono: text
valor_vivienda: numeric
ahorro_aportado: numeric
ingresos_mensuales: numeric
situacion_laboral: text
score_cualificacion: text
estado: text (default: 'nuevo')
```

## 🆘 Soporte y Mantenimiento

### Problemas Comunes

**No se muestran los leads**:
- Verifica que las variables de entorno estén configuradas
- Comprueba la conexión a Supabase
- Revisa la consola del navegador para errores

**No puedo actualizar el estado**:
- Verifica permisos en Supabase (RLS policies)
- Asegúrate de tener conexión a internet

**Olvidé la contraseña**:
- Modifica `pages/AdminLogin.tsx` línea 13
- Redespliega la aplicación

## 📈 Mejoras Futuras Recomendadas

1. **Autenticación Multi-Usuario**:
   - Sistema de roles (Admin, Consultor, Visualizador)
   - Múltiples usuarios con credenciales únicas
   
2. **Notificaciones**:
   - Email automático al recibir lead de score "Alto"
   - Alertas de leads sin contactar por 24h+
   
3. **Exportación de Datos**:
   - Exportar leads a CSV/Excel
   - Generar reportes mensuales
   
4. **Integración CRM**:
   - Sincronización con Salesforce
   - Integración con HubSpot
   
5. **Analytics Avanzados**:
   - Gráficos de conversión por tiempo
   - Heatmaps de horarios de mayor captura
   - Análisis de fuentes de tráfico

## 📞 Contacto Técnico

Para soporte técnico o consultas sobre el panel:
- **Repositorio**: GitHub (ciumbar/lexxban_new_era)
- **Documentación**: Ver `instrucciones-deploy.md`

---

**Lexxban Admin Panel v1.0**  
*Sistema CRM Profesional para Asesoría Financiera de Alto Patrimonio*
