import React from 'react'

const OnlyOneStatement = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>Body of if...else With Only One Statement</h2>
                    <p className='main_text mb-6'>If the body of if...else has only one statement, we can omit &#123; &#125; in our programs. For example, you can replace</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const number = 2;<br/>
                            if (number &gt; 0) &#123;<br/>
                            console.log("The number is positive.");<br/>
                            &#125; else &#123;<br/>
                            console.log("The number is negative or zero.");<br/>
                            &#125;<br/>
                        </p>
                    </div>
                    <p className='main_text mb-6'>with</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const number = 2;<br/>
                            if (number &gt; 0)<br/>
                            console.log("The number is positive.");<br/>
                            else<br/>
                            console.log("The number is negative or zero.");<br/>
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>The number is positive.</p>
                    </div>
                    <h2 className='sec_heading mt-10 mb-6'>More on Decision Making</h2>
                    <p className='main_text'>In certain situations, a ternary operator can replace an if...else statement. To learn more, visit JavaScript Ternary Operator.</p>
                </div>
            </section>
        </>
    )
}

export default OnlyOneStatement