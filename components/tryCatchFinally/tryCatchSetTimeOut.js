import React from 'react'

const TryCatchSetTimeOut = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript try...catch in setTimeout</h2>
                    <p className='main_text mb-4'>The try...catch won't catch the exception if it happened in "timed" code, like in <span className='!font-extrabold'>setTimeout().</span> For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            try &#123;  <br />
                            setTimeout(function() &#123;<br />
                            // error in the code<br />
                            &#125;, 3000);<br />
                            &#125; catch (e) &#123;<br />
                            console.log( "won't work" );<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The above try...catch won't work because the engine has already left the try..catch construct and the function is executed later.</p>
                    <p className='main_text mb-4'>The try..catch block must be inside that function to catch an exception inside a timed function. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            setTimeout(function() &#123;<br />
                            try &#123;<br />
                            // error in the code<br />
                            &#125; catch &#123;<br />
                            console.log( "error is caught" );<br />
                            &#125;<br />
                            &#125;, 3000);<br />
                        </p>
                    </div>
                </div>
                <div>
                    <p className='main_text mb-4'>You can also use the throw statement with the try...catch statement to use user-defined exceptions. For example, a certain number is divided by 0. If you want to consider Infinity as an error in the program, then you can throw a user-defined exception using the throw statement to handle that condition.</p>
                </div>
            </section>
        </>
    )
}

export default TryCatchSetTimeOut