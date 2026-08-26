'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'

const RECORDING_SRC = encodeURI('/images/Home/Grabación 2026-08-25 112432.gif')

export default function DashboardPreview() {
  const { t } = useLanguage()
  const d = t.dashboard

  return (
    <section id="integraciones" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-12">
          <h2 className="font-display font-normal text-4xl tracking-tight text-on-dark-primary sm:text-5xl lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]">{d.heading}</h2>
          <p className="mt-5 font-sans text-lg text-on-dark-secondary">{d.subheading}</p>
        </div>
        <div className="dashboard-frame overflow-hidden rounded-pillar-card">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={RECORDING_SRC} alt="" className="w-full" />
        </div>
      </div>
    </section>
  )
}
