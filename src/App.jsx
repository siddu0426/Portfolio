import { useState } from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Skills from './components/Skills';




function App() {
  return (
    <>
    <div className="relative">
      <Header />
      <main className="container mx-auto max-w-5xl px-6 sm:px-8">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
    </>
  )
}

export default App;
