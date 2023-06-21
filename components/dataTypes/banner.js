import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'


const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript Data Types</h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about the various data types available in JavaScript with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript Data Types</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-6'>There are different types of data that we can use in a JavaScript program. For example,</p>
                        <div className='bg-light-dark p-3 mb-6'>
                            <p className='medium_text'>
                                const x = 5;<br />
                                const y = "Hello";
                            </p>
                        </div>
                        <p className='main_text pb-6'>Here,</p>
                        <ul className=''>
                            <li className='main_text pb-4 list-disc ml-2' >5 is an integer data.</li>
                            <li className='main_text list-disc ml-2'>"Hello" is a string data.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner