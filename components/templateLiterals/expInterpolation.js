import React from 'react'

const ExpInterpolation = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Expression Interpolation</h3>
                    <p className='main_text mb-4'>Before JavaScript ES6, you would use the <code className="code_border">+</code> operator to concatenate variables and expressions in a string. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const name = 'Jack';
                            console.log('Hello ' + name); // Hello Jack
                        </p>
                    </div>
                    <p className='main_text mb-4'>With template literals, it's a bit easier to include variables and expressions inside a string. For that, we use the <code className="code_border">$&#123;...&#125;</code> syntax.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const name = 'Jack'; <br />
                            console.log(`Hello $&#123;name&#125;`); <br /><br />

                            const result = 4 + 5;<br /><br />

                        // template literals used with expressions<br />
                            console.log(`The sum of 4 + 5 is $&#123;result&#125;`);<br /><br />

                            console.log(`$&#123;result &#60; 10 ? 'Too low': 'Very high'&#125;`)<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Hello Jack</p>
                        <p className='medium_text'>The sum of  4 + 5 is 9</p>
                        <p className='medium_text'>Too low</p>
                    </div>
                    <p className='main_text mb-4'>The process of assigning variables and expressions inside the template literal is known as interpolation.</p>
                </div>
            </section>
        </>
    )
}

export default ExpInterpolation