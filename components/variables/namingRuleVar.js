import React from 'react'

const NamingRuleVar = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom '>
                <h1 className='large_heading mb-6'>Rules for Naming JavaScript Variables</h1>
                <p className='main_text mb-6'>The rules for naming variables are:</p>
                <p className='main_text'>1. Variable names must start with either a letter, an underscore _, or the dollar sign $. For example,</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                //valid<br />
                    let a = 'hello';<br />
                    let _a = 'hello';<br />
                    let $a = 'hello';<br />
                </div>
                <p className='main_text '>2. Variable names cannot start with numbers. For example,</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                //invalid<br />
                    Let 1a = 'hello'; // this gives an error
                </div>
                <p className='main_text '>3. JavaScript is case-sensitive. So y and Y are different variables. For example,</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                    let y = "hi";<br />
                    let Y = 5;<br /><br />

                    console.log(y); // hi<br />
                    console.log(Y); // 5<br />
                </div>
                <p className='main_text '>4. Keywords cannot be used as variable names. For example,</p>
                <div className='bg-light-dark p-5 mb-6 mt-6 main_text'>
                //invalid<br />
                    let new = 5; // Error! new is a keyword.
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <h2 className='bar_heading mb-7'>Notes:</h2>
                    <ul className='px-5'>
                        <li className='body_text list-disc mb-4'>Though you can name variables in any way you want, it's a good practice to give a descriptive variable name. If you are using a variable to store the number of apples, it better to use apples or numberOfApples rather than x or n.</li>
                        <li className='body_text list-disc'>In JavaScript, the variable names are generally written in camelCase if it has multiple words. For example, firstName, annualSalary, etc.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default NamingRuleVar