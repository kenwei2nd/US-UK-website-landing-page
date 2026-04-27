import Hero from './components/Hero'
import Navbar from './components/Navbar'
import IndustriesServed from './components/IndustriesServed'
import Features from './components/Features'
import Offer from './components/Offer'
import Portfolio from './components/Portfolio'
import FAQ from './components/FAQ'
import FooterCTA from './components/FooterCTA'
import WhatsAppFloat from './components/WhatsAppFloat'

function App() {
  return (
    <main className="overflow-x-hidden max-w-[100vw]">
      <Navbar />
      <Hero />
      <IndustriesServed />
      <Features />
      <Portfolio />
      <Offer />
      <FAQ />
      <FooterCTA />
      <WhatsAppFloat />
    </main>
  )
}

export default App
