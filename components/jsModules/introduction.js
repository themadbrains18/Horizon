import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript Modules</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about modules in JavaScript with the help of examples.</p>
                    <p className='main_text mb-4'>As our program grows bigger, it may contain many lines of code. Instead of putting everything in a single file, you can use modules to separate codes in separate files as per their functionality. This makes our code organized and easier to maintain.</p>
                    <p className='main_text mb-4'>Module is a file that contains code to perform a specific task. A module may contain variables, functions, classes etc. Let's see an example,</p>
                    <p className='main_text mb-4'>Suppose, a file named greet.js contains the following code:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // exporting a function <br />
                            export function greetPerson(name) &#123;<br />
                            return `Hello $&#123;name&#125;`;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Now, to use the code of greet.js in another file, you can use the following code:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // importing greetPerson from greet.js file<br />
                            import &#123; greetPerson &#125; from './greet.js';<br /><br />

                        // using greetPerson() defined in greet.js<br />
                            let displayName = greetPerson('Jack');<br /><br />

                            console.log(displayName); // Hello Jack<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here,</p>
                    <ul>
                        <li className='main_text list-disc ml-8 mb-4'>The greetPerson() function in the greet.js is exported using the export keyword
                            <div className='bg-light-dark p-5 mt-1 mb-6'>
                                <p className='medium_text'>
                                    export function greetPerson(name) &#123; <br />
                                    ...<br />
                                    &#125;<br />
                                </p>
                            </div>

                        </li>
                        <li className='main_text list-disc ml-8 mb-4'>Then, we imported greetPerson() in another file using the import keyword. To import functions, objects, etc., you need to wrap them around &#123; &#125;.
                            <div className='bg-light-dark mt-1 p-5 mb-6'>
                                <p className='medium_text'>
                                    import  &#123; greet  &#125; from '/.greet.js';
                                </p>
                            </div>
                        </li>
                    </ul>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You can only access exported functions, objects, etc. from the module. You need to use the export keyword for the particular function, objects, etc. to import them and use them in other files.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction