'use client'

import { useEffect, useRef, useState } from 'react'
import { useLanguage } from '@/lib/i18n/LanguageProvider'

const APPEAR_DURATION = 500
const GRID_LINE_DURATION = 700
const GRID_LINE_STEP = 180
const GRID_RELAY_START = APPEAR_DURATION
const GRID_RELAY_FINISH = GRID_RELAY_START + GRID_LINE_STEP * 2 + GRID_LINE_DURATION
const CLOCK_DURATION = 900
const CLOCK_RELAY_START = GRID_RELAY_FINISH
const CLOCK_RELAY_FINISH = CLOCK_RELAY_START + CLOCK_DURATION
const CROSS_DURATION = 750
const CROSS_RELAY_START = CLOCK_RELAY_FINISH

function GridIcon({ playKey, startDelay }: { playKey: number; startDelay: number }) {
  const lineStyle = (stepDelay: number) => ({
    animation: `grid-line-draw ${GRID_LINE_DURATION}ms ease-out ${startDelay + stepDelay}ms both`,
  })

  return (
    <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path
        pathLength={100}
        d="M2,2 H22 V22 H2 Z"
        strokeDasharray={100}
        style={{ animation: `grid-line-draw ${GRID_LINE_DURATION}ms ease-out ${GRID_RELAY_START}ms both` }}
      />
      <g key={playKey}>
        <path pathLength={100} d="M12,2 V22" strokeDasharray={100} style={lineStyle(GRID_LINE_STEP)} />
        <path pathLength={100} d="M2,12 H22" strokeDasharray={100} style={lineStyle(GRID_LINE_STEP * 2)} />
      </g>
    </svg>
  )
}

function ClockIcon({ playKey, startDelay }: { playKey: number; startDelay: number }) {
  return (
    <svg key={playKey} viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9.5" />
      <line
        x1="12"
        y1="12"
        x2="12"
        y2="6"
        style={{
          transformOrigin: '12px 12px',
          animation: `clock-hand-once ${CLOCK_DURATION}ms cubic-bezier(0.22, 1, 0.36, 1) ${startDelay}ms both`,
        }}
      />
      <line x1="12" y1="12" x2="16" y2="12" strokeWidth="1.2" opacity="0.6" />
    </svg>
  )
}

function CrossIcon({ icon, playKey, startDelay }: { icon: string; playKey: number; startDelay: number }) {
  return (
    <span
      key={playKey}
      className="inline-block text-2xl"
      style={{
        animation: `cross-spin-once ${CROSS_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) ${startDelay}ms both`,
      }}
    >
      {icon}
    </span>
  )
}

export default function Features() {
  const { t } = useLanguage()
  const features = t.features.items
  const gridRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  const [playKeys, setPlayKeys] = useState([0, 0, 0])
  // While true, icon start delays follow the initial cross-card relay timing.
  // Once any card is replayed via hover, that card switches to its own quick, local timing.
  const [relaying, setRelaying] = useState([true, true, true])

  useEffect(() => {
    const el = gridRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          setPlayKeys([1, 1, 1])
          observer.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const replay = (index: number) => {
    if (!visible) return
    setPlayKeys((prev) => prev.map((k, i) => (i === index ? k + 1 : k)))
    setRelaying((prev) => prev.map((r, i) => (i === index ? false : r)))
  }

  const startDelayFor = (index: number) => {
    if (relaying[index]) {
      return index === 0 ? GRID_RELAY_START : index === 1 ? CLOCK_RELAY_START : CROSS_RELAY_START
    }
    return APPEAR_DURATION
  }

  return (
    <section id="features" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-16 text-center">
          <h2 className="font-display text-4xl font-medium tracking-tight text-on-dark-primary sm:text-5xl lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]">{t.features.heading}</h2>
          <p className="mt-5 font-sans text-lg text-on-dark-secondary">
            {t.features.subheading}
          </p>
        </div>

        <div ref={gridRef} className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              onMouseEnter={() => replay(index)}
              className="min-h-[300px] rounded-pillar-card border border-slate-700/70 p-8 transition hover:-translate-y-1 hover:border-slate-500"
            >
              <div
                className="mb-7 flex h-12 w-12 items-center justify-center rounded-badge bg-slate-700/70 text-icon-blue-gray"
                style={
                  visible
                    ? { animation: `icon-badge-appear ${APPEAR_DURATION}ms cubic-bezier(0.34, 1.56, 0.64, 1) both` }
                    : { opacity: 0 }
                }
              >
                {index === 0 ? (
                  <GridIcon playKey={playKeys[0]} startDelay={startDelayFor(0)} />
                ) : index === 1 ? (
                  <ClockIcon playKey={playKeys[1]} startDelay={startDelayFor(1)} />
                ) : (
                  <CrossIcon icon={feature.icon} playKey={playKeys[2]} startDelay={startDelayFor(2)} />
                )}
              </div>
              <h3 className="mb-4 font-display text-3xl font-normal leading-tight text-on-dark-primary">
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
