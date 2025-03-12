import React from 'react'
import Hero from '../components/hero'
import LetestCollection from '../components/LetestCollection';
import Bestseller from '../components/Bestseller';
import OurPolicy from '../components/OurPolicy';
import NewsletterBox from '../components/NewsLetterBox';
function Home() {
  return (
    <div>
      <Hero/>
      <LetestCollection/>
      <Bestseller/>
      <OurPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home