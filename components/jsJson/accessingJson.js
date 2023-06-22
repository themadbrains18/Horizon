import React from 'react'

const AccessingJson = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Accessing JSON Data</h2>
                    <p className='main_text mb-4'>You can access JSON data using the dot notation. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // JSON object  <br />
                            const data = &#123;<br />
                            "name": "John",<br />
                            "age": 22,<br />
                            "hobby": &#123;<br />
                            "reading" : true,<br />
                            "gaming" : false,<br />
                            "sport" : "football"<br />
                            &#125;,<br />
                            "class" : ["JavaScript", "HTML", "CSS"]<br />
                            &#125;<br />
                            <br />
                        // accessing JSON object<br />
                            console.log(data.name); // John<br />
                            console.log(data.hobby); // &#123; gaming: false, reading: true, sport: "football"&#125;<br />
                            <br />
                            console.log(data.hobby.sport); // football<br />
                            console.log(data.class[1]); // HTML<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>We use the <code className='code_border'>.</code> notation to access JSON data. Its syntax is:  <code className='code_border'>variableName.key</code></p>
                    <p className='main_text mb-4'>You can also use square bracket syntax [] to access JSON data. For example,</p>

                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // JSON object<br />
                            const data = &#123;<br />
                            "name": "John",<br />
                            "age": 22<br />
                            &#125;<br />
                            <br />
                            // accessing JSON object<br />
                            console.log(data["name"]); // John<br />
                        </code>
                    </div>

                </div>
            </section>
        </>
    )
}

export default AccessingJson