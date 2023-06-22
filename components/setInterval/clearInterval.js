import React from 'react'

const ClearInterval = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript clearInterval()</h2>
                    <p className='main_text mb-4'>As you have seen in the above example, the program executes a block of code at every specified time interval. If you want to stop this function call, then you can use the <code className='code_border'>clearInterval()</code> method.</p>
                    <p className='main_text mb-4'>The syntax of <code className='code_border'>clearInterval()</code> method is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            clearInterval(intervalID);
                        </code>
                    </div>
                    <p className='main_text mb-4'>  Here, the intervalID is the return value of the setInterval() method.</p>
                </div>
            </section>
        </>
    )
}

export default ClearInterval