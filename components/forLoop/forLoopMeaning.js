import React from 'react'
import Image from 'next/image'
import forLoopImg from '/public/javascript-for-loop.webp'

const ForLoopMeaning = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript for loop</h2>
                    <p className='main_text mb-6'>The syntax of the for loop is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            for (initialExpression; condition; updateExpression) &#123;<br />
                            &#47;&#47; for loop body<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>Here, </p>
                    <p className='main_text mb-6'>1. The initialExpression initializes and/or declares variables and executes only once., </p>
                    <p className='main_text mb-4'>2. The condition is evaluated. </p>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-4 ml-5 main_text list-disc'>If the condition is false, the for loop is terminated.</li>
                        <li className=' ml-5 main_text list-disc'>If the condition is true, the block of code inside of the for loop is executed.</li>
                    </ul>
                    <p className='main_text mb-6'>3. The updateExpression updates the value of initialExpression when the condition is true.</p>
                    <p className='main_text mb-6'>4. The condition is evaluated again. This process continues until the condition is false. </p>
                    <p className='main_text mb-6'>To learn more about the conditions, visit JavaScript Comparison and Logical Operators.</p>
                    <Image src={forLoopImg} width={600} height={400} alt='flowChart of For loop' className='py-6 bg-white' />
                </div>
            </section>
        </>
    )
}

export default ForLoopMeaning