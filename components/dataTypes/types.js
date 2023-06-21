import React from 'react'

const Types = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>

                <h2 className='sec_heading mt-10 mb-4'>JavaScript Data Types</h2>
                <p className='main_text mb-6'>There are eight basic data types in JavaScript. They are:</p>
                <div className='grid grid_dataType bg-light-dark gap-2 p-4 overflow-x-auto items-center'>

                    <p className='body_text border_bottom pb-2' >Data Types</p>
                    <p className='body_text border_bottom pb-2'>Description</p>
                    <p className='body_text border_bottom pb-2'>Example</p>


                    <p className='body_text'>String</p>
                    <p className='body_text'>represents textual data</p>
                    <p className='body_text'>'hello', "hello world!" etc</p>

                    <p className='body_text'>Number	</p>
                    <p className='body_text'>an integer or a floating-point number</p>
                    <p className='body_text'>3, 3.234, 3e-2 etc.</p>

                    <p className='body_text'>BigInt</p>
                    <p className='body_text'>an integer with arbitrary precision</p>
                    <p className='body_text'>900719925124740999n , 1n etc.</p>

                    <p className='body_text'>Boolean	</p>
                    <p className='body_text'>Any of two values: true or false   </p>
                    <p className='body_text'>true and false</p>

                    <p className='body_text'>undefined</p>
                    <p className='body_text'>a data type whose variable is not initialized</p>
                    <p className='body_text'>let a;</p>

                    <p className='body_text'>null</p>
                    <p className='body_text'>denotes a null value</p>
                    <p className='body_text'>let a = null;</p>

                    <p className='body_text'>Symbol</p>
                    <p className='body_text'>data type whose instances are unique and immutable</p>
                    <p className='body_text'>let value = Symbol('hello');</p>

                    <p className='body_text'>Object</p>
                    <p className='body_text'>key-value pairs of collection of data</p>
                    <p className='body_text'>let student = &#123; &#125;;</p>
                </div>
                <p className='py-6 main_text'>Here, all data types except Object are primitive data types, whereas Object is non-primitive.</p>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>The Object data type (non-primitive type) can store collections of data, whereas primitive data type can only store a single data.</p>
                </div>

            </section>
        </>
    )
}

export default Types