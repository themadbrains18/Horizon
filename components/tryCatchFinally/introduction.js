import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='large_heading mb-6'>JavaScript try...catch...finally Statement</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about the try...catch...finally statements to handle exceptions in JavaScript with the help of examples.</p>
                    <p className='main_text mb-4'>The try, catch and finally blocks are used to handle exceptions (a type of an error). Before you learn about them, you need to know about the types of errors in programming.</p>
                    <h2 className='sec_heading mb-6'>Types of Errors</h2>
                    <p className='main_text mb-4'>In programming, there can be two types of errors in the code:</p>
                    <p className='main_text mb-4'><span className='font-black mr-1'>Syntax Error: </span> Error in the syntax. For example, if you write consol.log('your result');, the above program throws a syntax error. The spelling of console is a mistake in the above code.</p>
                    <p className='main_text mb-8'><span className='font-black mr-1'>Runtime Error: </span>This type of error occurs during the execution of the program. For example,
                        calling an invalid function or a variable.</p>
                    <p className='main_text mb-4'>These errors that occur during runtime are called <span className='!font-extrabold'>exceptions.</span>  Now, let's see how you can handle these exceptions.</p>
                </div>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='sec_heading mb-6'>JavaScript try...catch Statement</h1>
                    <p className='main_text mb-4'>The try...catch statement is used to handle the exceptions. Its syntax is:    </p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            try &#123; <br />
                            // body of try<br />
                            &#125;<br />
                            catch(error) &#123;<br />
                            // body of catch  <br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The main code is inside the try block. While executing the try block, if any error occurs, it goes to the catch block. The catch block handles the errors as per the catch statements.</p>
                    <p className='main_text mb-4'>If no error occurs, the code inside the try block is executed and the catch block is skipped.</p>
                </div>
                <div>
                    <h1 className='sec_heading mb-6'>Example 1: Display Undeclared Variable</h1>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // program to show try...catch in a program <br /><br />

                            const numerator= 100, denominator = 'a';<br /><br />

                            try &#123;<br />
                            console.log(numerator / denominator);<br /><br />

                            // forgot to define variable a      <br />
                            console.log(a);<br />
                            &#125;<br />
                            catch(error) &#123;<br />
                            console.log('An error caught');<br />
                            console.log('Error message: ' + error);<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            NaN<br />
                            An error caught<br />
                            Error message: ReferenceError: a is not defined<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, a variable is not defined. When you try to print the a variable, the program throws an error. That error is caught in the catch block.</p>
                </div>
            </section>

        </>
    )
}

export default Introduction