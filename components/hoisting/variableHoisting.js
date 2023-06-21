import React from 'react'

const VariableHoisting = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='border_bottom pb-7'>
                    <h2 className='sec_heading mt-10 mb-6'>Variable Hoisting</h2>
                    <p className='main_text mb-4'>In terms of variables and constants, keyword var is hoisted and let and const does not allow hoisting.</p>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // program to display value<br />
                            a = 5;<br />
                            console.log(a);<br />
                            var a; // 5<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, variable a is used before declaring it. And the program works and displays the output 5. The program behaves as:</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // program to display value <br />
                            var a;<br />
                            a = 5;<br />
                            console.log(a); // 5<br />
                        </p>
                    </div>
                </div>
                <div className='py-10 border_bottom'>
                    <p className='main_text mb-4'>However in JavaScript, initializations are not hoisted. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                // program to display value<br />
                            console.log(a);<br />
                            var a = 5;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>undefined</p>
                    </div>
                    <p className='main_text mb-4'>The above program behaves as:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            var a;<br />
                            console.log(a);<br />
                            a = 5;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Only the declaration is moved to the memory in the compile phase. Hence, the value of variable a is undefined because a is printed without initializing it.</p>
                </div>
                <div className=' pb-10 border_bottom'>
                    <p className='main_text my-7'>Also, when the variable is used inside the function, the variable is hoisted only to the top of the function. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                // program to display value <br />
                            var a = 4;<br /><br />

                            function greet() &#123;<br />
                            b = 'hello';<br />
                            console.log(b); // hello<br />
                            var b;<br />
                            &#123;<br /><br />

                            greet(); // hello<br />
                            console.log(b);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> hello</p>
                        <p className='medium_text'>Uncaught ReferenceError: b is not defined</p>
                    </div>
                    <p className='main_text mb-4'>In the above example, variable b is hoisted to the top of the function greet and becomes a local variable. Hence b is only accessible inside the function. b does not become a global variable.</p>
                    <p className='main_text mb-4'>To learn more about local and global variables, visit JavaScript Variable Scope.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In hoisting, the variable declaration is only accessible to the immediate scope.</p>
                    </div>
                </div>
                <div className='mt-7'>
                    <p className='main_text mb-4'>If a variable is used with the let keyword, that variable is not hoisted. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                        // program to display value<br />
                            a = 5;<br />
                            console.log(a);<br />
                            let a; // error<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Uncaught ReferenceError: Cannot access 'a' before initialization</p>
                    </div>
                    <p className='main_text'>While using let, the variable must be declared first.</p>
                </div>
            </section>

        </>
    )
}

export default VariableHoisting