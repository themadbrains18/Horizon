import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png' 

const Banner = () => {
  return (
    <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h1 className='large_heading'>JavaScript Type Conversions   </h1>
                <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about type conversions in JavaScript with the help of examples.</p>
                <div className='py-10 mb-10 border_bottom'>
                    <h2 className='sec_heading'>Video: Type Conversions</h2>
                    <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                </div>
                <div>
                    <p className='main_text pb-10 mb-6 border_bottom'>In programming, type conversion is the process of converting data of one type to another. For example: converting String data to Number.</p>
                    <p className='main_text mb-6'>There are two types of type conversion in JavaScript.</p>
                    <ul className=''>
                        <li className='main_text mb-4 list-disc' >Implicit Conversion - automatic type conversion</li>
                        <li className='main_text list-disc'>Explicit Conversion - manual type conversion</li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Banner