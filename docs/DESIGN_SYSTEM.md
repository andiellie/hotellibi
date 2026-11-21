# HotelliBI Design System

## 📋 Índice
- [Paleta de Colores](#paleta-de-colores)
- [Tipografía](#tipografía)
- [Componentes](#componentes)
- [Espaciado](#espaciado)
- [Sombras](#sombras)
- [Radio de Bordes](#radio-de-bordes)

## 🎨 Paleta de Colores

### Colores Primarios (Azul)
- **Primary-50**: `#EFF6FF` - Muy claro
- **Primary-100**: `#DBEAFE` - Extra claro
- **Primary-200**: `#BFDBFE` - Claro
- **Primary-300**: `#93C5FD` - Semi claro
- **Primary-400**: `#60A5FA` - Medio claro
- **Primary-500**: `#3B82F6` - Estándar
- **Primary-600**: `#2563EB` - Medio
- **Primary-700**: `#1D4ED8` - Oscuro
- **Primary-800**: `#1E40AF` - Muy oscuro (Principal)
- **Primary-900**: `#1E3A8A` - Extra oscuro

### Colores Secundarios (Naranja/Coral)
- **Secondary-50**: `#FFF7ED` - Muy claro
- **Secondary-100**: `#FFEDD5` - Extra claro
- **Secondary-200**: `#FED7AA` - Claro
- **Secondary-300**: `#FDBA74` - Semi claro
- **Secondary-400**: `#FB923C` - Medio claro
- **Secondary-500**: `#F97316` - Estándar
- **Secondary-600**: `#EA580C` - Medio
- **Secondary-700**: `#C2410C` - Oscuro
- **Secondary-800**: `#FF6B5B` - Muy oscuro (Secundario)
- **Secondary-900**: `#E84C3D` - Extra oscuro

### Colores Funcionales
- **Success**: `#10B981` - Verde (Éxito, completado)
- **Error**: `#EF4444` - Rojo (Error, alerta)
- **Warning**: `#F59E0B` - Ámbar (Advertencia)
- **Info**: `#0EA5E9` - Cyan (Información)

### Colores Neutros (Escala de Grises)
- **Gray-50**: `#F9FAFB` - Fondo muy claro
- **Gray-100**: `#F3F4F6` - Fondo claro
- **Gray-200**: `#E5E7EB` - Bordes claros
- **Gray-300**: `#D1D5DB` - Bordes
- **Gray-400**: `#9CA3AF` - Texto terciario claro
- **Gray-500**: `#6B7280` - Texto terciario
- **Gray-600**: `#4B5563` - Texto secundario oscuro
- **Gray-700**: `#374151` - Texto secundario
- **Gray-800**: `#1F2937` - Texto principal oscuro
- **Gray-900**: `#111827` - Fondo oscuro/Negro

### Negro y Blanco
- **Black**: `#000000`
- **White**: `#FFFFFF`

## 📝 Tipografía

### Familia de Fuentes
- **Principal**: Sistema de fuentes por defecto (sans-serif)
- Recomendado: `Segoe UI`, `Roboto`, `Ubuntu`, `system-ui`

### Pesos
- **Regular**: 400
- **Medium**: 500
- **Semibold**: 600
- **Bold**: 700

### Tamaños Recomendados
- **Títulos H1**: 2.25rem (36px) a 3rem (48px)
- **Títulos H2**: 1.875rem (30px) a 2.25rem (36px)
- **Títulos H3**: 1.5rem (24px) a 1.875rem (30px)
- **Textos grandes**: 1.125rem (18px)
- **Textos normales**: 1rem (16px)
- **Textos pequeños**: 0.875rem (14px)
- **Textos mini**: 0.75rem (12px)

## 🧩 Componentes

### Botones

#### Botón Principal
```tsx
<button className="px-8 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition font-medium">
  Acción Principal
</button>
```

#### Botón Secundario
```tsx
<button className="px-8 py-3 border-2 border-primary-800 text-primary-800 rounded-lg hover:bg-primary-50 transition font-medium">
  Acción Secundaria
</button>
```

#### Botón de Texto
```tsx
<button className="text-primary-800 hover:text-primary-900 font-medium transition">
  Enlace de Acción
</button>
```

### Tarjetas
- Fondo: `bg-white dark:bg-gray-800`
- Sombra: `shadow-lg` con hover `hover:shadow-xl`
- Radio: `rounded-xl`
- Padding: `p-8`
- Borde izquierdo (opcional): `border-l-4 border-primary-800`

### Formularios
- Inputs: `border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-2 focus:ring-primary-500`
- Labels: `text-sm font-medium text-gray-700 dark:text-gray-300`
- Placeholder: `text-gray-500 dark:text-gray-400`

## 📏 Espaciado

Basado en Tailwind CSS (4px base):
- **xs**: 0.25rem (4px)
- **sm**: 0.5rem (8px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 2.5rem (40px)
- **3xl**: 3rem (48px)
- **4xl**: 3.5rem (56px)

## 🌑 Sombras

- **Small**: `shadow-md` - Sutil
- **Medium**: `shadow-lg` - Estándar (usado en tarjetas)
- **Large**: `shadow-xl` - Destacado
- **Extra Large**: `shadow-2xl` - Modales y dropdowns

## 🔘 Radio de Bordes

- **Sin radio**: `rounded-none`
- **Pequeño**: `rounded-md` (6px)
- **Medio**: `rounded-lg` (8px)
- **Grande**: `rounded-xl` (12px)
- **Extra grande**: `rounded-2xl` (16px)
- **Redondo**: `rounded-full`

## 🌙 Dark Mode

Todos los componentes soportan dark mode usando:
```tsx
<div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
  Contenido
</div>
```

## 📱 Breakpoints Responsivos

- **Mobile**: `< 768px` (sm)
- **Tablet**: `768px - 1024px` (md, lg)
- **Desktop**: `> 1024px` (xl, 2xl)

Ejemplo:
```tsx
<div className="text-base md:text-lg lg:text-xl">
  Texto responsivo
</div>
```

## ✅ Checklist de Diseño

Antes de publicar cualquier componente:
- [ ] Usar colores de la paleta oficial
- [ ] Mantener consistencia en espaciado
- [ ] Incluir estados hover y active
- [ ] Soportar dark mode
- [ ] Ser responsive
- [ ] Usar transiciones suaves
- [ ] Mantener accesibilidad
- [ ] Seguir la guía de sombras

---

**Última actualización**: 24/08/2024
**Versión**: 1.0
