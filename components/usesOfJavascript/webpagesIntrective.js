import React from 'react'
import Image from 'next/image'
import interactiveWebpage from '/public/interactive-webpage.webp'

const WebpagesIntrective = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>1. Making The Web Pages Interactive</h3>
                    <p className='main_text mb-4'>JavaScript is used to make the web pages interact with the user with various functionalities such as</p>
                    <ul>
                        <li className='main_text mb-4 ml-4 list-disc'>Form validation such as checking if an email format is correct or not</li>
                        <li className='main_text mb-4 ml-4 list-disc'>Displaying a countdown clock</li>
                        <li className='main_text mb-4 ml-4 list-disc'>Interactive maps</li>
                        <li className='main_text mb-4 ml-4 list-disc'>Creating cool animations</li>
                        <li className='main_text mb-4 ml-4 list-disc'>Different actions on the press of the button</li>
                        <li className='main_text mb-4 ml-4 list-disc'>Use of dropdown menu</li>
                    </ul>
                    <p className='main_text mb-4'>There are many other ways where JavaScript is used in making the web pages interactive.</p>
                    <p className='main_text mb-4'>Here is an image of a webpage that uses JS to make it interactive.</p>
                    <Image src={interactiveWebpage} width={650} height={735} alt='generator function img' className='bg-white my-6' />
                </div>
            </section>
        </>
    )
}

export default WebpagesIntrective
