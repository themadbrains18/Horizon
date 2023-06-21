import React from 'react'

import Image from 'next/image'
import funcReturnImg from '/public/javascript-return-statement.png'
const FuncReturn = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Function Return</h2>
                    <p className='main_text mb-4'>The return statement can be used to return the value to a function call.</p>
                    <p className='main_text mb-4'>The return statement denotes that the function has ended. Any code after return is not executed.</p>
                    <p className='main_text mb-4'>If nothing is returned, the function returns an undefined value.</p>
                    <Image src={funcReturnImg} width={700} height={600} alt='Func return img' className='bg-white' />
                    <div>
                        <h3 className='sec_heading text-[20px] mt-10 mb-4'>Example 4: Sum of Two Numbers</h3>
                        <div className='bg-light-dark p-5 mb-6 mt-6'>
                            <p className='medium_text'>
                            // program to add two numbers<br />
                            // declaring a function<br />
                                function add(a, b) &#123;<br />
                                return a + b;<br />
                                &#125;<br /><br />

                            // take input from the user<br />
                                let number1 = parseFloat(prompt("Enter first number: "));<br />
                                let number2 = parseFloat(prompt("Enter second number: "));<br /><br />

                            // calling function<br />
                                let result = add(number1,number2);<br /><br />

                            // display the result<br />
                                console.log("The sum is " + result);<br />

                            </p>
                        </div>

                        <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                        <div className='bg-light-dark p-5 mb-6 mt-6'>
                            <p className='medium_text'>
                                Enter first number: 3.4<br />
                                Enter second number: 4<br />
                                The sum is 7.4<br />
                            </p>
                        </div>
                        <p className='main_text mb-6'>In the above program, the sum of the numbers is returned by the function using the return statement. And that value is stored in the result variable.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FuncReturn