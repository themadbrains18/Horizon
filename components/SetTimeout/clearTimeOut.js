import React from 'react'

const ClearTimeOut = () => {
    return (
        <>
            <section className='bg-dark pb-10  border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>JavaScript clearTimeout()</h1>
                    <p className='main_text mb-4'> As you have seen in the above example, the program executes a block of code after the specified time interval. If you want to stop this function call, you can use the <code className='code_border'>clearTimeout()</code> method.</p>
                    <p className='main_text mb-4'>The syntax of <code className='code_border'>clearTimeout()</code> method is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            clearTimeout(intervalID);
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, the <code className='code_border'>intervalID</code> is the return value of the <code className='code_border'>setTimeout()</code> method.</p>
                </div>
                <div className='pb-10 mb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>Example 3: Use clearTimeout() Method</h1>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                             // program to stop the setTimeout() method <br /><br />

                            let count = 0;<br /><br />

                            // function creation<br />
                            function increaseCount()&#123;<br /><br />

                            // increasing the count by 1<br />
                            count += 1;<br />
                            console.log(count)<br />
                            &#125;<br /><br />

                            let id = setTimeout(increaseCount, 3000);<br /><br />

                            // clearTimeout<br />
                            clearTimeout(id);<br />
                            console.log('setTimeout is stopped.');<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            setTimeout is stopped.
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the <code className='code_border'>setTimeout()</code> method is used to increase the value of <code className='code_border'>count</code> after 3 seconds. However, the <code className='code_border'>clearTimeout()</code> method stops the function call of the  <code className='code_border'>setTimeout()</code> method. Hence, the  <code className='code_border'>count</code> value is not increased.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You generally use the clearTimeout() method when you need to cancel the setTimeout() method call before it happens.</p>
                    </div>
                </div>
                <div>
                    <p className='main_text mb-4'>You can also pass additional arguments to the <code className='code_border'>setTimeout()</code>  method. The syntax is</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>setTimeout(function, milliseconds, parameter1, ....paramenterN);</p>
                    </div>
                    <p className='main_text mb-4'>When you pass additional parameters to the <code className='code_border'>setTimeout()</code> method, these parameters (<code className='code_border'>parameter1</code>, <code className='code_border'>parameter2</code>, etc.) will be passed to the specified function.</p>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // program to display a name <br />
                            function greet(name, lastName) &#123;<br />
                            console.log('Hello' + ' ' + name + ' ' + lastName);<br />
                            &#125;<br /><br />

                            // passing argument to setTimeout<br />
                            setTimeout(greet, 1000, 'John', 'Doe');<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Hello John Doe
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, two parameters <code className='code_border'>John</code> and <code className='code_border'>Doe</code> are passed to the <code className='code_border'>setTimeout()</code> method. These two parameters are the arguments that will be passed to the function (here, <code className='code_border'>greet()</code> function) that is defined inside the <code className='code_border'>setTimeout()</code> method.</p>
                </div>
            </section>
        </>
    )
}

export default ClearTimeOut