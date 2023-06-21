import React from 'react'

const LengthObjString = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10 pb-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>JavaScript String Length</h1>
                    <p className='main_text mb-4'>To find the length of a string, you can use built-in length property. For example,</p>
                    <div className='bg-light-dark p-3'>
                        <p className='medium_text'>
                            const a = 'hello'; <br />
                            console.log(a.length); // 5<br />
                        </p>
                    </div>
                </div>
                <div className='mt-10 '>
                    <h1 className='sec_heading mb-6'>JavaScript String Objects</h1>
                    <p className='main_text mb-4'>You can also create strings using the new keyword. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            const a = 'hello'; <br />
                            const b = new String('hello');<br /><br />

                            console.log(a); // "hello"<br />
                            console.log(b); // "hello"<br /><br />

                            console.log(typeof a); // "string"<br />
                            console.log(typeof b); // "object"<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>It is recommended to avoid using string objects. Using string objects slows down the program.</p>
                    </div>
                </div>



            </section>
        </>
    )
}

export default LengthObjString