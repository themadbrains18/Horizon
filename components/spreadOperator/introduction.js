import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Spread Operator</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript spread operator with the help of examples.  </p>
                    <p className='main_text mb-6'>The spread operator is a new addition to the features available in the JavaScript ES6 version.</p>
                </div>
                <div>
                    <h3 className='sec_heading mb-4'>Spread Operator</h3>
                    <p className='main_text mb-4'>The spread operator <code className="code_border">...</code> is used to expand or spread an iterable or an array. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <code>
                            const arrValue = ['My', 'name', 'is', 'Jack'];<br /><br />

                            console.log(arrValue);   // ["My", "name", "is", "Jack"]<br />
                            console.log(...arrValue); // My name is Jack<br />
                        </code>
                    </div>
                </div>
                <p className='main_text mb-4'>In this case, the code:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <code>
                        console.log(...arrValue)
                    </code>
                </div>
                <p className='main_text mb-4'>is equivalent to:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <code>
                        console.log('My', 'name', 'is', 'Jack');
                    </code>
                </div>
            </section>
        </>
    )
}

export default Introduction