import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'
import flowchartSwitch from '/public/javascript-switch-statement.webp'

const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript Variable Scope</h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about variable scope in JavaScript with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript Variable Scope</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-6'>Scope refers to the availability of variables and functions in certain parts of the code.</p>
                        <p className='main_text mb-6'>In JavaScript, a variable has two types of scope:</p>
                        <p className='main_text mb-6'>1. Global Scope</p>
                        <p className='main_text'>2. Local Scope</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner