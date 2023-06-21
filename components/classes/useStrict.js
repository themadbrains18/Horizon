import React from 'react'

const UseStrict = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>'use strict'</h3>
                    <p className='main_text mb-4'>Classes always follow 'use-strict'. All the code inside the class is automatically in strict mode. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            class Person &#123; <br />
                            constructor() &#123;<br />
                            a = 0;<br />
                            this.name = a;<br />
                            &#125;<br />
                            &#125;<br /><br />

                            let p = new Person(); // ReferenceError: Can't find variable: a<br />
                        </code>
                    </div>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>JavaScript class is a special type of function. And the typeof operator returns function for a class.</p>
                    <p className='main_text mt-4'>For example,</p>
                    <code className='bg-slate-800'>
                        class Person &#123;&#125;<br />
                        console.log(typeof Person); // function<br />
                    </code>
                </div>
            </section>
        </>
    )
}

export default UseStrict