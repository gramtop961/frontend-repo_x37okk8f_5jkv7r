import React from 'react'
import Hero from './components/Hero'
import Features from './components/Features'
import ProductDemo from './components/ProductDemo'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-gray-950 text-white antialiased selection:bg-blue-600/30 selection:text-white">
      <Hero />
      <Features />
      <ProductDemo />
      <Footer />
    </div>
  )
}

export default App
