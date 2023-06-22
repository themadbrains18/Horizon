import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript and JSON</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JSON and how JavaScript is used with JSON with the help of examples.</p>
                    <p className='main_text mb-4'>JSON stands for Javascript Object Notation. JSON is a text-based data format that is used to store and transfer data. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // JSON syntax <br />
                            &#123;<br />
                            "name": "John",<br />
                            "age": 22,<br />
                            "gender": "male",<br /><br />
                            &#125;
                        </code>
                    </div>
                    <p className='main_text mb-4'>In JSON, the data are in <strong>key/value</strong> pairs separated by a comma <code className='code_border'>,</code>.</p>
                    <p className='main_text mb-4'>JSON was derived from JavaScript. So, the JSON syntax resembles JavaScript object literal syntax. However, the JSON format can be accessed and be created by other programming languages too.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>JavaScript Objects and JSON are not the same. You will learn about their differences later in this tutorial.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction