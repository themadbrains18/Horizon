import React from 'react'

const YieldToPauseExecution = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Using yield to Pause Execution</h3>
                    <p className='main_text mb-4'>As mentioned above, you can pause the execution of a generator function without executing the whole function body. For that, we use the <code className='code_border'> yield</code> keyword. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // generator function                                        <br />
                            function* generatorFunc() &#123; <br />
                            <br />
                            console.log("1. code before the first yield"); <br />
                            yield 100; <br />
                            <br />
                            console.log("2. code before the second yield"); <br />
                            yield 200; <br />
                            &#125; <br />
                            <br />
                        // returns generator object <br />
                            const generator = generatorFunc(); <br />
                            <br />
                            console.log(generator.next()); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            1. code before the first yield <br />
                            &#123;value: 100, done: false&#125;
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, </p>
                    <ul>
                        <li className='main_text mb-4 ml-4 list-disc'>A generator object named generator is created.</li>
                        <li className='main_text mb-4 ml-4 list-disc'>When <code className='code_border'> generator.next()</code> is called, the code up to the first <code className='code_border'> yield</code> is executed. When <code className='code_border'> yield</code> is encountered, the program returns the value and pauses the generator function.</li>
                    </ul>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You need to assign generator objects to a variable before you use it.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default YieldToPauseExecution