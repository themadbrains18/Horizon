import Link from 'next/link'
import React from 'react'


const DefaultParameter = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>Default Parameter Values</h2>
                <p className='main_text mb-4'>In the ES6 version, you can pass default values in the function parameters. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                    function sum(x, y = 5) &#123; <br/><br/>

                        // take sum<br/>
                        // the value of y is 5 if not passed<br/>
                        console.log(x + y);<br/>
                        &#125;<br/><br/>
                    
                    sum(5); // 10<br/>
                    sum(5, 15); // 20<br/>
                    </p>
                </div>
                <p className='main_text mb-6'>In the above example, if you don't pass the parameter for <span className="border p-1">y</span>, it will take <span className='!font-extrabold'>5</span> by default.</p>
                <p className='main_text mb-4'>To learn more about default parameters, visit  <Link href="/" className='text-blue-500'>JavaScript Function Default Parameters.</Link> </p>
            </section>
        </>
    )
}

export default DefaultParameter