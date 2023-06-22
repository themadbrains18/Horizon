import React from 'react'

const NewDate = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>new Date()</h2>
                    <p className='main_text mb-4'>You can create a date object using the <code className='code_border'> new Date()</code> constructor. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const timeNow = new Date(); <br />
                            console.log(timeNow); // shows current date and time
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code> Mon Jul 06 2020 12:03:49 GMT+0545 (Nepal Time)</code>
                    </div>
                    <p className='main_text mb-4'>Here, <code className='code_border'> new Date()</code> creates a new date object with the current date and local time.</p>
                </div>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>new Date(milliseconds)</h2>
                    <p className='main_text mb-4'>The <code className='code_border'>Date </code> object contains a number that represents milliseconds since <strong> 1 January 1970 UTC.</strong> </p>
                    <p className='main_text mb-4'><code className='code_border'>new Date(milliseconds)</code> creates a new date object by adding the milliseconds to the zero time. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const time1 = new Date(0);<br />
                            <br />
                        // epoch time<br />
                            console.log(time1); // Thu Jan 01 1970 05:30:00<br />
                            <br />
                        // 100000000000 milliseconds after the epoch time<br />
                            const time2 = new Date(100000000000)<br />
                            console.log(time2); // Sat Mar 03 1973 15:16:40<br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>1000 milliseconds is equal to 1 second.</p>
                    </div>
                </div>
                <div className=''>
                    <h2 className='sec_heading mb-6'>new Date(date string)</h2>
                    <p className='main_text mb-4'><code className='code_border'>new Date(date string)</code> creates a new date object from a date string.</p>
                    <p className='main_text mb-4'>In JavaScript, there are generally three date input formats.</p>
                    <h2 className='sec_heading mb-6 !text-[19px]'>ISO Date Formats</h2>
                    <p className='main_text mb-4'>You can create a date object by passing ISO date formats. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // ISO Date(International Standard)<br />
                            const date = new Date("2020-07-01");<br />
                            <br />
                        // the result date will be according to UTC<br />
                            console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>You can also pass only the year and month or only the year. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const date = new Date("2020-07"); <br />
                            console.log(date); // Wed Jul 01 2020 05:45:00 GMT+0545<br />
                            <br />
                            const date1 = new Date("2020");<br />
                            console.log(date1); // Wed Jul 01 2020 05:45:00 GMT+0545<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>You can also pass specific time to ISO dates.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const date = new Date("2020-07-01T12:00:00Z"); <br />
                            console.log(date); // Wed Jul 01 2020 17:45:00 GMT+0545
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Date and time are separated with capital letter <strong
                        >T</strong>. And UTC time is defined with capital <strong
                        >Z</strong>.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default NewDate