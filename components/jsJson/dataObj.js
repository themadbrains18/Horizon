import React from 'react'

const DataObj = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>JSON Data</h2>
                    <p className='main_text mb-4'>JSON data consists of <strong>key/value</strong> pairs similar to JavaScript object properties. The key and values are written in double quotes separated by a colon <code className='code_border'>:</code>. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // JSON data <br />
                            "name": "John"
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>JSON data requires double quotes for the key.</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JSON Object</h2>
                    <p className='main_text mb-4'>The JSON object is written inside curly braces <code className='code_border'>&#123; &#125;</code>. JSON objects can contain multiple <strong>key/value  </strong> pairs. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // JSON object<br />
                            &#123; "name": "John", "age": 22 &#125;
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DataObj