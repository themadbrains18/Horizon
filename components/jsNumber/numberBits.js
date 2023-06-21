import React from 'react'

const NumberBits = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Numbers Are Stored in 64-bit</h2>
                    <p className='main_text mb-4'>In JavaScript, numbers are stored in 64-bit format IEEE-754, also known as "double precision floating point numbers".</p>
                    <p className='main_text mb-4'>The numbers are stored in 64 bits (the number is stored in 0 to 51 bit positions, the exponent in 52 to 62 bit positions and the sign in 63 bit position).</p>

                    <div className='border border-[#37474F] p-5 mb-6'>
                        <ul className='border_bottom flex gap-4 justify-between items-center '>
                            <li className='body_text mb-5 !font-extrabold'>Numbers</li>
                            <li className='body_text mb-5 !font-extrabold'>Exponent</li>
                            <li className='body_text mb-5 !font-extrabold'>Sign</li>
                        </ul>
                        <ul className='pt-5 gap-4 flex justify-between items-center '>
                            <li className='body_text '>52 bits(0 - 51)</li>
                            <li className='body_text '>11 bits(52- 62)</li>
                            <li className='body_text '>1 bit(63)</li>
                        </ul>
                    </div>

                </div>
                <div>
                    <h2 className='sec_heading mt-10 mb-6'>Precision Problems</h2>
                    <p className='main_text mb-4'>Operations on floating-point numbers results in some unexpected results. For example,</p>
                    <p className='main_text mb-4'>The numbers are stored in 64 bits (the number is stored in 0 to 51 bit positions, the exponent in 52 to 62 bit positions and the sign in 63 bit position).</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 0.1 + 0.2; <br />
                            console.log(a); // 0.30000000000000004<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The result should be 0.3 instead of 0.30000000000000004. This error occurs because in JavaScript, numbers are stored in binary form to represent decimal digits internally. And decimal numbers can't be represented in binary form exactly.</p>
                    <p className='main_text mb-4'>To solve the above problem, you can do something like this:</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = (0.1 * 10 + 0.2 * 10) / 10;<br />
                            console.log(a); // 0.3<br />
                        </p>
                    </div>

                    <p className='main_text mb-4'>You can also use the toFixed() method.</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 0.1 + 0.2; <br />
                            console.log(a.toFixed(2)); // 0.30                        <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>toFixed(2) rounds up the decimal number to two decimal values.</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 9999999999999999 <br />
                            console.log(a); // 10000000000000000<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Integers are accurate up to 15 digits.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NumberBits