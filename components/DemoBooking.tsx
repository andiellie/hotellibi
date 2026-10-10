'use client'

import { useEffect, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageProvider'
import { useScrollReveal } from '@/lib/useScrollReveal'

const NAME_MAX = 80
const EMAIL_MAX = 100
const PMS_OTHER_MAX = 60

// Requires a real-looking local@domain.tld shape — rejects "carlos@hotel" or "carlos@.com".
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/

export default function DemoBooking() {
  const { t } = useLanguage()
  const d = t.demoBooking
  const { ref, visible } = useScrollReveal<HTMLDivElement>()
  const [demoData, setDemoData] = useState({
    name: '',
    email: '',
    pms: '',
    pmsOtherText: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [showWaitlistModal, setShowWaitlistModal] = useState(false)
  const [waitlistModalEntered, setWaitlistModalEntered] = useState(false)
  const [hasStartedForm, setHasStartedForm] = useState(false)

  const closeWaitlistModal = () => {
    setWaitlistModalEntered(false)
    window.setTimeout(() => setShowWaitlistModal(false), 200)
  }

  useEffect(() => {
    if (!showWaitlistModal) return
    const raf = requestAnimationFrame(() => setWaitlistModalEntered(true))
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeWaitlistModal()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [showWaitlistModal])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDemoData((prev) => ({ ...prev, [name]: value }))
    if (name === 'email') setEmailError(false)
    if (!hasStartedForm) {
      setHasStartedForm(true)
      setShowWaitlistModal(true)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!EMAIL_PATTERN.test(demoData.email.trim())) {
      setEmailError(true)
      return
    }
    console.log('Demo booked:', demoData)
    setSubmitted(true)
    setEmailError(false)
    setDemoData({ name: '', email: '', pms: '', pmsOtherText: '' })
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
                  className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 border-[#B30205] text-[#B30205] transition-transform duration-300 ease-out"
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
          {submitted ? (
            <div className="dashboard-frame relative flex min-h-[420px] flex-col items-center justify-center rounded-pillar-card !border-0 p-8 text-center text-slate-950 sm:p-10">
              <span className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#B30205] text-[#B30205]">
                <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M4 12l6 6L20 6" />
                </svg>
              </span>
              <h3 className="mt-6 font-display text-2xl font-medium text-slate-900">
                {d.confirmedTitle}
              </h3>
              <p className="mt-3 max-w-sm font-sans leading-6 text-on-light-secondary">
                {d.confirmedMessage}
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="dashboard-frame relative rounded-pillar-card !border-0 p-8 text-slate-950 sm:p-10">
              <div>
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
                  maxLength={NAME_MAX}
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
                  onBlur={() => {
                    if (demoData.email && !EMAIL_PATTERN.test(demoData.email.trim())) setEmailError(true)
                  }}
                  required
                  maxLength={EMAIL_MAX}
                  placeholder="carlos@hotel.com"
                  aria-invalid={emailError}
                  aria-describedby={emailError ? 'email-error' : undefined}
                  className={`w-full rounded-icon-btn border bg-white px-4 py-3 font-sans text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 ${
                    emailError
                      ? 'border-[#B30205] focus:border-transparent focus:ring-[#B30205]'
                      : 'border-border-light focus:border-transparent focus:ring-brand-blue'
                  }`}
                />
                {emailError && (
                  <p id="email-error" className="mt-2 font-sans text-sm text-[#B30205]">
                    {d.emailInvalid}
                  </p>
                )}
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
                  <option value="venis">Venis</option>
                  <option value="pexol">Pexol</option>
                  <option value="cqr">CQR</option>
                  <option value="wubook">Wubook</option>
                  <option value="cloudbs">Cloud BS</option>
                  <option value="otro">{d.pmsOther}</option>
                </select>
                {demoData.pms === 'otro' && (
                  <input
                    type="text"
                    id="pmsOtherText"
                    name="pmsOtherText"
                    value={demoData.pmsOtherText}
                    onChange={handleChange}
                    required
                    maxLength={PMS_OTHER_MAX}
                    placeholder={d.pmsOtherPlaceholder}
                    className="mt-3 w-full rounded-icon-btn border border-border-light bg-white px-4 py-3 font-sans text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-brand-blue"
                  />
                )}
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
          )}
        </div>
      </div>

      {showWaitlistModal && (
        <div
          className={`fixed inset-0 z-[100] flex items-center justify-center bg-black/60 px-5 transition-opacity duration-200 ease-out ${
            waitlistModalEntered ? 'opacity-100' : 'opacity-0'
          }`}
          role="dialog"
          aria-modal="true"
          aria-labelledby="waitlist-modal-title"
          onClick={closeWaitlistModal}
        >
          <div
            className={`w-full max-w-md rounded-pillar-card bg-white p-8 text-center text-slate-950 shadow-2xl transition-all duration-200 ease-out ${
              waitlistModalEntered ? 'translate-y-0 scale-100 opacity-100' : 'translate-y-2 scale-95 opacity-0'
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 id="waitlist-modal-title" className="font-display text-xl font-medium text-slate-900">
              {d.waitlistNote}
            </h3>
            <button
              type="button"
              onClick={closeWaitlistModal}
              className="mt-6 w-full rounded-full bg-[#00033C] px-10 py-3 font-sans text-base font-bold text-white transition hover:brightness-110"
            >
              {d.waitlistAccept}
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
