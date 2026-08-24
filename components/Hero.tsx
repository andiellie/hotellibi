'use client'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-900 dark:to-black py-20 sm:py-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
                Bienvenido a <span className="text-primary-800 dark:text-primary-400">HotelliBI</span>
              </h1>
            </div>
            
            <p className="text-lg text-gray-600 dark:text-gray-300">
              La solución integral para gestionar tu hotel con inteligencia. Optimiza operaciones, mejora la experiencia del huésped y crece tu negocio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3 bg-primary-800 text-white rounded-lg hover:bg-primary-900 transition font-medium">
                Comienza Ahora
              </button>
              <button className="px-8 py-3 border-2 border-primary-800 text-primary-800 dark:text-primary-400 dark:border-primary-400 rounded-lg hover:bg-primary-50 dark:hover:bg-gray-800 transition font-medium">
                Ver Demo
              </button>
            </div>

            <div className="flex gap-8 pt-8">
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">100+</p>
                <p className="text-gray-600 dark:text-gray-400">Hoteles activos</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-gray-900 dark:text-white">99.9%</p>
                <p className="text-gray-600 dark:text-gray-400">Uptime</p>
              </div>
            </div>
          </div>

          {/* Right Image Placeholder */}
          <div className="relative h-96 bg-gradient-to-br from-primary-200 to-primary-300 dark:from-gray-700 dark:to-gray-800 rounded-2xl flex items-center justify-center">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-400">Imagen principal</p>
              <p className="text-sm text-gray-500 dark:text-gray-500 mt-2">(Agregar imagen de hotel aquí)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
