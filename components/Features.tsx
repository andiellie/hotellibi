'use client'

export default function Features() {
  const features = [
    {
      icon: '📊',
      title: 'Analytics en Tiempo Real',
      description: 'Visualiza métricas clave de tu hotel al instante'
    },
    {
      icon: '🔐',
      title: 'Seguridad Premium',
      description: 'Protección de datos de nivel empresarial'
    },
    {
      icon: '🚀',
      title: 'Escalabilidad',
      description: 'Crece sin límites con nuestra infraestructura'
    },
    {
      icon: '⚙️',
      title: 'Automatización',
      description: 'Automatiza procesos y ahorra tiempo'
    },
    {
      icon: '📱',
      title: 'Multi-dispositivo',
      description: 'Accede desde cualquier dispositivo'
    },
    {
      icon: '🤝',
      title: 'Soporte 24/7',
      description: 'Equipo de soporte siempre disponible'
    }
  ]

  return (
    <section id="features" className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Características Principales
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Todo lo que necesitas para gestionar tu hotel de manera eficiente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-2 border-l-4 border-primary-800"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
