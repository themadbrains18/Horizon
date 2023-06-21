import React from 'react'
import Image from 'next/image'
import ifImage from '/public/js-if-statement_0.webp'

const IfStatement = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript if Statement</h2>
                    <p className='main_text mb-6'>The syntax of the if statement is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            if (condition) &#123;<br />
                                // the body of if <br />
                            &#125;
                        </p>
                    </div>
                    <p className='main_text mb-4'>The if statement evaluates the condition inside the parenthesis ().</p>
                    <p className='main_text mb-4'>1. If the condition is evaluated to true, the code inside the body of if is executed.</p>
                    <p className='main_text mb-4'>2. If the condition is evaluated to false, the code inside the body of if is skipped.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>  The code inside { } is the body of the if statement.</p>
                    </div>
                    <Image src={ifImage} width={550} height={297} alt='Ifffffff' className='py-6 bg-white mt-6' />
                    <h2 className='sec_heading mt-10 mb-6'>Example 1: if Statement</h2>
                    <div className='bg-light-dark p-5'>
                        <p className='medium_text'>
                    // check if the number is positive<br /><br />

                            const number = prompt("Enter a number: ");<br /><br />

                            // check if number is greater than 0<br />
                            if (number &#62; 0)&#123;<br />
                                // the body of the if statement<br />
                            console.log("The number is positive");<br />
                            &#125;<br /><br />

                            console.log("The if statement is easy");<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] my-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            Enter a number: 2 <br />
                            The number is positive <br />
                            The if statement is easy <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Suppose the user entered 2. In this case, the condition number &gt; 0 evaluates to true. And, the body of the if statement is executed.</p>

                    <h3 className='sec_heading text-[20px] my-4'>Output 2</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            Enter a number: -1<br />
                            The if statement is easy
                        </p>
                    </div>
                    <p className='main_text mb-4'>Suppose the user entered -1. In this case, the condition number  &gt; 0 evaluates to false. Hence, the body of the if statement is skipped.</p>
                    <p className='main_text mb-4'>Since console.log("The if statement is easy"); is outside the body of the if statement, it is always executed.</p>
                    <p className='main_text'>Comparison and logical operators are used in conditions. So to learn more about comparison and logical operators, you can visit JavaScript Comparison and Logical Operators.</p>

                </div>
            </section>
        </>
    )
}

export default IfStatement