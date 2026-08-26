'use client'

const LOGO_FILES = [
  'Canning.png',
  'Copia de BENS L´Hôtel Palermo logo blanco.png',
  'Copia de BENS Recoleta Park logo blanco.png',
  'Copia de Blanco_sinfondo_MEDIANO.png',
  'Copia de La Morada positivo.png',
  'Morada Meliquina.png',
  'a.png',
  'fierro.png',
  'ñiken.png',
]

const LOGO_SCALE: Record<string, number> = {
  'Copia de La Morada positivo.png': 1.1,
  'a.png': 1.25,
  'ñiken.png': 1.25,
  'Copia de BENS L´Hôtel Palermo logo blanco.png': 0.65,
  'Copia de BENS Recoleta Park logo blanco.png': 0.65,
}

const LOGOS = LOGO_FILES.map((file) => ({
  src: encodeURI(`/images/Home/carrousel-logo-hoteles/${file}`),
  scale: LOGO_SCALE[file] ?? 1,
}))

export default function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-carousel-track">
        {[...LOGOS, ...LOGOS].map(({ src, scale }, index) => (
          <span key={index} className="logo-carousel-slot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={src}
              alt=""
              className="logo-carousel-logo"
              loading="lazy"
              style={scale !== 1 ? { transform: `scale(${scale})` } : undefined}
            />
          </span>
        ))}
      </div>
    </div>
  )
}
