import React from 'react'

const NumMethods = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Number Methods</h2>
                    <p className='main_text mb-4'>Here is a list of built-in number methods in JavaScript.</p>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>Method</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>isNaN()</li>
                                <li className='body_text mb-6 break-words'>determines whether the passed value is NaN</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>isFinite()</li>
                                <li className='body_text mb-6 break-words'>determines whether the passed value is a finite number</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>isInteger()</li>
                                <li className='body_text mb-6 break-words'>determines whether the passed value is an integer</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>isSafeInteger()</li>
                                <li className='body_text mb-6 break-words'>determines whether the passed value is a safe integer</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>parseFloat(string)</li>
                                <li className='body_text mb-6 break-words'>converts the numeric floating string to floating-point number</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>parseInt(string, [radix])</li>
                                <li className='body_text mb-6 break-words'>converts the numeric string to integer</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toExponential(fractionDigits)</li>
                                <li className='body_text mb-6 break-words'>returns a string value for a number in exponential notation</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toFixed(digits)</li>
                                <li className='body_text mb-6 break-words'>returns a string value for a number in fixed-point notation</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toPrecision()</li>
                                <li className='body_text mb-6 break-words'>returns a string value for a number to a specified precision</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>toString([radix])</li>
                                <li className='body_text mb-6 break-words'>returns a string value in a specified radix(base)</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>valueof()</li>
                                <li className='body_text mb-6 break-words'>returns the numbers value</li>
                            </ul>
                            <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text break-words '>toLocaleString()</li>
                                <li className='body_text break-words'>returns a string with a language sensitive representation of a number</li>
                            </ul>
                        </div>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            c// check if a is integer <br />
                            const a = 12;<br />
                            console.log(Number.isInteger(a)); // true<br /><br />

                        // check if b is NaN<br />
                            const b = NaN;<br />
                            console.log(Number.isNaN(b)); // true<br /><br />

                        // display upto two decimal point<br />
                            const d = 5.1234;<br />
                            console.log(d.toFixed(2)); // 5.12<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NumMethods