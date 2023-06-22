import React from 'react'

const JsonArray = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JSON Array</h2>
                    <p className='main_text mb-4'>JSON array is written inside square brackets <code className='code_border'>[ ]</code>. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
           // JSON array <br />
                            [ "apple", "mango", "banana"]<br /><br />

                            // JSON array containing objects<br />
                            [<br />
                            &#123; "name": "John", "age": 22 &#125;,<br />
                            &#123; "name": "Peter", "age": 20 &#125;.<br />
                            &#123; "name": "Mark", "age": 23 &#125;<br />
                            ]<br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>JSON data can contain objects and arrays. However, unlike JavaScript objects, JSON data cannot contain functions as values.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default JsonArray