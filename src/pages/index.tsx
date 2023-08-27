import React from "react"
import dynamic from 'next/dynamic'

const DynamicContact = dynamic(() => import('../components/Contact'), {
  loading: () => <p>Contact Section Loading...</p>,
})

const DynamicHero = dynamic(() => import('../components/Hero'), {
  loading: () => <p>Hero Section Loading...</p>,
})


const IndexPage = () => {
  return (
    <>
    <DynamicHero />
    <DynamicContact />
    </>
  )
}


export default IndexPage
