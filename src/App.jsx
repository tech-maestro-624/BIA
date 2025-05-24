import { useEffect } from 'react'
import Lenis from 'lenis'
import { ChevronRight, Play, Star, Award, Users, BookOpen, TrendingUp, CheckCircle, ArrowRight, Menu, X } from 'lucide-react'

// Components
import Header from './components/Header'
import Hero from './components/Hero'
import TalkToExpert from './components/TalkToExpert'
import About from './components/About'
import Programs from './components/Programs'
import KeyHighlights from './components/KeyHighlights'
import Features from './components/Features'
import WhyChooseUs from './components/WhyChooseUs'
import Technologies from './components/Technologies'
import Certification from './components/Certification'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Syllabus from './components/Syllabus'

function App() {
  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <TalkToExpert />
        <Programs />
        <KeyHighlights />
        <Syllabus />
        <Features />
        <WhyChooseUs />
        <Technologies />
        <Certification />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
