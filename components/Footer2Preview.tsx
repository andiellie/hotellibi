'use client'

import { useEffect, useRef, useState } from 'react'
import { Days_One } from 'next/font/google'

const daysOne = Days_One({ weight: '400', subsets: ['latin'] })

const BAR_HEIGHTS = [50, 80, 65, 110, 95, 140, 120, 165]
const BAR_WIDTH = 48
const BAR_GAP = 24
const BAR_RADIUS = 7
const CHART_HEIGHT = 200
const BASELINE_Y = 190

function topRoundedRectPath(x: number, y: number, width: number, height: number, radius: number) {
  const r = Math.min(radius, height, width / 2)
  return `M${x},${y + r} Q${x},${y} ${x + r},${y} L${x + width - r},${y} Q${x + width},${y} ${x + width},${y + r} L${x + width},${y + height} L${x},${y + height} Z`
}

export default function Footer2Preview() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const wordmarkRef = useRef<HTMLSpanElement>(null)
  const [visible, setVisible] = useState(false)
  const [wordmarkWidth, setWordmarkWidth] = useState<number | null>(null)

  useEffect(() => {
    const el = sectionRef.current
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

  useEffect(() => {
    const wordmark = wordmarkRef.current
    if (!wordmark) return

    const measure = () => setWordmarkWidth(wordmark.getBoundingClientRect().width)
    measure()

    const resizeObserver = new ResizeObserver(measure)
    resizeObserver.observe(wordmark)
    return () => resizeObserver.disconnect()
  }, [])

  const chartWidth = BAR_HEIGHTS.length * BAR_WIDTH + (BAR_HEIGHTS.length - 1) * BAR_GAP

  return (
    <div ref={sectionRef} className="relative isolate h-[420px] w-full overflow-hidden rounded-pillar-card bg-navy-deepest">
      {/* Ambient radial glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(60% 55% at 50% 100%, rgba(230,113,75,.14), transparent 70%), radial-gradient(50% 45% at 50% 100%, rgba(49,65,208,.16), transparent 70%)',
        }}
      />

      {/* Watermark */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-6 flex select-none items-start justify-center whitespace-nowrap sm:top-8"
      >
        <span
          ref={wordmarkRef}
          className={`${daysOne.className} text-[22vw] leading-none text-white opacity-[0.05] sm:text-[16vw]`}
        >
          hotelliBI
        </span>
      </span>

      <div className="absolute right-6 top-6 z-10 flex gap-5 font-sans text-xs font-medium text-on-dark-secondary sm:right-8 sm:top-8">
        <a href="#" className="transition hover:text-white">Instagram</a>
        <a href="#" className="transition hover:text-white">LinkedIn</a>
        <a href="#" className="transition hover:text-white">X</a>
      </div>

      <svg
        viewBox={`0 0 ${chartWidth} ${CHART_HEIGHT}`}
        className="absolute inset-x-0 bottom-6 mx-auto"
        style={{ width: wordmarkWidth ? `${wordmarkWidth}px` : '100%', height: `${CHART_HEIGHT}px` }}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="footer2-bar-gradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ff7e15" />
            <stop offset="100%" stopColor="var(--color-brand-blue)" />
          </linearGradient>
          <linearGradient id="footer2-baseline-gradient" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,.18)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
          <filter id="footer2-bar-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        <line
          x1="0"
          y1={BASELINE_Y}
          x2={chartWidth}
          y2={BASELINE_Y}
          stroke="url(#footer2-baseline-gradient)"
          strokeWidth="1.5"
        />

        {BAR_HEIGHTS.map((h, i) => {
          const x = i * (BAR_WIDTH + BAR_GAP)
          const y = BASELINE_Y - h
          const path = topRoundedRectPath(x, y, BAR_WIDTH, h, BAR_RADIUS)
          const delay = i * 0.08

          return (
            <g
              key={i}
              style={{
                transformBox: 'fill-box',
                transformOrigin: 'bottom',
                transform: visible ? 'scaleY(1)' : 'scaleY(0)',
                transition: `transform 0.6s ease-out ${delay}s`,
              }}
            >
              <path d={path} fill="url(#footer2-bar-gradient)" opacity="0.3" filter="url(#footer2-bar-glow)" />
              <path d={path} fill="url(#footer2-bar-gradient)" fillOpacity="0.7" />
            </g>
          )
        })}
      </svg>
    </div>
  )
}
