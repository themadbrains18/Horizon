import React from 'react'

const ThrowWithTryCatch = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript throw with try...catch</h2>
                    <p className='main_text mb-4'>The syntax of try...catch...throw is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            try &#123; <br/>
                            // body of try<br/>
                            throw exception;<br/>
                            &#125;<br/>
                            catch(error) &#123;<br/>
                            // body of catch  <br/>
                            &#125;<br/>
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>When the throw statement is executed, it exits out of the block and goes to the catch block. And the code below the throw statement is not executed.</p>
                    </div>
                </div>
                <div>
                    <h2 className='sec_heading mb-6'>Example 1: try...catch...throw Example</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const number = 40; <br />
                            try &#123; <br />
                            if(number &#62; 50) &#123; <br />
                            console.log('Success'); <br />
                            &#125; <br />
                            else &#123; <br /> <br />

                            // user-defined throw statement <br />
                            throw new Error('The number is low'); <br />
                            &#125; <br /> <br />

                            // if throw executes, the below code does not execute <br />
                            console.log('hello'); <br />
                            &#125; <br />
                            catch(error) &#123; <br />
                            console.log('An error caught'); <br />
                            console.log('Error message: ' + error); <br />
                            &#125; <br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>An error caught</p>
                        <p className='medium_text'>Error message: Error: The number is low</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, a condition is checked. If the number is less than 51, an error is thrown. And that error is thrown using the throw statement.</p>
                    <p className='main_text mb-6'>The throw statement specifies the string The number is low as an expression.</p>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You can also use other built-in error constructors for standard errors: TypeError, SyntaxError, ReferenceError, EvalError, InternalError, and RangeError.</p>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'> throw new ReferenceError('this is reference error');</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThrowWithTryCatch