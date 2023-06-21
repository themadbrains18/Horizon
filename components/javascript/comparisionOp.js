import React from 'react'
import Image from 'next/image'
const ComparisionOp = () => {

    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Comparison Operators</h2>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>const a = 3, b = 2;</p>
                    <p className='medium_text'>console.log(a &#62; b); // true</p>
                </div>
                <p className='body_text mb-4'>Here, the comparison operator &#62; is used to compare whether a is greater than b.</p>

                <div className='bg-light-dark p-5 mb-6'>
                    <div className='grid_comparision border_bottom pb-4 mb-4'>
                        <p className='medium_text'>Operator</p>
                        <p className='medium_text'>Name</p>
                        <p className='medium_text'>Example</p>
                    </div>
                    <div className='grid_comparision gap-4'>
                        <p className='medium_text'>==</p>
                        <p className='medium_text'>Equal to: returns true if the operands are equal</p>
                        <p className='medium_text'>x != y</p>

                        <p className='medium_text'>===</p>
                        <p className='medium_text'>Strict equal to: true if the operands are equal and of the same type</p>
                        <p className='medium_text'>x === y</p>

                        <p className='medium_text'>!==</p>
                        <p className='medium_text'>Strict not equal to: true if the operands are equal but of different type or not equal at all</p>
                        <p className='medium_text'>x !== y</p>

                        <p className='medium_text'>&#62;</p>
                        <p className='medium_text'>Greater than: true if left operand is greater than the right operand</p>
                        <p className='medium_text'>x &#62; y</p>

                        <p className='medium_text'>&#62;=</p>
                        <p className='medium_text'>Division Assignment</p>
                        <p className='medium_text'>a /= 2; // a = a / 2</p>

                        <p className='medium_text'>&lt;</p>
                        <p className='medium_text'>Less than: true if the left operand is less than the right operand</p>
                        <p className='medium_text'>x &lt; y</p>

                        <p className='medium_text'>&lt;=</p>
                        <p className='medium_text'>Less than or equal to: true if the left operand is less than or equal to the right operand</p>
                        <p className='medium_text'>x &lt;= y</p>
                    </div>
                </div>
                <div className='border_top pt-10'>
                    <h2 className='sec_heading mb-6'>Example 2: Comparison operators in JavaScript</h2>
                </div>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                    // equal operator<br />
                        console.log(2 == 2); // true<br />
                        console.log(2 == '2'); // true<br /><br />

                        // not equal operator<br />
                        console.log(3 != 2); // true<br />
                        console.log('hello' != 'Hello'); // true<br /><br />

                        // strict equal operator<br />
                        console.log(2 === 2); // true<br />
                        console.log(2 === '2'); // false<br /><br />

                        // strict not equal operator<br />
                        console.log(2 !== '2'); // true<br />
                        console.log(2 !== 2); // false<br />
                    </p>
                </div>
                <p className='body_text'>Comparison operators are used in decision-making and loops. You will learn about the use of comparison operators in detail in later tutorials.</p>
            </section>
        </>
    )
}

export default ComparisionOp