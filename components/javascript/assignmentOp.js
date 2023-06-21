import React from 'react'

const AssignmentOp = () => {
    return (
        <>
            <section className='py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Assignment Operators</h2>
                <p className='main_text mb-6'>Assignment operators are used to assign values to variables. For example,</p>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='flex gap-3'><span className='text-[#C678DD]'> const </span>  <span className='text-secondary'> x </span> <span className='text-[#D19A66]'> = </span> <span className='text-[#FFDDBE]'>5; </span></p>
                </div>
                <p className='body_text mb-6'>Here, the = operator is used to assign value 5 to variable x.</p>
                <p className='body_text mb-6'>Here's a list of commonly used assignment operators:</p>

                <div className='bg-light-dark p-5 mb-6'>
                    <div className='grid grid-cols-3 border_bottom pb-4 mb-4'>
                        <p className='medium_text'>Operator</p>
                        <p className='medium_text'>Name</p>
                        <p className='medium_text'>Example</p>
                    </div>
                    <div className='grid grid-cols-3 gap-4'>
                        <p className='medium_text'>=</p>
                        <p className='medium_text'>Assignment Operator</p>
                        <p className='medium_text'>a = 7; // 7</p>

                        <p className='medium_text'>+=</p>
                        <p className='medium_text'>Addition Assignment</p>
                        <p className='medium_text'>a += 5; // a = a + 5</p>

                        <p className='medium_text'>-=</p>
                        <p className='medium_text'>Subtraction Assignment</p>
                        <p className='medium_text'>a -= 2; // a = a - 2</p>

                        <p className='medium_text'>*=</p>
                        <p className='medium_text'>Multiplication Assignment</p>
                        <p className='medium_text'>a *= 3; // a = a * 3</p>

                        <p className='medium_text'>/=</p>
                        <p className='medium_text'>Division Assignment</p>
                        <p className='medium_text'>a /= 2; // a = a / 2</p>

                        <p className='medium_text'>%=</p>
                        <p className='medium_text'>Remainder Assignment</p>
                        <p className='medium_text'>a %= 2; // a = a % 2</p>

                        <p className='medium_text'>**=</p>
                        <p className='medium_text'>Exponentiation Assignment</p>
                        <p className='medium_text'>a **= 2; // a = a**2</p>
                    </div>
                </div>
                <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span> The commonly used assignment operator is =. You will understand other assignment operators such as +=, -=, *= etc. once we learn arithmetic operators.</p>
                </div>
            </section>
        </>
    )
}

export default AssignmentOp