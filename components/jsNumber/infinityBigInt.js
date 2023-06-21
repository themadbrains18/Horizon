import React from 'react'

const InfinityBigInt = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom '>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Infinity</h2>
                    <p className='main_text mb-4'>In JavaScript, when calculation is done that exceeds the largest (or smallest) possible number, Infinity (or -Infinity) is returned. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 2 / 0; <br />
                            console.log(a); // Infinity<br /><br />

                            const a = -2 / 0;<br />
                            console.log(a); // -Infinity<br />
                        </p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript BigInt</h2>
                    <p className='main_text mb-4'>In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.</p>
                    <p className='main_text mb-4'>A BigInt number is created by appending n to the end of an integer. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // BigInt value<br />
                            const value = 900719925124740998n;<br /><br />

                        // Adding two big integers<br />
                            const value1 = value + 1n;<br />
                            console.log(value1); // returns "900719925124740999n"<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 mb-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>BigInt was introduced in the newer version of JavaScript and is not supported by many browsers.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default InfinityBigInt