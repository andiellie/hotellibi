'use client'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Carlos Mendez',
      role: 'Gerente General - Hotel Prímula',
      content: 'HotelliBI transformó completamente nuestras operaciones. Aumentamos la ocupación un 35% en 3 meses.',
      rating: 5
    },
    {
      name: 'María López',
      role: 'Dueña - Hostal Marina',
      content: 'La mejor inversión que hice para mi hotel. El soporte del equipo es excepcional.',
      rating: 5
    },
    {
      name: 'Juan García',
      role: 'Director de Operaciones - Resort Paraíso',
      content: 'Simplificó toda la gestión. Nuestro equipo ahora se enfoca en lo que realmente importa.',
      rating: 5
    }
  ]

  return (
    <section className="py-20 sm:py-32 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Hoteleros como tú confían en HotelliBI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-primary-800">★</span>
                ))}
              </div>
              <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                "{testimonial.content}"
              </p>
              <div>
                <p className="font-bold text-gray-900 dark:text-white">
                  {testimonial.name}
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {testimonial.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
