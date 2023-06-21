import React from 'react'

const ExampleTryCatchFinally = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript try...catch...finally Statement</h2>
                    <p className='main_text mb-4'>You can also use the try...catch...finally statement to handle exceptions. The finally block executes both when the code runs successfully or if an error occurs.</p>
                    <p className='main_text mb-4'>The syntax of try...catch...finally block is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            try &#123; <br />
                            // try_statements<br />
                            &#125;<br />
                            catch(error) &#123;<br />
                            // catch_statements <br />
                            &#125;<br />
                            finally() &#123;<br />
                            // codes that gets executed anyway<br />
                            &#125;<br />
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='sec_heading mt-10 mb-6'>Example 2: try...catch...finally Example</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const numerator= 100, denominator = 'a'; <br /><br />

                            try &#123;<br />
                            console.log(numerator/denominator);<br />
                            console.log(a);<br />
                            &#125;<br />
                            catch(error) &#123;<br />
                            console.log('An error caught'); <br />
                            console.log('Error message: ' + error);  <br />
                            &#125;<br />
                            finally &#123;<br />
                            console.log('Finally will execute every time');<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            NaN <br />
                            An error caught<br />
                            Error message: ReferenceError: a is not defined<br />
                            Finally will execute every time<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, an error occurs and that error is caught by the catch block. The finally block will execute in any situation ( if the program runs successfully or if an error occurs).</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You need to use catch or finally statement after try statement. Otherwise, the program will throw an error</p>
                        <p className='body_text'>Uncaught SyntaxError: Missing catch or finally after try.</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default ExampleTryCatchFinally