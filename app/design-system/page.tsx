'use client'

import Image from 'next/image'
import Footer2Preview from '@/components/Footer2Preview'
import NavbarV2Preview from '@/components/NavbarV2Preview'

const typography = [
  { name: 'Hero H1', spec: 'Neue Haas Grotesk Text Pro 65 Medium · 72px / 80px · ls -3.6px', example: 'Control Total de tu Hotel.', className: 'font-display font-medium text-white', style: { fontSize: '72px', lineHeight: '80px', letterSpacing: '-3.6px' } },
  { name: 'H2 Sección', spec: 'Neue Haas Grotesk Text Pro 55 Roman · 48px / 56px · ls -0.96px', example: 'Con HotelliBI tienes el control en tus manos.', className: 'font-display font-normal text-white', style: { fontSize: '48px', lineHeight: '56px', letterSpacing: '-0.96px' } },
  { name: 'H3 Card', spec: 'Neue Haas Grotesk Text Pro 55 Roman · 32px / 40px', example: 'Control Total', className: 'font-display font-normal text-white', style: { fontSize: '32px', lineHeight: '40px' } },
  { name: 'Métrica grande', spec: 'Neue Haas Grotesk Text Pro 65 Medium · 32px / 40px · ls -0.32px', example: '78.4%', className: 'font-display font-medium text-white', style: { fontSize: '32px', lineHeight: '40px', letterSpacing: '-0.32px' } },
  { name: 'Card título (dashboard)', spec: 'Neue Haas Grotesk Text Pro 55 Roman · 24px / 32px', example: 'Rendimiento Global', className: 'font-display font-normal text-white', style: { fontSize: '24px', lineHeight: '32px' } },
  { name: 'Body (dashboard/cards)', spec: 'Inter Regular · 16px / 24px', example: 'Monitorea tu hotel de cerca', className: 'font-sans font-normal text-on-dark-secondary', style: { fontSize: '16px', lineHeight: '24px' } },
  { name: 'Subtítulo hero', spec: 'Inter Regular · 18px / 28px', example: 'HotelliBI unifica tus datos', className: 'font-sans font-normal text-on-dark-secondary', style: { fontSize: '18px', lineHeight: '28px' } },
  { name: 'Body / párrafo', spec: 'Inter Regular · 16px / 24px', example: 'Diseñado para ejecutivos que exigen precisión', className: 'font-sans font-normal text-on-dark-secondary', style: { fontSize: '16px', lineHeight: '24px' } },
  { name: 'Botón / CTA', spec: 'Inter Semi Bold · 16px', example: 'Agenda tu Demo', className: 'font-sans font-semibold text-white', style: { fontSize: '16px' } },
  { name: 'Nav link', spec: 'Inter Semi Bold · 14px / 20px · ls 0.28px', example: 'Home', className: 'font-sans font-semibold text-white', style: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.28px' } },
  { name: 'Badge chico', spec: 'Inter Semi Bold · 14px / 20px', example: 'Acceso a clientes', className: 'font-sans font-semibold text-white', style: { fontSize: '14px', lineHeight: '20px' } },
  { name: 'Footer heading', spec: 'Inter Medium · 14px / 20px · ls 0.7px', example: 'CONTACTO Y REDES', className: 'font-sans font-medium text-on-dark-muted', style: { fontSize: '14px', lineHeight: '20px', letterSpacing: '0.7px' } },
  { name: 'Eyebrow / label dashboard', spec: 'Inter Medium · 12px / 16px · ls 0.48px', example: 'YTD 2024', className: 'font-sans font-medium text-accent-red', style: { fontSize: '12px', lineHeight: '16px', letterSpacing: '0.48px' } },
  { name: 'Footer link', spec: 'Inter Medium · 11px / 16px · ls 0.88px', example: 'Integraciones', className: 'font-sans font-medium text-on-dark-secondary', style: { fontSize: '11px', lineHeight: '16px', letterSpacing: '0.88px' } },
]

const colors = [
  { name: 'bg-navy-deepest', hex: '#000510' },
  { name: 'bg-navy-mid', hex: '#141A4E' },
  { name: 'bg-navy-alt', hex: '#080B17' },
  { name: 'bg-near-black', hex: '#0A0A0D' },
  { name: 'brand-blue', hex: '#3141D0' },
  { name: 'accent-red', hex: '#B30205' },
  { name: 'brand-orange', hex: '#E6714B' },
  { name: 'brand-navy-deep', hex: '#00033C' },
  { name: 'text-on-dark-secondary', hex: '#C5C6CC' },
  { name: 'text-on-dark-muted', hex: '#8F9096' },
  { name: 'text-on-light-secondary', hex: '#757575' },
  { name: 'surface-offwhite', hex: '#F8F5F5' },
  { name: 'border-on-dark', hex: '#AFAFAF' },
  { name: 'icon-blue-gray', hex: '#BEC7D8' },
]

const radii = [
  { name: 'Botones ícono', value: '2px' },
  { name: 'Value Pillar Cards', value: '8px' },
  { name: 'Overlays / badges', value: '12px' },
  { name: 'Nav pill', value: '28px' },
  { name: 'Botón CTA (pill)', value: '999px' },
]

export default function DesignSystemPage() {
  return (
    <div className="min-h-screen bg-navy-deepest px-4 py-12 font-sans text-white">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 font-display text-3xl font-bold">Design System — HotelliBI Website</h1>
        <p className="mb-12 max-w-2xl text-sm text-on-dark-secondary">
          Tokens en producción. Tipografías reales: Neue Haas Grotesk Text Pro (display), Inter Variable (UI).
          Fuente de verdad: <code className="text-icon-blue-gray">app/globals.css</code>.
        </p>

        {/* Marca */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-xl font-medium">Marca</h2>
          <div className="flex flex-wrap gap-8">
            <div>
              <div className="flex h-24 w-56 items-center justify-center rounded-pillar-card border border-white/10 bg-navy-alt px-6">
                <Image src="/hotellibi-logo-blanco.svg" alt="hotelliBI" width={143} height={26} />
              </div>
              <p className="mt-2 text-xs text-on-dark-secondary">Logo — blanco (público/hotellibi-logo-blanco.svg)</p>
            </div>
            <div>
              <div className="flex h-24 w-24 items-center justify-center rounded-pillar-card border border-white/10 bg-navy-alt">
                <Image src="/icon.png" alt="Favicon hotelliBI" width={48} height={48} />
              </div>
              <p className="mt-2 text-xs text-on-dark-secondary">Favicon — 64×64 (app/icon.png)</p>
            </div>
          </div>
        </section>

        {/* Tipografía */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-xl font-medium">Tipografía</h2>
          <div className="divide-y divide-white/10 rounded-pillar-card border border-white/10">
            {typography.map((row) => (
              <div key={row.name} className="grid grid-cols-1 gap-2 p-5 md:grid-cols-[220px_1fr]">
                <div>
                  <p className="text-sm font-semibold text-white">{row.name}</p>
                  <p className="text-xs text-on-dark-muted">{row.spec}</p>
                </div>
                <p className={row.className} style={row.style}>{row.example}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Color */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-xl font-medium">Color</h2>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-6">
            {colors.map((c) => (
              <div key={c.name}>
                <div className="h-20 rounded-pillar-card border border-white/10" style={{ backgroundColor: c.hex }} />
                <p className="mt-2 text-xs font-semibold text-white">{c.name}</p>
                <p className="font-mono text-xs text-on-dark-muted">{c.hex}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Corner Radius */}
        <section className="mb-16">
          <h2 className="mb-6 font-display text-xl font-medium">Corner Radius</h2>
          <div className="flex flex-wrap gap-8">
            {radii.map((r) => (
              <div key={r.name} className="text-center">
                <div
                  className="mb-2 h-16 w-16 border border-white/15 bg-white/5"
                  style={{ borderRadius: r.value === '999px' ? '999px' : r.value }}
                />
                <p className="text-xs font-semibold text-white">{r.name}</p>
                <p className="text-xs text-on-dark-muted">{r.value}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Sombras y efectos */}
        <section>
          <h2 className="mb-6 font-display text-xl font-medium">Sombras y efectos</h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-3">
            <div>
              <div className="dashboard-frame h-24 rounded-pillar-card" />
              <p className="mt-2 text-xs text-on-dark-secondary">Dashboard frame — surface-offwhite, border-on-dark, drop shadow 0/25/50 · 25% negro</p>
            </div>
            <div>
              <div className="site-nav flex h-24 items-center justify-center">
                <span className="text-xs text-on-dark-secondary">Glassmorphism</span>
              </div>
              <p className="mt-2 text-xs text-on-dark-secondary">Nav — backdrop-blur(20px) saturate(140%)</p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <a href="#" className="group relative inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-bold text-white">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span
                    className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] motion-reduce:animate-none"
                    style={{ background: 'conic-gradient(from 0deg, transparent 0deg, var(--color-brand-blue) 55deg, #ffffff 90deg, var(--color-brand-blue) 125deg, transparent 190deg, #ff7e15 300deg, transparent 345deg)' }}
                  />
                </span>
                <span className="absolute inset-[2px] rounded-full bg-near-black" />
                <span className="relative z-10">Agenda tu Demo</span>
              </a>
              <p className="mt-2 text-xs text-on-dark-secondary">Glow CTA — rotating brand-blue + orange ring</p>
            </div>
            <div>
              <div className="footer-rule h-24 pt-4">
                <span className="text-xs text-on-dark-secondary">Contenido abajo de la línea</span>
              </div>
              <p className="mt-2 text-xs text-on-dark-secondary">
                .footer-rule — border-top 1px rgba(148,163,184,.18). Retirada temporalmente del footer, guardada acá para reusar.
              </p>
            </div>
            <div>
              <div className="h-24 rounded-pillar-card border border-slate-700/70 p-4">
                <span className="text-xs text-on-dark-secondary">Card de testimonio</span>
              </div>
              <p className="mt-2 text-xs text-on-dark-secondary">
                border-slate-700/70 en rounded-pillar-card — retirado de Testimonial.tsx (ahora sin borde), guardado acá para reusar.
              </p>
            </div>
          </div>
        </section>

        {/* Navbar v2 — concepto, solo preview */}
        <section className="mt-16">
          <h2 className="mb-2 font-display text-xl font-medium">Navbar v2 (concepto — solo preview)</h2>
          <p className="mb-6 max-w-2xl text-sm text-on-dark-secondary">
            Alternativa con glass gris #333333, wordmark &quot;hotelliBI&quot; como texto real centrado (fuente Days One,
            no imagen), links a la izquierda, toggle de idioma + &quot;Log In Socios&quot; a la derecha con íconos
            lucide-react. No implementado en el sitio real — solo este preview.
          </p>
          <NavbarV2Preview />
        </section>

        {/* Footer 2 — concepto, solo preview */}
        <section className="mt-16">
          <h2 className="mb-2 font-display text-xl font-medium">Footer 2 (concepto — solo preview)</h2>
          <p className="mb-6 max-w-2xl text-sm text-on-dark-secondary">
            Inspirado en screen.movie: wordmark &quot;hotelliBI&quot; gigante como watermark de fondo (opacidad ~6%),
            gráfico de barras estilizado con contornos neón (gradiente brand-blue → naranja, mismos colores
            que la CTA &quot;Agenda tu Demo&quot;) que crece al entrar en viewport, y 2–3 links discretos arriba a la
            derecha. Sin columnas tradicionales. No implementado en el sitio real — solo este preview.
          </p>
          <Footer2Preview />
        </section>
      </div>
    </div>
  )
}
