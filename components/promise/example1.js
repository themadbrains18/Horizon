import React from 'react'

import Image from 'next/image'
import promiseImg from '/public/javascript-promise.webp'
const Example1 = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <p className='main_text mb-4'>Let's suppose that the program below is an asynchronous program. Then the program can be handled by using a promise.</p>
                    <h3 className='sec_heading mb-4'>Example 1: Program with a Promise</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        const count = true;<br/><br/>

                        let countValue = new Promise(function (resolve, reject) &#123;<br/>
                            if (count) &#123;<br/>
                                resolve("There is a count value.");<br/>
                                &#125; else &#123;<br/>
                                reject("There is no count value");<br/>
                                &#125;<br/>
                                &#125;);<br/><br/>
                        
                        console.log(countValue);<br/>
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Promise &#123;&#60;resolved&#62;: "There is a count value."&#123;</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, a  <code className='code_border'>Promise</code> object is created that takes two functions: <code className='code_border'>resolve()</code> and <code className='code_border'>reject()</code>. <code className='code_border'>resolve()</code> is used if the process is successful and <code className='code_border'>reject()</code> is used when an error occurs in the promise.</p>
                    <p className='main_text mb-4'>The promise is resolved if the value of <code className='code_border'>count</code> is true.</p>
                    <Image src={promiseImg} width={700} height={406} alt='promise img' className='bg-white mb-8' />
                </div>
            </section>
        </>
    )
}

export default Example1