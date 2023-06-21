import React from 'react'

const NumberProperties = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Number Properties</h2>
                    <p className='main_text mb-4'>Here is a list of Number properties in JavaScript.</p>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>Property</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>EPSILON</li>
                                <li className='body_text mb-6 break-words'>returns the smallest interval between two representable numbers</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>MAX_SAFE_INTEGER</li>
                                <li className='body_text mb-6 break-words'>returns the maximum safe integer</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>MAX_VALUE</li>
                                <li className='body_text mb-6 break-words'>returns the largest possible value</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>MIN_SAFE_INTEGER</li>
                                <li className='body_text mb-6 break-words'>returns the minimum safe integer</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>MIN_VALUE</li>
                                <li className='body_text mb-6 break-words'>returns the smallest possible value</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>NaN</li>
                                <li className='body_text mb-6 break-words'>represents 'Not-a-Number' value</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>NEGATIVE_INFINITY</li>
                                <li className='body_text mb-6 break-words'>represents negative infinity</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>POSITIVE_INFINITY</li>
                                <li className='body_text mb-6 break-words'>represents positive infinity</li>
                            </ul>
                            <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text break-words '>prototype</li>
                                <li className='body_text break-words'>allows the addition of properties to Number objects</li>
                            </ul>
                        </div>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // largest possible value <br />
                            const a = Number.MAX_VALUE;<br />
                            console.log(a); // 1.7976931348623157e+308<br /><br />

                        // maximum safe integer<br />
                            const a = Number.MAX_SAFE_INTEGER;<br />
                            console.log(a); // 9007199254740991<br />
                        </p>
                    </div>
                </div>
                <div>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Number() Function</h2>
                    <p className='main_text mb-4'>The Number() function is used to convert various data types to numbers. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = '23'; // string<br/>
                            const b = true; // boolean<br/><br/>

                            //converting to number<br/>
                                  const result1 = Number(a);<br/>
                            const result2 = Number(b);<br/><br/>

                            console.log(result1); // 23<br/>
                            console.log(result2); // 1<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>If you want to learn more about the number conversion, visit JavaScript Type Conversion.</p>
                </div>
            </section>
        </>
    )
}

export default NumberProperties