'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import AnimatedLogo from '@/components/ui/AnimatedLogo'

const SECTION_IDS = ['features', 'demo']

function GlobeIcon() {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
    </svg>
  )
}

export default function NavBar() {
  const { language, setLanguage, t } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState<string | null>(null)

  const toggleLanguage = () => setLanguage(language === 'es' ? 'en' : 'es')
  const closeMenu = () => setMenuOpen(false)

  const links = [
    { id: 'features', label: t.nav.features },
    { id: 'demo', label: t.nav.demo },
  ]

  // Transparente en el top, liquid glass al hacer scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Sección activa según la posición de scroll.
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

  // Menú mobile: bloquea el scroll del body y cierra con Escape.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpen(false)
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [menuOpen])

  const linkClass = (id: string) =>
    activeSection === id
      ? 'font-semibold text-[#F8F5F5]'
      : 'font-medium text-[#F8F5F5]/50 transition hover:text-[#F8F5F5]'

  const pillButton =
    'items-center justify-center gap-1.5 rounded-pillar-card border border-white/15 px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:border-white/30'

  return (
    <>
      <header className={`site-header ${scrolled ? 'site-header--glass' : ''}`}>
        <nav className="flex h-[70px] items-center justify-between">
          <Link href="/" className="flex shrink-0 items-center">
            <AnimatedLogo />
          </Link>

          {/* Desktop */}
          <div className="hidden items-center gap-8 md:flex">
            <div className="flex items-center gap-8 font-sans text-[14px] leading-[20px] tracking-[0.28px]">
              {links.map(({ id, label }) => (
                <a key={id} href={`#${id}`} className={linkClass(id)}>{label}</a>
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={toggleLanguage}
                aria-label={language === 'es' ? 'Switch to English' : 'Cambiar a Español'}
                className={`flex ${pillButton}`}
              >
                <GlobeIcon />
                {language === 'es' ? 'EN' : 'ES'}
              </button>
              <a href="https://hotellibi.com/login" className={`inline-flex ${pillButton}`}>{t.nav.login}</a>
            </div>
          </div>

          {/* Hamburguesa — mobile */}
          <button
            type="button"
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center text-white md:hidden"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </nav>
      </header>

      {/* Menú mobile — pantalla completa, entra desde la derecha */}
      <div
        id="mobile-menu"
        className={`site-menu md:hidden ${menuOpen ? 'site-menu--open' : ''}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="flex h-[70px] shrink-0 items-center justify-between border-b border-white/10 pl-8 pr-5">
          <Link href="/" onClick={closeMenu} className="flex items-center">
            <Image src="/hotellibi-logo-blanco.svg" alt="hotelliBI" width={143} height={26} />
          </Link>
          <button type="button" onClick={closeMenu} aria-label="Cerrar menú" className="flex h-11 w-11 items-center justify-center text-white">
            <svg viewBox="0 0 22 22" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              <path d="M17 5 5 17M5 5l12 12" />
            </svg>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto pl-8 pr-5 pt-7 font-sans">
          {links.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              onClick={closeMenu}
              className={`block border-b border-white/10 py-5 text-base ${linkClass(id)}`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://hotellibi.com/login"
            className="block border-b border-white/10 py-5 text-base font-medium text-[#F8F5F5]/50 transition hover:text-[#F8F5F5]"
          >
            {t.nav.login}
          </a>
        </div>

        <div className="shrink-0 pb-11 pl-8 pr-5 pt-4">
          <button type="button" onClick={toggleLanguage} className={`flex w-fit ${pillButton}`}>
            <GlobeIcon />
            {language === 'es' ? 'EN' : 'ES'}
          </button>
        </div>
      </div>
    </>
  )
}
