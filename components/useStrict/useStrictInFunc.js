import React from 'react'

const UseStrictInFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Strict Mode in Function</h2>
                    <p className='main_text mb-4'>You can also use strict mode inside a function. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            myVariable = 9; <br />
                            console.log(myVariable); // 9 <br />
                            <br />
                            function hello() &#123; <br />
                            <br />
                                // applicable only for this function <br />
                            'use strict'; <br />
                            <br />
                            string = 'hello'; // throws an error <br />
                            &#125; <br />
                            <br />
                            hello(); <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>If you use <code className='code_border'>'use strict';</code> inside a function, the code inside the function will be in strict mode.</p>
                    <p className='main_text mb-4'>In the above program,  <code className='code_border'>'use strict';</code> is used inside the  <code className='code_border'>hello()</code> function. Hence, the strict mode is applicable only inside the function.</p>
                    <p className='main_text mb-4'>As you can see, in the beginning of the program,  <code className='code_border'>myVariable</code> is used without declaring.</p>
                    <p className='main_text mb-4'>If you declare  <code className='code_border'>'use strict';</code> at the top of the program, you cannot use a variable without declaring it inside the function as well. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                    // applicable to whole program <br />
                            'use strict'; <br />
                            <br />
                            function hello() &#123; <br />
                            string = 'hello'; // throws an error <br />
                            &#125; <br />
                            <br />
                            hello(); <br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5  border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Strict mode doesn't apply to block statements with  <code className='code_border'>&#123;&#125;</code> braces.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UseStrictInFunc