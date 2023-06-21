import React from 'react'
import Image from 'next/image'
import whileLoopImg from '/public/javascript-while-loop.webp'

const WhileLoopMeaning = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript while Loop</h2>
                    <p className='main_text mb-6'>The syntax of the while loop is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            while (condition) &#123;<br />
                            // body of loop
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>Here, </p>
                    <p className='main_text mb-4'>1. A while loop evaluates the condition inside the parenthesis ().</p>
                    <p className='main_text mb-4'>2. If the condition evaluates to true, the code inside the while loop is executed.</p>
                    <p className='main_text mb-4'>3. The condition is evaluated again.</p>
                    <p className='main_text mb-4'>4. This process continues until the condition is false.</p>
                    <p className='main_text mb-6'>5. When the condition evaluates to false, the loop stops.</p>
                    <p className='main_text mb-6'>To learn more about the conditions, visit JavaScript Comparison and Logical Operators.</p>

                    <h2 className='sec_heading mt-10 mb-6'>Flowchart of while Loop</h2>
                    
                    <Image src={whileLoopImg} width={600} height={400} alt='flowChart of For loop' className='py-6 bg-white' />
                </div>
            </section>
        </>
    )
}

export default WhileLoopMeaning