import Link from 'next/link'
import React from 'react'


const Promises = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Promises</h2>
                <p className='main_text mb-4'>Promises are used to handle asynchronous tasks. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                    // returns a promise <br/>
                    let countValue = new Promise(function (resolve, reject) &#123;<br/>
                       reject('Promise rejected'); <br/>
                       &#125;);<br/><br/>
                    
                    // executes when promise is resolved successfully<br/>
                    countValue.then(<br/>
                        function successValue(result) &#123;<br/>
                            console.log(result); // Promise resolved<br/>
                            &#125;,<br/>
                     )
                    </p>
                </div>
                <p className='main_text mb-4'>To learn more about promises, visit <Link href="/" className='text-blue-500'>JavaScript Promises.</Link> </p> 
            </section>
        </>
    )
}

export default Promises