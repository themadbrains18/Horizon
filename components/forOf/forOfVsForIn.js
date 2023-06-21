import React from 'react'

const ForOfVsForIn = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>for...of Vs for...in</h3>
                <div className=' border border-[#37474F] p-5 mb-8 overflow-auto'>
                    <ul className='border_bottom pt-5 grid grid-cols-2  gap-5  '>
                        <li className='body_text mb-6 !font-extrabold'>for...of</li>
                        <li className='body_text mb-6 !font-extrabold'>for...in</li>
                    </ul>
                    <ul className='border_bottom pt-5 grid grid-cols-2 gap-5'>
                        <li className='body_text mb-6 '>The <code className='code_border'>for..of</code> loop is used to iterate through the values of an iterable.</li>
                        <li className='body_text mb-6'>The <code className='code_border'>for..in</code> loop is used to iterate through the keys of an object.</li>
                    </ul>
                    <ul className='pt-5 grid grid-cols-2 gap-5'>
                        <li className='body_text '>The <code className='code_border'>for..of</code> loop cannot be used to iterate over an object.</li>
                        <li className='body_text '>You can use <code className='code_border'>for..in</code> to iterate over an iterable such arrays and strings but you should avoid using <code className='code_border'>for..in</code>  for iterables.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ForOfVsForIn