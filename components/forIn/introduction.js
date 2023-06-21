import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript for...in loop</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about the JavaScript for...in loop with the help of examples.</p>
                    <p className='main_text mb-4'>In the previous tutorials, we have covered:</p>
                    <ul>
                        <li className='main_text mb-4 !font-black list-disc'>JavaScript while and do...while loop</li>
                        <li className='main_text mb-4 !font-black list-disc'>JavaScript for loop</li>
                    </ul>
                    <p className='main_text mb-4'>There are also other types of loops. The for..in loop in JavaScript allows you to iterate over all property keys of an object.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='sec_heading mb-4'>JavaScript for...in loop</h2>
                    <p className='main_text mb-4'>The syntax of the for...in loop is:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            for (key in object) &#123;
                            // body of for...in
                            &#125;
                        </p>
                    </div>
                    <p className='main_text mb-4'>In each iteration of the loop, a key is assigned to the key variable. The loop continues for all object properties.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Once you get keys, you can easily find their corresponding values.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction