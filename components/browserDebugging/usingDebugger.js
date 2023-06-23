import React from 'react'
import Image from 'next/image'
import dubuggerMehodImg from '/public/debugger-pause.webp'
import dubuggerPlayImg from '/public/debugger-play.webp'


const UsingDebugger = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>2. Using debugger</h3>
                    <p className='main_text mb-4'>The <code className='code_border'>debugger</code> keyword stops the execution of the code and calls the debugging function.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>debugger</code> is available in almost all JavaScript engines.</p>
                    <p className='main_text mb-4'>Let's see an example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let a = 6;               <br />
                            let b = 9; <br />
                            let c = a * b; <br />
                            <br />
                            // stops the execution <br />
                            debugger; <br />
                            <br />
                            console.log(c); <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Let's see how you can use debugger in a Chrome browser.</p>
                    <Image src={dubuggerMehodImg} width={850} height={700} alt='Debugger methodimg' className='bg-white my-6' />
                    <p className='main_text mb-4'>The above program pauses the execution of the program in the line containing the debugger.</p>
                    <p className='main_text mb-4'>You can then resume the flow control after examining the program. </p>
                    <p className='main_text mb-4'>The rest of the code will execute when you resume the script by pressing play in the console.</p>
                    <Image src={dubuggerPlayImg} width={850} height={700} alt='Debugger methodimg' className='bg-white my-6' />
                </div>
            </section>
        </>
    )
}

export default UsingDebugger