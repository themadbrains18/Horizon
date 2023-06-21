import React from 'react'

const OprWithNum = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>+ Operator with Numbers</h2>
                    <p className='main_text mb-4'>When + is used with numbers, it is used to add the numbers. For example,</p>

                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 4 + 9; <br />
                            console.log(a); // 13<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>When + is used with numbers and strings, it is used to concatenate them. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = '4' + 9; <br />
                            console.log(a); // 49<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>When a numeric string is used with other numeric operations, the numeric string is converted to a number. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = '4' - 2;<br />
                            console.log(a); // 2<br /><br />

                            const a = '4' / 2;<br />
                            console.log(a); // 2<br /><br />

                            const a = '4' * 2;<br />
                            console.log(a); // 8<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OprWithNum