import React from 'react'

const LogicalOp = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading'>JavaScript Logical Operators</h2>
                    <p className='main_text pb-6 border_bottom'>Logical operators perform logical operations: AND, OR and NOT.</p>
                    <div className='bg-light-dark p-5 overflow-x-auto'>
                        <div className='grid grid-cols-3 border_bottom pb-4 mb-4'>
                            <p className='medium_text'>Operator</p>
                            <p className='medium_text'>Description</p>
                            <p className='medium_text'>Example</p>
                        </div>
                        <div className='grid grid-cols-3 gap-4'>
                            <p className='medium_text'>&&</p>
                            <p className='medium_text'>Logical AND: true if both the operands/boolean values are true, else evaluates to false</p>
                            <p className='medium_text'>true && false; // false</p>

                            <p className='medium_text'>||</p>
                            <p className='medium_text'>Logical OR: true if either of the operands/boolean values is true. evaluates to false if both are false</p>
                            <p className='medium_text'>true || false; // true</p>

                            <p className='medium_text'>!</p>
                            <p className='medium_text'>Logical NOT: true if the operand is false and vice-versa.</p>
                            <p className='medium_text'>!true; // false</p>
                        </div>
                    </div>
                    <div className='mt-10'>
                        <h2 className='sec_heading mb-6'>Example 9: Logical AND Operator</h2>
                        <div className='bg-light-dark p-5 mb-6'>
                            <p className='medium_text'>
                                const a = true, b = false;<br />
                                const c = 4;<br /><br />

                            // logical AND<br />
                                console.log(a && a); // true<br />
                                console.log(a && b);  // false<br /><br />

                                console.log((c &#62; 2) && (c &lt; 2)); // false<br />
                            </p>
                        </div>
                        <p className='body_text mb-6'>&& evaluates to true if both the operands are true, else evaluates to false.</p>
                        <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                            <p className='body_text'><span className='!text-white'>Note: </span>You can also use logical operators with numbers. In JavaScript, 0 is false and all non-zero values are true.</p>
                        </div>
                    </div>

                    <div className='mt-10'>
                        <h2 className='sec_heading mb-6'>Example 10: Logical OR Operator</h2>
                        <div className='bg-light-dark p-5 mb-6'>
                            <p className='medium_text'>
                                const a = true, b = false, c = 4;<br /><br /><br />


                        // logical OR<br />
                                console.log(a || b); // true<br />
                                console.log(b || b); // false<br />
                                console.log((c&#62;2) || (c&lt;2)); // true<br />
                            </p>
                        </div>
                        <p className='body_text mb-6'>|| evaluates to true if either of the operands is true. If both operands are false, the result is false.</p>
                    </div>

                    <div className='mt-10'>
                        <h2 className='sec_heading mb-6'>Example 11: Logical NOT Operator</h2>
                        <div className='bg-light-dark p-5 mb-6'>
                            <p className='medium_text'>
                                const a = true, b = false;<br /><br />

                        // logical NOT<br />
                                console.log(!a); // false<br />
                                console.log(!b); // true<br />

                            </p>
                        </div>
                        <p className='body_text'>! evaluates to true if the operand is false and vice-versa.</p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default LogicalOp