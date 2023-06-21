import React from 'react'

const String = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript String</h2>
                    <p className='main_text mb-6'>String is used to store text. In JavaScript, strings are surrounded by quotes:</p>
                    <ul className='ml-4 mb-6'>
                        <li className='mb-6 main_text list-disc'>Single quotes: 'Hello'</li>
                        <li className='mb-6 main_text list-disc'>Double quotes: "Hello"</li>
                        <li className='mb-6 main_text list-disc'>Backticks: `Hello`</li>
                    </ul>
                    <p className='main_text mb-6'> For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            //strings example<br />
                            const name = 'ram';<br />
                            const name1 = "hari";<br />
                            const result = `The names are $&#123;name&#125; and $&#123;name1&#125;`;<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>Single quotes and double quotes are practically the same and you can use either of them.</p>
                    <p className='main_text mb-6'>Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with $&#123;variable or expression&#125; as shown above.</p>
                    <p className='main_text'>You will learn about the use of backticks in the JavaScript String tutorial.</p>
                </div>
            </section>
        </>
    )
}

export default String