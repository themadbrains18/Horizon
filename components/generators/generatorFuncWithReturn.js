import React from 'react'

const GeneratorFuncWithReturn = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Generator Function With return</h3>
                    <p className='main_text mb-4'>You can use the <code className='code_border'> return</code> statement in a generator function. The <code className='code_border'> return</code> statement returns a value and terminates the function (similar to regular functions). For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // generator function <br />
                            function* generatorFunc() &#123; <br />
                            <br />
                            yield 100; <br />
                            <br />
                            return 123; <br />
                            <br />
                            console.log("2. some code before second yield"); <br />
                            yield 200; <br />
                            &#125; <br />
                            <br />
                        // returns generator object <br />
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
                            &#123;value: 100, done: false&#125;          <br />
                            &#123;value: 123, done: true&#125; <br />
                            &#123;value: undefined, done: true&#125; <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, when the <code className='code_border'> return</code> statement is encountered, it returns the value and <code className='code_border'> done</code> property becomes <code className='code_border'>true</code>, and the function terminates. Hence, the <code className='code_border'>next()</code> method after the <code className='code_border'> return</code> statement does not return anything.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You can also use the <code className='code_border'> return()</code> method instead of the <code className='code_border'> return</code> statement like <code className='code_border'>generator.return(123);</code> in the above code.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GeneratorFuncWithReturn