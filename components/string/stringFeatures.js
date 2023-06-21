import React from 'react'

const StringFeatures = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10 pb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>Access String Characters</h1>
                    <p className='main_text mb-4'>You can access the characters in a string in two ways.</p>
                    <ul>
                        <li className='main_text mb-4 ml-8 list-disc'>One way is to treat strings as an array. For example,</li>
                    </ul>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            const a = 'hello'; <br />
                            console.log(a[1]); // "e"<br />
                        </p>
                    </div>
                    <ul>
                        <li className='main_text mb-4 ml-8 list-disc'>Another way is to use the method charAt(). For example,</li>
                    </ul>
                    <div className='bg-light-dark p-3'>
                        <p className='medium_text'>
                            const a = 'hello';<br />
                            console.log(a.charAt(1)); // "e"<br />
                        </p>
                    </div>
                </div>
                <div className='mt-10 pb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>JavaScript Strings are immutable</h1>
                    <p className='main_text mb-4'>In JavaScript, strings are immutable. That means the characters of a string cannot be changed. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let a = 'hello';<br />
                            a[0] = 'H';<br />
                            console.log(a); // "hello"<br />
                        </p>
                    </div>
                    <p className='main_text mb-4 list-disc'>However, you can assign the variable name to a new string. For example,</p>
                    <div className='bg-light-dark p-3 '>
                        <p className='medium_text'>
                            let a = 'hello';<br />
                            a = 'Hello';<br />
                            console.log(a); // "Hello"<br />
                        </p>
                    </div>
                </div>
                <div className='mt-10 pb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>JavaScript is Case-Sensitive</h1>
                    <p className='main_text mb-4'>JavaScript is case-sensitive. That means in JavaScript, the lowercase and uppercase letters are treated as different values. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            const a = 'a'; <br />
                            const b = 'A'<br />
                            console.log(a === b); // false<br />
                        </p>
                    </div>
                    <p className='main_text'>In JavaScript, a and A are treated as different values.</p>
                </div>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>JavaScript Multiline Strings</h1>
                    <p className='main_text mb-4'>To use a multiline string, you can either use the + operator or the \ operator. For example,</p>
                    <div className='bg-light-dark p-3 '>
                        <p className='medium_text'>
                        // using the + operator <br />
                            const message1 = 'This is a long message ' +<br />
                            'that spans across multiple lines' +<br />
                            'in the code.'<br /><br />

                            // using the \ operator<br />
                            const message2 = 'This is a long message \<br />
                            that spans across multiple lines \<br />
                            in the code.'<br />
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default StringFeatures