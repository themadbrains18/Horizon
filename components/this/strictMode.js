import React from 'react'

const StrictMode = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>7. this Inside Function with Strict Mode</h2>
                    <p className='main_text mb-4'>When <code className='code_border'>this</code> is used in a function with strict mode, <code className='code_border'>this</code> is <code className='code_border'>undefined</code>. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            'use strict';                        <br />
                            this.name = 'Jack'; <br />
                            function greet() &#123; <br />
                            <br />
                            // this refers to undefined <br />
                            console.log(this); <br />
                            &#125; <br />
                            greet(); // undefined <br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 mb-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>When using <code className='code_border'>this</code> inside a function with strict mode, you can use JavaScript Function call().</p>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            'use strict';                    <br />
                            this.name = 'Jack'; <br />
                            <br />
                            function greet() &#123;<br />
                            console.log(this.name); <br />
                            &#125; <br />
                            <br />
                            greet.call(this); // Jack <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>When you pass <code className='code_border'>this</code> with the <code className='code_border'>call()</code> function, <code className='code_border'>greet()</code> is treated as the method of the <code className='code_border'>this</code> object (global object in this case).</p>
                </div>
            </section>
        </>
    )
}

export default StrictMode