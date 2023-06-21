import React from 'react'

const ForOfWithGenerators = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>for...of with Generators</h3>
                    <p className='main_text mb-4'>Since generators are iterables, you can implement an iterator in an easier way. Then you can iterate through the generators using the <code className='code_border'>for..of</code> loop. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // generator function<br />
                            function* generatorFunc() &#123;<br /><br />

                            yield 10;<br />
                            yield 20;<br />
                            yield 30;<br />
                            &#125;<br /><br />

                            const obj = generatorFunc();<br /><br />

                        // iteration through generator<br />
                            for (let value of obj) &#123;<br />
                            console.log(value);<br />
                            &#125;<br />

                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            10 <br />
                            20 <br />
                            30 <br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForOfWithGenerators