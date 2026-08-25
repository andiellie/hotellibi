'use client'

import { useState } from 'react'
import LinearButton from './LinearButton'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function DemoBooking() {
  const { t } = useLanguage()
  const d = t.demoBooking
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
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <h2 className="font-display text-4xl leading-tight tracking-tight text-white sm:text-5xl">
            <span className="font-bold">{d.titleBold}</span>{' '}
            <span className="font-normal">{d.titleNormal}</span>
          </h2>
          <p className="mt-6 max-w-md font-sans leading-7 text-on-dark-secondary">
            {d.description}
          </p>

          <ul className="mt-8 space-y-4 font-sans">
            {d.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-on-dark-secondary">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-accent-red text-xs text-accent-red">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="dashboard-frame rounded-pillar-card p-8 text-slate-950 sm:p-10">
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
            <LinearButton type="submit">{d.submit}</LinearButton>
          </div>
        </form>
      </div>
    </section>
  )
}
