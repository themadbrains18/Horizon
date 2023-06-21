import React from 'react'

const Undefined = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript undefined</h2>
                    <p className='main_text mb-6'>The undefined data type represents value that is not assigned. If a variable is declared but the value is not assigned, then the value of that variable will be undefined. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            let name;<br />
                            console.log(name); // undefined<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>It is also possible to explicitly assign a variable value undefined. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            let name = undefined;<br />
                            console.log(name); // undefined
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>  It is recommended not to explicitly assign undefined to a variable. Usually, null is used to assign 'unknown' or 'empty' value to a variable.</p>
                    </div>

                    <h2 className='sec_heading mt-10 mb-6 pt-10 border_top'> JavaScript null</h2>
                    <p className='main_text mb-6'> In JavaScript, null is a special value that represents empty or unknown value. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const number = null;
                        </p>
                    </div>
                    <p className='main_text mb-6'>The code above suggests that the number variable is empty.</p>
                    
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>  null is not the same as NULL or Null.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Undefined