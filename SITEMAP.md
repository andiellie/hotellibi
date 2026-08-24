# 🗺️ Sitemap - HotelliBI

**Actualizado**: 24 de Agosto, 2026
**Versión**: 1.0

---

## 📊 Estructura General del Sitio

```
hotellibi.vercel.app/
├── / (Home)
│   ├── NavBar (Navegación Principal)
│   ├── Hero (Bienvenida)
│   ├── Features (Características)
│   ├── Testimonials (Testimonios)
│   ├── FAQ (Preguntas Frecuentes)
│   ├── DemoBooking (Reservar Demo)
│   ├── ContactForm (Contacto)
│   ├── FinalCTA (Llamada Final)
│   └── Footer (Pie de Página)
│
└── /design-system (Design System - Referencia Visual)
    ├── Paleta de Colores
    ├── Tipografía
    ├── Componentes
    ├── Botones
    ├── Tarjetas
    └── Formularios
```

---

## 📄 Páginas Principales

### 1. **Home** `/`
**Descripción**: Página de inicio - Presentación completa del servicio

**Secciones**:
- ✅ NavBar - Navegación y CTA
- ✅ Hero - Propuesta de valor principal
- ✅ Features - 6 características clave
- ✅ Testimonials - Testimonios de clientes (3)
- ✅ FAQ - Preguntas frecuentes (6 items)
- ✅ DemoBooking - Formulario para agendar demos
- ✅ ContactForm - Formulario de contacto
- ✅ FinalCTA - Última llamada a la acción
- ✅ Footer - Enlaces y redes sociales

**Meta Tags**:
- Title: "HotelliBI | Gestión Inteligente para Hoteles"
- Description: "Solución integral para gestionar tu hotel con inteligencia"
- Keywords: "hotel, gestión, software, inteligencia"

**Conversiones**:
- Botón: "Comienza Ahora"
- Botón: "Ver Demo"
- Botón: "Agendar Demo"
- Formulario: Contacto
- Formulario: Demo

---

### 2. **Design System** `/design-system`
**Descripción**: Página de referencia con todos los componentes visuales

**Contenido**:
- Paleta de colores completa (20+ colores)
- Tipografía y escalas
- Ejemplos de componentes
- Botones (primario, secundario, texto)
- Tarjetas con variaciones
- Formularios (input, textarea)
- Interacciones y estados

**Uso**: Referencia interna para desarrollo y diseño

---

## 🔗 Enlaces Principales (NavBar)

| Enlace | Destino | Descripción |
|--------|---------|-------------|
| Logo | `/` | Ir al home |
| Features | `#features` | Sección de características |
| Contact | `#contact` | Sección de contacto |
| Demo | `#demo` | Sección de agendamiento |
| Get Started | `/` o modal | CTA principal |

---

## 🎯 Flujos de Usuario Principales

### Flujo 1: Exploración - Conocer el Producto
```
Home
  ↓
Hero (Lee propuesta)
  ↓
Features (Ve características)
  ↓
Testimonials (Conoce casos de éxito)
  ↓
FAQ (Despeja dudas)
  ↓
DemoBooking o ContactForm (Contacta)
```

### Flujo 2: Conversión Rápida
```
Home
  ↓
Hero → Botón "Comienza Ahora"
  ↓
ContactForm
  ↓
Conversión
```

### Flujo 3: Agendar Demostración
```
Home
  ↓
DemoBooking (Reserva directa)
  ↓
Confirmación
  ↓
Email/Notificación
```

---

## 🧩 Componentes Reutilizables

### Componentes de Layout
- **NavBar** - Barra de navegación sticky
- **Hero** - Sección principal con gradiente
- **Section Container** - Contenedor estándar con max-width
- **Footer** - Pie de página con enlaces

### Componentes de Contenido
- **Feature Card** - Tarjeta de característica con icono
- **Testimonial Card** - Tarjeta de testimonio con rating
- **FAQ Item** - Item accordión expandible
- **Button** - Botón (3 variantes: primary, secondary, text)

### Componentes de Formulario
- **Input Field** - Campo de texto
- **Textarea** - Área de texto
- **Select** - Selector desplegable
- **Date Picker** - Selector de fecha
- **Time Picker** - Selector de hora
- **Form Label** - Etiqueta de formulario

---

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px (Tailwind: `sm`)
- **Tablet**: 768px - 1024px (Tailwind: `md`, `lg`)
- **Desktop**: > 1024px (Tailwind: `xl`, `2xl`)

### Cambios por Breakpoint
| Elemento | Mobile | Tablet | Desktop |
|----------|--------|--------|---------|
| NavBar | Colapsado | Expandido | Expandido |
| Hero Layout | 1 columna | 1 columna | 2 columnas |
| Features Grid | 1 col | 2 cols | 3 cols |
| Testimonials Grid | 1 col | 2 cols | 3 cols |
| Footer Grid | 1 col | 2 cols | 4 cols |

---

## 🌙 Dark Mode

Todas las páginas y componentes soportan dark mode usando Tailwind CSS `dark:` prefix

**Esquema de colores Dark**:
- Fondo: #000000 o #111827
- Texto principal: #FFFFFF
- Texto secundario: #9CA3AF
- Bordes: #374151

---

## 🔐 Seguridad y Datos

### Formularios que Recopilan Datos
1. **Demo Booking**
   - Campos: Fecha, Hora, Tipo de demo
   - Envío: Backend/Email

2. **Contact Form**
   - Campos: Nombre, Email, Teléfono, Mensaje
   - Envío: Backend/Email

### Política de Privacidad
- Enlace en footer: `/privacy` (Por crear)
- Cumplimiento: GDPR

### Términos de Servicio
- Enlace en footer: `/terms` (Por crear)

---

## 📊 Métricas y Conversiones

### Eventos Clave a Rastrear
1. **Hero CTA Click** - "Comienza Ahora"
2. **Hero CTA Click** - "Ver Demo"
3. **Demo Booking Submit** - Formulario completado
4. **Contact Form Submit** - Formulario completado
5. **Final CTA Click** - Prueba gratuita
6. **Final CTA Click** - Agendar demo
7. **NavBar CTA** - Get Started
8. **Scroll Depth** - Secciones vistas

### Página de Agradecimiento (Por crear)
- `/thank-you` - Confirmación de envío

---

## 🚀 Futuras Páginas (Roadmap)

- [ ] `/pricing` - Página de precios
- [ ] `/features/[feature-id]` - Detalle de características
- [ ] `/case-studies` - Casos de éxito
- [ ] `/blog` - Blog/recursos
- [ ] `/about` - Sobre nosotros
- [ ] `/team` - Nuestro equipo
- [ ] `/careers` - Trabajar con nosotros
- [ ] `/privacy` - Política de privacidad
- [ ] `/terms` - Términos de servicio
- [ ] `/thank-you` - Página de agradecimiento
- [ ] `/dashboard` - Panel de usuario (después del login)

---

## 📁 Estructura de Carpetas del Proyecto

```
hotellibi/
├── app/
│   ├── page.tsx (Home)
│   ├── design-system/
│   │   └── page.tsx (Design System)
│   ├── layout.tsx (Layout global)
│   └── globals.css
│
├── components/
│   ├── NavBar.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── DemoBooking.tsx
│   ├── ContactForm.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
│
├── lib/
│   ├── colors.ts (Paleta de colores)
│   └── designConfig.ts (Configuración de diseño)
│
├── public/
│   ├── images/ (Imágenes de referencia)
│   └── ...
│
└── DESIGN_SYSTEM.md (Documentación de diseño)
```

---

## 🔗 URLs Importantes

### Producción
- **Sitio**: https://hotellibi.vercel.app
- **Design System**: https://hotellibi.vercel.app/design-system
- **GitHub**: https://github.com/andiellie/hotellibi

### Desarrollo Local
- **Sitio**: http://localhost:3000
- **Design System**: http://localhost:3000/design-system

### Figma
- **Diseño Principal**: https://www.figma.com/design/1103U47ttWWWqnuEO4fYGE/HotelliBI

---

## 📝 SEO y Meta Tags

### Páginas sin meta tags específicos (Por configurar)
- `/pricing` - Title: "Precios | HotelliBI"
- `/about` - Title: "Sobre Nosotros | HotelliBI"
- `/blog` - Title: "Blog | HotelliBI"

### Estructura de Meta Tags General
```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta name="description" content="...">
  <meta name="keywords" content="...">
  
  <!-- Open Graph -->
  <meta property="og:title" content="...">
  <meta property="og:description" content="...">
  <meta property="og:image" content="...">
  <meta property="og:url" content="...">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="...">
  <meta name="twitter:description" content="...">
</head>
```

---

## ✅ Checklist de Completitud

### Página Home
- ✅ NavBar con navegación
- ✅ Hero con CTA
- ✅ Features con 6 items
- ✅ Testimonials con 3 reviews
- ✅ FAQ con 6 preguntas
- ✅ DemoBooking form
- ✅ ContactForm
- ✅ FinalCTA
- ✅ Footer con enlaces

### Design System
- ✅ Paleta de colores
- ✅ Tipografía
- ✅ Componentes visuales
- ✅ Ejemplos interactivos

### Documentación
- ✅ DESIGN_SYSTEM.md
- ✅ DISEÑO_GUARDADO.md
- ✅ Este Sitemap

### Deployment
- ✅ GitHub conectado
- ✅ Vercel configurado
- ✅ Domain (hotellibi.vercel.app)
- ✅ Auto-deploy en push

---

**Última actualización**: 24/08/2024
**Responsable**: Equipo HotelliBI
**Estado**: ✅ Activo
