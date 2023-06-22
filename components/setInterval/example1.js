import React from 'react'

const Example1 = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Example 1: Display a Text Once Every 1 Second</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // program to display a text using setInterval method <br />
                            function greet() &#123;<br />
                            console.log('Hello world');<br />
                            &#125;<br /><br />

                            setInterval(greet, 1000);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Hello world <br />
                            Hello world <br />
                            Hello world <br />
                            Hello world <br />
                            Hello world <br />
                            ....
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the <code className='code_border'>setInterval()</code> method calls the <code className='code_border'>greet()</code> function every 1000 milliseconds(1 second).</p>
                    <p className='main_text mb-4'>Hence the program displays the text <code className='code_border'>Hello world</code> once every 1 second.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The <code className='code_border'>setInterval()</code> method is useful when you want to repeat a block of code multiple times. For example, showing a message at a fixed interval.</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Example1