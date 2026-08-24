'use client'

export default function ClientsSection() {
  return (
    <section id="clientes" className="px-5 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ellos ya usan HotelliBI en su negocio
        </h2>

        <div className="mt-16 grid grid-cols-2 items-center justify-items-center gap-x-8 gap-y-12 opacity-80 sm:grid-cols-4">
          <div className="flex items-center gap-2 text-white">
            <span className="font-serif text-3xl">H</span>
            <span className="text-left font-serif text-xs leading-tight tracking-wide">
              HOTEL<br />PLAZA CENTRAL<br />CANNING
            </span>
          </div>

          <div className="text-center">
            <p className="text-2xl font-black tracking-tight text-white">BENS</p>
            <p className="text-xs tracking-widest text-slate-300">L&apos;Hôtel Palermo</p>
          </div>

          <div className="text-center">
            <p className="text-2xl font-black tracking-tight text-white">BENS</p>
            <p className="text-xs tracking-[0.3em] text-slate-300">Recoleta Park</p>
          </div>

          <span className="font-serif text-4xl italic text-white">f</span>
        </div>
      </div>
    </section>
  )
}
