import React from 'react'

const FuncHoisting = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom '>
                    <h2 className='sec_heading mt-10 mb-6'>Function Hoisting</h2>
                    <p className='main_text mb-6'>A function can be called before declaring it. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
          // program to print the text<br />
                            greet();<br /><br />

                            function greet() &#123;<br />
                            console.log('Hi, there.');<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Hi, there</p>
                    </div>
                    <p className='main_text'>In the above program, the function greet is called before declaring it and the program shows the output. This is due to hoisting. </p>
                </div>
                <div className='border_bottom pb-10'>
                    <p className='main_text my-6'>However, when a function is used as an expression, an error occurs because only declarations are hoisted. For example;</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                    // program to print the text
                            greet();

                            let greet = function() &#123;
                            console.log('Hi, there.');
                            &#125;
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Uncaught ReferenceError: greet is not defined</p>
                    </div>
                    <p className='main_text mb-6'>If var was used in the above program, the error would be:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Uncaught TypeError: greet is not a function</p>
                    </div>
                </div>

                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>Generally, hoisting is not performed in other programming languages like Python, C, C++, Java. <br /><br />
                        Hoisting can cause undesirable outcomes in your program. And it is best to declare variables and functions first before using them and avoid hoisting.<br /><br />
                        In the case of variables, it is better to use let than var.
                    </p>
                </div>

            </section>
        </>
    )
}

export default FuncHoisting