'use client'

import { useLanguage } from '@/lib/i18n/LanguageProvider'

export default function DashboardPreview() {
  const { t } = useLanguage()
  const d = t.dashboard
  const stats: [string, string, string][] = [
    [d.occupancy, '78.4%', '+4.2%'],
    ['ADR (Rate)', '$245', '+12.5%'],
    ['RevPAR', '$192', '+8.1%'],
  ]

  return (
    <section id="integraciones" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]">{d.heading}</h2>
          <p className="mt-5 font-sans text-lg text-on-dark-secondary">{d.subheading}</p>
        </div>
        <div className="dashboard-frame overflow-hidden rounded-pillar-card p-5 text-slate-950 sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-300 pb-5">
            <div className="flex items-center gap-8">
              <h3 className="font-display text-xl font-semibold sm:text-2xl">{d.overallPerformance}</h3>
              <span className="font-sans text-xs font-bold text-accent-red">YTD 2024</span>
            </div>
            <div className="flex gap-2 font-sans text-sm text-slate-500"><span className="rounded border border-slate-300 px-2 py-1">□</span><span className="rounded border border-slate-300 px-2 py-1">⇩</span></div>
          </div>
          <div className="grid gap-5 pt-5 md:grid-cols-[220px_1fr]">
            <div className="space-y-3">
              {stats.map(([label, value, delta]) => (
                <div key={label} className="border border-slate-300 bg-white p-4">
                  <p className="font-sans text-xs text-slate-500">{label}</p><p className="mt-1 font-display text-3xl font-semibold">{value}</p><p className="text-right font-sans text-xs font-bold text-accent-red">↗ {delta}</p>
                </div>
              ))}
              <div className="bg-navy-deepest p-4 text-white"><p className="font-sans text-xs text-slate-400">{d.compSet}</p><div className="mt-4 h-2 bg-accent-red" /><p className="text-right font-display text-xs font-bold">115 MPI</p></div>
            </div>
            <div className="border border-slate-300 bg-white p-5">
              <div className="flex justify-between font-sans text-sm font-bold"><span>{d.revparTrend}</span><span className="text-slate-500">● {d.currentYear}　<span className="text-slate-400">{d.previousYear}</span></span></div>
              <div className="relative mt-6 h-52 overflow-hidden border-b border-slate-200 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_50px,#e2e8f0_51px)]"><div className="chart-line absolute inset-0" /></div>
              <div className="mt-3 flex justify-between px-3 font-sans text-xs text-slate-500">{d.months.map((m) => <span key={m}>{m}</span>)}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
