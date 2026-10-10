'use client'

// Source files are trimmed to their actual content bounding box (plus a small
// uniform margin) so object-fit: contain renders every logo at a consistent,
// comparable size within its slot — no per-file scale hacks needed.
const LOGO_FILES = [
  'Copia de BENS L´Hôtel Palermo logo blanco.png',
  'Copia de Blanco_sinfondo_MEDIANO.png',
  'Copia de La Morada positivo.png',
  'Canning.png',
  'a.png',
  'fierro.png',
  'Copia de BENS Recoleta Park logo blanco.png',
  'ñiken.png',
  'Morada Meliquina.png',
]

const LOGOS = LOGO_FILES.map((file) => ({
  src: encodeURI(`/images/Home/carrousel-logo-hoteles/${file}`),
}))

export default function LogoCarousel() {
  return (
    <div className="logo-carousel">
      <div className="logo-carousel-track">
        {[...LOGOS, ...LOGOS].map(({ src }, index) => (
          <span key={index} className="logo-carousel-slot">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={src} alt="" className="logo-carousel-logo" loading="lazy" />
          </span>
        ))}
      </div>
    </div>
  )
}
