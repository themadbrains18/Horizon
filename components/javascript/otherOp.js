import React from 'react'
import PreNextPage from '../snippets/preNextPage'

const OtherOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>Other JavaScript Operators</h2>
                <p className='body_text mb-6'>Here's a list of other operators available in JavaScript. You will learn about these operators in later tutorials.</p>
                <div className='bg-light-dark p-5 '>
                    <div className='grid_comparision border_bottom pb-4 gap-4 mb-4'>
                        <p className='medium_text'>Operator</p>
                        <p className='medium_text'>Description</p>
                        <p className='medium_text'>Example</p>
                    </div>
                    <div className='grid_comparision gap-4'>
                        <p className='medium_text'>,</p>
                        <p className='medium_text'>evaluates multiple operands and returns the value of the last operand.</p>
                        <p className='medium_text'>let a = (1, 3 , 4); // 4</p>

                        <p className='medium_text'>?:</p>
                        <p className='medium_text'>returns value based on the condition</p>
                        <p className='medium_text'>(5 &#62; 3) ? 'success' : 'error'; // "success"</p>

                        <p className='medium_text'>delete</p>
                        <p className='medium_text'>deletes an object's property, or an element of an array</p>
                        <p className='medium_text'>delete x</p>

                        <p className='medium_text'>typeof</p>
                        <p className='medium_text'>returns a string indicating the data type</p>
                        <p className='medium_text'>typeof 3; // "number"</p>

                        <p className='medium_text'>void</p>
                        <p className='medium_text'>discards the expression's return value</p>
                        <p className='medium_text'>void(x)</p>

                        <p className='medium_text'>in</p>
                        <p className='medium_text'>returns true if the specified property is in the object</p>
                        <p className='medium_text'>prop in object</p>

                        <p className='medium_text'>instanceof</p>
                        <p className='medium_text'>returns true if the specified object is of of the specified object type  </p>
                        <p className='medium_text'>object instanceof object_type</p>
                    </div>
                </div>
                <PreNextPage/>
            </section>
        </>
    )
}

export default OtherOp