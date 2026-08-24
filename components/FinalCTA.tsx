'use client'

import LinearButton from './LinearButton'

export default function FinalCTA() {
  return (
    <section id="cta" className="px-5 py-28 sm:py-40">
      <div className="mx-auto max-w-6xl">
        <h2 className="max-w-5xl font-display text-5xl font-bold leading-tight tracking-tight text-white sm:text-7xl">
          Lleva la gestión de tu hotel a otro nivel.
        </h2>

        <p className="mx-auto mb-8 mt-6 max-w-2xl font-sans text-lg text-on-dark-secondary">
          Una plataforma visual para tomar decisiones más rápidas y rentables.
        </p>

        <div className="mt-12 text-center">
          <LinearButton href="#demo">Agenda tu Demo</LinearButton>
        </div>

      </div>
    </section>
  )
}
