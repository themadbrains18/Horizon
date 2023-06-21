import React from 'react'

const ObjPrototype = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Object Prototype</h3>
                    <p className='main_text mb-4'>You can also add properties and methods to a constructor function using a prototype. For example,</p>
                    <div className='bg-light-dark p-5'>
                        <p className='medium_text'>
                        // constructor function <br />
                            function Person ()  &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23<br />
                            &#125;<br /><br />

                        // creating objects<br />
                            let person1 = new Person();<br />
                            let person2 = new Person();<br /><br />

                        // adding new property to constructor function<br />
                            Person.prototype.gender = 'Male';<br /><br />

                            console.log(person1.gender); // Male<br />
                            console.log(person2.gender); // Male<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ObjPrototype