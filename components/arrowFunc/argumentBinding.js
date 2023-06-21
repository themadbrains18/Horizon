import React from 'react'

const ArgumentBinding = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Arguments Binding</h2>
                    <p className='main_text mb-6'>Regular functions have arguments binding. That's why when you pass arguments to a regular function, you can access them using the <code className="code_border">arguments</code>  keyword. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            let x = function () &#123; <br />
                            console.log(arguments);<br />
                            &#125;<br />
                            x(4,6,7); // Arguments [4, 6, 7]<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>Arrow functions do not have arguments binding.</p>
                    <p className='main_text mb-6'>When you try to access an argument using the arrow function, it will give an error. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            let x = () =&#62; &#123;<br />
                            console.log(arguments);<br />
                            &#125;<br /><br />

                            x(4,6,7); <br />
                        // ReferenceError: Can't find variable: arguments<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>To solve this issue, you can use the spread syntax. For example,</p>
                    <div className='bg-light-dark p-3 mb-2'>
                        <p className='medium_text'>
                            let x = (...n) =&#62; &#123; <br />
                            console.log(n);<br />
                            &#125;<br /><br />

                            x(4,6,7); // [4, 6, 7]<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArgumentBinding