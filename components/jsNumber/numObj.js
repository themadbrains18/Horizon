import React from 'react'

const NumObj = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Number Objects</h2>
                    <p className='main_text mb-4'>You can also create numbers using the new keyword. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const a = 45; <br /><br />

                            // creating a number object<br />
                            const b = new Number(45);<br /><br />

                            console.log(a); // 45<br />
                            console.log(b); // 45<br /><br />

                            console.log(typeof a); // "number"<br />
                            console.log(typeof b); // "object"<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>It is recommended to avoid using number objects. Using number objects slows down the program.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NumObj