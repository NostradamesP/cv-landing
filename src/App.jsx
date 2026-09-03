import { useState, useEffect } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import DemoPanel from './components/DemoPanel'
import QuickStats from './components/QuickStats'
import About from './components/About'
import CoreExpertise from './components/CoreExpertise'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import CaseStudies from './components/CaseStudies'
import DevelopmentProcess from './components/DevelopmentProcess'
import LiveEvent from './components/LiveEvent'
import SkillsMatrix from './components/SkillsMatrix'
import CurrentProjects from './components/CurrentProjects'
import WhyHireMe from './components/WhyHireMe'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar activeSection={activeSection} />
        <main>
          <Hero />
          <DemoPanel />
          <QuickStats />
          <About />
          <CoreExpertise />
          <Skills />
          <Experience />
          <Projects />
          <CaseStudies />
          <DevelopmentProcess />
          <LiveEvent />
          <SkillsMatrix />
          <CurrentProjects />
          <WhyHireMe />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  )
}

export default App