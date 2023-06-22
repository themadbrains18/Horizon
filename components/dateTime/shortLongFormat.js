import React from 'react'

const ShortLongFormat = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>Short and Long date format</h2>
                    <p className='main_text mb-4'>The other two date formats are <strong>short date format</strong> and <strong>long date format</strong>.</p>
                    <div className='bg-light-dark p-5'>
                        <code>
                        // short date format "MM/DD/YYYY" <br />
                            const date = new Date("03/25/2015"); <br />
                            console.log(date); // Wed Mar 25 2015 00:00:00 GMT+0545 <br />
                            <br />
                        // long date format "MMM DD YYYY" <br />
                            const date1 = new Date("Jul 1 2020"); <br />
                            console.log(date1); // Wed Jul 01 2020 00:00:00 GMT+0545 <br />
                            <br />
                        // month and day can be in any order <br />
                            const date2 = new Date("1 Jul 2020"); <br />
                            console.log(date2); // Wed Jul 01 2020 00:00:00 GMT+0545 <br />
                            <br />
                        // month can be full or abbreviated. Also month names are insensitive. <br />
                        // comma are ignored <br />
                            const date3 = new Date("July 1 2020"); <br />
                            console.log(date3); // Wed Jul 01 2020 00:00:00 GMT+0545 <br />
                            <br />
                            const date4 = new Date("JULY, 1, 2020"); <br />
                            console.log(date4); // Wed Jul 01 2020 00:00:00 <br />
                        </code>
                    </div>
                </div>
                <div className=''>
                    <h2 className='sec_heading mb-6'>new Date(year, month, day, hours, minutes, seconds, milliseconds)</h2>
                    <p className='main_text mb-4'> <strong>new Date(year, month,...)</strong> creates a new date object by passing specific date and time. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const time1 = new Date(2020, 1, 20, 4, 12, 11, 0); <br />
                            console.log(time1); // Thu Feb 20 2020 04:12:11
                        </code>
                    </div>
                    <p className='main_text mb-4'>The passed argument has a specific order.</p>
                    <p className='main_text mb-4'>If four numbers are passed, it represents year, month, day and hours. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const time1 = new Date(2020, 1, 20, 4);<br />
                            console.log(time1); // Thu Feb 20 2020 04:00:00
                        </code>
                    </div>
                    <p className='main_text mb-4'>Similarly, if two arguments are passed, it represents year and month. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const time1 = new Date(2020, 1);<br />
                            console.log(time1); // Sat Feb 01 2020 00:00:00
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>If you pass only one argument, it is treated as milliseconds. Hence, you have to pass two arguments to use this date format.</p> <br />
                        <p className='body_text'>In JavaScript, months are counted from <strong> 0 to 11</strong>. January is <strong> 0</strong> and December is <strong>11</strong>.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ShortLongFormat