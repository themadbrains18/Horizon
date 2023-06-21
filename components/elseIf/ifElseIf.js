import React from 'react'
import Image from 'next/image'
import ifElseIfPhoto from '/public/js-if-else-if-statement_0.webp'

const IfElseIf = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript if...else if statement</h2>
                    <p className='main_text mb-6'>The if...else statement is used to execute a block of code among two alternatives. However, if you need to make a choice between more than two alternatives, if...else if...else can be used.</p>
                    <p className='main_text mb-6'>The syntax of the if...else if...else statement is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            if (condition1) &#123;<br />
                              // code block 1<br />
                            &#125;else if (condition2)&#123;<br />
                                // code block 2<br />
                            &#125;else &#123;<br />
                                 // code block 3<br />
                            &#125;<br />
                        </p>
                    </div>
                    <ul>
                        <li className='main_text mb-6 list-disc'>If condition1 evaluates to true, the code block 1 is executed.</li>
                        <li className='main_text mb-6 list-disc'>If condition1 evaluates to false, then condition2 is evaluated.</li>

                        <li className='main_text ml-5 mb-6 list-disc'>If the condition2 is true, the code block 2 is executed.</li>
                        <li className='main_text ml-5 mb-6 list-disc'>If the condition2 is false, the code block 3 is executed.</li>
                    </ul>
                    <Image src={ifElseIfPhoto} width={790} height={320} alt='if else if example' className='py-6 bg-white' />

                    <div>
                        <h2 className='sec_heading mt-10 mb-6'> Example 3: if...else if Statement</h2>
                        <div className='bg-light-dark p-3 mb-6'>
                            <p className='medium_text'>
                        // check if the number if positive, negative or zero<br />
                                const number = prompt("Enter a number: ");<br /><br /><br />


                        // check if number is greater than 0<br />
                                if (number &gt; 0) &#123;<br />
                                console.log("The number is positive");<br />
                                &#125;<br />
                        // check if number is 0<br />
                                else if (number == 0) &#123;<br />
                                console.log("The number is 0");<br />
                                &#125;<br />
                        // if number is neither greater than 0, nor zero<br />
                                else &#123;<br />
                                console.log("The number is negative");<br />
                                &#125;<br /><br />

                                console.log("The if...else if...else statement is easy");<br />

                            </p>
                        </div>
                        <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                        <div className='bg-light-dark p-5 mb-6 mt-6'>
                            <p className='medium_text'>
                                Enter a number: 0<br />
                                The number is 0<br />
                                The if...else if...else statement is easy<br />
                            </p>
                        </div>
                        <p className='main_text'>Suppose the user entered 0, then the first test condition number &gt; 0 evaluates to false. Then, the second test condition number == 0 evaluates to true and its corresponding block is executed.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default IfElseIf