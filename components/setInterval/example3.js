import React from 'react'

const Example3 = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>Example 3: Use clearInterval() Method</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // program to stop the setInterval() method after five times <br /><br />

                            let count = 0;<br /><br />

                            // function creation<br />
                            let interval = setInterval(function()&#123;<br /><br />

                            // increasing the count by 1<br />
                            count += 1;<br /><br />

                            // when count equals to 5, stop the function<br />
                            if(count === 5)&#123;<br />
                            clearInterval(interval);<br />
                            &#125;<br /><br />

                            // display the current time<br />
                            let dateTime= new Date();<br />
                            let time = dateTime.toLocaleTimeString();<br />
                            console.log(time);<br /><br />

                            &#125;, 2000);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            4:47:41 PM<br />
                            4:47:43 PM<br />
                            4:47:45 PM<br />
                            4:47:47 PM<br />
                            4:47:49 PM<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the <code className='code_border'>setInterval()</code> method is used to display the current time every <strong>2</strong> seconds. The <code className='code_border'>clearInterval()</code>  method stops the function call after <strong>5</strong> times.</p>
                </div>
                <div>
                    <p className='main_text mb-4'>You can also pass additional arguments to the setInterval() method. The syntax is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            setInterval(function, milliseconds, parameter1, ....paramenterN);
                        </code>
                    </div>
                    <p className='main_text mb-4'>When you pass additional parameters to the <code className='code_border'>setInterval()</code> method, these parameters (<code className='code_border'>parameter1</code>, <code className='code_border'>parameter2</code>, etc.) will be passed to the specified function.</p>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // program to display a name<br />
                            function greet(name, lastName) &#123;<br />
                            console.log('Hello' + ' ' + name + ' ' + lastName);<br />
                            &#125;<br /><br />

                            // passing argument to setInterval<br />
                            setInterval(greet, 1000, 'John', 'Doe');<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Hello John Doe<br />
                            Hello John Doe<br />
                            Hello John Doe<br />
                            ....<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, two parameters <code className='code_border'>John</code> and <code className='code_border'>Doe</code> are passed to the <code className='code_border'>setInterval()</code> method. These two parameters are the arguments that will be passed to the function (here,  <code className='code_border'>greet()</code> function) that is defined inside the <code className='code_border'>setInterval()</code> method.</p>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>If you only need to execute a function one time, it's better to use the setTimeout() method.</p>
                </div>
            </section>
        </>
    )
}

export default Example3