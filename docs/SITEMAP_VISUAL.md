# 📐 Diagrama Visual del Sitio - HotelliBI

## Estructura Jerárquica Completa

```
┌─────────────────────────────────────────────────────────────┐
│                    HOTELLIBI.VERCEL.APP                      │
└─────────────────────────────────────────────────────────────┘
                              │
                    ┌─────────┴─────────┐
                    │                   │
            ┌───────▼────────┐  ┌──────▼──────────┐
            │    HOME (/)    │  │ DESIGN SYSTEM   │
            │   PRINCIPAL    │  │ (/design-system)│
            └────────┬───────┘  └─────────────────┘
                     │
        ┌────────────┼────────────┬──────────────┬──────────┐
        │            │            │              │          │
   ┌────▼────┐  ┌───▼────┐  ┌───▼───┐  ┌─────▼─┐  ┌─────▼─┐
   │   NAV   │  │  HERO  │  │FEATURES│ │TESTIMONIES │ FAQ │
   │   BAR   │  │SECTION │  │(6 items)│ │ (3 cards)  │(6)  │
   └─────────┘  └────────┘  └────────┘  └──────────┘ └─────┘
        │
        │ (Navegación y CTAs)
        │
   ┌────┴────────────────────────────────────────┐
   │                                              │
┌──▼─────┐  ┌────────────┐  ┌──────────┐  ┌────▼───┐
│ DEMO   │  │  CONTACT   │  │FINAL CTA │  │FOOTER  │
│BOOKING │  │   FORM     │  │  (CTA)   │  │(Links) │
└────────┘  └────────────┘  └──────────┘  └────────┘
```

---

## Flujo de Conversión Principal

```
                    ┌─────────────────┐
                    │ VISITANTE NUEVO │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  HOME PAGE (/)  │
                    └────────┬────────┘
                             │
                ┌────────────┼────────────┐
                │            │            │
        ┌──────▼────┐  ┌────▼─────┐  ┌──▼──────┐
        │ Lee sobre │  │ Ve demos │  │ Duda?  │
        │  producto │  │  o casos │  │ Preguntas
        └──────┬────┘  └────┬─────┘  └──┬──────┘
               │             │           │
        ┌──────▼─────────────▼───────────▼──┐
        │    Convencido de valor?           │
        └──────┬─────────────────────────┬──┘
               │ SÍ                      │ NO
        ┌──────▼───────┐         ┌──────▼─────┐
        │ Demo Booking │         │ Contacto  │
        │   o Signup   │         │   o Blog   │
        └──────┬───────┘         └────┬──────┘
               │                      │
        ┌──────▼──────────────────────▼──┐
        │      CONVERSIÓN COMPLETADA     │
        │   (Lead/Customer Acquired)     │
        └────────────────────────────────┘
```

---

## Mapa de Componentes

```
┌─ HOME (/)
│
├─ [HEADER]
│  ├─ NAVBAR
│  │  ├─ Logo (Link to home)
│  │  ├─ Menu Items
│  │  │  ├─ Features (#features)
│  │  │  ├─ Contact (#contact)
│  │  │  └─ Demo (#demo)
│  │  └─ CTA Button (Get Started)
│  │
│  └─ HERO
│     ├─ Title + Subtitle
│     ├─ CTAs (2 buttons)
│     └─ Stats (100+ hotels, 99.9% uptime)
│
├─ [MAIN CONTENT]
│  ├─ FEATURES SECTION
│  │  ├─ Section Title + Subtitle
│  │  └─ Feature Cards (3x2 Grid)
│  │     ├─ Icon
│  │     ├─ Title
│  │     └─ Description
│  │
│  ├─ TESTIMONIALS SECTION
│  │  ├─ Section Title + Subtitle
│  │  └─ Testimonial Cards (3 Grid)
│  │     ├─ Stars (⭐⭐⭐⭐⭐)
│  │     ├─ Quote
│  │     ├─ Name
│  │     └─ Title/Company
│  │
│  ├─ FAQ SECTION
│  │  ├─ Section Title + Subtitle
│  │  └─ FAQ Accordion (6 items)
│  │     ├─ Question
│  │     └─ Answer (Hidden/Expanded)
│  │
│  ├─ DEMO BOOKING SECTION
│  │  ├─ Section Title + Subtitle
│  │  └─ Form
│  │     ├─ Date Input
│  │     ├─ Time Input
│  │     ├─ Type Dropdown
│  │     └─ Submit Button
│  │
│  ├─ CONTACT FORM SECTION
│  │  ├─ Section Title + Subtitle
│  │  └─ Form
│  │     ├─ Name Input
│  │     ├─ Email Input
│  │     ├─ Phone Input
│  │     ├─ Message Textarea
│  │     └─ Submit Button
│  │
│  └─ FINAL CTA SECTION
│     ├─ Big Title
│     ├─ Subtitle + Stats
│     └─ CTA Buttons (2)
│
└─ [FOOTER]
   ├─ Logo + Description
   ├─ Link Columns (4)
   │  ├─ Product
   │  ├─ Company
   │  └─ Legal
   ├─ Divider
   └─ Copyright + Social Links

┌─ DESIGN-SYSTEM (/design-system)
│
├─ Color Palette Section
│  ├─ Primary Colors (10 shades)
│  ├─ Secondary Colors (10 shades)
│  └─ Functional Colors (4)
│
├─ Typography Section
│  ├─ H1, H2, H3, P, Small examples
│  └─ Font weights
│
├─ Components Section
│  ├─ Button Examples (3 variants)
│  ├─ Card Examples
│  ├─ Input Examples
│  └─ Textarea Example
│
└─ [All with Dark Mode Toggle]
```

---

## Flujo de Datos

```
┌──────────────────┐
│  USER ACTIONS    │
└────────┬─────────┘
         │
    ┌────▼─────┐
    │ FORM FILL│
    └────┬─────┘
         │
    ┌────▼──────────────────┐
    │ API SUBMIT (Backend)  │
    └────┬──────────────────┘
         │
    ┌────▼──────────┐
    │  DATABASE     │
    │  (Email, etc) │
    └────┬──────────┘
         │
    ┌────▼──────────────┐
    │ SEND EMAIL/SMS    │
    │ NOTIFICATION      │
    └────┬──────────────┘
         │
    ┌────▼──────────────┐
    │ SHOW THANK YOU    │
    │ PAGE (/thank-you) │
    └───────────────────┘
```

---

## Navegación Secundaria (Para Futuro)

```
                    HOTELLIBI
                        │
        ┌───────┬───────┼───────┬──────────┐
        │       │       │       │          │
    PRICING  FEATURES ABOUT   BLOG    CAREERS
        │       │       │       │
        ├─ Planes      ├─ Team      ├─ Feature 1
        ├─ FAQ         ├─ Story     ├─ Feature 2
        └─ CTA         ├─ Values    └─ Post N
                       └─ Contact

LEGAL FOOTER:
├─ Privacy Policy
├─ Terms of Service
└─ Security Info
```

---

## Matriz de Conversión

```
┌─────────────────────────────────────────────────────────┐
│  PÁGINA          │  OBJETIVO     │  CTA PRINCIPAL      │
├─────────────────────────────────────────────────────────┤
│  Home (/)        │  Awareness    │  Demo / Contacto    │
│  Pricing         │  Decisión     │  Seleccionar Plan   │
│  Features        │  Evaluación   │  Demo               │
│  Case Studies    │  Confianza    │  Contacto           │
│  About           │  Credibilidad │  Equipo / Contacto  │
│  Blog            │  SEO / Value  │  Demo / Contacto    │
│  Design System   │  Referencia   │  None (Dev only)    │
└─────────────────────────────────────────────────────────┘
```

---

## Arquitectura de URLs

```
Scheme: https://
Domain: hotellibi.vercel.app

ESTRUCTURA:
├─ / (Root)
├─ /pricing (Future)
├─ /features (Future)
├─ /case-studies (Future)
├─ /about (Future)
├─ /blog (Future)
│  ├─ /blog/post-1 (Future)
│  └─ /blog/post-n (Future)
├─ /design-system (Actual)
├─ /thank-you (Future)
├─ /privacy (Future)
├─ /terms (Future)
└─ /dashboard (Futuro - Requiere login)
   ├─ /dashboard/profile
   ├─ /dashboard/settings
   └─ /dashboard/bookings
```

---

## Matriz de Responsividad

```
┌─────────────────────────────────────────────────┐
│ COMPONENTE    │  MOBILE  │  TABLET  │  DESKTOP │
├─────────────────────────────────────────────────┤
│ Navbar        │ Collapsed│ Expanded │ Expanded │
│ Hero Grid     │ 1 col    │ 1 col    │ 2 col    │
│ Features      │ 1 col    │ 2 col    │ 3 col    │
│ Testimonials  │ 1 col    │ 2 col    │ 3 col    │
│ FAQ           │ Full     │ Full     │ Full     │
│ Forms         │ Full     │ Full     │ Full     │
│ Footer        │ 1 col    │ 2 col    │ 4 col    │
└─────────────────────────────────────────────────┘
```

---

**Generado**: 24/08/2024
**Versión**: 1.0
