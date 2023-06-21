import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript String</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript string with the help of examples.</p>
                    <p className='main_text mb-4'>JavaScript string is a primitive data type that is used to work with texts. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const name = 'John';
                        </p>
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-4'>Create JavaScript Strings</h2>
                    <p className='main_text mb-4'>In JavaScript, strings are created by surrounding them with quotes. There are three ways you can use quotes.</p>
                    <ul>
                        <li className='main_text mb-4 !font-black list-disc'>Single quotes: 'Hello'</li>
                        <li className='main_text mb-4 !font-black list-disc'>Double quotes: "Hello"</li>
                        <li className='main_text mb-4 !font-black list-disc'>Backticks: `Hello`</li>
                    </ul>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        //strings example <br />
                            const name = 'Peter';<br />
                            const name1 = "Jack";<br />
                            const result = `The names are $&#123;name&#125; and $&#123;name1&#125;`;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Single quotes and double quotes are practically the same and you can use either of them.</p>
                    <p className='main_text mb-4'> Backticks are generally used when you need to include variables or expressions into a string. This is done by wrapping variables or expressions with $&#123;variable or expression&#125; as shown above.</p>
                    <p className='main_text mb-4'>You can also write a quote inside another quote. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const name = 'My name is "Peter".';
                        </p>
                    </div>
                    <p className='main_text mb-4'>However, the quote should not match the surrounding quotes. For example,</p>
                    <div className='bg-light-dark p-5'>
                        <p className='medium_text'>
                            const name = 'My name is 'Peter'.'; // error
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction