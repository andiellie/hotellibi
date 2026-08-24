import NavBar from '@/components/NavBar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import DashboardPreview from '@/components/DashboardPreview'
import ClientsSection from '@/components/ClientsSection'
import FinalCTA from '@/components/FinalCTA'
import DemoBooking from '@/components/DemoBooking'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="site-shell min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <DashboardPreview />
      <ClientsSection />
      <FinalCTA />
      <DemoBooking />
      <Footer />
    </div>
  )
}
