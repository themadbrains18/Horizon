import React from 'react'

const ErrorHandling = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Error Handling</h2>
                    <p className='main_text mb-4'>While using the <code className='code_border'>async</code> function, you write the code in a synchronous manner. And you can also use the <code className='code_border'>catch()</code> method to catch the error. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            asyncFunc().catch( <br />
                            // catch error and do something<br />
                            )
                        </code>
                    </div>
                    <p className='main_text mb-4'>The other way you can handle an error is by using <code className='code_border'>try/catch</code> block. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // a promise <br />
                            let promise = new Promise(function (resolve, reject) &#123;<br />
                            setTimeout(function () &#123;<br />
                            resolve('Promise resolved')&#125;, 4000); <br />
                            &#125;);<br /><br />

                        // async function<br />
                            async function asyncFunc() &#123;<br />
                            try &#123;<br />
                                // wait until the promise resolves <br />
                            let result = await promise; <br /><br />

                            console.log(result);<br />
                            &#125;   <br />
                            catch(error) &#123;<br />
                            console.log(error);<br />
                            &#125;<br />
                            &#125;<br /><br />

                        // calling the async function<br />
                            asyncFunc(); // Promise resolved<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>In the above program, we have used <code className='code_border'>try/catch</code> block to handle the errors. If the program runs successfully, it will go to the <code className='code_border'>try</code> block. And if the program throws an error, it will go to the <code className='code_border'>catch</code> block.</p>


                </div>
            </section>
        </>
    )
}

export default ErrorHandling