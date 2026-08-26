'use client'

import { useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { useScrollReveal } from '@/lib/useScrollReveal'

export default function DemoBooking() {
  const { t } = useLanguage()
  const d = t.demoBooking
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const [demoData, setDemoData] = useState({
    name: '',
    email: '',
    pms: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDemoData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo booked:', demoData)
    setDemoData({ name: '', email: '', pms: '' })
  }

  return (
    <section id="demo" className="px-5 py-24 sm:py-32">
      <div ref={ref} className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div
          className={`transition-all duration-700 ease-out ${
            visible ? 'translate-x-0 opacity-100' : '-translate-x-8 opacity-0'
          }`}
        >
          <h2 className="font-display text-4xl leading-tight tracking-tight text-on-dark-primary sm:text-5xl">
            <span className="font-medium">{d.titleBold}</span>{' '}
            <span className="font-normal">{d.titleNormal}</span>
          </h2>
          <p className="mt-6 max-w-md font-sans leading-7 text-on-dark-secondary">
            {d.description}
          </p>

          <ul className="mt-8 space-y-4 font-sans">
            {d.checklist.map((item, i) => (
              <li
                key={item}
                className="flex items-start gap-3 text-on-dark-secondary transition-all duration-500 ease-out"
                style={{
                  transitionDelay: `${150 + i * 100}ms`,
                  opacity: visible ? 1 : 0,
                  transform: visible ? 'translateX(0)' : 'translateX(-12px)',
                }}
              >
                <span
                  className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-[#E6714B] text-[#E6714B] transition-transform duration-300 ease-out"
                  style={{
                    transitionDelay: `${150 + i * 100 + 250}ms`,
                    transform: visible ? 'scale(1)' : 'scale(0.5)',
                  }}
                >
                  <svg viewBox="0 0 24 24" width="11" height="11" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter" aria-hidden="true">
                    <path
                      pathLength={100}
                      strokeDasharray={100}
                      d="M4 12l6 6L20 6"
                      style={{
                        strokeDashoffset: visible ? 0 : 100,
                        transition: `stroke-dashoffset 0.4s ease-out ${150 + i * 100 + 350}ms`,
                      }}
                    />
                  </svg>
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div
          className={`relative overflow-hidden rounded-pillar-card p-[2px] transition-all duration-700 ease-out ${
            visible ? 'translate-x-0 opacity-100' : 'translate-x-8 opacity-0'
          }`}
          style={{ transitionDelay: '150ms' }}
        >
          <span className="absolute inset-0 overflow-hidden rounded-pillar-card">
            <span
              className="absolute inset-[-150%] animate-[spin_4s_linear_infinite] motion-reduce:animate-none"
              style={{
                background:
                  'conic-gradient(from 0deg, transparent 0deg, var(--color-brand-blue) 55deg, #ffffff 90deg, var(--color-brand-blue) 125deg, transparent 190deg, #ff7e15 300deg, transparent 345deg)',
              }}
            />
          </span>
          <form onSubmit={handleSubmit} className="dashboard-frame relative rounded-pillar-card !border-0 p-8 text-slate-950 sm:p-10">
            <p className="font-sans italic leading-6 text-on-light-secondary">
              {d.waitlistNote}
            </p>

            <div className="mt-8">
              <label htmlFor="name" className="mb-2 block font-sans text-sm font-medium text-slate-900">
                {d.nameLabel}
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={demoData.name}
                onChange={handleChange}
                required
                placeholder={d.namePlaceholder}
                className="w-full rounded-icon-btn border border-border-light bg-white px-4 py-3 font-sans text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="email" className="mb-2 block font-sans text-sm font-medium text-slate-900">
                {d.emailLabel}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={demoData.email}
                onChange={handleChange}
                required
                placeholder="carlos@hotel.com"
                className="w-full rounded-icon-btn border border-border-light bg-white px-4 py-3 font-sans text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue"
              />
            </div>

            <div className="mt-6">
              <label htmlFor="pms" className="mb-2 block font-sans text-sm font-medium text-slate-900">
                {d.pmsLabel}
              </label>
              <select
                id="pms"
                name="pms"
                value={demoData.pms}
                onChange={handleChange}
                required
                className="w-full rounded-icon-btn border border-border-light bg-white px-4 py-3 font-sans text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue"
              >
                <option value="" disabled>{d.pmsPlaceholder}</option>
                <option value="cloudbeds">Cloudbeds</option>
                <option value="opera">Opera PMS</option>
                <option value="mews">Mews</option>
                <option value="otro">{d.pmsOther}</option>
              </select>
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="w-full rounded-full bg-[#00033C] px-10 py-4 font-sans text-base font-bold text-white transition hover:brightness-110"
              >
                {d.submit}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
