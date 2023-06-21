import React from 'react'

const UsingExp = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>Using Expressions as Default Values</h2>
                <p className='main_text mb-4'>It is also possible to provide expressions as default values.</p>
                <h2 className='sec_heading text-[20px] mb-6'>Example 1: Passing Parameter as Default Values</h2>

                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        function sum(x = 1, y = x,  z = x + y) &#123;<br />
                        console.log( x + y + z );<br />
                        &#125;<br /><br />

                        sum(); // 4<br />
                    </p>
                </div>
                <p className='main_text mb-4'>In the above program,</p>
                <ul className='ml-4 mb-6'>
                    <li className='mb-6 ml-5 main_text list-disc'>The default value of <code className="code_border">x</code> is <strong>1</strong></li>
                    <li className='mb-6 ml-5 main_text list-disc'>The default value of <code className="code_border">y</code>  is set to  <code className="code_border">x</code> parameter</li>
                    <li className='mb-6 ml-5 main_text list-disc'>The default value of <code className="code_border">z</code> is the sum of <code className="code_border">x</code> and <code className="code_border">y</code></li>
                </ul>
                <p className='main_text mb-4'>If you reference the parameter that has not been initialized yet, you will get an error. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        function sum( x = y, y = 1 ) &#123;<br />
                        console.log( x + y);<br />
                        &#125;<br /><br />

                        sum(); <br />
                    </p>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-6 mt-6'>
                    <p className='medium_text'>ReferenceError: Cannot access 'y' before initialization</p>
                </div>

            </section>
        </>
    )
}

export default UsingExp