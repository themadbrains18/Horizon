import React from 'react'
import Image from 'next/image'
import breakPoints from '/public/breakpoints.webp'
const SettingBreakPoints = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='border_bottom pb-10 mb-10'>
                    <h3 className='sec_heading mb-4'>3. Setting Breakpoints</h3>
                    <p className='main_text mb-4'>You can set breakpoints for JavaScript code in the debugger window.</p>
                    <p className='main_text mb-4'>JavaScript will stop executing at each breakpoint and lets you examine the values. Then, you can resume the execution of code.</p>
                    <p className='main_text mb-4'>Let's see an example by setting a breakpoint in the Chrome browser.</p>
                    <Image src={breakPoints} width={850} height={370} alt='generator function img' className='bg-white my-6' />
                    <p className='main_text mb-4'>You can set breakpoints through the Developers tool anywhere in the code.</p>
                    <p className='main_text mb-4'>Setting breakpoints is similar to putting a debugger in the code. Here, you just set breakpoints by clicking on the line number of the source code instead of manually calling the debugger function.</p>
                </div>
                <p className='main_text mb-4'>In the above methods, we have used the Chrome browser to show the debugging processes for simplicity. However, it's not your only option.</p>
                <p className='main_text mb-4'>All good IDEs provide a way for you to debug the code. The debugging process may be a bit different but the concept behind debugging is the same.</p>
            </section>
        </>
    )
}

export default SettingBreakPoints