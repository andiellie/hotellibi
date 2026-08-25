'use client'

import LinearButton from './LinearButton'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section id="hero" className="px-5 pb-24 pt-36 text-center sm:pt-52">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-[72px] lg:leading-[80px] lg:tracking-[-3.6px]">{t.hero.title}</h1>
        <p className="mx-auto mt-8 max-w-3xl font-sans text-lg leading-8 text-on-dark-secondary sm:text-xl">{t.hero.subtitle}</p>
        <LinearButton href="#demo" className="mt-12">{t.hero.cta}</LinearButton>
      </div>
    </section>
  )
}
