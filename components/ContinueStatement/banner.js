import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'


const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript continue Statement</h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about the continue statement with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript continue Statement</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-6'>The continue statement is used to skip the current iteration of the loop and the control flow of the program goes to the next iteration.</p>
                        <p className='main_text mb-6'>The syntax of the continue statement is:</p>

                        <div className='bg-light-dark p-3 mb-6'>
                            <p className='medium_text'>
                            continue [label];
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