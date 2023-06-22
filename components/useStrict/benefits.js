import React from 'react'

const Benefits = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Benefits of Strict Mode</h2>
                    <p className='main_text mb-4'>The use of strict mode:</p>
                    <ul>
                        <li className='main_text ml-5 mb-6 list-disc'>helps to write a cleaner code</li>
                        <li className='main_text ml-5 mb-6 list-disc'>changes previously accepted silent errors (bad syntax) into real errors and throws an error message</li>
                        <li className='main_text ml-5 list-disc'>makes it easier to write "secure" JavaScript</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Benefits