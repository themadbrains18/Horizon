import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Prototype</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about prototypes in JavaScript with the help of examples.</p>
                    <p className='main_text mb-4'>Before you learn prototypes, be sure to check these tutorials:</p>
                    <ul className='mb-8'>
                        <li className='main_text mb-4 list-disc ml-2' >JavaScript Objects</li>
                        <li className='main_text list-disc ml-2'>JavaScript Constructor Function</li>
                    </ul>
                    <p className='main_text mb-4'>As you know, you can create an object in JavaScript using an object constructor function. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // constructor function <br />
                            function Person () &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23<br />
                            &#125;<br /><br />

                        // creating objects<br />
                            const person1 = new Person();<br />
                            const person2 = new Person();<br />
                        </p>
                    </div>
                    <p className='main_text'>In the above example, function Person() is an object constructor function. We have created two objects person1 and person2 from it.</p>
                </div>
                <div className='pt-10'>
                    <h3 className='sec_heading mb-4'>JavaScript Prototype</h3>
                    <p className='main_text mb-4'>In JavaScript, every function and object has a property named prototype by default. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                        function Person () &#123;<br/>
                            this.name = 'John',<br/>
                            this.age = 23<br/>
                            &#125;<br/><br/>
                        
                        const person = new Person();<br/><br/>
                        
                        // checking the prototype value<br/>
                        console.log(Person.prototype); // &#123; ... &#125;<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, we are trying to access the prototype property of a Person constructor function.</p>
                    <p className='main_text mb-4'>Since the prototype property has no value at the moment, it shows an empty object &#123; ... &#125;.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction