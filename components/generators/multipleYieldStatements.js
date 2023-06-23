import React from 'react'

import Image from 'next/image'
import generatorFunc from '/public/generator-function.png'

const MultipleYieldStatements = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Working of multiple yield Statements</h3>
                    <p className='main_text mb-4'>The yield expression returns a value. However, unlike the return statement, it doesn't terminate the program. That's why you can continue executing code from the last yielded position. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            function* generatorFunc() &#123;  <br />
                            <br />
                            console.log("1. code before first yield"); <br />
                            yield 100; <br />
                            <br />
                            console.log("2. code before the second yield"); <br />
                            yield 200; <br />
                            <br />
                            console.log("3. code after the second yield"); <br />
                            &#125; <br />
                            <br />
                            const generator = generatorFunc(); <br />
                            <br />
                            console.log(generator.next()); <br />
                            console.log(generator.next()); <br />
                            console.log(generator.next()); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            1. code before first yield                   <br />
                            &#123;value: 100, done: false&#125; <br />
                            2. code before second yield <br />
                            &#123;value: 200, done: false&#125; <br />
                            &#123;value: undefined, done: true&#125; <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here is how this program works.</p>
                    <ul>
                        <li className='main_text mb-4 ml-4 list-disc'>The first <code className='code_border'> generator.next()</code> statement executes the code up to the first yield statement and pauses the execution of the program.</li>
                        <li className='main_text mb-4 ml-4 list-disc'>The second <code className='code_border'> generator.next()</code> starts the program from the paused position.</li>
                        <li className='main_text mb-4 ml-4 list-disc'>When all the elements are accessed, it returns <code className='code_border'> &#123;value: undefined, done: true&#125;</code> .</li>
                    </ul>
                    <Image src={generatorFunc} width={850} height={370} alt='generator function img' className='bg-white' />
                </div>
            </section>
        </>
    )
}

export default MultipleYieldStatements