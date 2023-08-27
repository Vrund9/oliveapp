import React from 'react'
import Button from '../Button'

const Contact = () => {
  return (
    <section className="container px-5 py-24 mx-auto flex md:items-center md:px-8 md:py-12 lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
      <div className='contact-container'>
        <div className='contact-box'>
          <div>
            <div className='contact-left'>
              <div className='text-meta'>
                Contact
              </div>
            </div>
            <div className='contact-right'>
              <div>
                <h2 className='right-heading'>Let's start building your brand's unique story together.</h2>
              </div>
              <div className='right-subHeading'>
                <div>
                  Want to see what a difference a strong brand can make? Request a consultation today.
                </div>
              </div>
              <Button name="Get in Touch" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact