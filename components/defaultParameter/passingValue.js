import React from 'react'

const PassingValue = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mt-10 mb-4'>Example 2: Passing Function Value as Default Value</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                    // using a function in default value expression<br /><br />

                            const sum = () =&#62; 15;<br /><br />

                            const calculate = function( x, y = x * sum() ) &#123;<br />
                            return x + y;<br />
                            &#125;<br /><br />

                            const result = calculate(10);<br />
                            console.log(result);            // 160<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program,</p>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-6 ml-5 main_text list-disc'><strong>10</strong> is passed to the <code className="code_border">calculate()</code> function.</li>
                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border">x</code> becomes <code className="code_border">10</code>, and <code className="code_border">y</code> becomes <code className="code_border">150</code> (the sum function returns <code className="code_border">15</code>).</li>
                        <li className='mb-6 ml-5 main_text list-disc'>The result will be <code className="code_border">160</code>.</li>
                    </ul>
                </div>
                <div>
                    <h2 className='sec_heading mt-10 mb-4'>Passing undefined Value</h2>
                    <p className='main_text mb-4'>In JavaScript, when you pass undefined to a default parameter function, the function takes the default value. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            function test(x = 1) &#123;<br />
                            console.log(x);<br />
                            &#125;<br /><br />

                          // passing undefined<br />
                          // takes default value 1<br />
                            test(undefined); // 1<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PassingValue