import React from 'react'

const PromiseChaining = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Promise Chaining</h3>
                    <p className='main_text mb-4'>Promises are useful when you have to handle more than one asynchronous task, one after another. For that, we use promise chaining.</p>
                    <p className='main_text mb-4'>You can perform an operation after a promise is resolved using methods <code className='code_border'>then()</code>, <code className='code_border'>catch()</code> and <code className='code_border'>finally()</code>.</p>
                    <h3 className='sec_heading mb-4'>JavaScript then() method</h3>
                    <p className='main_text mb-4'>The then() method is used with the callback when the promise is successfully fulfilled or resolved.</p>
                    <p className='main_text mb-4'>The syntax of then() method is:</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>promiseObject.then(onFulfilled, onRejected);</p>
                    </div>

                    <h3 className='sec_heading mb-4'>Example 2: Chaining the Promise with then()</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // returns a promise<br /><br />

                            let countValue = new Promise(function (resolve, reject) &#123;<br />
                            resolve("Promise resolved");<br />
                            &#125;);<br /><br />

                        // executes when promise is resolved successfully<br /><br />

                            countValue<br />
                            .then(function successValue(result) &#123;<br />
                            console.log(result);<br />
                            &#125)<br /><br />

                            .then(function successValue1() &#123;<br />
                            console.log("You can call multiple functions this way.");<br />
                            &#125;);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Promise resolved <br/>
                            You can call multiple functions this way.</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the then() method is used to chain the functions to the promise. The then() method is called when the promise is resolved successfully.</p>
                    <p className='main_text mb-4'>You can chain multiple then() methods with the promise.</p>
                </div>
            </section>
        </>
    )
}

export default PromiseChaining