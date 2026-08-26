'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { useScrollReveal } from '@/lib/useScrollReveal'
import LogoCarousel from './LogoCarousel'

export default function ClientsSection() {
  const { t } = useLanguage()
  const { ref, visible } = useScrollReveal<HTMLHeadingElement>()

  return (
    <section id="clientes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px] px-5 text-center">
        <h2
          ref={ref}
          className={`font-display text-3xl font-medium tracking-tight text-on-dark-primary transition-all duration-700 ease-out sm:text-4xl ${
            visible ? 'translate-y-0 opacity-100' : 'translate-y-6 opacity-0'
          }`}
        >
          {t.clients.heading}
        </h2>
      </div>

      <div className="mt-16">
        <LogoCarousel />
      </div>
    </section>
  )
}
