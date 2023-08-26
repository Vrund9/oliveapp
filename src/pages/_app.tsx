import React from 'react'
import { AppProps } from 'next/app'
import { Manrope } from 'next/font/google'

import '../styles/index.css'
import Head from 'next/head';
import Footer from '../components/Footer';
import Header from '../components/Header';

const manrope = Manrope({
  subsets: ['latin'],
  variable: '--font-manrope'
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="" href="./favicon.ico" />
      </Head>
      <div className='gradients'></div>
      <main className={`${manrope.variable} font-manrope bg-white main-wrapper`}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </main>
    </>
  )
}

export default MyApp;