import React from 'react'

const DateMethod = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript Date Methods</h2>
                    <div className=' border border-[#37474F] p-5 mb-8'>
                        <div className='overflow-x-auto'>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words !font-extrabold'>Method</li>
                                <li className='body_text mb-6 break-words !font-extrabold'>Description</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>now()</li>
                                <li className='body_text mb-6 break-words'>Returns the numeric value corresponding to the current time (the number of milliseconds elapsed since January 1, 1970 00:00:00 UTC)</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center '>
                                <li className='body_text mb-6 break-words '>getFullYear()</li>
                                <li className='body_text mb-6 break-words'>Gets the year according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>getMonth()</li>
                                <li className='body_text mb-6 break-words'>Gets the month, from 0 to 11 according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>getDate()</li>
                                <li className='body_text mb-6 break-words'>Gets the day of the month (1–31) according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>getDay()	</li>
                                <li className='body_text mb-6 break-words'>Gets the day of the week (0-6) according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>getHours()</li>
                                <li className='body_text mb-6 break-words'>Gets the hour from 0 to 23 according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>getMinutes</li>
                                <li className='body_text mb-6 break-words'>Gets the minute from 0 to 59 according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>getUTCDate()</li>
                                <li className='body_text mb-6 break-words'>Gets the day of the month (1–31) according to universal time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>setFullYear()</li>
                                <li className='body_text mb-6 break-words'>Sets the full year according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>setMonth()</li>
                                <li className='body_text mb-6 break-words'>Sets the month according to local time</li>
                            </ul>
                            <ul className='border_bottom pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text mb-6 break-words '>setDate()</li>
                                <li className='body_text mb-6 break-words'>Sets the day of the month according to local time</li>
                            </ul>
                            <ul className='pt-5 grid grid_30p_1fr gap-5 items-center'>
                                <li className='body_text break-words '>setUTCDate()</li>
                                <li className='body_text break-words'>Sets the day of the month according to universal time</li>
                            </ul>
                        </div>
                    </div>
                    <h2 className='sec_heading mb-4'>Example: Date Methods</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const timeInMilliseconds = Date.now();<br />
                            console.log(timeInMilliseconds); // 1593765214488 <br />
                            <br />
                            const time = new Date; <br />
                            <br />
                        // get day of the month <br />
                            const date = time.getDate(); <br />
                            console.log(date); // 30 <br />
                            <br />
                        // get day of the week <br />
                            const year = time.getFullYear(); <br />
                            console.log(year); // 2020 <br />
                            <br />
                            const utcDate = time.getUTCDate(); <br />
                            console.log(utcDate); // 30 <br />
                            <br />
                            const event = new Date('Feb 19, 2020 23:15:30'); <br />
                        // set the date <br />
                            event.setDate(15); <br />
                            console.log(event.getDate()); // 15 <br />
                            <br />
                        // Only 28 days in February! <br />
                            event.setDate(35); <br />
                            <br />
                            console.log(event.getDate()); // 7 <br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DateMethod