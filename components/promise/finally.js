import React from 'react'

const Finally = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript finally() method</h2>
                    <p className='main_text mb-4'>You can also use the <code className='code_border'>finally()</code> method with promises. The <code className='code_border'>finally()</code> method gets executed when the promise is either resolved successfully or rejected. For example,    </p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // returns a promise <br/>
                            let countValue = new Promise(function (resolve, reject) &#123;<br/>
                            // could be resolved or rejected   <br/>
                            resolve('Promise resolved');<br/>
                            &#125;);<br/><br/>

                            // add other blocks of code<br/>
                            countValue.finally(<br/>
                            function greet() &#123;<br/>
                            console.log('This code is executed.');<br/>
                            &#125;<br/>
                            );<br/>
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>This code is executed.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Finally