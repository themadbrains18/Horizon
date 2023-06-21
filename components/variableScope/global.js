import React from 'react'

const Global = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Global Scope</h2>
                    <p className='main_text mb-4'>A variable declared at the top of a program or outside of a function is considered a global scope variable.</p>
                    <p className='main_text mb-4'>Let's see an example of a global scope variable.</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                             // program to print a text <br />
                            let a = "hello";<br /><br />

                            function greet () &#123;<br />
                            console.log(a);<br />
                            &#125;<br /><br />

                            greet(); // hello<br />
                        </p>
                    </div>
                    <p className='main_text pb-10 border_bottom'>In the above program, variable a is declared at the top of a program and is a global variable. It means the variable a can be used anywhere in the program.</p>
                </div>
                <div>
                    <p className='main_text pt-10'>The value of a global variable can be changed inside a function. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                // program to show the change in global variable<br />
                            let a = "hello";<br /><br />

                            function greet()  &#123;<br />
                            a = 3;<br />
                            &#125;<br /><br />

                // before the function call<br />
                            console.log(a);<br /><br />

                //after the function call<br />
                            greet();<br />
                            console.log(a); // 3<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above program, variable a is a global variable. The value of a is hello. Then the variable a is accessed inside a function and the value changes to 3.</p>
                    <p className='main_text mb-6'>Hence, the value of a changes after changing it inside the function.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>It is a good practice to avoid using global variables because the value of a global variable can change in different areas in the program. It can introduce unknown results in the program.
                        </p>
                    </div>
                    <p className='main_text mt-10 mb-6'> In JavaScript, a variable can also be used without declaring it. If a variable is used without declaring it, that variable automatically becomes a global variable.</p>
                    <p className='main_text mb-6'>For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            function greet()  &#123; <br />
                            a = "hello"<br />
                            &#125;<br /><br />

                            greet();<br /><br />

                            console.log(a); // hello<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above program, variable a is a global variable.</p>
                    <p className='main_text mb-6'>If the variable was declared using let a = "hello", the program would throw an error.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In JavaScript, there is "strict mode"; in which a variable cannot be used without declaring it. To learn more about strict, visit JavaScript Strict.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Global