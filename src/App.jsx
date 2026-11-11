import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import WhyChooseUs from './components/WhyChooseUs'
import Stats from './components/Stats'
import PeriodTracker from './components/PeriodTracker'
import Survey from './components/Survey'
import Testimonials from './components/Testimonials'
import Products from './components/Products'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import ScrollProgress from './components/ScrollProgress'

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <WhyChooseUs />
      <Stats />
      <PeriodTracker />
      <Survey />
      <Testimonials />
      <Products />
      <FAQ />
      <Footer />
    </>
  )
}
