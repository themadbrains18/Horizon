import React from 'react'
import Image from 'next/image'

import inspect from '/public/inspect-browser.png'
import consoleTAb from '/public/console-tab-browser.png'

const ConsoleTab = () => {
    return (
        <>
            <section className='bg-dark pb-10'>
                <div className='border_bottom'>
                    <h1 className='sec_heading mb-6'>1. Using Console Tab of Web Browsers</h1>
                    <p className='main_text pb-10'>All the popular web browsers have built-in JavaScript engines. Hence, you can run JavaScript on a browser. To run JavaScript on a browser,</p>
                    <ol>
                        <li className='main_text pb-6'>1. Open your favorite browser (here we will use Google Chrome).</li>
                        <li className='main_text pb-6'>2. Open the developer tools by right clicking on an empty area and select Inspect. Shortcut: F12.
                            <Image src={inspect} width={650} height={468} alt='inspect photo' className='py-6 ' />
                        </li>
                        <li className='main_text pb-6'>3. On the developer tools, go to the console tab. Then, write JavaScript code and press enter to run the code.
                        <Image src={consoleTAb} width={650} height={468} alt='inspect photo' className='py-6 ' />
                        </li>
                    </ol>
                </div>
            </section>
        </>
    )
}

export default ConsoleTab