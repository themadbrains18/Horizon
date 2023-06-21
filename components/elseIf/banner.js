import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png' 

const Banner = () => {
  return (
    <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h1 className='large_heading'>JavaScript if...else Statement</h1>
                <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about the if...else statement to create decision making programs with the help of examples.</p>
                <div className='py-10 mb-10 border_bottom'>
                    <h2 className='sec_heading'>Video: JavaScript if...else</h2>
                    <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                </div>
                <div>
                    <p className='main_text pb-10 mb-6 border_bottom'>In computer programming, there may arise situations where you have to run a block of code among more than one alternatives. For example, assigning grades A, B or C based on marks obtained by a student.</p>
                    <p className='main_text mb-6'>In such situations, you can use the JavaScript if...else statement to create a program that can make decisions.</p>
                    <p className='main_text mb-6'>In JavaScript, there are three forms of the if...else statement.</p>
                    
                    <ul className=''>
                        <li className='main_text mb-3 list-disc' >1. if statement</li>
                        <li className='main_text mb-3 list-disc'>2. if...else statement</li>
                        <li className='main_text list-disc'>3. if...else if...else statement</li>
                    </ul>
                </div>
            </div>
        </section>
  )
}

export default Banner