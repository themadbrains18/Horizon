import Link from 'next/link'
import React from 'react'

const StringFunc = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10 pb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>JavaScript String() Function</h1>
                    <p className='main_text mb-4'>The String() function is used to convert various data types to strings. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            const a = 225; // number <br />
                            const b = true; // boolean<br /><br />

                            //converting to string<br />
                            const result1 = String(a);<br />
                            const result2 = String(b);<br /><br />

                            console.log(result1); // "225"<br />
                            console.log(result2); // "true"<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>If you want to learn more about the string conversion, visit <Link href="http://localhost:3000/javascript/typeConversion">JavaScript Type Conversion.</Link> </p>
                </div>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Escape Character</h1>
                    <p className='main_text mb-4'>You can use the backslash escape character \ to include special characters in a string. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            const name = 'My name is \'Peter\'.'; <br />
                            console.log(name);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>My name is 'Peter'.</p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the same quote is included using \.</p>
                    <p className='main_text mb-8'>Here are other ways that you can use \:   </p>
                    <div className=' border border-[#37474F] p-5 mb-8 overflow-auto'>
                        <ul className='border_bottom pt-5 grid grid-cols-2  gap-5  '>
                            <li className='body_text mb-6 !font-extrabold'>Code</li>
                            <li className='body_text mb-6 !font-extrabold'>Output</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\"</li>
                            <li className='body_text mb-6'>include double quote</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\\</li>
                            <li className='body_text mb-6'>include backslash</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\n</li>
                            <li className='body_text mb-6'>new line</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\r</li>
                            <li className='body_text mb-6'>carriage return</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\v</li>
                            <li className='body_text mb-6'>vertical tab</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\t</li>
                            <li className='body_text mb-6'>horizontal tab</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>\b</li>
                            <li className='body_text mb-6'>backspace</li>
                        </ul>
                        <ul className='pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text '>\f</li>
                            <li className='body_text'>form feed</li>
                        </ul>
                    </div>
                </div>

            </section>
        </>
    )
}

export default StringFunc