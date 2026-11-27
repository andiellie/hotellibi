# HotelliBI — Landing

Sitio de marketing de HotelliBI, plataforma de inteligencia comercial para hoteles.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind CSS v4 · Vercel.

## Comandos

```bash
npm run dev     # servidor de desarrollo (http://localhost:3000)
npm run build   # build de producción
npm run lint    # ESLint
npx tsc --noEmit  # typecheck (no hay script dedicado)
```

> Corré un solo `npm run dev` por proyecto. Dos servidores (o `dev` + `build`) escribiendo en `.next` a la vez corrompen la caché y producen errores como `invariant expected layout router to be mounted`. Si pasa: detené todo, borrá `.next` y volvé a levantar.

No hay tests automatizados.

## Estructura

```
app/                      Rutas (App Router)
  layout.tsx              Layout raíz: fuentes, metadata, LanguageProvider
  page.tsx                Home: compone las secciones en orden
  globals.css             Tokens de diseño (@theme) y estilos globales
  legal/
    page.tsx
    _components/          Componentes usados solo por /legal
  design-system/
    page.tsx              Página interna de referencia visual
    _components/          Previews usados solo por /design-system
components/
  layout/                 NavBar, Footer
  ui/                     Componentes visuales reutilizables (LinearButton)
  sections/               Secciones del home
    benefits/             Sección "Toda la información…" + tarjetas BenefitsHover
    clients/              Sección de clientes + carrusel de logos
hooks/                    Hooks reutilizables (useScrollReveal)
lib/
  i18n/                   LanguageProvider + translations (es / en)
  fonts.ts                Fuentes de next/font
  utils.ts                cn() — clsx + tailwind-merge
public/                   Imágenes, logos, fuentes locales, sitemap.xml
docs/                     Documentación de diseño y sitemap
```

## Convenciones

- **Ubicación:** un componente usado por una sola ruta vive en `app/<ruta>/_components/`. Si lo usa el home o más de una ruta, va en `components/`. Una sección con subcomponentes propios tiene su carpeta en `components/sections/<seccion>/`.
- **Nombres:** componentes en PascalCase (`Hero.tsx`), hooks en camelCase con prefijo `use`.
- **Imports:** alias `@/` desde la raíz del proyecto. Imports relativos solo dentro de la misma carpeta.
- **Textos:** todo el copy visible pasa por `lib/i18n/translations.ts` y se lee con `useLanguage()`.
- **Estilos:** Tailwind con los tokens de `app/globals.css`. CSS Modules solo para componentes con animaciones complejas (`BenefitsHover`).
- **Layout:** cada sección usa `px-gutter` (margen lateral) y `max-w-site` (ancho de contenido, 912px), las dos definidas en `globals.css`. Una sección nueva tiene que usarlas para quedar alineada con el resto.

## Agregar una sección al home

1. Creá `components/sections/MiSeccion.tsx` con `<section className="px-gutter py-24 sm:py-32">` y un contenedor `mx-auto max-w-site`.
2. Agregá sus textos en `translations.ts`, en `es` y en `en`.
3. Importala en `app/page.tsx` en el lugar que corresponda.
