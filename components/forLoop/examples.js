import React from 'react'

const Examples = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Example 1: Display a Text Five Times</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            &#47;&#47; program to display text 5 times<br />
                            const n = 5;<br /><br />

                            &#47;&#47; looping from i = 1 to 5<br />
                            for (let i = 1; i &#60;= n; i++) &#123;<br />
                            console.log(`I love JavaScript.`);<br />
                            &#125;<br />

                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>I love JavaScript.</p>
                        <p className='medium_text'>I love JavaScript.</p>
                        <p className='medium_text'>I love JavaScript.</p>
                        <p className='medium_text'>I love JavaScript.</p>
                        <p className='medium_text'>I love JavaScript.</p>
                    </div>


                    <h2 className='sec_heading mt-10 mb-6'>Example 2: Display Numbers from 1 to 5</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            &#47;&#47;  program to display numbers from 1 to 5<br />
                            const n = 5;<br /><br />

                            &#47;&#47;  looping from i = 1 to 5<br />
                            &#47;&#47;  in each iteration, i is increased by 1<br />
                            for (let i = 1; i &#60;= n; i++)  &#123;<br />
                            console.log(i);     // printing the value of i<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>1</p>
                        <p className='medium_text'>2</p>
                        <p className='medium_text'>3</p>
                        <p className='medium_text'>4</p>
                        <p className='medium_text'>5</p>
                    </div>


                    <h2 className='sec_heading mt-10 mb-6'>  Example 3: Display Sum of n Natural Numbers</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // program to display the sum of natural numbers<br />
                            let sum = 0;<br />
                            const n = 100<br /><br />

                        // looping from i = 1 to n<br />
                        // in each iteration, i is increased by 1<br />
                            for (let i = 1; i &#60;= n; i++)  &#123;<br />
                            sum += i;  // sum = sum + i<br />
                            &#125;<br /><br />

                            console.log('sum:', sum);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>sum: 5050</p>
                    </div>
                    <p className='main_text mb-6'>Here, the value of sum is 0 initially. Then, a for loop is iterated from i = 1 to 100. In each iteration, i is added to sum and its value is increased by 1.</p>
                    <p className='main_text mb-6'>When i becomes 101, the test condition is false and sum will be equal to 0 + 1 + 2 + ... + 100.</p>


                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Infinite for loop</h2>
                    <p className='main_text mb-6'>   If the test condition in a for loop is always true, it runs forever (until memory is full). For example,</p>

                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // infinite for loop <br />
                            for(let i = 1; i &#62; 0; i++) &#123;<br />
                            // block of code<br />
                            &#125;
                        </p>
                    </div>
                    <p className='main_text'>In the above program, the condition is always true which will then run the code for infinite times.</p>
                </div>
            </section>
        </>
    )
}

export default Examples