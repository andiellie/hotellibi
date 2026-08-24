'use client'

import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="footer-rule bg-navy-alt px-5 py-14 font-sans text-white sm:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <Image src="/hotellibi-logo-blanco.svg" alt="hotelliBI" width={130} height={24} />
            <p className="mt-5 max-w-xs leading-6 text-on-dark-secondary">
              Herramienta visual de inteligencia de negocios para hoteles.
            </p>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">SITIO</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="#features" className="transition hover:text-white">Features</a></li>
              <li><a href="#integraciones" className="transition hover:text-white">Integrations</a></li>
              <li><a href="#" className="transition hover:text-white">Pricing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">CONTACTO Y REDES</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="mailto:contacto@hotellibi.com" className="transition hover:text-white">contacto@hotellibi.com</a></li>
              <li><a href="tel:+84567823348" className="transition hover:text-white">+84 567823 34</a></li>
              <li><a href="#" className="transition hover:text-white">LinkedIn</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-xs font-bold tracking-widest text-on-dark-muted">LEGAL</h4>
            <ul className="space-y-2 text-on-dark-secondary">
              <li><a href="#" className="transition hover:text-white">Política de Privacidad</a></li>
              <li><a href="#" className="transition hover:text-white">Términos de Servicio</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-rule mt-16 pt-6">
          <p className="text-sm text-on-dark-muted">© 2024 HotelliBI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
