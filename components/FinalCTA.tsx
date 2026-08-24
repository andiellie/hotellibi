'use client'

export default function FinalCTA() {
  return (
    <section className="py-20 sm:py-32 bg-gradient-to-r from-primary-800 via-primary-700 to-primary-900 dark:from-primary-900 dark:via-gray-900 dark:to-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-5xl font-bold text-white mb-6">
          ¿Listo para transformar tu hotel?
        </h2>
        
        <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
          Únete a más de 100 hoteles que ya están mejorando sus operaciones con HotelliBI
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-4 bg-white text-primary-800 font-bold rounded-lg hover:bg-gray-100 transition text-lg">
            Comienza tu prueba gratuita
          </button>
          <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition text-lg">
            Agendar una demo
          </button>
        </div>

        <p className="text-primary-100 mt-8">
          Sin tarjeta de crédito necesaria. Acceso completo por 14 días.
        </p>
      </div>
    </section>
  )
}
