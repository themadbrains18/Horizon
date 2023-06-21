import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='large_heading mb-6'>JavaScript Symbol</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript Symbol with the help of examples.</p>
                    <h1 className='sec_heading mb-6'>JavaScript Symbol</h1>
                    <p className='main_text mb-4'>The JavaScript ES6 introduced a new primitive data type called Symbol. Symbols are immutable (cannot be changed) and are unique. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                // two symbols with the same description <br /><br />

                            const value1 = Symbol('hello');<br />
                            const value2 = Symbol('hello');<br /><br />

                            console.log(value1 === value2); // false<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Though value1 and value2 both contain the same description, they are different.</p>
                </div>
                <div className='pb-10 border_bottom mb-10'>
                    <h1 className='sec_heading mb-6'>Creating Symbol</h1>
                    <p className='main_text mb-4'>You use the Symbol() function to create a Symbol. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        // creating symbol <br />
                            const x = Symbol()<br /><br />

                            typeof x; // symbol<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>You can pass an optional string as its description. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const x = Symbol('hey'); <br />
                            console.log(x); // Symbol(hey)<br />
                        </p>
                    </div>
                </div>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Access Symbol Description</h1>
                    <p className='main_text mb-4'>To access the description of a symbol, we use the . operator. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const x = Symbol('hey'); <br />
                            console.log(x.description); // hey<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction