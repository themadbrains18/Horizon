import React from 'react'

const PromisVsCallback = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Promise Versus Callback</h3>
                    <p className='main_text mb-4'>Promises are similar to callback functions in a sense that they both can be used to handle asynchronous tasks.</p>
                    <p className='main_text mb-4'>JavaScript callback functions can also be used to perform synchronous tasks.</p>
                    <p className='main_text mb-4'>Their differences can be summarized in the following points:</p>
                    <h3 className='sec_heading mb-4'>JavaScript Promise</h3>
                    <ul>
                        <li className='main_text mb-6 list-disc'>1. The syntax is user-friendly and easy to read.</li>
                        <li className='main_text mb-6 list-disc'>2. Error handling is easier to manage.</li>
                        <li className='main_text mb list-disc'>3: Example:</li>
                    </ul>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            api().then(function(result) &#123; <br />
                            return api2() ;<br />
                            &#125;).then(function(result2) &#123;<br />
                            return api3();<br />
                            &#125;).then(function(result3) &#123;<br />
                            // do work<br />
                            &#125;).catch(function(error) &#123;<br />
                            //handle any error that may occur before this point <br />
                            &#125;);<br />
                        </code>
                    </div>

                    <h3 className='sec_heading mb-4'>JavaScript Callback</h3>
                    <ul>
                        <li className='main_text mb-6 list-disc'>1. The syntax is difficult to understand.</li>
                        <li className='main_text mb-6 list-disc'>2. Error handling may be hard to manage.</li>
                        <li className='main_text mb list-disc'>3: Example:</li>
                    </ul>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            api(function(result)&#123;<br />
                            api2(function(result2)&#123;<br />
                            api3(function(result3)&#123;<br />
                            // do work<br />
                            if(error) &#123;<br />
                            // do something<br />
                            &#125;<br />
                            else &#123;<br />
                            // do something<br />
                            &#125;<br />
                            &#125;);<br />
                            &#125;);<br />
                            &#125;);<br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PromisVsCallback