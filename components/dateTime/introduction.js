import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript Date and Time</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about date and time in JavaScript with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, <code className='code_border'>date</code> and time are represented by the  <code className='code_border'>Date</code> object. The Date object provides the date and time information and also provides various methods.</p>
                    <p className='main_text mb-4'>A JavaScript date defines the <strong>EcmaScript epoch</strong> that represents milliseconds since <strong>1 January 1970 UTC.</strong> This date and time is the same as the UNIX epoch (predominant base value for computer-recorded date and time values).</p>
                    <h2 className='sec_heading mb-6'>Creating Date Objects</h2>
                    <p className='main_text mb-4'>There are four ways to create a date object.</p>
                    <ul>
                        <li className='main_text mb-6 list-disc'>new Date()</li>
                        <li className='main_text mb-6 list-disc'>new Date(milliseconds)</li>
                        <li className='main_text mb-6 list-disc'>new Date(Date string)</li>
                        <li className='main_text list-disc'>new Date(year, month, day, hours, minutes, seconds, milliseconds)</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Introduction