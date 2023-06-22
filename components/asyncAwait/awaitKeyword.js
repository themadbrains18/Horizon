import React from 'react'
import Image from 'next/image'
import asyncAwaitimg from '/public/async-await-function.webp'

const AwaitKeyword = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript await Keyword</h3>
                    <p className='main_text mb-4'>The await keyword is used inside the async function to wait for the asynchronous operation.</p>
                    <p className='main_text mb-4'>The syntax to use await is:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            let result = await promise;
                        </code>
                    </div>
                    <p className='main_text mb-4'>The use of <code className='code_border'>await</code> pauses the async function until the promise returns a result (resolve or reject) value. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                    // a promise<br />
                            let promise = new Promise(function (resolve, reject) &#123;<br />
                            setTimeout(function () &#123;<br />
                            resolve('Promise resolved')&#125;, 4000); <br />
                            &#125;);<br /><br />

                    // async function<br />
                            async function asyncFunc() &#123;<br /><br />

                        // wait until the promise resolves <br />
                            let result = await promise; <br /><br />

                            console.log(result);<br />
                            console.log('hello');<br />
                            &#125;<br /><br />

                    // calling the async function<br />
                            asyncFunc();<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Promise resolved <br />
                            hello</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, a <code className='code_border'>Promise</code> object is created and it gets resolved after 4000 milliseconds. Here, the <code className='code_border'>asyncFunc()</code> function is written using the <code className='code_border'>async</code> function.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>await</code> keyword waits for the promise to be complete (resolve or reject).</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>let result = await promise;</p>
                    </div>
                    <p className='main_text mb-4'>Hence, hello is displayed only after promise value is available to the <code className='code_border'>result</code> variable.</p>
                    <p className='main_text mb-4'>In the above program, if <code className='code_border'>await</code> is not used, <code className='code_border'>hello</code> is displayed before <code className='code_border'>Promise resolved</code>.</p>
                    <Image src={asyncAwaitimg} width={900} height={500} alt='async Await img' className='bg-white mb-6' />
                    <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You can use <code className='code_border'>await</code> only inside of async functions.</p>
                    </div>
                    <p className='main_text mb-4'>The async function allows the asynchronous method to be executed in a seemingly synchronous way. Though the operation is asynchronous, it seems that the operation is executed in synchronous manner.</p>
                    <p className='main_text mb-4'>This can be useful if there are multiple promises in the program. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            let promise1; <br />
                            let promise2;<br />
                            let promise3;<br /><br />

                            async function asyncFunc() &#123;<br />
                            let result1 = await promise1;<br />
                            let result2 = await promise2;<br />
                            let result3 = await promise3;<br /><br />

                            console.log(result1);<br />
                            console.log(result1);<br />
                            console.log(result1);<br />
                            &#125;
                        </code>
                    </div>
                    <p className='main_text mb-4'>In the above program,  <code className='code_border'>await</code> waits for each promise to be complete.</p>
                </div>
            </section>
        </>
    )
}

export default AwaitKeyword