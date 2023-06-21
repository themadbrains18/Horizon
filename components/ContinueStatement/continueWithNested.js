import React from 'react'

const ContinueWithNested = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading my-6'>continue with Nested Loop</h1>
                    <p className='main_text mb-6'>When continue is used inside of two nested loops, continue skips the current iteration of the inner loop. For example,    </p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                        // nested for loops<br /><br />

                            // first loop<br />
                            for (let i = 1; i &#60;= 3; i++)  &#125;<br /><br />

                            // second loop<br />
                            for (let j = 1; j &#60;= 3; j++)  &#123;<br />
                            if (j == 2)  &#123;<br />
                            continue;<br />
                            &#125;<br />
                            console.log(`i = $&#123;i&#125;, j = $&#123;j&#125;`);<br />
                            &#125;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            i = 1, j = 1 <br/>
                            i = 1, j = 3 <br/>
                            i = 2, j = 1 <br/>
                            i = 2, j = 3 <br/>
                            i = 3, j = 1 <br/>
                            i = 3, j = 3 <br/>
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above program, when the continue statement executes, it skips the current iteration in the inner loop and control flow of the program moves to the updateExpression of the inner loop.</p>
                    <p className='main_text'>Hence, the value of j = 2 is never displayed in the output.</p>
                </div>
            </section>
        </>
    )
}

export default ContinueWithNested