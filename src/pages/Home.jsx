import React from 'react'
import Navbar from '../components/Navbar'
import HomePage from '../components/HomePage'
import AboutPage from '../components/AboutPage'
import WhyTNSSection from '../components/WhyTNSSection'
import ValuePricingSection from '../components/ValuePricingSection'
import ContactSection from '../components/ContactSection'
import Footer from '../components/Footer'
import FloatingWhatsAppButton from '../components/FloatingWhatsAppButton'

const Home = () => {
  return (
    <div>
      {/* Navbar */}
      <Navbar/>
      <main>
        <HomePage/>
        <AboutPage/>
        <WhyTNSSection/>
        <ValuePricingSection/>
        <ContactSection/>
      </main>
      {/* Footer */}
      <Footer/>
      <FloatingWhatsAppButton/>
    </div>
  )
}

export default Home
