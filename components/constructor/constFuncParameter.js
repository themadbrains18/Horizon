import React from 'react'

const ConstFuncParameter = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Constructor Function Parameters</h3>
                    <p className='main_text mb-4'>You can also create a constructor function with parameters. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
            // constructor function<br />
                            function Person (person_name, person_age, person_gender) &#123;<br /><br />

               // assigning  parameter values to the calling object<br />
                            this.name = person_name,<br />
                            this.age = person_age,<br />
                            this.gender = person_gender,<br /><br />

                            this.greet = function () &#123;<br />
                            return ('Hi' + ' ' + this.name);<br />
                            &#125;<br />
                            &#125;<br /><br />


            // creating objects<br />
                            const person1 = new Person('John', 23, 'male');<br />
                            const person2 = new Person('Sam', 25, 'female');<br /><br />

            // accessing properties<br />
                            console.log(person1.name); // "John"<br />
                            console.log(person2.name); // "Sam"<br />

                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, we have passed arguments to the constructor function during the creation of the object.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const person1 = new Person('John', 23, 'male');<br/>
                            const person2 = new Person('Sam', 25, 'male');
                        </p>
                    </div>
                    <p className='main_text mb-4'>  This allows each object to have different properties. As shown above,</p>
                    <p className='main_text mb-4'>"console.log(person1.name);" gives "John"</p>
                    <p className='main_text'>"console.log(person2.name);" gives "Sam"</p>
                </div>
            </section>
        </>
    )
}

export default ConstFuncParameter