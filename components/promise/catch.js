import React from 'react'

import Image from 'next/image'
import promiseImg2 from '/public/javascript-promise-chaining.webp'

const Catch = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript catch() method</h2>
                    <p className='main_text mb-4'>The <code className='code_border'>catch()</code> method is used with the callback when the promise is rejected or if an error occurs. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // returns a promise<br />
                            let countValue = new Promise(function (resolve, reject) &#123;<br />
                            reject('Promise rejected'); <br />
                            &#125;);<br /><br />

                    // executes when promise is resolved successfully<br />
                            countValue.then(<br />
                            function successValue(result) &#123;<br />
                            console.log(result);<br />
                            &#125;,<br />
                            )<br /><br />

                    // executes if there is an error<br />
                            .catch(<br />
                            function errorValue(result) &#123;<br />
                            console.log(result);<br />
                            &#125;<br />
                            );
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Promise rejected</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the promise is rejected. And the <code className='code_border'>catch()</code> method is used with a promise to handle the error.</p>
                    <Image src={promiseImg2} width={700} height={406} alt='promise img' className='bg-white mb-8' />
                </div>
            </section>
        </>
    )
}

export default Catch