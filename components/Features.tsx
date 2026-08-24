'use client'

export default function Features() {
  const features = [
    {
      icon: '▦',
      title: 'Control Total',
      description: 'Monitorea cada métrica vital desde un solo panel. Integración perfecta con tu PMS y sistemas de gestión.'
    },
    {
      icon: '◷',
      title: 'Tiempo Recuperado',
      description: 'Automatiza la recolección y limpieza de datos. Elimina las hojas de cálculo manuales y enfócate en la estrategia.'
    },
    {
      icon: '✣',
      title: 'Visuales Listos',
      description: 'Reportes de nivel ejecutivo generados al instante. Gráficos interactivos y reportes semanales.'
    }
  ]

  return (
    <section id="features" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">Más que una herramienta visual.</h2>
          <p className="mt-5 text-lg text-slate-300">
            Diseñado para ejecutivos que exigen precisión y velocidad en la toma de decisiones.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="min-h-[300px] rounded-md border border-slate-700/70 bg-[#070d1c]/70 p-8 transition hover:-translate-y-1 hover:border-slate-500"
            >
              <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-700/70 text-2xl text-slate-200">{feature.icon}</div>
              <h3 className="mb-4 text-3xl font-normal leading-tight text-white">
                {feature.title}
              </h3>
              <p className="leading-6 text-slate-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
