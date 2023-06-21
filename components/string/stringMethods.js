import React from 'react'

const StringMethods = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>JavaScript String Methods</h1>
                    <p className='main_text mb-4'>Here are the commonly used JavaScript String methods:</p>
                    <div className=' border border-[#37474F] p-5 mb-8 overflow-x-auto'>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15  '>
                            <li className='body_text mb-6 !font-extrabold'>Method</li>
                            <li className='body_text mb-6 !font-extrabold'>Description</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>charAt(index)</li>
                            <li className='body_text mb-6'>returns the character at the specified index</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>concat()</li>
                            <li className='body_text mb-6'>joins two or more strings</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>replace()</li>
                            <li className='body_text mb-6'>replaces a string with another string</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>split()</li>
                            <li className='body_text mb-6'>converts the string to an array of strings</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>substr(start, length)</li>
                            <li className='body_text mb-6'>returns a part of a string</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>substring(start,end)</li>
                            <li className='body_text mb-6'>returns a part of a string</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>slice(start, end)</li>
                            <li className='body_text mb-6'>returns a part of a string</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>toLowerCase()</li>
                            <li className='body_text mb-6'>returns the passed string in lower case</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>toUpperCase()</li>
                            <li className='body_text mb-6'>returns the passed string in upper case</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>trim()</li>
                            <li className='body_text mb-6'>removes whitespace from the strings</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text mb-6 '>includes()</li>
                            <li className='body_text mb-6'>searches for a string and returns a boolean value</li>
                        </ul>
                        <ul className='pt-5 grid grid_150_1fr gap-15'>
                            <li className='body_text  '>search()</li>
                            <li className='body_text '>searches for a string and returns a position of a match</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Example: JavaScript String Methods</h1>
                    <div className='bg-light-dark p-3'>
                        <p className='medium_text'>
                            const text1 = 'hello'; <br />
                            const text2 = 'world';<br />
                            const text3 = '     JavaScript    ';<br /><br />

                            // concatenating two strings<br />
                            const result1 = text1.concat(' ', text2);<br />
                            console.log(result1); // "hello world"<br /><br />

                            // converting the text to uppercase<br />
                            const result2 = text1.toUpperCase();<br />
                            console.log(result2); // HELLO<br /><br />

                            // removing whitespace from the string<br />
                            const result3 = text3.trim();<br />
                            console.log(result3); // JavaScript<br /><br />

                            // converting the string to an array<br />
                            const result4 = text1.split();<br />
                            console.log(result4); // ["hello"]<br /><br />

                            // slicing the string<br />
                            const result5= text1.slice(1, 3);<br />
                            console.log(result5); // "el"<br />
                        </p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default StringMethods