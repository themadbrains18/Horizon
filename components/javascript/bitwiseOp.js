import React from 'react'

const BitwiseOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Bitwise Operators</h2>
                <p className='body_text mb-6'>Bitwise operators perform operations on binary representations of numbers.</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <div className='grid_bitwise grid pb-4 mb-4 border_bottom gap-4'>
                        <p className='main_text'>Operator</p>
                        <p className='main_text'>Description</p>
                    </div>
                    <div className='grid_bitwise grid gap-4'>
                        <p className='medium_text'>&</p>
                        <p className='medium_text'>Bitwise AND</p>

                        <p className='medium_text'>|</p>
                        <p className='medium_text'>Bitwise OR</p>

                        <p className='medium_text'>^</p>
                        <p className='medium_text'>Bitwise XOR</p>

                        <p className='medium_text'>~</p>
                        <p className='medium_text'>Bitwise NOT</p>

                        <p className='medium_text'>&lt;&lt;</p>
                        <p className='medium_text'>Left shift</p>

                        <p className='medium_text'>&#62;&#62;</p>
                        <p className='medium_text'>Sign-propagating right shift</p>

                        <p className='medium_text'>&#62;&#62;&#62;</p>
                        <p className='medium_text'>Zero-fill right shift</p>
                    </div>
                </div>
                <p className='body_text'>Bitwise operators are rarely used in everyday programming. If you are interested, visit JavaScript Bitwise Operators to learn more.</p>
            </section>
        </>
    )
}

export default BitwiseOp