import React from 'react'

const AddMethod = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Add Methods to a Constructor Function Using Prototype</h1>
                    <p className='main_text mb-4'>You can also add new methods to a constructor function using prototype. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                    // constructor function <br />
                            function Person () &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23<br />
                            &#125;<br /><br />

                    // creating objects<br />
                            const person1 = new Person();<br />
                            const person2 = new Person();<br /><br />

                    // adding a method to the constructor function<br />
                            Person.prototype.greet = function() &#123;<br />
                            console.log('hello' + ' ' +  this.name);<br />
                            &#125;<br /><br />

                            person1.greet(); // hello John<br />
                            person2.greet(); // hello John<br />
                        </p>
                    </div>
                    <p className='main_text'>In the above program, a new method greet is added to the Person constructor function using a prototype.</p>
                </div>
            </section>
        </>
    )
}

export default AddMethod