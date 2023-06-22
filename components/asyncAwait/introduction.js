import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h1 className='large_heading mb-6'>Javscript async/await</h1>
                <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript async/await keywords with the help of examples.</p>
                <p className='main_text mb-4'>We use the <code className='code_border'>async</code>  keyword with a function to represent that the function is an asynchronous function. The <code className='code_border'>async</code> function returns a promise.</p>
                <p className='main_text mb-4'>The syntax of <code className='code_border'>async</code> function is:</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        async function name(parameter1, parameter2, ...paramaterN) &#123;
                        // statements
                        &#125;
                    </code>
                </div>
                <p className='main_text mb-4'>Here,</p>
                <ul>
                    <li className='main_text mb-4 list-disc'><span className='!font-extrabold'>name</span> - name of the function</li>
                    <li className='main_text mb-4 list-disc'><span className='!font-extrabold'>parameters</span> - parameters that are passed to the function</li>
                </ul>
            </section>

        </>
    )
}

export default Introduction