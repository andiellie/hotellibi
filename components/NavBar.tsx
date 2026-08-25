'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function NavBar() {
  const { language, setLanguage, t } = useLanguage()

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  return (
    <nav className="mx-4 mt-4 sm:mx-10 lg:mx-auto lg:mt-6 lg:max-w-5xl site-nav">
      <div className="mx-auto px-5 sm:px-6">
        <div className="flex min-h-[64px] items-center justify-between gap-5">
          <div className="hidden items-center gap-8 font-sans text-[14px] leading-[20px] font-semibold tracking-[0.28px] text-on-dark-secondary md:flex">
            <a href="#features" className="border-b-2 border-white pb-2 text-white">{t.nav.features}</a>
            <a href="#integraciones" className="hover:text-white transition">{t.nav.integrations}</a>
            <a href="#demo" className="hover:text-white transition">{t.nav.demo}</a>
          </div>
          <a href="/" className="shrink-0">
            <Image src="/hotellibi-logo-blanco.svg" alt="hotelliBI" width={143} height={26} priority />
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              onClick={toggleLanguage}
              aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
              className="hidden items-center justify-center gap-1.5 rounded-pillar-card border border-white/15 px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:border-white/30 sm:flex"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
              </svg>
              {language === 'es' ? 'EN' : 'ES'}
            </button>
            <a href="#login" className="rounded-pillar-card border border-white/15 px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:border-white/30">{t.nav.login}</a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-pillar-card bg-brand-blue px-5 py-2.5 font-sans text-sm font-bold text-white transition hover:brightness-110">
              {t.nav.requestAccess}
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
