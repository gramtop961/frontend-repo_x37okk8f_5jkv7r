import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductDemo from './components/ProductDemo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white antialiased">
      <Hero />
      <Features />
      <ProductDemo />
      <Footer />
    </div>
  )
}

export default App
