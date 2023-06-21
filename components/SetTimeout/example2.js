import React from 'react'

const Example2 = () => {
    return (
        <>
            <section className='bg-dark pb-10 mb-10 border_bottom'>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Example 2: Display Time Every 3 Second</h1>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // program to display time every 3 seconds <br />
                            function showTime() &#123;<br /><br />

                            // return new date and time<br />
                            let dateTime= new Date();<br /><br />

                            // returns the current local time<br />
                            let time = dateTime.toLocaleTimeString();<br /><br />

                            console.log(time)<br /><br />

                            // display the time after 3 seconds<br />
                            setTimeout(showTime, 3000);<br />
                            &#125;<br /><br />

                        // calling the function<br />
                            showTime();<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            5:45:39 PM <br />
                            5:45:43 PM <br />
                            5:45:47 PM <br />
                            5:45:50 PM <br />
                            ..................
                        </p>
                    </div>

                    <p className='main_text mb-4'>The above program displays the time every <span className='!font-extrabold'>3</span> seconds.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>setTimeout()</code> method calls the function only once after the time interval (here 3 seconds).</p>
                    <p className='main_text mb-4'>However, in the above program, since the function is calling itself, the program displays the time every 3 seconds.</p>
                    <p className='main_text mb-4'>This program runs indefinitely (until the memory runs out).</p>
                    <div className='bg-light-dark p-5 mb-8 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>
                            If you need to execute a function multiple times, it's better to use the <code className='code_border'>setInterval()</code> method.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Example2