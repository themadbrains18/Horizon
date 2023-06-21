import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'

const Banner = () => {
    return (
        <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h1 className='large_heading'>JavaScript Comments</h1>
                <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about JavaScript comments, why you should use them, and how to use them with the help of examples.            </p>
                <div className='py-10 mb-10 border_bottom'>
                    <h2 className='sec_heading'>Video: JavaScript Comments</h2>
                    <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                </div>
                <div>
                    <p className='main_text pb-10 mb-6 border_bottom'>JavaScript comments are hints that a programmer can add to make their code easier to read and understand. They are completely ignored by JavaScript engines.</p>
                    <p className='main_text mb-6'>There are two ways to add comments to code:</p>
                    <ul className=''>
                        <li className='main_text mb-4'>// - Single Line Comments</li>
                        <li className='main_text'>/* */ -Multi-line Comments</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Banner