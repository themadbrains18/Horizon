import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='large_heading mb-6'>JavaScript for... of Loop</h3>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript for...of loop with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, there are three ways we can use a <span className='code_border'>for</span> loop.</p>
                    <ul>
                        <li className='main_text mb-4 ml-4 list-disc'>JavaScript for loop</li>
                        <li className='main_text mb-4 ml-4 list-disc'>JavaScript for...in loop</li>
                        <li className='main_text mb-4 ml-4 list-disc'>JavaScript for...of loop</li>
                    </ul>
                    <p className='main_text mb-4'>The <span className='code_border'>for...of</span> loop was introduced in the later versions of <span className='!font-extrabold'>JavaScript ES6.</span> </p>
                    <p className='main_text mb-4'>The <span className='code_border'>for...of</span> loop in JavaScript allows you to iterate over iterable objects (arrays, sets, maps, strings etc).</p>
                </div>
            </section>
        </>
    )
}

export default Introduction