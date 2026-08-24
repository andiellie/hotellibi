'use client'

import { useState } from 'react'

export default function DemoBooking() {
  const [demoData, setDemoData] = useState({
    name: '',
    email: '',
    pms: '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setDemoData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Demo agendada:', demoData)
    setDemoData({ name: '', email: '', pms: '' })
  }

  const checklist = [
    'Integración nativa con los principales PMS del mercado.',
    'Implementación rápida sin interrupción de operaciones.',
    'Correos semanales para que compares cada semana.',
  ]

  return (
    <section id="demo" className="px-5 py-24 sm:py-32">
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div>
          <h2 className="text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl">
            <span className="font-bold">Eleva el estándar</span>{' '}
            <span className="font-normal">de tu gestión operativa</span>
          </h2>
          <p className="mt-6 max-w-md leading-7 text-slate-300">
            Agenda una demostración personalizada y descubre cómo hotelliBI se integra fácilmente a tu equipo y recibe reportes semanales para tener el control total de tu hotel.
          </p>

          <ul className="mt-8 space-y-4">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-slate-200">
                <span className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center rounded-full border border-red-600 text-xs text-red-600">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <form onSubmit={handleSubmit} className="dashboard-frame rounded-lg p-8 text-slate-950 sm:p-10">
          <p className="italic leading-6 text-slate-600">
            HotelliBI será lanzado gradualmente acorde a la participación en diferentes mercados, ¿le gustaría ingresar su hotel al waitlist?
          </p>

          <div className="mt-8">
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-900">
              Nombre completo
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={demoData.name}
              onChange={handleChange}
              required
              placeholder="Ej. Carlos Mendoza"
              className="w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3746d4]"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-900">
              Correo electrónico corporativo
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={demoData.email}
              onChange={handleChange}
              required
              placeholder="carlos@hotel.com"
              className="w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3746d4]"
            />
          </div>

          <div className="mt-6">
            <label htmlFor="pms" className="mb-2 block text-sm font-medium text-slate-900">
              ¿Cuál es tu PMS?
            </label>
            <select
              id="pms"
              name="pms"
              value={demoData.pms}
              onChange={handleChange}
              required
              className="w-full rounded-sm border border-slate-300 bg-white px-4 py-3 text-slate-900 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-[#3746d4]"
            >
              <option value="" disabled>Selecciona una opción</option>
              <option value="cloudbeds">Cloudbeds</option>
              <option value="opera">Opera PMS</option>
              <option value="mews">Mews</option>
              <option value="otro">Otro</option>
            </select>
          </div>

          <div className="mt-8 text-center">
            <button type="submit" className="glow-button inline-flex rounded-full px-10 py-4 text-base font-bold text-white transition hover:scale-105">
              Agendar Demo
            </button>
          </div>
        </form>
      </div>
    </section>
  )
}
