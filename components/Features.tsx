'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function Features() {
  const { t } = useLanguage()
  const features = t.features.items

  return (
    <section id="features" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]">{t.features.heading}</h2>
          <p className="mt-5 font-sans text-lg text-on-dark-secondary">
            {t.features.subheading}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-h-[300px] rounded-pillar-card border border-slate-700/70 bg-navy-alt/70 p-8 transition hover:-translate-y-1 hover:border-slate-500"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-badge bg-slate-700/70 text-2xl text-icon-blue-gray">{feature.icon}</div>
              <h3 className="mb-4 font-display text-3xl font-normal leading-tight text-white">
                {feature.title}
              </h3>
              <p className="font-sans leading-6 text-on-dark-secondary">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
