import React from 'react'

const MultiObjWidConstruct = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Create Multiple Objects with Constructor Function</h3>
                    <p className='main_text mb-4'>In JavaScript, you can create multiple objects from a constructor function. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // constructor function <br />
                            function Person () &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23,<br /><br />

                            this.greet = function () &#123;<br />
                            console.log('hello');<br />
                            &#125;<br />
                            &#125;<br /><br />

                        // create objects<br />
                            const person1 = new Person();<br />
                            const person2 = new Person();<br /><br />

                        // access properties<br />
                            console.log(person1.name);  // John<br />
                            console.log(person2.name);  // John<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, two objects are created using the same constructor function.</p>

                </div>
            </section>
        </>
    )
}

export default MultiObjWidConstruct