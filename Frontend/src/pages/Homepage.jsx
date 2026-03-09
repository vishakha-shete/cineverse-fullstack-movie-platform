import React from 'react'
import Hero from '../components/Hero'
import CardList from '../components/CardList'
import Footer from '../components/Footer'

const Homepage = () => {
  return (
    <div>
      <Hero />
      <CardList />
      <CardList />
      <Footer />
    </div>
  )
}

export default Homepage
