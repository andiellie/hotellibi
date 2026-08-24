'use client'

export default function NavBar() {
  return (
    <nav className="sticky top-4 z-50 mx-4 sm:mx-10 lg:mx-12 site-nav">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8">
        <div className="flex min-h-[78px] items-center justify-between gap-5">
          <div className="hidden items-center gap-8 text-sm font-semibold text-slate-300 md:flex">
            <a href="#features" className="border-b-2 border-white pb-2 text-white">Features</a>
            <a href="#integraciones" className="hover:text-white transition">Integraciones</a>
            <a href="#demo" className="hover:text-white transition">Agenda una DEMO</a>
          </div>
          <a href="/" className="text-4xl font-black tracking-tight text-white">hotelliBI</a>
          <div className="flex items-center gap-5 sm:gap-8">
            <span className="text-sm text-white">ES</span>
            <a href="#demo" className="rounded-sm bg-[#3746d4] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#4958eb]">Acceso a clientes</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
