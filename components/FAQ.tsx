'use client'

import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: '¿Cuánto cuesta HotelliBI?',
      answer: 'Ofrecemos diferentes planes según el tamaño de tu hotel. Contáctanos para una demostración personalizada y presupuesto.'
    },
    {
      question: '¿Cuál es el tiempo de implementación?',
      answer: 'La implementación típicamente toma entre 1-2 semanas, dependiendo de tu infraestructura actual.'
    },
    {
      question: '¿Qué integrations ofreces?',
      answer: 'Integramos con los principales sistemas PMS, canales de distribución, sistemas de pago y más.'
    },
    {
      question: '¿Ofrecen soporte?',
      answer: 'Sí, ofrecemos soporte 24/7 vía chat, email y teléfono. Nuestro equipo está siempre disponible.'
    },
    {
      question: '¿Es segura la plataforma?',
      answer: 'Utilizamos encriptación de nivel empresarial, cumplimos con GDPR y realizamos auditorías de seguridad regulares.'
    },
    {
      question: '¿Puedo cambiar de plan después?',
      answer: 'Absolutamente. Puedes ajustar tu plan en cualquier momento según las necesidades de tu hotel.'
    }
  ]

  return (
    <section className="py-20 sm:py-32 bg-white dark:bg-black">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Respuestas a las dudas más comunes
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 transition text-left"
              >
                <span className="font-semibold text-gray-900 dark:text-white">
                  {faq.question}
                </span>
                <span className={`text-primary-800 transform transition ${openIndex === index ? 'rotate-180' : ''}`}>
                  ▼
                </span>
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 bg-white dark:bg-black text-gray-600 dark:text-gray-300 border-t border-gray-200 dark:border-gray-700">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
