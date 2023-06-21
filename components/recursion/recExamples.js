import React from 'react'
import Image from 'next/image'
import flowchartFactorial from '/public/javascript-factorial-working.webp'

const RecExamples = () => {
    return (
        <>
            <section className='bg-dark py-5 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <p className='main_text mb-4'>A simple example of a recursive function would be to count down the value to 1.</p>
                    <h3 className='sec_heading text-[20px] mb-4'>Example 1: Print Numbers</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                    // program to count down numbers to 1 <br />
                            function countDown(number) &#123;<br /><br />

                        // display the number<br />
                            console.log(number);<br /><br />

                        // decrease the number value<br />
                            const newNumber = number - 1;<br /><br />

                        // base case<br />
                            if (newNumber &#62; 0) &#123;<br />
                            countDown(newNumber);<br />
                            &#125;<br />
                            &#125;<br /><br />

                            countDown(4);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            4<br />
                            3<br />
                            2<br />
                            1<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the user passes a number as an argument when calling a function.</p>
                    <p className='main_text mb-4'>In each iteration, the number value is decreased by 1 and function countDown() is called until the number is positive. Here, newNumber &#62; 0 is the base condition.</p>
                    <p className='main_text mb-4'>This recursive call can be explained in the following steps:</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            countDown(4) prints 4 and calls countDown(3)<br />
                            countDown(3) prints 3 and calls countDown(2)<br />
                            countDown(2) prints 2 and calls countDown(1)<br />
                            countDown(1) prints 1 and calls countDown(0)<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>When the number reaches 0, the base condition is met, and the function is not called anymore.</p>
                </div>
                <div className='pt-10'>
                    <h3 className='sec_heading text-[20px] mb-4'>Example 2: Find Factorial</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // program to find the factorial of a number<br />
                            function factorial(x) &#123;<br /><br />

                            // if number is 0<br />
                            if (x === 0) &#123;<br />
                            return 1;<br />
                            &#125;<br /><br />

                            // if number is positive<br />
                            else &#123;<br />
                            return x * factorial(x - 1);<br />
                            &#125;<br />
                            &#125;<br /><br />

                            const num = 3;<br /><br />

                        // calling factorial() if num is non-negative<br />
                            if (num &#62; 0) &#123;<br />
                            let result = factorial(num);<br />
                            console.log(`The factorial of $&#123;num&#125; is $&#123;result&#125;`);<br />
                            &#125;<br />
                        </p>
                    </div>


                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>The factorial of 3 is 6 </p>
                    </div>
                    <p className='main_text mb-4'>When you call function factorial() with a positive integer, it will recursively call itself by decreasing the number.</p>
                    <p className='main_text mb-4'>This process continues until the number becomes 1. Then when the number reaches 0, 1 is returned.</p>
                    <Image src={flowchartFactorial} width={750} height={500} alt='recursion img' className='mb-8 bg-white' />
                    <p className='main_text mb-4'>This recursive call can be explained in the following steps:</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            factorial(3) returns 3 * factorial(2)           <br />
                            factorial(2) returns 3 * 2 * factorial(1)<br />
                            factorial(1) returns 3 * 2 * 1 * factorial(0)<br />
                            factorial(0) returns 3 * 2 * 1 * 1              <br />
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RecExamples