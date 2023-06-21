import React from 'react'

const ConstructVsObjLiteral = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Create Objects: Constructor Function Vs Object Literal</h3>
                    <p className='main_text mb-4'>Object Literal is generally used to create a single object. The constructor function is useful if you want to create multiple objects. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // using object literal<br />
                            let person = &#123;<br />
                            name: 'Sam'<br />
                            &#125;<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                    // using constructor function<br />
                            function Person ()  &#123;<br />
                            this.name = 'Sam'<br />
                            &#123;<br /><br />

                            let person1 = new Person();<br />
                            let person2 = new Person();<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Each object created from the constructor function is unique. You can have the same properties as the constructor function or add a new property to one particular object. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // using constructor function<br />
                            function Person ()  &#123;<br />
                            this.name = 'Sam'<br />
                            &#125;<br /><br />

                            let person1 = new Person();<br />
                            let person2 = new Person();<br /><br />

                            // adding new property to person1<br />
                            person1.age = 20;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Now this age property is unique to person1 object and is not available to person2 object.</p>
                    <p className='main_text mb-4'>However, if an object is created with an object literal, and if a variable is defined with that object value, any changes in variable value will change the original object. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                    // using object lateral <br/>
                            let person = &#123;<br/>
                            name: 'Sam'<br/>
                            &#125;<br/><br/>

                            console.log(person.name); // Sam<br/><br/>

                            let student = person;<br/><br/>

                            // changes the property of an object<br/>
                            student.name = 'John';<br/><br/>

                            // changes the origins object property<br/>
                            console.log(person.name); // John<br/>
                        </p>
                    </div>
                    <p className='main_text '>When an object is created with an object literal, any object variable derived from that object will act as a clone of the original object. Hence, any change you make in one object will also reflect in the other object.</p>
                </div>
            </section>

        </>
    )
}

export default ConstructVsObjLiteral