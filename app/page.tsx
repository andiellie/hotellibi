import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DemoBooking from '@/components/DemoBooking'
import ContactForm from '@/components/ContactForm'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      <NavBar />
      <Hero />
      <Features />
      <DemoBooking />
      <ContactForm />
      <Footer />
    </div>
  )
}
