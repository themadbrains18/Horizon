import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'


const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript Objects</h1>
                    <p className='main_text pb-4 border_bottom'>In this tutorial, you will learn about JavaScript objects with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript Objects</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>
                    <div>
                        <p className='main_text mb-4'>In the JavaScript data types tutorial, you learned about 7 different primitive data types. And here, you are going to learn about the eighth data-type (JavaScript object).</p>
                        <p className='main_text mb-4'>JavaScript object is a non-primitive data-type that allows you to store multiple collections of data.</p>
                        <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                            <p className='body_text'><span className='!text-white'>Note: </span>If you are familiar with other programming languages, JavaScript objects are a bit different. You do not need to create classes in order to create objects.</p>
                        </div>
                        <p className='main_text mb-4'>Here is an example of a JavaScript object.</p>
                        <div className='bg-light-dark p-3 mb-6'>
                            <p className='medium_text'>
                        // object<br />
                                const student = &#123;<br />
                                firstName: 'ram',<br />
                                class: 10<br />
                                &#125;<br />
                            </p>
                        </div>
                        <p className='main_text mb-4'>Here, student is an object that stores values such as strings and numbers.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner