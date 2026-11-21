'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

type Tab = 'privacidad' | 'terminos'

export default function LegalTabs() {
  const { t } = useLanguage()
  const searchParams = useSearchParams()
  const initialTab: Tab = searchParams.get('tab') === 'terminos' ? 'terminos' : 'privacidad'
  const [tab, setTab] = useState<Tab>(initialTab)
  const l = t.legalPage

  const tabButtonClass = (target: Tab) =>
    `rounded-pillar-card border px-5 py-2.5 font-sans text-sm font-semibold transition ${
      tab === target
        ? 'border-white/30 bg-white/10 text-white'
        : 'border-white/15 text-on-dark-secondary hover:border-white/30 hover:text-white'
    }`

  const title = tab === 'privacidad' ? l.privacyTitle : l.termsTitle
  const updated = tab === 'privacidad' ? l.privacyUpdated : l.termsUpdated
  const body = tab === 'privacidad' ? l.privacyBody : l.termsBody

  return (
    <div className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
      <div className="flex flex-wrap gap-3">
        <button type="button" onClick={() => setTab('privacidad')} className={tabButtonClass('privacidad')}>
          {l.privacyTab}
        </button>
        <button type="button" onClick={() => setTab('terminos')} className={tabButtonClass('terminos')}>
          {l.termsTab}
        </button>
      </div>

      <h1 className="mt-10 font-display text-4xl font-medium tracking-tight text-on-dark-primary sm:text-5xl">
        {title}
      </h1>
      <p className="mt-3 font-sans text-sm text-on-dark-muted">{updated}</p>

      <div className="mt-8 space-y-5 font-sans leading-7 text-on-dark-secondary">
        {body.map((paragraph, i) => (
          <p key={i}>{paragraph}</p>
        ))}
      </div>
    </div>
  )
}
