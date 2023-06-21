import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'

const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10'>
                <div className='border_bottom'>
                    <h1 className='large_heading'>JavaScript Variables and Constants</h1>
                    <p className='main_text pb-10 border_bottom'>In this tutorial, you will learn about JavaScript variables and constants, and also how to initialize and use them with the help of examples.</p>
                    <div className='py-10'>
                        <h2 className='sec_heading'>Video: JavaScript Variables</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6 border_bottom' />
                    </div>
                    <h1 className='sec_heading mb-6'>JavaScript Variables</h1>
                    <p className='main_text'>In programming, a variable is a container (storage area) to hold data. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE] mt-6'>
                        <p className='medium_text'>let num = 5;</p>
                    </div>
                    <p className='main_text pb-10 '>Here, num is a variable. It's storing 5.</p>
                </div>
            </section>
        </>
    )
}

export default Banner