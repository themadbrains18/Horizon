
import React from 'react'
import Image from 'next/image'
import ifElseImage from '/public/js-if-else-statement.webp'


const IfElse = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript if...else statement</h2>
                    <p className='main_text mb-6'>An if statement can have an optional else clause. The syntax of the if...else statement is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            if (condition)&#123;<br />
                            &#47; &#47; block of code if condition is true<br />
                            &#125; else &#123;<br />
                            &#47; &#47; block of code if condition is false<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>The if..else statement evaluates the condition inside the parenthesis.</p>

                    <p className='main_text mb-6'> If the condition is evaluated to true,</p>
                    <ul className='ml-4 mb-12'>
                        <li className='mb-4 main_text list-disc'>1. the code inside the body of if is executed</li>
                        <li className='mb-6 main_text list-disc'>2. the code inside the body of else is skipped from execution</li>
                    </ul>

                    <p className='main_text mb-6'>If the condition is evaluated to false,</p>
                    <ul className='ml-4'>
                        <li className='mb-4 main_text list-disc'>1. the code inside the body of else is executed</li>
                        <li className='mb-6 main_text list-disc'>2. the code inside the body of if is skipped from execution</li>
                    </ul>
                    <Image src={ifElseImage} width={560} height={309} alt='ile iffff img' className='bg-white my-6' />
                    <h2 className='sec_heading mt-10 mb-4'>Example 2: if…else Statement</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // check if the number is positive or negative/zero<br /><br />

                            const number = prompt("Enter a number: ");<br /><br />

                        // check if number is greater than 0<br />
                            if (number &gt; 0) &#123;<br />
                            console.log("The number is positive");<br />
                            &#125;<br />
                        // if number is not greater than 0<br />
                            else &#123;<br />
                            console.log("The number is either a negative number or 0");<br />
                            &#125;<br /><br />
                            console.log("The if...else statement is easy");<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Enter a number: 2<br />
                            The number is positive<br />
                            The if...else statement is easy<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>Suppose the user entered 2. In this case, the condition number &gt; 0 evaluates to true. Hence, the body of the if statement is executed and the body of the else statement is skipped.</p>
                    <h3 className='sec_heading text-[20px] mb-4'>Output 2</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Enter a number: -1<br />
                            The number is either a negative number or 0<br />
                            The if...else statement is easy<br />
                        </p>
                    </div>
                    <p className='main_text'>Suppose the user entered -1. In this case, the condition number &gt; 0 evaluates to false. Hence, the body of the else statement is executed and the body of the if statement is skipped.</p>
                </div>
            </section>
        </>
    )
}

export default IfElse