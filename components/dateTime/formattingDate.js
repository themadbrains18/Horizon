import React from 'react'

const FormattingDate = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>Formatting a Date</h2>
                    <p className='main_text mb-4'>Unlike other programming languages, JavaScript does not provide a built-in function for formatting a date.</p>
                    <p className='main_text mb-4'>However, you can extract individual bits and use it like this.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const currentDate = new Date();<br />
                            const date = currentDate.getDate(); <br />
                            const month = currentDate.getMonth(); <br />
                            const year = currentDate.getFullYear(); <br />
                            <br />
                        // show in specific format <br />
                            let monthDateYear = (month+1) + '/' + date + '/' + year; <br />
                            <br />
                            console.log(monthDateYear); // 7/3/2020 <br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The above program gives inconsistent length as date and month have single-digit and double-digit.</p>
                    </div>
                </div>
                <h2 className='sec_heading mb-6'>AutoCorrection in Date Object</h2>
                <p className='main_text mb-4'>When you assign out of range values in the Date object, it auto-corrects itself. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const date = new Date(2008, 0, 33); <br />
                // Jan does not have 33 days<br /><br />

                        console.log(date);<br />
                    </code>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mt-6'>
                    <code>
                        Sat Feb 02 2008
                    </code>
                </div>
            </section>
        </>
    )
}

export default FormattingDate