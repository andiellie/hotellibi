'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Testimonial() {
  const { t } = useLanguage()
  const testimonial = t.testimonial

  return (
    <section id="testimonios" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl rounded-pillar-card border border-border-light bg-surface-offwhite p-8 sm:p-10">
        <div className="flex gap-1 text-amber-400" aria-hidden="true">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} viewBox="0 0 20 20" width="20" height="20" fill="currentColor">
              <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
            </svg>
          ))}
        </div>

        <p className="mt-5 font-sans leading-7 text-on-light-secondary">
          {testimonial.quote}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-brand-blue font-display text-base font-semibold text-white"
          >
            {testimonial.initials}
          </span>
          <div>
            <p className="font-sans font-bold text-slate-900">{testimonial.name}</p>
            <p className="font-sans text-sm text-on-light-secondary">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
