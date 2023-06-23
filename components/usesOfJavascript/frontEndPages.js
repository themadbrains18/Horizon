import React from 'react'
import Image from 'next/image'
import singlePageApp from '/public/single-page-application.webp'

const FrontEndPages = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>3. Creating Interactive Front-End Pages</h3>
                    <p className='main_text mb-4'>One of the growing uses of JS nowadays is creating super interactive front-end applications. For this, the commonly used JavaScript frameworks are React, Vue and Angular.</p>
                    <p className='main_text mb-4'>These applications load the resources as soon as the website is loaded which results in fast and responsive user interaction with great user experience.</p>
                    <p className='main_text mb-4'>Here is an image of a single-page application.</p>
                    <Image src={singlePageApp} width={650} height={735} alt='generator function img' className='bg-white my-6' />
                    <p className='main_text mb-4'>Some examples of single-page applications are Facebook, Google Maps, Gmail, Twitter, etc.</p>
                    <p className='main_text mb-4'>Various JavaScript frameworks such as Angular, React, MeteorJs, BackboneJs, EmberJs, PolymerJs, KnockoutJs, Aurelia could be used as the front-end technology to build interactive front end pages.</p>
                    <p className='main_text mb-4'>Two popular frameworks used for front-end application development are Angular and React.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Angular is developed by Google and React is developed by Facebook. Hence, we can expect good and long support for this framework.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FrontEndPages