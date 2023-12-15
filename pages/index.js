import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Hero from '@/components/landingpage/hero'
import ProgramSection from '@/components/landingpage/programSection'
import ProgramDetail from '@/components/landingpage/programDetail'
import ProgramPeriod from '@/components/landingpage/programPeriod'
import Mentors from '@/components/landingpage/mentors'
import Certify from '@/components/landingpage/certify'
import { Faq } from '@/components/landingpage/faq'
import PricingSection from '@/components/landingpage/pricingSection'
const inter = Inter({ subsets: ['latin'] })

export default function Home({show, setShow} ) {

  return (
    <>
      <Head>
        <title>Horizon</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
            
      <Hero show={show} setShow={setShow} />
      <ProgramSection />
      <ProgramDetail />
      <ProgramPeriod />
      <Mentors show={show} setShow={setShow} />
      <Certify />
      <PricingSection show={show} setShow={setShow}/>
      <Faq show={show} setShow={setShow} />
    </>
  )
}
