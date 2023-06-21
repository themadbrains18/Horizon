import React from 'react'

const StringOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript String Operators</h2>
                <p className='body_text mb-6'>In JavaScript, you can also use the + operator to concatenate (join) two or more strings.</p>
                <h2 className='sec_heading mb-6'>Example 4: String operators in JavaScript</h2>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                // concatenation operator<br />
                        console.log('hello' + 'world');<br /><br />
                        let a = 'JavaScript';<br /><br />
                        a += ' tutorial'; // a = a + ' tutorial';<br />
                        console.log(a);<br />
                    </p>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-4'>
                    <p className='medium_text'>helloworld</p>
                    <p className='medium_text'>JavaScript tutorial</p>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>When + is used with strings, it performs concatenation. However, when + is used with numbers, it performs addition.</p>
                </div>

            </section>
        </>
    )
}

export default StringOp