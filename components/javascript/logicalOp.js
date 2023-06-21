import React from 'react'

const LogicalOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Logical Operators</h2>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        const x = 5, y = 3;<br />
                        (x &lt; 6) && (y &lt; 5); // true
                    </p>
                </div>
                <p className='body_text mb-4'>Here, && is the logical operator AND. Since both x &lt; 6 and y &lt; 5 are true, the result is true.</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <div className='grid_comparision border_bottom pb-4 gap-4 mb-4'>
                        <p className='medium_text'>Operator</p>
                        <p className='medium_text'>Name</p>
                        <p className='medium_text'>Example</p>
                    </div>
                    <div className='grid_comparision gap-4'>
                        <p className='medium_text'>&&</p>
                        <p className='medium_text'>Logical AND: true if both the operands are true, else returns false</p>
                        <p className='medium_text'>x && y</p>

                        <p className='medium_text'>||</p>
                        <p className='medium_text'>Logical OR: true if either of the operands is true; returns false if both are false  </p>
                        <p className='medium_text'>x || y</p>

                        <p className='medium_text'>!</p>
                        <p className='medium_text'>Logical NOT: true if the operand is false and vice-versa.</p>
                        <p className='medium_text'>!x</p>
                    </div>
                </div>
                <h2 className='sec_heading mb-6 pt-10 border_top' >Example 3: Logical Operators in JavaScript</h2>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                         // logical AND<br />
                        console.log(true && true); // true<br />
                        console.log(true && false); // false<br /><br />
                        // logical OR<br />
                        console.log(true || false); // true<br /><br />
                        // logical NOT<br />
                        console.log(!true); // false<br />
                    </p>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-4'>
                    <p className='medium_text'>true</p>
                    <p className='medium_text'>false</p>
                    <p className='medium_text'>true</p>
                    <p className='medium_text'>false</p>
                </div>
                <p className='body_text'>Logical operators are used in decision making and loops. You will learn about the use of logical operators in detail in later tutorials.</p>
            </section>
        </>
    )
}

export default LogicalOp