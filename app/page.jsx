 
import React from 'react'

import '../app/globals.css'
import WebDevelopmentProcess from './components/home/WebDevelopmentProcess'
import Brandstack from './components/home/Brandstack'
import StickyocialBar from './components/home/StickyocialBar'
import Footer from './Footer'
import FAQSection from './components/home/FAQSection'
import ServicesSection from './components/home/ServicesSection'
import CustomerReviews from './components/home/CustomerReviews'
import PortfolioSection from './components/home/PortfolioSection'
import HireDeveloperSection from './components/home/HireDeveloperSection'
import HeroSection from './components/home/HeroSection'

export const metadata = {
  title: 'FAJ IT Solutions | Web & IT Services',
  description: 'We provide expert web development, branding, SEO, and IT solutions tailored to your business needs.',
  keywords: ['Web Development', 'FAJ IT Solutions', 'IT Services', 'Branding', 'SEO'],
  openGraph: {
    title: 'FAJ IT Solutions',
    description: 'Your trusted partner for all web and IT services.',
    url: 'https://www.fajitsolutions.com',
    siteName: 'FAJ IT Solutions',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'FAJ IT Solutions',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

const Home = () => {

  return (
    <div>
      <section>
        <HeroSection />
      </section>
 
      <StickyocialBar />

      <section>
        <Brandstack />
      </section>

      <section>
        <ServicesSection />
      </section>

      <section>
        <WebDevelopmentProcess />
      </section>

      <section>
        <CustomerReviews />
      </section>

      <section>
        <PortfolioSection />
      </section>

      <section>
        <HireDeveloperSection />
      </section>

      <section>
        <FAQSection />
      </section>




      <section><Footer /></section>

    </div>
  )
}

export default Home