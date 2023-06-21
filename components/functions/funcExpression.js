import React from 'react'

const FuncExpression = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h3 className='sec_heading text-[20px] mt-10 mb-4'>Benefits of Using a Function</h3>
                    <ul>
                        <li className='main_text mb-6'>Function makes the code reusable. You can declare it once and use it multiple times.</li>
                        <li className='main_text mb-6'>Function makes the program easier as each small task is divided into a function.</li>
                        <li className='main_text'>Function increases readability.</li>
                    </ul>
                </div>
                <div>
                    <h3 className='sec_heading text-[20px] mt-10 mb-4'>Function Expressions</h3>
                    <p className='main_text mb-6'>In Javascript, functions can also be defined as expressions. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // program to find the square of a number<br />
                        // function is declared inside the variable<br />
                            let x = function (num) &#123; return num * num &#125;;<br />
                            console.log(x(4));<br /><br />

                        // can be used as variable value for other variables<br />
                            let y = x(3);<br />
                            console.log(y);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            16<br />
                            19<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above program, variable x is used to store the function. Here the function is treated as an expression. And the function is called using the variable name.</p>
                    <p className='main_text mb-6'> The function above is called an anonymous function.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In ES2015, JavaScript expressions are written as arrow functions. You will learn about them in later tutorials.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default FuncExpression