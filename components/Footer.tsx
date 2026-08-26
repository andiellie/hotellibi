'use client'

import Image from 'next/image'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Footer() {
  const { t } = useLanguage()
  const f = t.footer
  return (
    <footer className="footer-rule flex min-h-screen flex-col justify-center bg-navy-alt px-5 py-14 font-sans text-white">
      <div className="mx-auto w-full max-w-[1200px]">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">{f.menu}</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="#features" className="transition hover:text-white">{t.nav.features}</a></li>
              <li><a href="#integraciones" className="transition hover:text-white">{t.nav.integrations}</a></li>
              <li><a href="#demo" className="transition hover:text-white">{f.bookDemo}</a></li>
              <li><a href="/legal?tab=privacidad" className="transition hover:text-white">{f.privacy}</a></li>
              <li><a href="/legal?tab=terminos" className="transition hover:text-white">{f.terms}</a></li>
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
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">{f.relatedProducts}</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="https://bens.com.ar" target="_blank" rel="noopener noreferrer" className="transition hover:text-white">{f.bens}</a></li>
              <li><a href="https://hotellibi.com/login" className="transition hover:text-white">{f.partnerAccess}</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <Image
            src="/hotellibi-logo-blanco.svg"
            alt="hotelliBI"
            width={640}
            height={118}
            className="h-auto w-full max-w-2xl opacity-70"
          />
          <p className="mt-10 max-w-xl italic leading-6 text-on-dark-secondary">
            {f.tagline}
          </p>
        </div>

        <p className="mt-16 text-sm text-on-dark-muted opacity-40">{f.rights}</p>
      </div>
    </footer>
  )
}
