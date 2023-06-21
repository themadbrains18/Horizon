import React from 'react'

const AddingProperties = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Adding Properties And Methods in an Object</h3>
                    <p className='main_text mb-4'>You can add properties or methods in an object like this:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // constructor function <br />
                            function Person () &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23<br />
                            &#125;<br /><br />

                            // creating objects<br />
                            let person1 = new Person();<br />
                            let person2 = new Person();<br /><br />

                            // adding property to person1 object<br />
                            person1.gender = 'male';<br /><br />

                            // adding method to person1 object<br />
                            person1.greet = function () &#123;<br />
                            console.log('hello');<br />
                            &#125;<br /><br />

                            person1.greet();   // hello<br /><br />

                            // Error code<br />
                            // person2 doesn't have greet() method<br />
                            person2.greet();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            hello<br />
                            Uncaught TypeError: person2.greet is not a function
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above example, a new property gender and a new method greet() is added to the person1 object.</p>
                    <p className='main_text'>However, this new property and method is only added to person1. You cannot access gender or greet() from person2. Hence the program gives error when we try to access person2.greet();</p>
                </div>
            </section>
        </>
    )
}

export default AddingProperties