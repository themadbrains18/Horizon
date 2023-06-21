import React from 'react'

const UsingCallbackFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Example: Using a Callback Function</h3>
                    <p className='main_text mb-4'>In the above example, the second function does not wait for the first function to be complete. However, if you want to wait for the result of the previous function call before the next statement is executed, you can use a callback function. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                           // Callback Function Example <br />
                            function greet(name, myFunction) &#123;<br />
                            console.log('Hello world');<br /><br />

                            // callback function<br />
                            // executed only after the greet() is executed<br />
                            myFunction(name);<br />
                            &#125;<br /><br />

                            // callback function<br />
                            function sayName(name) &#123;<br />
                            console.log('Hello' + ' ' + name);<br />
                            &#125;<br /><br />

                            // calling the function after 2 seconds<br />
                            setTimeout(greet, 2000, 'John', sayName);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Hello world</p>
                        <p className='medium_text'>Hello John</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the code is executed synchronously. The <code className='code_border'>sayName()</code> function is passed as an argument to the <code className='code_border'>greet()</code>  function.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>setTimeout()</code> method executes the <code className='code_border'>greet()</code> function only after 2 seconds. However, the <code className='code_border'>sayName()</code> function waits for the execution of the <code className='code_border'>greet()</code> function.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The callback function is helpful when you have to wait for a result that takes time. For example, the data coming from a server because it takes time for data to arrive.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UsingCallbackFunc