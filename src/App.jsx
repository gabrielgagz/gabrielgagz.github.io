import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import './App.css'

function App() {
  const [language, setLanguage] = useState('en')

  return (
    <div className="app">
      <Navbar language={language} onLanguageChange={setLanguage} />
      <Hero language={language} />
      <About language={language} />
      <Experience language={language} />
      <Skills language={language} />
      <Education language={language} />
      <Footer language={language} />
      <WhatsAppButton language={language} />
    </div>
  )
}

export default App
