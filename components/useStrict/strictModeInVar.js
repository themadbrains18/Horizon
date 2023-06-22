import React from 'react'

const StrictModeInVar = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Strict Mode in Variable</h2>
                    <p className='main_text mb-4'>In strict mode, using a variable without declaring it throws an error.</p>
                    <div className='bg-light-dark p-5 mb-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You need to declare strict mode at the <strong>beginning</strong> of the program. If you declare strict mode below some code, it won't work.</p>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            console.log("some code");            <br />
                            <br />
                        // 'use strict' is ignored <br />
                        // must be at the top <br />
                            "use strict"; <br />
                            <br />
                            x = 21; // does not throw an error <br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default StrictModeInVar