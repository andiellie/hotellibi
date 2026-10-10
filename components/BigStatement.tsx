'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function BigStatement() {
  const { t } = useLanguage()
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="flex min-h-screen items-center overflow-hidden px-5">
      <h1
        ref={ref}
        className="mx-auto max-w-[1200px] font-display text-5xl font-medium leading-tight tracking-tight text-on-dark-primary sm:text-7xl"
      >
        <span className={`block ${visible ? 'statement-blur-in' : 'opacity-0'}`}>
          {t.bigStatement.line1}
        </span>
        <span
          className={`block ${visible ? 'statement-blur-in' : 'opacity-0'}`}
          style={{ animationDelay: '200ms' }}
        >
          {t.bigStatement.line2}
        </span>
      </h1>
    </section>
  )
}
