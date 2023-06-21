import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'


const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript while and do...while Loop</h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about while loop and do...while loop with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript while Loop</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-6'>In programming, loops are used to repeat a block of code. For example, if you want to show a message 100 times, then you can use a loop. It's just a simple example; you can achieve much more with loops.</p>
                        <p className='main_text'>  In the previous tutorial, you learned about the JavaScript for loop. Here, you are going to learn about while and do...while loops.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner