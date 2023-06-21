import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Promise and Promise Chaining</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript promises and promise chaining with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, a promise is a good way to handle <span className='!font-extrabold'></span> operations. It is used to find out if the asynchronous operation is successfully completed or not.</p>
                    <p className='main_text mb-4'>A promise may have one of three states.</p>
                    <ul>
                        <li className='main_text mb-6 ml-4 list-disc'>Pending</li>
                        <li className='main_text mb-6 ml-4 list-disc'>Fulfilled</li>
                        <li className='main_text mb-6 ml-4 list-disc'>Rejected</li>
                    </ul>
                    <p className='main_text mb-4'>A promise starts in a pending state. That means the process is not complete. If the operation is successful, the process ends in a fulfilled state. And, if an error occurs, the process ends in a rejected state.</p>
                    <p className='main_text mb-4'>For example, when you request data from the server by using a promise, it will be in a pending state. When the data arrives successfully, it will be in a fulfilled state. If an error occurs, then it will be in a rejected state.</p>
                </div>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Create a Promise</h1>
                    <p className='main_text mb-4'>To create a promise object, we use the <code className='code_border'>Promise()</code> constructor.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let promise = new Promise(function(resolve, reject)&#123;<br />
                                //do something<br />
                            &#125;);<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>The <code className='code_border'>Promise()</code> constructor takes a function as an argument. The function also accepts two functions <code className='code_border'>resolve()</code> and <code className='code_border'>reject()</code>.</p>
                    <p className='main_text mb-4'>If the promise returns successfully, the <code className='code_border'>resolve()</code> function is called. And, if an error occurs, the <code className='code_border'>reject()</code> function is called.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction