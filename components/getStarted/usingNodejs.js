import React from 'react'
import Image from 'next/image'

import ide from '/public/hello-node-ide.png'
import execute from '/public/node-execute.png'



const UsingNodejs = () => {
    return (
        <>
            <section className='bg-dark pb-10'>
                <div className='border_bottom'>
                    <h1 className='sec_heading mb-6'>Using Node.js</h1>
                    <p className='main_text pb-10'>Node is a back-end run-time environment for executing JavaScript code. To run JS using Node.js, follow these steps:</p>
                    <ol>
                        <li className='main_text pb-6'>1. Install the latest version of Node.js.</li>
                        <li className='main_text pb-6'>2. Install an IDE/Text Editor like Visual Studio Code. In VS code, create a file &gt; write JS code &gt; save it with .js extension.
                            <Image src={ide} width={650} height={468} alt='inspect photo' className='py-6 ' />
                        </li>
                        <li className='main_text pb-6'>3.Open up the terminal/command prompt &gt; navigate to the file location &gt; type node hello.js &gt; hit enter.
                            <Image src={execute} width={650} height={468} alt='inspect photo' className='py-6 ' />
                        </li>
                        <li className='main_text pb-6'>4. You will get output on the terminal.</li>
                    </ol>
                    <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span> It is also possible to run JavaScript on the terminal/command prompt directly. For that, simply type node and press enter. Then you can start writing JS code.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsingNodejs