import React from 'react'

const Converting = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>Converting JSON to JavaScript Object</h2>
                    <p className='main_text mb-4'>You can convert JSON data to a JavaScript object using the built-in <code className='code_border'>JSON.parse()</code> function. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                           // json object <br />
                            const jsonData = '&#123;"name": "John", "age": 22 &#125;';<br />
                            <br />
                            // converting to JavaScript object<br />
                            const obj = JSON.parse(jsonData);<br />
                            <br />
                            // accessing the data<br />
                            console.log(obj.name); // John<br />
                        </code>
                    </div>
                </div>
                <div className='mb-10 pb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>Converting JavaScript Object to JSON</h2>
                    <p className='main_text mb-4'>You can also convert JavaScript objects to JSON format using the JavaScript built-in <code className='code_border'>JSON.stringify()</code> function. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // JavaScript object <br />
                            const jsonData = &#123; "name": "John", "age": 22 &#125;;<br />
                            <br />
                        // converting to JSON<br />
                            const obj = JSON.stringify(jsonData);<br />
                            <br />
                        // accessing the data<br />
                            console.log(obj); // "&#123;"name":"John","age":22&#125;"<br />
                        </code>
                    </div>
                </div>
                <h2 className='sec_heading mb-6'>Use of JSON</h2>
                <p className='main_text mb-4'>JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa. JSON data are very easy to parse and use. It is fast to access and manipulate JSON data as they only contain texts.</p>
                <p className='main_text mb-4'>JSON is language independent. You can create and use JSON in other programming languages too.</p>
            </section>
        </>
    )
}

export default Converting