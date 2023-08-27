import React from 'react'
import Button from '../Button'

const Hero = () => {
  return (
    <section className="container px-5 py-24 mx-auto flex md:items-center md:py-12 md:px-8 lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className='hero-container'>
        <div className='hero-div'>
          <h1 className='hero-title'>Building Brands, One Success Story at a Time.</h1>
        </div>
        <div className='hero-subDiv'>
          <div className='hero-subTitle'>Create a Brand That Resonates: We Can Help You Define and Communicate Your Unique Message.</div>
        </div>
        <Button name="Our Services" />
      </div>
    </section>
  )
}

export default Hero