import React from 'react'

const ForOfLoop = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript for...of loop</h3>
                    <p className='main_text mb-4'>The syntax of the <code className='code_border'>for...of</code> loop is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            for (element of iterable) &#123; <br />
                            // body of for...of<br />
                            &#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here,</p>
                    <ul>
                        <li className='main_text mb-4 ml-4 list-disc'><strong>iterable</strong> - an iterable object (array, set, strings, etc).</li>
                        <li className='main_text mb-4 ml-4 list-disc'><strong>element</strong> - items in the iterable</li>
                    </ul>
                    <p className='main_text mb-4'>In plain English, you can read the above code as: for every element in the iterable, run the body of the loop.</p>
                </div>
            </section>
        </>
    )
}

export default ForOfLoop