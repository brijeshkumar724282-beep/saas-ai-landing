import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import Features from './components/Features.jsx'
import Pricing from './components/Pricing.jsx'
import Testimonials from './components/Testimonials.jsx'
import Faq from './components/Faq.jsx'
import { Cta, Footer } from './components/Closing.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink text-fog">
      <Nav />
      <main id="main">
        <Hero />
        <Features />
        <Pricing />
        <Testimonials />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  )
}
