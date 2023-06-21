import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h1 className='large_heading mb-6'>JavaScript Template Literals (Template Strings)</h1>
                <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript Template Literals (Template Strings) with the help of examples.</p>
                <p className='main_text mb-6'>Template literals (template strings) allow you to use strings or embedded expressions in the form of a string. They are enclosed in backticks <code className="code_border">``</code>. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        const name = 'Jack';
                        console.log(`Hello $&#123;name&#125;!`); // Hello Jack!
                    </p>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>Template literal was introduced in 2015 (also known as ECMAScript 6 or ES6 or ECMAScript 2015). Some browsers may not support the use of template literals. Visit JavaScript Template Literal support to learn more.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction