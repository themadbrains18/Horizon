import React from 'react'

const Benefit = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Benefit of Callback Function</h3>
                    <p className='main_text mb-4'>The benefit of using a callback function is that you can wait for the result of a previous function call and then execute another function call.</p>
                    <p className='main_text mb-4'>In this example, we are going to use the setTimeout() method to mimic the program that takes time to execute, such as data coming from the server.</p>
                    <h3 className='sec_heading mb-4'>Example: Program with setTimeout()</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        //  program that shows the delay in execution <br /><br />

                            function greet() &#123;<br />
                            console.log('Hello world');<br />
                            &#125;<br /><br />

                            function sayName(name) &#123;<br />
                            console.log('Hello' + ' ' + name);<br />
                            &#125;<br /><br />

                        // calling the function<br />
                            setTimeout(greet, 2000);<br />
                            sayName('John');<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Hello John</p>
                        <p className='medium_text'>Hello world</p>
                    </div>
                    <p className='main_text mb-4'> As you know, the setTimeout() method executes a block of code after the specified time.</p>
                    <p className='main_text mb-4'>Here, the <code className='code_border'>greet()</code> function is called after 2000 milliseconds (2 seconds). During this wait, the <code className='code_border'>sayName('John');</code> is executed. That is why <code className='code_border'>Hello John</code> is printed before <code className='code_border'>Hello world</code>.</p>
                    <p className='main_text mb-4'>The above code is executed asynchronously (the second function; <code className='code_border'>sayName()</code> does not wait for the first function; <code className='code_border'>greet()</code> to complete).</p>
                </div>
            </section>

        </>
    )
}

export default Benefit