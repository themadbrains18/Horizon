import React from 'react'

const SingleLine = () => {
    return (
        <section className='bg-dark pb-10 border_bottom'>
            <div className=''>
                <h2 className='sec_heading mt-10 mb-6'>Single Line Comments</h2>
                <p className='main_text mb-6'>In JavaScript, any line that starts with // is a single line comment. For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        name = "Jack";<br /><br />

                        // printing name on the console<br />
                        console.log("Hello " + name);<br />
                    </p>
                </div>
                <p className='main_text mb-6'>Here, // printing name on the console is a comment.</p>
                <p className='main_text mb-6'>  You can also use single line comment like this:</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        name = "Jack";<br /><br />

                        console.log("Hello " + name);  // printing name on the console<br />
                    </p>
                </div>
            </div>
        </section>
    )
}

export default SingleLine