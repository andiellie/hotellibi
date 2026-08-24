'use client'

import LinearButton from './LinearButton'

export default function Hero() {
  return (
    <section id="hero" className="px-5 pb-24 pt-36 text-center sm:pt-52">
      <div className="mx-auto max-w-5xl">
        <h1 className="font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-[72px] lg:leading-[80px] lg:tracking-[-3.6px]">Control Total de tu Hotel.</h1>
        <p className="mx-auto mt-8 max-w-3xl font-sans text-lg leading-8 text-on-dark-secondary sm:text-xl">HotelliBI unifica tus datos operativos, financieros y comerciales en una plataforma visual de inteligencia comercial.</p>
        <LinearButton href="#demo" className="mt-12">Agenda tu Demo</LinearButton>
      </div>
    </section>
  )
}
