import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'

const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10'>
                <div className='border_bottom'>
                    <h1 className='large_heading'>Getting Started With JavaScript</h1>
                    <p className='main_text pb-10 border_bottom'>In this tutorial, you will learn about different ways to run JavaScript on your computer.</p>
                    <div className='py-10'>
                        <h2 className='sec_heading'>Video: JavaScript Operators</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6 border_bottom' />
                    </div>
                    <p className='main_text pb-6 '>JavaScript is a popular programming language that has a wide range of applications.</p>
                    <p className='main_text pb-6 '>JavaScript was previously used mainly for making webpages interactive such as form validation, animation, etc. Nowadays, JavaScript is also used in many other areas such as server-side development, mobile app development and so on.</p>
                    <p className='main_text pb-6 '>Because of its wide range of applications, you can run JavaScript in several ways:</p>
                    <ul>
                        <li className='main_text pb-6 list-disc'>Using console tab of web browsers</li>
                        <li className='main_text pb-6 list-disc'>Using Node.js</li>
                        <li className='main_text pb-6 list-disc'>By creating web pages</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Banner