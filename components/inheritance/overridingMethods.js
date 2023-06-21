import React from 'react'

const OverridingMethods = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Overriding Method or Property</h3>
                    <p className='main_text mb-4'>If a child class has the same method or property name as that of the parent class, it will use the method and property of the child class. This concept is called method overriding. For example,</p>

                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // parent class <br />
                            class Person &#123; <br />
                            constructor(name) &#123;<br />
                            this.name = name;<br />
                            this.occupation = "unemployed";<br />
                            &#125;<br /><br />

                            greet() &#123;<br />
                            console.log(`Hello $&#123;this.name&#125;.`);<br />
                            &#125;<br /><br />

                            &#125;<br /><br />

                        // inheriting parent class<br />
                            class Student extends Person &#123;<br /><br />

                            constructor(name) &#123;<br /><br />

                                // call the super class constructor and pass in the name parameter<br />
                            super(name);<br /><br />

                                // Overriding an occupation property<br />
                            this.occupation = 'Student';<br />
                            &#125;<br /><br />

                            // overriding Person's method<br />
                            greet() &#123;<br />
                            console.log(`Hello student $&#123;this.name&#125;.`);<br />
                            console.log('occupation: ' + this.occupation);<br />
                            &#125;<br />
                            &#125;<br /><br />

                            let p = new Student('Jack');<br />
                            p.greet();<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Hello student Jack. <br />
                            occupation: Student
                        </p>
                        <p className='main_text mb-4'>
                            Here, the <code className='code_border'>occupation</code> property and the <code className='code_border'>greet()</code> method are present in parent <code className='code_border'>Person</code> class and the child <code className='code_border'>Student</code> class. Hence, the <code className='code_border'>Student</code> class overrides the <code className='code_border'>occupation</code> property and the <code className='code_border'>greet()</code> method.
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default OverridingMethods