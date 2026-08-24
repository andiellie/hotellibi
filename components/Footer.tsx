'use client'

export default function Footer() {
  return (
    <footer className="footer-rule bg-[#020713] px-5 py-14 text-white sm:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-3xl font-black">hotelliBI</h3>
            <p className="mt-5 max-w-xs leading-6 text-slate-300">
              Herramienta visual de inteligencia de negocios para hoteles.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-slate-400">SITIO</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#features" className="transition hover:text-white">Features</a></li>
              <li><a href="#integraciones" className="transition hover:text-white">Integrations</a></li>
              <li><a href="#" className="transition hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-slate-400">CONTACTO Y REDES</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="mailto:contacto@hotellibi.com" className="transition hover:text-white">contacto@hotellibi.com</a></li>
              <li><a href="tel:+84567823348" className="transition hover:text-white">+84 567823 34</a></li>
              <li><a href="#" className="transition hover:text-white">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-slate-400">LEGAL</h4>
            <ul className="space-y-2 text-slate-300">
              <li><a href="#" className="transition hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="transition hover:text-white">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-rule mt-16 pt-6">
          <p className="text-sm text-slate-400">© 2024 HotelliBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
