'use client'

import Image from 'next/image'

export default function NavBar() {
  return (
    <nav className="mx-4 mt-4 sm:mx-10 lg:mx-12 site-nav">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex min-h-[78px] items-center justify-between gap-5">
          <div className="hidden items-center gap-8 font-sans text-[14px] leading-[20px] font-semibold tracking-[0.28px] text-on-dark-secondary md:flex">
            <a href="#features" className="border-b-2 border-white pb-2 text-white">Features</a>
            <a href="#integraciones" className="hover:text-white transition">Integraciones</a>
            <a href="#demo" className="hover:text-white transition">Agenda una DEMO</a>
          </div>
          <a href="/" className="shrink-0">
            <Image src="/hotellibi-logo-blanco.svg" alt="hotelliBI" width={143} height={26} priority />
          </a>
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              type="button"
              className="hidden items-center gap-1.5 rounded-pillar-card border border-white/15 px-3 py-2 font-sans text-sm font-semibold text-white transition hover:border-white/30 sm:flex"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3c2.5 2.5 3.75 5.5 3.75 9S14.5 18.5 12 21c-2.5-2.5-3.75-5.5-3.75-9S9.5 5.5 12 3Z" />
              </svg>
              EN
              <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                <path d="m6 9 6 6 6-6" />
              </svg>
            </button>
            <a href="#login" className="rounded-pillar-card border border-white/15 px-5 py-2.5 font-sans text-sm font-semibold text-white transition hover:border-white/30">Login</a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-pillar-card bg-brand-blue px-5 py-2.5 font-sans text-sm font-bold text-white transition hover:brightness-110">
              Request access
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
