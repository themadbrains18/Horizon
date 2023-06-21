import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=' pb-10 b-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Arrow Function</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript arrow function with the help of examples.</p>
                    <p className='main_text mb-6'>Arrow function is one of the features introduced in the ES6 version of JavaScript. It allows you to create functions in a cleaner way compared to regular functions. For example,</p>
                    <p className='main_text mb-4'>This function</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            // function expression
                            let x = function(x, y) &#123;
                            return x * y;
                            &#125;
                        </p>
                    </div>
                    <p className='main_text mb-4'>can be written as</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                    // using arrow functions
                            let x = (x, y) =&#62; x * y;
                        </p>
                    </div>
                    <p className='main_text mb-4'>using an arrow function.</p>
                </div>

                <div className='pt-10'>
                    <h2 className='sec_heading mb-6'>Arrow Function Syntax</h2>
                    <p className='main_text mb-4'>The syntax of the arrow function is:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let myFunction = (arg1, arg2, ...argN) =&#62; &#123;
                            statement(s)
                            &#125;
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here,</p>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border"> myFunction</code>  is the name of the function</li>
                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border">arg1, arg2, ...argN</code>  are the function arguments</li>
                        <li className='mb-6 ml-5 main_text list-disc'><code className="code_border">statement(s)</code>  is the function body</li>
                    </ul>
                    <p className='main_text mb-4'>If the body has single statement or expression, you can write arrow function as:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                          let myFunction = (arg1, arg2, ...argN) =&#62; expression
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction