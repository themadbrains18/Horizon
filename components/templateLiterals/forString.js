import React from 'react'

const ForString = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Template Literals for Strings</h3>
                    <p className='main_text mb-4'>In the earlier versions of JavaScript, you would use a single quote '' or a double quote "" for strings. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const str1 = 'This is a string';<br /><br />

                        // cannot use the same quotes<br />
                            const str2 = 'A "quote" inside a string';  // valid code<br />
                            const str3 = 'A 'quote' inside a string';  // Error<br /><br />

                            const str4 = "Another 'quote' inside a string"; // valid code<br />
                            const str5 = "Another "quote" inside a string"; // Error<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>To use the same quotations inside the string, you can use the escape character <code className="code_border">\</code>.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                             // escape characters using \ <br/>
                            const str3 = 'A \'quote\' inside a string';  // valid code<br/>
                            const str5 = "Another \"quote\" inside a string"; // valid code<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>Instead of using escape characters, you can use template literals. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        const str1 = `This is a string`; <br/>
                        const str2 = `This is a string with a 'quote' in it`;<br/>
                        const str3 = `This is a string with a "double quote" in it`;<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>As you can see, the template literals not only make it easy to include quotations but also make our code look cleaner.</p>
                </div>
            </section>
        </>
    )
}

export default ForString