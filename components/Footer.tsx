'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  return (
    <footer className="footer-rule flex min-h-screen flex-col justify-center bg-navy-alt px-5 py-14 font-sans text-white sm:px-16">
      <div className="mx-auto w-full max-w-7xl">
        <p className="mb-10 text-sm text-on-dark-muted">{f.rights}</p>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">{f.site}</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="#features" className="transition hover:text-white">{t.nav.features}</a></li>
              <li><a href="#integraciones" className="transition hover:text-white">{t.nav.integrations}</a></li>
              <li><a href="#" className="transition hover:text-white">{f.pricing}</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">{f.contact}</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="mailto:contacto@hotellibi.com" className="transition hover:text-white">contacto@hotellibi.com</a></li>
              <li><a href="tel:+84567823348" className="transition hover:text-white">+84 567823 34</a></li>
              <li><a href="#" className="transition hover:text-white">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">{f.legal}</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="#" className="transition hover:text-white">{f.privacy}</a></li>
              <li><a href="#" className="transition hover:text-white">{f.terms}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-16">
          <Image
            src="/hotellibi-logo-blanco.svg"
            alt="hotelliBI"
            width={640}
            height={118}
            className="h-auto w-full max-w-2xl opacity-90"
          />
          <p className="mt-10 max-w-xl leading-6 text-on-dark-secondary">
            {f.tagline}
          </p>
        </div>
      </div>
    </footer>
  )
}
