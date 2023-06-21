import React from 'react'

const ChangingPrototype = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='py-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>Changing Prototype</h2>
                    <p className='main_text mb-4'>If a prototype value is changed, then all the new objects will have the changed property value. All the previously created objects will have the previous value. For example,</p>

                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                           // constructor function <br />
                            function Person() &#123;<br />
                            this.name = 'John'<br />
                            &#125;<br /><br />

                            // add a property<br />
                            Person.prototype.age = 20;<br /><br />

                            // creating an object<br />
                            const person1 = new Person();<br /><br />

                            console.log(person1.age); // 20<br /><br />

                            // changing the property value of prototype<br />
                            Person.prototype = &#123;age: 50 &#125;<br /><br />

                            // creating new object<br />
                            const person3 = new Person();<br /><br />

                            console.log(person3.age); // 50<br />
                            console.log(person1.age); // 20<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You should not modify the prototypes of standard JavaScript built-in objects like strings, arrays, etc. It is considered a bad practice.</p>
                    </div>
                </div>

                <div className='mt-10 border_bottom'>
                    <h2 className='sec_heading mb-6'>JavaScript Prototype Chaining</h2>
                    <p className='main_text mb-4'>If an object tries to access the same property that is in the constructor function and the prototype object, the object takes the property from the constructor function. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            function Person() &#123; <br />
                            this.name = 'John'<br />
                            &#125;<br /><br />

                        // adding property <br />
                            Person.prototype.name = 'Peter';<br />
                            Person.prototype.age = 23<br /><br />

                            const person1 = new Person();<br /><br />

                            console.log(person1.name); // John<br />
                            console.log(person1.age); // 23<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, a property name is declared in the constructor function and also in the prototype property of the constructor function.</p>
                    <p className='main_text mb-4'>When the program executes, person1.name looks in the constructor function to see if there is a property named name. Since the constructor function has the name property with value 'John', the object takes value from that property.</p>
                    <p className='main_text mb-10'>When the program executes, person1.age looks in the constructor function to see if there is a property named age. Since the constructor function doesn't have age property, the program looks into the prototype object of the constructor function and the object inherits property from the prototype object (if available).</p>
                </div>
                <div className='mt-10'>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You can also access the prototype property of a constructor function from an object.</p>
                    </div>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            function Person () &#123; <br />
                            this.name = 'John'<br />
                            &#125;<br /><br />

                        // adding a prototype<br />
                            Person.prototype.age = 24;<br /><br />

                        // creating object<br />
                            const person = new Person();<br /><br />

                        // accessing prototype property<br />
                            console.log(person.__proto__);   // &#123; age: 24 &#125;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, a person object is used to access the prototype property using __proto__. However, __proto__ has been deprecated and you should avoid using it.</p>
                </div>
            </section>
        </>
    )
}

export default ChangingPrototype