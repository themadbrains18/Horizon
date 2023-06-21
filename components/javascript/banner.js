import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'

const Banner = () => {

    return (
        <>
            <section className='bg-dark pb-10'>
                        <div className='border_bottom'>
                            <h1 className='large_heading'>JavaScript Operators</h1>
                            <p className='main_text pb-10 border_bottom'>In this tutorial, you will learn about different operators available in JavaScript and how to use them with the help of examples.</p>
                            <div className='py-10'>
                                <h2 className='sec_heading'>Video: JavaScript Operators</h2>
                                <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6 border_bottom' />
                            </div>
                            <div>
                                <h2 className='sec_heading mb-6'>What is an Operator?</h2>
                                <p className='main_text mb-6'>In JavaScript, an operator is a special symbol used to perform operations on operands (values and variables). For example,</p>
                                <div className='bg-light-dark p-3 mb-6'>
                                    <p className='flex gap-3'><span className='text-[#D19A66]'> 2 </span>  <span className='text-secondary'> + </span> <span className='text-[#D19A66]'> 3; </span> <span className='text-[#FFDDBE]'> / / 5 </span></p>
                                </div>
                                <p className='main_text pb-6'>Here + is an operator that performs addition, and 2 and 3 are operands.</p>
                            </div>
                        </div>
            </section>
        </>
    )
}

export default Banner