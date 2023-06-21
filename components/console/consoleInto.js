import React from 'react'
import Image from 'next/image'

import inspect from '/public/inspect-browser.png'
import consoleTAb from '/public/console-tab-browser.png'
const ConsoleInto = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript console.log()</h1>
                    <p className='main_text pb-10'>In this tutorial, you will learn about JavaScript console with the help of examples.</p>
                    <h1 className='sec_heading mb-6'>JavaScript console.log()</h1>
                    <p className='main_text'> All modern browsers have a web console for debugging. The console.log() method is used to write messages to these consoles. For example,    </p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            let sum = 44;<br />
                            console.log(sum);   // 44
                        </p>
                    </div>
                    <p className='main_text pb-6'>When you run the above code, 44 is printed on the console.</p>
                    <p className='main_text pb-10 border_bottom'>To learn more about using a console, visit: JavaScript Getting Started.</p>

                    <h1 className='large_heading my-6'> console.log() Syntax</h1>
                    <p className='main_text'>Its syntax is:</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            console.log(message);
                        </p>
                    </div>
                    <p className='main_text pb-10 border_bottom'>Here, the message refers to either a variable or a value.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span> We will be using the console.log() method to display the output in our upcoming lessons.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ConsoleInto