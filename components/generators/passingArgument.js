import React from 'react'

const PassingArgument = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Passing Arguments to Generator Functions</h3>
                    <p className='main_text mb-4'>You can also pass arguments to a generator function. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // generator function<br />
                            function* generatorFunc() &#123; <br />
                            <br />
                            // returns 'hello' at first next() <br />
                            let x = yield 'hello'; <br />
                            <br />
                            // returns passed argument on the second next() <br />
                            console.log(x); <br />
                            console.log('some code'); <br />
                            <br />
                            // returns 5 on second next() <br />
                            yield 5; <br />
                            <br />
                            &#125; <br />
                            <br />
                            const generator = generatorFunc(); <br />
                            <br />
                            console.log(generator.next()); <br />
                            console.log(generator.next(6)); <br />
                            console.log(generator.next()); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            &#123;value: "hello", done: false&#125;      <br />
                            6 <br />
                            some code <br />
                            &#123;value: 5, done: false&#125; <br />
                            &#123;value: undefined, done: true&#125; <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program,</p>
                    <ul>
                        <li className='main_text mb-4 ml-4 list-disc'>The first <code className='code_border'> generator.next()</code> returns the value of the <code className='code_border'> yield</code> (in this case, <code className='code_border'> 'hello'</code>). However, the value is not assigned to variable <code className='code_border'> x</code> in <code className='code_border'>let x = yield 'hello';</code>
                            <div className='bg-light-dark p-5 mt-3 mb-8'>
                                <code>
                                    &#123;value: "hello", done: false&#125;
                                </code>
                            </div>
                        </li>
                        <li className='main_text mb-4 ml-4 list-disc'>When <code className='code_border'>generator.next(6)</code> is encountered, the code again starts at <code className='code_border'>let x = yield 'hello';</code> and the argument 6 is assigned to <code className='code_border'> x</code>. Also, remaining code is executed up to the second <code className='code_border'>yield</code>.
                            <div className='bg-light-dark p-5 mt-3 mb-8'>
                                <code>
                                    6<br />
                                    some code <br />
                                    &#123;value: 5, done: false&#125; <br />
                                </code>
                            </div>
                        </li>


                        <li className='main_text mb-4 ml-4 list-disc'>When the third <code className='code_border'>next()</code> is executed, the program returns <code className='code_border'>&#123;value: undefined, done: true&#125;</code>. It is because there are no other yield statements.
                            <div className='bg-light-dark p-5 mt-3 mb-8'>
                                <code>
                                    &#123;value: undefined, done: true&#125;
                                </code>
                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}

export default PassingArgument