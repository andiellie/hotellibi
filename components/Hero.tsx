'use client'

import LinearButton from './LinearButton'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="hero" className="px-5 pb-24 pt-36 text-center sm:pt-52">
      <div className="mx-auto max-w-[1200px]">
        <h1
          className="animate-fade-slide-up font-display font-medium text-5xl tracking-tight text-on-dark-primary sm:text-7xl lg:text-[72px] lg:leading-[80px] lg:tracking-[-3.6px]"
          style={{ animationDelay: '0.1s' }}
        >
          {t.hero.title}
        </h1>
        <p
          className="animate-fade-slide-up mx-auto mt-8 max-w-3xl font-sans text-lg leading-8 text-on-dark-secondary sm:text-xl"
          style={{ animationDelay: '0.2s' }}
        >
          {t.hero.subtitle}
        </p>
        <div className="animate-fade-slide-up mt-12" style={{ animationDelay: '0.3s' }}>
          <LinearButton href="#demo">{t.hero.cta}</LinearButton>
        </div>
      </div>
    </section>
  )
}
