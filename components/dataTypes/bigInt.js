import React from 'react'

const BigInt = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript BigInt</h2>
                    <p className='main_text mb-6'>In JavaScript, Number type can only represent numbers less than (253 - 1) and more than -(253 - 1). However, if you need to use a larger number than that, you can use the BigInt data type.
                    </p>
                    <p className='main_text mb-6'>A BigInt number is created by appending n to the end of an integer. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // BigInt value<br />
                            const value1 = 900719925124740998n;<br /><br />

                        // Adding two big integers<br />
                            const result1 = value1 + 1n;<br />
                            console.log(result1); // "900719925124740999n"<br /><br />

                            const value2 = 900719925124740998n;<br /><br />

                        // Error! BitInt and number cannot be added<br />
                            const result2 = value2 + 1; <br />
                            console.log(result2); <br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> 900719925124740999n</p>
                        <p className='medium_text'>Uncaught TypeError: Cannot mix BigInt and other types</p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>BigInt was introduced in the newer version of JavaScript and is not supported by many browsers including Safari. Visit JavaScript BigInt support to learn more.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BigInt