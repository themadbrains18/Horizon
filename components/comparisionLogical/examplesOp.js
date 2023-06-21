import React from 'react'

const ExamplesOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>Example 1: Equal to Operator</h2>
                <p className='body_text mb-6'>In JavaScript, you can also use the + operator to concatenate (join) two or more strings.</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        const a = 5, b = 2, c = 'hello';<br /><br />

                // equal to operator<br />
                        console.log(a == 5);     // true<br />
                        console.log(b == '2');   // true<br />
                        console.log(c == 'Hello');  // false<br />
                    </p>
                </div>
                <p className='body_text mb-6'>  == evaluates to true if the operands are equal.</p>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>In JavaScript, == is a comparison operator, whereas = is an assignment operator. If you mistakenly use = instead of ==, you might get unwanted result.
                    </p>
                </div>


                <div className='mt-10'>
                    <h2 className='sec_heading mb-6'>Example 2: Not Equal to Operator</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 3, b = 'hello';<br /><br />

                              // not equal operator<br />
                            console.log(a != 2); // true<br />
                            console.log(b != 'Hello'); // true<br />
                        </p>
                    </div>
                    <p className='body_text mb-6'>!= evaluates to true if the operands are not equal.</p>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-6'>Example 3: Strict Equal to Operator</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 2;<br /><br />

                        // strict equal operator<br />
                            console.log(a === 2); // true<br />
                            console.log(a === '2'); // false<br />
                        </p>
                    </div>
                    <p className='body_text mb-6'>=== evaluates totrue if the operands are equal and of the same type. Here 2 and '2' are the same numbers but the data type is different. And === also checks for the data type while comparing.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The difference between == and === is that:</p>
                        <p className='body_text'>== evaluates to true if the operands are equal, however, === evaluates to true only if the operands are equal and of the same type</p>

                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-6'>Example 4: Strict Not Equal to Operator</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 2, b = 'hello';<br /><br />

                        // strict not equal operator<br />
                            console.log(a !== 2); // false<br />
                            console.log(a !== '2'); // true<br />
                            console.log(b !== 'Hello'); // true<br />
                        </p>
                    </div>
                    <p className='body_text mb-6'>!== evaluates to true if the operands are strictly not equal. It's the complete opposite of strictly equal ===.</p>
                    <p className='body_text mb-6'>In the above example, 2 !== '2' gives true. It's because their types are different even though they have the same value.</p>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-6'>Example 5: Greater than Operator</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 3;<br /><br />

                        // greater than operator<br />
                            console.log(a &#62; 2); // true<br />
                        </p>
                    </div>
                    <p className='body_text mb-6'>&#62; evaluates to true if the left operand is greater than the right operand.</p>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-6'>Example 6: Greater than or Equal to Operator</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const a = 3;<br /><br />

                    // greater than or equal operator<br />
                            console.log(a &#62;= 3); //true<br />
                        </p>
                    </div>
                    <p className='body_text mb-6'>&#62;= evaluates to true if the left operand is greater than or equal to the right operand.</p>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-6'>Example 7: Less than Operator</h2>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        const a = 3, b = 2;<br/><br/>

                        // less than operator<br/>
                        console.log(a &lt; 2); // false<br/>
                        console.log(b &lt; 3); // true<br/>
                        </p>
                    </div>
                    <p className='body_text mb-6'>&lt; evaluates to true if the left operand is less than the right operand.</p>
                </div>

                <div className='mt-10'>
                <h2 className='sec_heading mb-6'>Example 8: Less than or Equal to Operator</h2>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                    const a = 2;<br/><br/>

                    // less than or equal operator<br/>
                    console.log(a &lt;= 3) // true<br/>
                    console.log(a &lt;= 2); // true<br/>
                    </p>
                </div>
                <p className='body_text'>&lt;= evaluates to true if the left operand is less than or equal to the right operand.</p>
            </div>

            </section>
        </>
    )
}

export default ExamplesOp