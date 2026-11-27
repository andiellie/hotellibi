'use client'

import Link from 'next/link'
import { Days_One } from 'next/font/google'
import { Globe, ArrowUpRight } from 'lucide-react'

// Logotipo real del design system HotelliBI: fuente "Days One", #F8F5F5.
// Si tu proyecto ya carga fuentes centralizado en layout.tsx, movela ahí
// y pasala como className/variable en vez de instanciarla acá.
const daysOne = Days_One({
  subsets: ['latin'],
  weight: '400',
})

const navLinks = [
  { label: 'Features', href: '#features' },
  { label: 'Integraciones', href: '#integraciones' },
  { label: 'Agenda una DEMO', href: '#demo' },
]

export default function NavbarV2Preview() {
  return (
    <div className="relative flex h-[120px] w-full items-start justify-center overflow-hidden rounded-pillar-card bg-navy-deepest pt-4">
      <nav
        className="
          relative flex w-full max-w-6xl items-center justify-between
          gap-6 rounded-full border border-white/10
          bg-[#333333]/90 px-6 py-3 backdrop-blur-xl
          shadow-[inset_1px_1px_0px_-0.5px_#333,inset_-1px_-1px_0px_-0.5px_#262626,inset_0px_0px_16px_0px_rgba(242,242,242,0.15)]
        "
      >
        {/* Left: nav links */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link, i) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  i === 0
                    ? 'text-sm font-semibold tracking-[-0.6px] text-[#f8f5f5]'
                    : 'text-sm font-normal tracking-[-0.6px] text-white/70 transition-colors hover:text-white'
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Center: logo (texto real, no imagen — fuente "Days One") */}
        <Link
          href="/"
          className={`${daysOne.className} absolute left-1/2 -translate-x-1/2 text-[28px] leading-none tracking-[-0.42px] text-[#F8F5F5]`}
        >
          hotelliBI
        </Link>

        {/* Right: language + CTA */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            ES
            <Globe className="size-4" strokeWidth={1.5} />
          </button>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-full bg-white/[0.06] px-4 py-2 text-sm text-white/70 transition-colors hover:text-white"
          >
            Log In Socios
            <ArrowUpRight className="size-3.5" strokeWidth={1.5} />
          </Link>
        </div>
      </nav>
    </div>
  )
}
