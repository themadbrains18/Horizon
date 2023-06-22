import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='large_heading mb-6'>Javascript setInterval()</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about the JavaScript setInterval() method with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, a block of code can be executed in specified time intervals. These time intervals are called timing events.</p>
                    <p className='main_text mb-4'>There are two methods for executing code at specific intervals. They are:</p>
                    <ul>
                        <li className='main_text mb-4  ml-4 list-disc'>setInterval()</li>
                        <li className='main_text mb-4 ml-4 list-disc'>setTimeout()</li>
                    </ul>
                    <p className='main_text mb-4'>In this tutorial, you will learn about the <code className='code_border'>setInterval()</code> method.</p>
                </div>
                <div>
                    <h2 className='sec_heading mb-6'>JavaScript setInterval()</h2>
                    <p className='main_text mb-4'>The <code className='code_border'>setInterval()</code> method repeats a block of code at every given timing event.</p>
                    <p className='main_text mb-4'>The commonly used syntax of JavaScript setInterval is:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            setInterval(function, milliseconds);
                        </code>
                    </div>
                    <p className='main_text mb-4'>Its parameters are:</p>
                    <ul>
                        <li className='main_text mb-4 list-disc'><span className='!font-extrabold'>function</span> - a function containing a block of code</li>
                        <li className='main_text mb-4 list-disc'><span className='!font-extrabold'>milliseconds</span> - the time interval between the execution of the function</li>
                    </ul>
                    <p className='main_text mb-4'>The  <code className='code_border'>setInterval()</code> method returns an intervalID which is a positive integer.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction