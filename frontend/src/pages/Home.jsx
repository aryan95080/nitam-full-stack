import React from 'react'
import Hero from '../components/hero'
import LetestCollection from '../components/LetestCollection';
import Bestseller from '../components/Bestseller';
function Home() {
  return (
    <div>
      <Hero/>
      <LetestCollection/>
      <Bestseller/>
    </div>
  )
}

export default Home