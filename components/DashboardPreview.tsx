'use client'

export default function DashboardPreview() {
  return (
    <section id="integraciones" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-medium tracking-tight text-white sm:text-5xl lg:text-[48px] lg:leading-[56px] lg:tracking-[-0.96px]">Con HotelliBI tienes el control en tus manos.</h2>
          <p className="mt-5 font-sans text-lg text-on-dark-secondary">Monitorea tu hotel de cerca, compara con métricas de años pasados y revisa cómo está tu tarifa frente a la competencia.</p>
        </div>
        <div className="dashboard-frame overflow-hidden rounded-pillar-card p-5 text-slate-950 sm:p-6">
          <div className="flex items-center justify-between border-b border-slate-300 pb-5">
            <div className="flex items-center gap-8">
              <h3 className="font-metric text-xl font-semibold sm:text-2xl">Rendimiento Global</h3>
              <span className="font-sans text-xs font-bold text-accent-red">YTD 2024</span>
            </div>
            <div className="flex gap-2 font-sans text-sm text-slate-500"><span className="rounded border border-slate-300 px-2 py-1">□</span><span className="rounded border border-slate-300 px-2 py-1">⇩</span></div>
          </div>
          <div className="grid gap-5 pt-5 md:grid-cols-[220px_1fr]">
            <div className="space-y-3">
              {[['Ocupación', '78.4%', '+4.2%'], ['ADR (Rate)', '$245', '+12.5%'], ['RevPAR', '$192', '+8.1%']].map(([label, value, delta]) => (
                <div key={label} className="border border-slate-300 bg-white p-4">
                  <p className="font-sans text-xs text-slate-500">{label}</p><p className="mt-1 font-metric text-3xl font-semibold">{value}</p><p className="text-right font-sans text-xs font-bold text-accent-red">↗ {delta}</p>
                </div>
              ))}
              <div className="bg-navy-deepest p-4 text-white"><p className="font-sans text-xs text-slate-400">Vs. Comp Set Local</p><div className="mt-4 h-2 bg-accent-red" /><p className="text-right font-metric text-xs font-bold">115 MPI</p></div>
            </div>
            <div className="border border-slate-300 bg-white p-5">
              <div className="flex justify-between font-sans text-sm font-bold"><span>Evolución RevPAR YTD</span><span className="text-slate-500">● Año Actual　<span className="text-slate-400">Año Anterior</span></span></div>
              <div className="relative mt-6 h-52 overflow-hidden border-b border-slate-200 bg-[repeating-linear-gradient(to_bottom,transparent_0,transparent_50px,#e2e8f0_51px)]"><div className="chart-line absolute inset-0" /></div>
              <div className="mt-3 flex justify-between px-3 font-sans text-xs text-slate-500"><span>Ene</span><span>Feb</span><span>Mar</span><span>Abr</span><span>May</span><span>Jun</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
