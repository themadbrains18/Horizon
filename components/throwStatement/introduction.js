import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='large_heading mb-6'>JavaScript throw Statement</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript throw statements with the help of examples.</p>
                    <p className='main_text mb-4'>In the previous tutorial, you learned to handle exceptions using JavaScript try..catch statement. The try and catch statements handle exceptions in a standard way which is provided by JavaScript. However, you can use the throw statement to pass user-defined exceptions.</p>
                    <p className='main_text mb-4'>In JavaScript, the throw statement handles user-defined exceptions. For example, if a certain number is divided by 0, and if you need to consider Infinity as an exception, you can use the throw statement to handle that exception.</p>
                </div>

                <div>
                    <h2 className='sec_heading mb-6'>JavaScript throw statement</h2>
                    <p className='main_text mb-4'>The syntax of throw statement is:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>throw expression; </p>
                    </div>
                    <p className='main_text mb-4'>Here, expression specifies the value of the exception.</p>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const number = 5; <br/>
                            throw number/0; // generate an exception when divided by 0<br/>
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The expression can be string, boolean, number, or object value.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Introduction