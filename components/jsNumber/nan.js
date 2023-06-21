import React from 'react'

const Nan = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript NaN</h2>
                    <p className='main_text mb-4'>In JavaScript, NaN(Not a Number) is a keyword that indicates that the value is not a number.</p>
                    <p className='main_text mb-4'>Performing arithmetic operations (except + ) to numeric value with string results in NaN. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 4 - 'hello'; <br />
                            console.log(a); // NaN<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The built-in function isNaN() can be used to find if a value is a number. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = isNaN(9); <br />
                            console.log(a); // false<br /><br />

                            const a = isNaN(4 - 'hello');<br />
                            console.log(a); // true<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>When the typeof operator is used for NaN value, it gives a number output. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 4 - 'hello';<br />
                            console.log(a); // NaN<br />
                            console.log(typeof a); // "number"<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Nan