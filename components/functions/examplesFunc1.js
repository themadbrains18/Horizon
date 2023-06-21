import React from 'react'

const ExamplesFunc1 = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Example 1: Display a Text</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // program to print a text<br />
                        // declaring a function<br />
                            function greet() &#123;<br />
                            console.log("Hello there!");<br />
                            &#125;<br /><br />

                        // calling the function<br />
                            greet();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>Hello there!</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ExamplesFunc1