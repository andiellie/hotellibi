import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import Features from '@/components/sections/Features'
import ClientsSection from '@/components/sections/clients/ClientsSection'
import Testimonial from '@/components/sections/Testimonial'
import BigStatement from '@/components/sections/BigStatement'
import DemoBooking from '@/components/sections/DemoBooking'

export default function Home() {
  return (
    <>
      <div className="site-shell">
        <NavBar />
        <Hero />
        <Features />
        <Testimonial which="testimonial2" id="testimonios-2" />
        <ClientsSection />
        <Testimonial />
        <BigStatement />
        <DemoBooking />
      </div>
      <Footer />
    </>
  )
}
