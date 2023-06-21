import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>Javascript setTimeout()</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about the JavaScript setTimeout() method with the help of examples.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>setTimeout()</code> method executes a block of code after the specified time. The method executes the code only once.</p>
                    <p className='main_text mb-4'>The commonly used syntax of JavaScript setTimeout is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            setTimeout(function, milliseconds);
                        </code>
                    </div>
                    <p className='main_text mb-4'>Its parameters are:</p>
                    <ul>
                        <li className='main_text mb-4 list-disc'><span className='!font-extrabold'>function</span> - a function containing a block of code</li>
                        <li className='main_text mb-4 list-disc'><span className='!font-extrabold'>milliseconds</span> - the time after which the function is executed</li>
                    </ul>
                    <p className='main_text mb-4'>The <code className='code_border'>setTimeout()</code> method returns an intervalID, which is a positive integer.</p>
            </section>
        </>
    )
}

export default Introduction