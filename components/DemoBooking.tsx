'use client'

import { useState } from 'react'

export default function DemoBooking() {
  const [demoData, setDemoData] = useState({
    date: '',
    time: '',
    type: 'general'
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDemoData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo agendada:', demoData)
    setDemoData({ date: '', time: '', type: 'general' })
  }

  return (
    <section id="demo" className="py-20 sm:py-32 bg-gradient-to-r from-primary-800 to-primary-900 dark:from-primary-900 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            ✨ Agenda tu Demo
          </h2>
          <p className="text-lg text-primary-100">
            Descubre cómo HotelliBI puede transformar tu negocio hotelero
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 p-8 rounded-2xl space-y-6 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Fecha
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={demoData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="time" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Hora
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={demoData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                Tipo de Demo
              </label>
              <select
                id="type"
                name="type"
                value={demoData.type}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent transition"
              >
                <option value="general">Demo General</option>
                <option value="features">Características</option>
                <option value="integration">Integración</option>
                <option value="custom">Customizada</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-4 bg-gradient-to-r from-primary-800 to-primary-900 text-white rounded-lg hover:from-primary-900 hover:to-gray-900 transition font-bold text-lg"
          >
            🎯 Agendar Demo Ahora
          </button>

          <p className="text-center text-sm text-gray-500 dark:text-gray-400">
            Nuestro equipo se pondrá en contacto contigo en 24 horas
          </p>
        </form>
      </div>
    </section>
  )
}
