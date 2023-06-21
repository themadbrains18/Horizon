import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'


const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript break Statement</h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about the break statement with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript break Statement</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-6'>The break statement is used to terminate the loop immediately when it is encountered.</p>
                        <p className='main_text mb-6'>The syntax of the break statement is:</p>

                        <div className='bg-light-dark p-3 mb-6'>
                            <p className='medium_text'>
                                break [label];
                            </p>
                        </div>
                        <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                            <p className='body_text'><span className='!text-white'>Note: </span>label is optional and rarely used.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner