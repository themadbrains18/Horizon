import React from 'react'
import Image from 'next/image'
import FlowchartDoWhile from '/public/javascript-do-while-loop.webp'



const WhileExamples = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Example 1: Display Numbers from 1 to 5</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
            // program to display numbers from 1 to 5<br />
            // initialize the variable<br />
                            let i = 1, n = 5;<br /><br />

            // while loop from i = 1 to 5<br />
                            while (i &#60;= n) &#123;<br />
                            console.log(i);<br />
                            i += 1;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>1</p>
                        <p className='medium_text'>2</p>
                        <p className='medium_text'>3</p>
                        <p className='medium_text'>4</p>
                        <p className='medium_text'>5</p>
                    </div>


                    <h2 className='sec_heading mt-10 mb-6'>Example 2: Sum of Positive Numbers Only</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
            // program to find the sum of positive numbers<br />
            // if the user enters a negative numbers, the loop ends<br />
            // the negative number entered is not added to sum<br /><br />

                            let sum = 0;<br /><br />

            // take input from the user<br />
                            let number = parseInt(prompt('Enter a number: '));<br /><br />

                            while(number &#62;= 0) &#123;<br /><br />

                // add all positive numbers<br />
                            sum += number;<br /><br />

                // take input again if the number is positive<br />
                            number = parseInt(prompt('Enter a number: '));<br />
                            &#125;<br /><br />

            // display the sum<br />
                            console.log(`The sum is $ &#123;sum &#125;.`);<br />
                        </p>
                    </div>

                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Enter a number: 2</p>
                        <p className='medium_text'>Enter a number: 5</p>
                        <p className='medium_text'>Enter a number: 7</p>
                        <p className='medium_text'>Enter a number: 0</p>
                        <p className='medium_text'>Enter a number: -3</p>
                        <p className='medium_text'>The sum is 14.</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, the user is prompted to enter a number.</p>
                    <p className='main_text mb-6'>Here, parseInt() is used because prompt() takes input from the user as a string. And when numeric strings are added, it behaves as a string. For example, '2' + '3' = '23'. So parseInt() converts a numeric string to number.</p>
                    <p className='main_text mb-6'>The while loop continues until the user enters a negative number. During each iteration, the number entered by the user is added to the sum variable.</p>
                    <p className='main_text mb-6'>When the user enters a negative number, the loop terminates. Finally, the total sum is displayed.</p>

                    <h2 className='sec_heading mt-10 mb-6'>  JavaScript do...while Loop</h2>
                    <p className='main_text mb-6'>The syntax of do...while loop is:</p>
                    <div className='bg-light-dark p-5 mb-4 medium_text'>
                        do &#123; <br />
                            // body of loop<br />
                        &#125; while(condition)
                    </div>
                    <p className='main_text mb-6'>Here,</p>
                    <ul>
                        <li className='main_text mb-6'>1. The body of the loop is executed at first. Then the condition is evaluated.</li>
                        <li className='main_text mb-6'>2. If the condition evaluates to true, the body of the loop inside the do statement is executed again.</li>
                        <li className='main_text mb-6'>3. The condition is evaluated once again.</li>
                        <li className='main_text mb-6'>4. If the condition evaluates to true, the body of the loop inside the do statement is executed again.</li>
                        <li className='main_text mb-6'>5. This process continues until the condition evaluates to false. Then the loop stops.</li>
                    </ul>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>do...while loop is similar to the while loop. The only difference is that in do…while loop, the body of loop is executed at least once.</p>
                    </div>

                    <h2 className='sec_heading mt-10 mb-6'>Flowchart of do...while Loop</h2>
                    <Image src={FlowchartDoWhile} width={760} height={430} alt='Flowchart Do While' className=' my-6 bg-white' />

                    <p className='main_text mb-6'>Let's see the working of do...while loop.</p>
                    <h2 className='sec_heading mt-10 mb-6'>  Example 3: Display Numbers from 1 to 5</h2>
                    <div className='bg-light-dark p-5 mb-4 medium_text'>
                    // program to display numbers <br />
                        let i = 1;<br />
                        const n = 5;<br /><br />

                    // do...while loop from 1 to 5<br />
                        do  &#123;<br />
                        console.log(i);<br />
                        i++;<br />
                        &#125; while(i &#60;= n);<br />
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>1</p>
                        <p className='medium_text'>2</p>
                        <p className='medium_text'>3</p>
                        <p className='medium_text'>4</p>
                        <p className='medium_text'>5</p>
                    </div>


                    <h2 className='sec_heading mt-10 mb-6'>  Example 4: Sum of Positive Numbers</h2>
                    <div className='bg-light-dark p-5 mb-4 medium_text'>
                    // to find the sum of positive numbers<br />
                        // if the user enters negative number, the loop terminates<br />
                        // negative number is not added to sum<br /><br />

                        let sum = 0;<br />
                        let number = 0;<br /><br />

                        do &#123;<br />
                        sum += number;<br />
                        number = parseInt(prompt('Enter a number: '));<br />
                        &#125; while(number &#62;= 0)<br /><br />

                        console.log(`The sum is $&#123;sum&#125;.`);<br />
                    </div>
                    <h3 className='sec_heading text-[20px] mb-6'>Output 1</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Enter a number: 2</p>
                        <p className='medium_text'>Enter a number: 4</p>
                        <p className='medium_text'>Enter a number: -500</p>
                        <p className='medium_text'>The sum is 6.</p>
                    </div>
                    <p className='main_text mb-6'>Here, the do...while loop continues until the user enters a negative number. When the number is negative, the loop terminates; the negative number is not added to the sum variable.
                    </p>
                    <h3 className='sec_heading text-[20px] mb-6'>Output 2</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Enter a number: -80</p>
                        <p className='medium_text'>The sum is 0.</p>
                    </div>
                    <p className='main_text mb-10'>   The body of the do...while loop runs only once if the user enters a negative number.</p>


                    <h3 className='sec_heading text-[20px] mb-4'>Infinite while Loop</h3>
                    <p className='main_text mb-6'> If the condition of a loop is always true, the loop runs for infinite times (until the memory is full). For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // infinite while loop <br />
                            while(true)&#123;<br />
                                // body of loop<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-10'>Here is an example of an infinite do...while loop.</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // infinite do...while loop <br />
                            const count = 1;<br />
                            do &#123;<br />
                           // body of loop<br />
                            &#125; while(count == 1)<br />
                        </p>
                    </div>
                    <p className='main_text mb-10'>In the above programs, the condition is always true. Hence, the loop body will run for infinite times.</p>



                    <h2 className='sec_heading mt-10 mb-4'> for Vs while Loop</h2>
                    <p className='main_text mb-4'>A for loop is usually used when the number of iterations is known. For example,</p>
                    <div className='bg-light-dark p-5 mb-4 medium_text'>
                    // this loop is iterated 5 times <br />
                        for (let i = 1; i &#60;=5; ++i) &#123;<br />
                        // body of loop<br />
                        &#125;<br />
                    </div>
                    <p className='main_text mb-4'>And while and do...while loops are usually used when the number of iterations are unknown. For example,</p>
                    <div className='bg-light-dark p-5 mb-4 medium_text'>
                        while (condition) &#123; <br/>
                        // body of loop<br/>
                        &#125;<br/>
                    </div>  


                </div>
            </section>
        </>
    )
}

export default WhileExamples