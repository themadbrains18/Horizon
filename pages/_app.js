import Footer from '@/components/global/footer'
import Header from '@/components/global/header'

import '../styles/globals.css'
import { useState } from 'react'

export default function App({ Component, pageProps }) {
  const [show,setShow ] = useState(false);
  return( 
  <>
    <Header show={show} setShow={setShow}  />
    <Component {...pageProps}  show={show} setShow={setShow} />
    <Footer />
  </>
  )
}
