import React from 'react'

const RethrowException = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Rethrow an Exception</h2>
                    <p className='main_text mb-4'>You can also use throw statement inside the catch block to rethrow an exception. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const number = 5; <br />
                            try &#123;<br />
                            // user-defined throw statement<br />
                            throw new Error('This is the throw');<br /><br />

                            &#125;<br />
                            catch(error) &#123;<br />
                            console.log('An error caught');<br />
                            if( number + 8 &#62; 10) &#123;<br /><br />

                            // statements to handle exceptions<br />
                            console.log('Error message: ' + error);<br />
                            console.log('Error resolved');<br />
                            &#125;<br />
                            else &#123;<br />
                            // cannot handle the exception<br />
                            // rethrow the exception<br />
                            throw new Error('The value is low');<br />
                            &#125;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            An error caught <br />
                            Error message: Error: This is the throw<br />
                            Error resolved<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the throw statement is used within the try block to catch an exception. And the throw statement is rethrown in the catch block which gets executed if the catch block cannot handle the exception.</p>
                    <p className='main_text mb-4'>Here, the catch block handles the exception and no error occurs. Hence, the throw statement is not rethrown.</p>
                    <p className='main_text mb-4'>If the error was not handled by the catch block, the throw statement would be rethrown with error message "Uncaught Error: The value is low"</p>
                </div>

            </section>
        </>
    )
}

export default RethrowException