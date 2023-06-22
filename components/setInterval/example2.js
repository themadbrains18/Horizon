import React from 'react'

const Example2 = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Example 2: Display Time Every 5 Seconds</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // program to display time every 5 seconds <br/>
                        function showTime() &#123;<br/><br/>
                        
                            // return new date and time<br/>
                            let dateTime= new Date();<br/><br/>
                        
                            // return the time<br/>
                            let time = dateTime.toLocaleTimeString();<br/><br/>
                        
                            console.log(time)<br/>
                            &#125;<br/><br/>
                        
                        let display = setInterval(showTime, 5000);<br/>
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        "5:15:28 PM" <br/>
                        "5:15:33 PM"<br/>
                        "5:15:38 PM"<br/>
                        ....<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>The above program displays the current time once every 5 seconds.</p>
                    <p className='main_text mb-4'><code className='code_border'>new Date()</code> gives the current date and time. And <code className='code_border'>toLocaleTimeString()</code> returns the current time. </p> 
                </div>
            </section>
        </>
    )
}

export default Example2