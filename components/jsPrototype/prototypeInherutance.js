import React from 'react'

const PrototypeInherutance = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-8'>
                    <h2 className='sec_heading mb-6'>Prototype Inheritance</h2>
                    <p className='main_text mb-4'>In JavaScript, a prototype can be used to add properties and methods to a constructor function. And objects inherit properties and methods from a prototype. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // constructor function <br />
                            function Person ()  &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23<br />
                            &#125;<br /><br />

                        // creating objects<br />
                            const person1 = new Person();<br />
                            const person2 = new Person();<br /><br />

                        // adding property to constructor function<br />
                            Person.prototype.gender = 'male';<br /><br />

                        // prototype value of Person<br />
                            console.log(Person.prototype);<br /><br />

                        // inheriting the property from prototype<br />
                            console.log(person1.gender);<br />
                            console.log(person2.gender);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> &#123; gender: "male" &#125;<br />
                            male<br />
                            male</p><br />
                    </div>
                    <p className='main_text mb-4'>  In the above program, we have added a new property gender to the Person constructor function using:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> Person.prototype.gender = 'male';</p>
                    </div>
                    <p className='main_text mb-4'>Then object person1 and person2 inherits the property gender from the prototype property of Person constructor function.</p>
                    <p className='main_text mb-4'>Hence, both objects person1 and person2 can access the gender property.</p>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The syntax to add the property to an object constructor function is:</p>
                        <div className='bg-light-dark p-5'>
                            <p className='medium_text'>objectConstructorName.prototype.key = 'value';</p>
                        </div>
                    </div>
                    <p className='main_text'>Prototype is used to provide additional property to all the objects created from a constructor function.</p>
                </div>
            </section>

        </>
    )
}

export default PrototypeInherutance