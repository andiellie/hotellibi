import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import FAQ from '@/components/FAQ'
import DemoBooking from '@/components/DemoBooking'
import ContactForm from '@/components/ContactForm'
import FinalCTA from '@/components/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavBar />
      <Hero />
      <Features />
      <Testimonials />
      <FAQ />
      <DemoBooking />
      <ContactForm />
      <FinalCTA />
      <Footer />
    </div>
  )
}
