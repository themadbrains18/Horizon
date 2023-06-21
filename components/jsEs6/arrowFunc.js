import Link from 'next/link'
import React from 'react'

const ArrowFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Arrow Function</h2>
                <p className='main_text mb-6'>In the ES6 version, you can use arrow functions to create function expressions. For example,</p>
                <p className='main_text mb-4'>This function</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                             // function expression <br />
                        let x = function(x, y) &#123;<br />
                        return x * y;<br />
                        &#125;<br />
                    </p>
                </div>
                <p className='main_text mb-4'>can be written as</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                    // function expression using arrow function
                        let x = (x, y) =&#62; x * y;
                    </p>
                </div>
                <p className='main_text mb-4'>To learn more about arrow functions, visit <Link href="/" className='text-blue-500'>JavaScript Arrow Function.</Link> </p>
            </section>
        </>
    )
}

export default ArrowFunc 