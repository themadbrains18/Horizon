import React from 'react'
import Image from 'next/image'
import breakImg from '/public/javascript-break-statement.webp'

const Working = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Working of JavaScript break Statement</h2>
                     <Image src={breakImg} width={700} height={400} alt='working break statemensts' className='py-6 bg-white' />
                </div>
            </section>
        </>
    )
}

export default Working