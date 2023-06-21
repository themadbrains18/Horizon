import React from 'react'

const Examples = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>continue with for Loop</h2>
                    <p className='main_text mb-10'>In a for loop, continue skips the current iteration and control flow jumps to the updateExpression.</p>

                    <h2 className='sec_heading mb-6'>Example 1: Print the Value of i</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
            // program to print the value of i <br />
                            for (let i = 1; i &#60;= 5; i++)  &#123;<br /><br />

                // condition to continue    <br />
                            if (i == 3)  &#123;<br />
                            continue;<br />
                            &#125;<br /><br />

                            console.log(i);<br />
                            &#125;<br />
                        </p>

                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>1</p>
                        <p className='medium_text'>2</p>
                        <p className='medium_text'>4</p>
                        <p className='medium_text'>5</p>
                    </div>
                    <p className='main_text mb-6'>In the above program, for loop is used to print the value of i in each iteration.</p>
                    <p className='main_text mb-6'>Notice the continue statement inside the loop.</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            if(i == 3) &#123;<br />
                            continue;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>This means,</p>
                    <p className='main_text mb-6 list-disc'>When i is equal to 3, the continue statement skips the third iteration.</p>
                    <p className='main_text mb-6 list-disc'>Then, i becomes 4 and the test condition and continue statement is evaluated again.</p>
                    <p className='main_text mb-6 list-disc'>Hence, 4 and 5 are printed in the next two iterations.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The continue statement is almost always used with decision making statements. To learn more, visit JavaScript if...else Statement.</p>
                    </div>
                    <p className='main_text my-6 list-disc'>To learn more about for loop, visit JavaScript for loop.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The break statement terminates the loop entirely. However, the continue statement only skips the current iteration.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Examples