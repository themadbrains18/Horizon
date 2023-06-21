import React from 'react'
import Image from 'next/image'
import videoThumb from '/public/videothumbnail.png'

const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading'>JavaScript Comparison and Logical Operators </h1>
                    <p className='main_text pb-6 border_bottom'>In this tutorial, you will learn about the Comparison operators and Logical operators with the help of examples.</p>
                    <div className='py-10 mb-10 border_bottom'>
                        <h2 className='sec_heading'>Video: JavaScript Comparison and Logical Operators</h2>
                        <Image src={videoThumb} width={1050} height={500} alt='Video Thumbnail' className='py-6' />
                    </div>

                    <h2 className='sec_heading mt-10 mb-6'> JavaScript Comparison Operators</h2>
                    <p className='main_text mb-6'>true or false. Comparison operators are used in decision making and loops.</p>
                  
                    <div className='bg-light-dark p-5 overflow-x-auto'>
                        <div className='grid grid-cols-3 border_bottom pb-4 mb-4'>
                            <p className='medium_text'>Operator</p>
                            <p className='medium_text'>Description</p>
                            <p className='medium_text'>Example</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <p className='medium_text'>==</p>
                            <p className='medium_text'>Equal to: true if the operands are equal</p>
                            <p className='medium_text'>5==5; //true</p>

                            <p className='medium_text'>!=</p>
                            <p className='medium_text'>Not equal to: true if the operands are not equal</p>
                            <p className='medium_text'>5!=5; //false</p>

                            <p className='medium_text'>===</p>
                            <p className='medium_text'>Strict equal to: true if the operands are equal and of the same type</p>
                            <p className='medium_text'>5==='5'; //false</p>

                            <p className='medium_text'>!==</p>
                            <p className='medium_text'>Strict not equal to: true if the operands are equal but of different type or not equal at all</p>
                            <p className='medium_text'>5!=='5'; //true</p>

                            <p className='medium_text'>&#62;</p>
                            <p className='medium_text'>Greater than: true if the left operand is greater than the right operand</p>
                            <p className='medium_text'>3&#62;2; //true</p>

                            <p className='medium_text'>&#62;=</p>
                            <p className='medium_text'>Greater than or equal to: true if the left operand is greater than or equal to the right operand</p>
                            <p className='medium_text'>3&#62;=3; //true</p>

                            <p className='medium_text'>&lt;</p>
                            <p className='medium_text'>Less than: true if the left operand is less than the right operand</p>
                            <p className='medium_text'>3&lt;2; //false</p>

                            <p className='medium_text'>&lt;=</p>
                            <p className='medium_text'>Less than or equal to: true if the left operand is less than or equal to the right operand</p>
                            <p className='medium_text'>2&lt;=2; //true</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner