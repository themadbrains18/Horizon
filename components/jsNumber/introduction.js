import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript Number</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript Number with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, numbers are primitive data types. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 3; <br />
                            const b = 3.13;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Unlike in some other programming languages, you don't have to specifically declare for integer or floating values using int, float, etc.</p>
                    <p className='main_text mb-4'>You can use exponential notation e to include too large or too small numbers. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a1 = 5e9;<br />
                            console.log(a1); //5000000000<br /><br />

                            const a2 = 5e-5;<br />
                            console.log(a2); // 0.00005<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>  Numbers can also be denoted in hexadecimal notation. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 0xff; <br />
                            console.log(a); // 255<br /><br />

                            const b = 0x00 ;<br />
                            console.log(b); // 0<br />
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Introduction