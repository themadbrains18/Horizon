import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h1 className='large_heading mb-6'>JavaScript CallBack Function</h1>
                <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript callback functions with the help of examples.</p>
                <p className='main_text mb-4'>A function is a block of code that performs a certain task when called. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                      // function <br />
                        function greet(name) &#123;<br />
                        console.log('Hi' + ' ' + name);<br />
                        &#125;<br /><br />

                        greet('Peter'); // Hi Peter<br />
                    </code>
                </div>
                <p className='main_text mb-4'>In the above program, a string value is passed as an argument to the <code className='code_border'>greet()</code> function.</p>
                <p className='main_text mb-4'>In JavaScript, you can also pass a function as an argument to a function. This function that is passed as an argument inside of another function is called a callback function. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                // function<br />
                        function greet(name, callback) &#123;<br />
                        console.log('Hi' + ' ' + name);<br />
                        callback();<br />
                        &#125;<br /><br />

                // callback function<br />
                        function callMe() &#123;<br />
                        console.log('I am callback function');<br />
                        &#125;<br /><br />

                // passing function as an argument<br />
                        greet('Peter', callMe);<br />
                    </code>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-6 mt-6'>
                    <p className='medium_text'>
                        Hi Peter<br />
                        I am callback function
                    </p>
                </div>
                <p className='main_text mb-4'>In the above program, there are two functions. While calling the <code className='code_border'>greet()</code> function, two arguments (a string value and a function) are passed.</p>
                <p className='main_text mb-4'>The <code className='code_border'>callMe()</code> function is a callback function.</p>
            </section>
        </>
    )
}

export default Introduction