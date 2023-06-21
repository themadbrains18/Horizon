import React from 'react'

import Image from 'next/image'
import funcExample from '/public/javascript-function-example1.png'

const CallingFunc = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Calling a Function</h2>
                    <p className='main_text mb-6'>In the above program, we have declared a function named greet(). To use that function, we need to call it.</p>
                    <p className='main_text mb-6'>Here's how you can call the above greet() function.</p>

                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
            // function call<br />
                            greet();
                        </p>
                    </div>
                    <Image src={funcExample} width={650} height={500} alt='FlowChart Switch' className='py-6 bg-white' />

                </div>
            </section>
        </>
    )
}

export default CallingFunc