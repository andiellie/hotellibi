'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'
import LogoCarousel from './LogoCarousel'

export default function ClientsSection() {
  const { t } = useLanguage()
  return (
    <section id="clientes" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-5 text-center">
        <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
          {t.clients.heading}
        </h2>
      </div>

      <div className="mt-16">
        <LogoCarousel />
      </div>
    </section>
  )
}
