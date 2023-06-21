import React from 'react'

const DeclaringFunc = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Declaring a Function</h2>
                    <p className='main_text mb-6'>The syntax to declare a function is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            function nameOfFunction () &#123; <br/>
                            // function body   <br/>
                            &#125;<br/>
                        </p>
                    </div>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-6 ml-5 main_text list-disc'>A function is declared using the function keyword.</li>
                        <li className='mb-6 ml-5 main_text list-disc'>The basic rules of naming a function are similar to naming a variable. It is better to write a descriptive name for your function. For example, if a function is used to add two numbers, you could name the function add or addNumbers.</li>
                        <li className='mb-6 ml-5 main_text list-disc'>The body of function is written within &#123; &#125;.</li>
                    </ul>
                    <p className='main_text mb-6'> For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // declaring a function named greet()<br/>
                            function greet( )  &#123;<br/>
                            console.log("Hello there");<br/>
                            &#125;<br/>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DeclaringFunc