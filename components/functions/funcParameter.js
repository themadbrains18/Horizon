import React from 'react'

import Image from 'next/image'
import parameterFunc from '/public/javascript-function-with-parameter.png'

const FuncParameter = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Function Parameters</h2>
                    <p className='main_text mb-10'> A function can also be declared with parameters. A parameter is a value that is passed when declaring a function.</p>
                    <Image src={parameterFunc} width={600} height={500} alt='Video Thumbnail' className='py-6 bg-white' />
                </div>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Example 2: Function with Parameters</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // program to print the text <br />
                        // declaring a function<br />
                            function greet(name) &#123;<br />
                            console.log("Hello " + name + ":)");<br />
                            &#125;<br /><br />

                            // variable name can be different<br />
                            let name = prompt("Enter a name: ");<br /><br />

                                // calling function<br />
                            greet(name);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Enter a name: Simon</p>
                        <p className='medium_text'>Hello Simon :)</p>
                    </div>
                    <p className='main_text mb-10'> In the above program, the greet function is declared with a name parameter. The user is prompted to enter a name. Then when the function is called, an argument is passed into the function.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>When a value is passed when declaring a function, it is called parameter. And when the function is called, the value passed is called argument.
                        </p>
                    </div>
                </div>
                <div>
                    <h3 className='sec_heading text-[20px] mt-10 mb-4'>Example 3: Add Two Numbers</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // program to add two numbers using a function<br />
                            // declaring a function<br />
                            function add(a, b) &#123;<br />
                            console.log(a + b);<br />
                            &#123;<br /><br />

                            // calling functions<br />
                            add(3,4);<br />
                            add(2,9);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>7</p>
                        <p className='medium_text'>11</p>
                    </div>
                    <p className='main_text mb-6'> In the above program, the add function is used to find the sum of two numbers.</p>
                    <ul>
                        <li className='main_text mb-4 list-disc'>The function is declared with two parameters a and b.</li>
                        <li className='main_text mb-6 list-disc'> The function is called using its name and passing two arguments 3 and 4 in one and 2 and 9 in another.</li>
                    </ul>
                    <p className='main_text'>Notice that you can call a function as many times as you want. You can write one function and then call it multiple times with different arguments.</p>
                </div>
            </section>
        </>
    )
}

export default FuncParameter