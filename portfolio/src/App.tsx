import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import PrintableResume from './components/PrintableResume'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Education />
      <Contact />
      <PrintableResume />
    </div>
  )
}

export default App
