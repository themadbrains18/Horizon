import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h1 className='large_heading mb-6'>JavaScript Generators</h1>
                <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript generators with the help of examples.</p>
                <p className='main_text mb-4'>In JavaScript, generators provide a new way to work with functions and iterators.</p>
                <p className='main_text mb-4'>Using a generator,</p>
                <ul>
                    <li className='main_text mb-4 ml-4 list-disc'>you can stop the execution of a function from anywhere inside the function</li>
                    <li className='main_text mb-4 ml-4 list-disc'>and continue executing code from a halted position</li>
                </ul>
                <h2 className='sec_heading mb-6'>Create JavaScript Generators</h2>
                <p className='main_text mb-4'>To create a generator, you need to first define a generator function with <code className='code_border'> function*</code>  symbol. The objects of generator functions are called generators.</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                    // define a generator function<br />
                        function* generator_function() &#123;<br />
                        ... .. ...<br />
                        &#125;<br /><br />

                    // creating a generator<br />
                        const generator_obj = generator_function();<br />
                    </code>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>The generator function is denoted by <code className='code_border'> *</code>. You can either use <code className='code_border'> function* generatorFunc() &#123;...&#125;</code> or <code className='code_border'>function *generatorFunc()&#123;...&#125; </code> to create them.</p>
                </div>

            </section>
        </>
    )
}

export default Introduction