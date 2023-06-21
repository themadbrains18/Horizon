import React from 'react'

const Local = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='large_heading mt-10 mb-6'>Local Scope</h2>
                    <p className='main_text mb-4'>A variable can also have a local scope, i.e it can only be accessed within a function.</p>
                    <h2 className='sec_heading mb-4'>Example 1: Local Scope Variable</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // program showing local scope of a variable <br/>
                            let a = "hello";<br/><br/>

                            function greet()  &#123;<br/>
                            let b = "World"<br/>
                            console.log(a + b);<br/>
                            &#125;<br/><br/>

                            greet();<br/>
                            console.log(a + b); // error<br/>
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>helloWorld</p>
                        <p className='medium_text'>Uncaught ReferenceError: b is not defined</p>
                    </div>
                    <p className='main_text'>In the above program, variable a is a global variable and variable b is a local variable. The variable b can be accessed only inside the function greet. Hence, when we try to access variable b outside of the function, an error occurs.</p>
                </div>
            </section>
        </>
    )
}

export default Local