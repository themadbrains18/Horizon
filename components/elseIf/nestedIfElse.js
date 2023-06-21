import React from 'react'

const NestedIfElse = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Nested if...else Statement</h2>
                    <p className='main_text mb-6'>You can also use an if...else statement inside of an if...else statement. This is known as nested if...else statement.</p>
                    <h2 className='sec_heading mt-10 mb-6'>Example 4: Nested if...else Statement</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // check if the number is positive, negative or zero <br />
                            const number = prompt("Enter a number: ");<br /><br />

                            if (number &#62;= 0) &#123;<br />
                            if (number == 0) &#123;<br />
                            console.log("You entered number 0");<br />
                            &#125; else &#123;<br />
                            console.log("You entered a positive number");<br />
                            &#125;<br />
                            &#125; else &#123;<br />
                            console.log("You entered a negative number");<br />
                            &#125;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>Enter a number: 5</p>
                        <p className='medium_text'>You entered a positive number</p>
                    </div>
                    <p className='main_text mb-6'>Suppose the user entered 5. In this case, the condition number &gt;= 0 evaluates to true, and the control of the program goes inside the outer if statement.</p>
                    <p className='main_text mb-6'>Then, the test condition, number == 0, of the inner if statement is evaluated. Since it's false, the else clause of the inner if statement is executed.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>As you can see, nested if...else makes our logic complicated and we should try to avoid using nested if...else whenever possible.
                        </p>
                    </div>


                </div>
            </section>
        </>
    )
}

export default NestedIfElse