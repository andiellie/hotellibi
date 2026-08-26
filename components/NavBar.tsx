'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

const SECTION_IDS = ['features', 'integraciones', 'demo']

export default function NavBar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const sections = SECTION_IDS
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null)

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting)
        if (visible.length > 0) {
          setActiveSection(visible[0].target.id)
        } else if (window.scrollY < (document.getElementById('features')?.offsetTop ?? Infinity)) {
          setActiveSection(null)
        }
      },
      { rootMargin: '-45% 0px -45% 0px' }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const linkClass = (id: string) =>
    activeSection === id
      ? 'font-semibold text-[#F8F5F5]'
      : 'font-medium text-[#F8F5F5]/50 transition hover:text-[#F8F5F5]'

  const mobileLinkClass = (id: string) =>
    activeSection === id
      ? 'font-semibold text-[#F8F5F5]'
      : 'font-medium text-[#F8F5F5]/50 transition hover:text-[#F8F5F5]'

  return (
    <div
      className="fixed left-1/2 z-50 w-[calc(100%-2rem)] max-w-5xl -translate-x-1/2"
      style={{ top: '20px' }}
    >
      <nav
        className={`animate-fade-slide-up site-nav ${menuOpen ? 'site-nav--menu-open' : ''}`}
        style={{ animationDelay: '0s' }}
      >
        <div className="mx-auto px-5 sm:px-6">
          <div
            className={`flex items-center justify-between gap-5 transition-[min-height] duration-300 ${
              scrolled ? 'min-h-[52px]' : 'min-h-[64px]'
            }`}
          >
            <div className="hidden items-center gap-8 font-sans text-[14px] leading-[20px] tracking-[0.28px] md:flex">
              <a href="#features" className={linkClass('features')}>{t.nav.features}</a>
              <a href="#integraciones" className={linkClass('integraciones')}>{t.nav.integrations}</a>
              <a href="#demo" className={linkClass('demo')}>{t.nav.demo}</a>
            </div>
            <Link href="/" className="shrink-0">
              <Image src="/hotellibi-logo-blanco.svg" alt="hotelliBI" width={143} height={26} priority />
            </Link>
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
              <a href="https://hotellibi.com/login" className="hidden rounded-pillar-card border border-white/15 px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:border-white/30 sm:inline-block">{t.nav.login}</a>
              <button
                type="button"
                onClick={() => setMenuOpen((v) => !v)}
                aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={menuOpen}
                className="flex h-9 w-9 items-center justify-center rounded-pillar-card border border-white/15 text-white transition hover:border-white/30 md:hidden"
              >
                <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true">
                  {menuOpen ? (
                    <path d="M6 6l12 12M18 6L6 18" />
                  ) : (
                    <path d="M4 7h16M4 12h16M4 17h16" />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="flex flex-col gap-4 border-t border-white/10 py-5 font-sans text-sm md:hidden">
              <a href="#features" onClick={() => setMenuOpen(false)} className={mobileLinkClass('features')}>{t.nav.features}</a>
              <a href="#integraciones" onClick={() => setMenuOpen(false)} className={mobileLinkClass('integraciones')}>{t.nav.integrations}</a>
              <a href="#demo" onClick={() => setMenuOpen(false)} className={mobileLinkClass('demo')}>{t.nav.demo}</a>
              <a href="https://hotellibi.com/login" className="font-medium text-[#F8F5F5]/50 transition hover:text-[#F8F5F5]">{t.nav.login}</a>
              <button
                type="button"
                onClick={toggleLanguage}
                className="flex w-fit items-center justify-center gap-1.5 rounded-pillar-card border border-white/15 px-5 py-2.5 text-white transition hover:border-white/30"
              >
                <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
                </svg>
                {language === 'es' ? 'EN' : 'ES'}
              </button>
            </div>
          )}
        </div>
      </nav>
    </div>
  )
}
