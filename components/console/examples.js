import React from 'react'

const Examples = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Example 1: Print a Sentence</h1>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // program to print a sentence<br /><br />

                        // passing string<br />
                            console.log("I love JS");<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'> I love JS</p>
                    </div>

                    <h1 className='sec_heading pt-10  border_top mb-6'>Example 2: Print Values Stored in Variables</h1>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                    // program to print variables values<br /><br />

                    // storing values<br />
                            const greet = 'Hello';<br />
                            const name = 'Jack';<br /><br />

                            console.log(greet + ' ' + name);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'> Hello Jack</p>
                    </div>
                    <p className='main_text pt-10 border_top mb-4'> As you can see from these examples, console.log() makes it easier to see the value inside a variable. That's why it's commonly used for testing/debugging code.</p>
                    <p className='main_text'>The console object also has various methods other than console.log(). To learn more, visit JavaScript console.</p>
                </div>
            </section>
        </>
    )
}

export default Examples