import React from 'react'

const ThisInsideFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>2. this Inside Function</h2>
                    <p className='main_text mb-4'>When <code className='code_border'>this</code> is used in a function, <code className='code_border'>this</code> refers to the global object (<code className='code_border'>window</code> object in browsers). For example,</p>
                    <div className='bg-light-dark p-5'>
                        <code>
                            function greet() &#123; <br />
                            <br />
                            // this inside function <br />
                            // this refers to the global object <br />
                            console.log(this); <br />
                            &#125; <br />
                            <br />
                            greet(); // Window &#123;&#125; <br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ThisInsideFunc