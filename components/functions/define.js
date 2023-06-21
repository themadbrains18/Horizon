import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'


const Define = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript Function and Function Expressions</h1>
                    <p className='main_text mb-6'>In this tutorial, you will learn about JavaScript function and function expressions with the help of examples.</p>
                    <h2 className='sec_heading mb-4'>JavaScript Function</h2>
                    <p className='main_text mb-4'>A function is a block of code that performs a specific task.</p>
                    <p className='main_text mb-4'>Suppose you need to create a program to create a circle and color it. You can create two functions to solve this problem:</p>
                    <ul>
                        <li className='main_text mb-4 list-disc'>a function to draw the circle</li>
                        <li className='main_text mb-4 list-disc'>a function to color the circle</li>
                    </ul>
                    <p className='main_text mb-4'>Dividing a complex problem into smaller chunks makes your program easy to understand and reusable.</p>
                    <p className='main_text mb-4'>JavaScript also has a huge number of inbuilt functions. For example, Math.sqrt() is a function to calculate the square root of a number.</p>
                    <p className='main_text'>In this tutorial, you will learn about user-defined functions.</p>
                </div>
            </section>
        </>
    )
}

export default Define