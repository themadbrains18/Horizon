import React from 'react'

const Benefits = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Benefits of Using async Function</h3>
                <ul className='mb-8'>
                    <li className='main_text mb-6 list-disc'>The code is more readable than using a callback or a promise.</li>
                    <li className='main_text mb-6 list-disc'>Error handling is simpler.</li>
                    <li className='main_text mb list-disc'>Debugging is easier.</li>
                </ul>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                <p className='body_text'><span className='!text-white'>Note: </span>These two keywords async/await were introduced in the newer version of JavaScript (ES8). Some older browsers may not support the use of async/await.</p>
              </div>
            </section>

        </>
    )
}

export default Benefits