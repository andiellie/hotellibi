'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

type TestimonialProps = {
  which?: 'testimonial' | 'testimonial2'
  id?: string
}

export default function Testimonial({ which = 'testimonial', id = 'testimonios' }: TestimonialProps) {
  const { t } = useLanguage()
  const testimonial = t[which]
  const starsRef = useRef<HTMLDivElement>(null)
  const [starsVisible, setStarsVisible] = useState(false)
  const [hoverBurst, setHoverBurst] = useState(0)

  useEffect(() => {
    const el = starsRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id={id} className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl rounded-pillar-card p-8 sm:p-10">
        <div
          ref={starsRef}
          className="flex gap-1 text-amber-400"
          aria-hidden="true"
          onMouseEnter={() => starsVisible && setHoverBurst((n) => n + 1)}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <svg
              key={`${i}-${hoverBurst}`}
              viewBox="0 0 20 20"
              width="20"
              height="20"
              fill="currentColor"
              className={hoverBurst > 0 ? 'animate-star-drop-from-below' : 'transition-all'}
              style={
                hoverBurst > 0
                  ? { animationDelay: `${(4 - i) * 80}ms` }
                  : {
                      transitionDuration: '750ms',
                      transitionTimingFunction: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
                      transitionDelay: `${i * 80}ms`,
                      opacity: starsVisible ? 1 : 0,
                      transform: starsVisible ? 'translateY(0)' : 'translateY(-14px)',
                    }
              }
            >
              <path d="M10 1.5l2.6 5.27 5.82.85-4.21 4.1.99 5.8L10 14.9l-5.2 2.62.99-5.8-4.21-4.1 5.82-.85z" />
            </svg>
          ))}
        </div>

        <p className="mt-5 font-sans leading-7 text-on-dark-secondary">
          {testimonial.quote}
        </p>

        <div className="mt-6 flex items-center gap-3">
          <span
            aria-hidden="true"
            className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#00033C] text-white"
          >
            <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true">
              <circle cx="12" cy="8" r="4" />
              <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7v1H4v-1Z" />
            </svg>
          </span>
          <div>
            <p className="font-sans font-bold text-on-dark-primary">{testimonial.name}</p>
            <p className="font-sans text-sm text-on-dark-secondary">{testimonial.role}</p>
          </div>
        </div>
      </div>
    </section>
  )
}
