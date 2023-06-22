import React from 'react'

const AsyncFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Example: Async Function</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // async function example<br /><br />

                            async function f() &#123;<br />
                            console.log('Async function.');<br />
                            return Promise.resolve(1);<br />
                            &#125;<br /><br />

                            f();<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Async function</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the async keyword is used before the function to represent that the function is asynchronous.</p>
                    <p className='main_text mb-4'>Since this function returns a promise, you can use the chaining method <code className='code_border'>then()</code> like this:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            async function f() &#123;
                            console.log('Async function.');
                            return Promise.resolve(1);
                            &#125;

                            f().then(function(result) &#123;
                            console.log(result)
                            &#125;);
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Async function <br />
                            1
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the f() function is resolved and the then() method gets executed.</p>
                </div>
            </section>
        </>
    )
}

export default AsyncFunc