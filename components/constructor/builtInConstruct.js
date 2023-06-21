import React from 'react'

const BuiltInConstruct = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Built-in Constructors</h3>
                    <p className='main_text mb-4'>JavaScript also has built-in constructors. Some of them are:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            let a = new Object();    // A new Object object<br />
                            let b = new String();    // A new String object<br />
                            let c = new Number();    // A new Number object<br />
                            let d = new Boolean();   // A new Boolean object<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In JavaScript, strings can be created as objects by:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const name = new String ('John');<br />
                            console.log(name); // "John"
                        </p>
                    </div>
                    <p className='main_text mb-4'>In JavaScript, numbers can be created as objects by:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const number = new Number (57);<br />
                            console.log(number); // 57
                        </p>
                    </div>
                    <p className='main_text mb-4'>In JavaScript, booleans can be created as objects by:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const count = new Boolean(true);<br />
                            console.log(count); // true
                        </p>
                    </div>
                    <div className='bg-light-dark mb-10 p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>It is recommended to use primitive data types and create them in a normal way, such as const name = 'John';, const number = 57; and const count = true; <br /><br />
                            You should not declare strings, numbers, and boolean values as objects because they slow down the program.
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In JavaScript, the keyword class was introduced in ES6 (ES2015) that also allows us to create objects. Classes are similar to constructor functions in JavaScript. To learn more, visit JavaScript Classes.</p>
                    </div>

                </div>
            </section>

        </>
    )
}

export default BuiltInConstruct