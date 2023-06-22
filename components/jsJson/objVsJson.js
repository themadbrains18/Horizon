import React from 'react'

const ObjVsJson = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript Objects VS JSONs</h2>
                    <p className='main_text mb-4'>Though the syntax of JSON is similar to the JavaScript object, JSON is different from JavaScript objects.</p>
                    <div className=' border border-[#37474F] p-5 mb-8 overflow-auto'>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5  '>
                            <li className='body_text mb-6 !font-extrabold'>JSON</li>
                            <li className='body_text mb-6 !font-extrabold'>JavaScript Object</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>The key in key/value pair should be in double quotes.</li>
                            <li className='body_text mb-6'>The key in key/value pair can be without double quotes.</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text mb-6 '>JSON cannot contain functions.</li>
                            <li className='body_text mb-6'>JavaScript objects can contain functions.</li>
                        </ul>
                        <ul className='pt-5 grid grid-cols-2 gap-5'>
                            <li className='body_text  '>JSON can be created and used by other programming languages.</li>
                            <li className='body_text '>JavaScript objects can only be used in JavaScript.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ObjVsJson