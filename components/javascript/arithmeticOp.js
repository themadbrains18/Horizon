import React from 'react'
import Image from 'next/image'

import ads from '/public/ads.png'


const ArithmeticOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Arithmetic Operators</h2>
                <p className='main_text mb-6'>Arithmetic operators are used to perform arithmetic calculations. For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='flex gap-3'><span className='text-[#C678DD]'> const </span>  <span className='text-secondary'> number = </span> <span className='text-[#D19A66]'> 3 + 5; </span> <span className='text-[#FFDDBE]'>//8 </span></p>
                </div>
                <p className='main_text mb-6'>  Here, the + operator is used to add two operands.</p>
                <div className='bg-light-dark p-5 mb-10'>
                    <div className='grid grid-cols-3 border_bottom pb-4 mb-4'>
                        <p className='medium_text'>Operator</p>
                        <p className='medium_text'>Name</p>
                        <p className='medium_text'>Example</p>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <p className='medium_text'>+</p>
                        <p className='medium_text'>Addition</p>
                        <p className='medium_text'>x + y</p>

                        <p className='medium_text'>-</p>
                        <p className='medium_text'>Subtraction</p>
                        <p className='medium_text'>x - y</p>

                        <p className='medium_text'>*</p>
                        <p className='medium_text'>Multiplication</p>
                        <p className='medium_text'>x * y</p>

                        <p className='medium_text'>/</p>
                        <p className='medium_text'>Division</p>
                        <p className='medium_text'>x / y</p>

                        <p className='medium_text'>%</p>
                        <p className='medium_text'>Remainder</p>
                        <p className='medium_text'>x % y</p>

                        <p className='medium_text'>++</p>
                        <p className='medium_text'>Increment (increments by 1)</p>
                        <p className='medium_text'>++x or x++</p>

                        <p className='medium_text'>--</p>
                        <p className='medium_text'>Decrement (decrements by 1)</p>
                        <p className='medium_text'>--x or x--</p>

                        <p className='medium_text'>**</p>
                        <p className='medium_text'>Exponentiation (Power)</p>
                        <p className='medium_text'>x ** y</p>
                    </div>
                </div>

                {/*  
                 <div className='relative'>
                    <Image src={ads} width={1050} height={240} alt='ads' className='py-10 border-t border-[#37474F]' />
                    <div className='absolute top-[50%] left-[50%] translate-x-[-6%] translate-y-[-50%]'>
                        <h1 className='large_heading !text-[36px] mb-4'>Looking For Learn Programming.</h1>
                        <p className='main_text mb-9'>Admission Start for Development Courses. Hurry Up!</p>
                        <button className='btn'>Enroll Now!</button>
                    </div>
                </div>
                */}


                <div>
                    <h2 className='sec_heading mb-6'>Example 1: Arithmetic operators in JavaScript</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let x = 5; let<br />
                            let y = 3;<br /><br />

                            // addition<br />
                            console.log('x + y = ', x + y); // 8<br /><br />

                            // subtraction<br />
                            console.log('x - y = ', x - y); // 2<br /><br />

                            // multiplication<br />
                            console.log('x * y = ', x * y); // 15<br /><br />

                            // division<br />
                            console.log('x / y = ', x / y); // 1.6666666666666667<br /><br />

                            // remainder<br />
                            console.log('x % y = ', x % y); // 2<br /><br />

                            // increment<br />
                            console.log('++x = ', ++x); // x is now 6<br />
                            console.log('x++ = ', x++); // prints 6 and then increased to 7<br />
                            console.log('x = ', x); // 7<br /><br />

                            // decrement<br />
                            console.log('--x = ', --x); // x is now 6<br />
                            console.log('x-- = ', x--); // prints 6 and then decreased to 5<br />
                            console.log('x = ', x); // 5<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span> The ** operator was introduced in ECMAScript 2016 and some browsers may not support them. To learn more, visit JavaScript exponentiation browser support.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArithmeticOp