import React from 'react'

const SuperKeyword = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript super() keyword</h3>
                    <p className='main_text mb-4'>The <span className='code_border'>super</span> keyword used inside a child class denotes its parent class. For example,</p>

                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
           // parent class <br />
                            class Person &#123;<br />
                            constructor(name)&#123;<br />
                            this.name = name;<br />
                            &#125;<br /><br />

                            greet() &#123;<br />
                            console.log(`Hello $&#123;this.name&#125;`);<br />
                            &#125;<br />
                            &#125;<br /><br />

                            // inheriting parent class<br />
                            class Student extends Person &#123;<br /><br />

                            constructor(name) &#123;<br /><br />

                            console.log("Creating student class");<br /><br />

                            // call the super class constructor and pass in the name parameter<br />
                            super(name);<br />
                            &#125;<br /><br />

                            &#125;<br /><br />

                            let student1 = new Student('Jack');<br />
                            student1.greet();<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>
                        Here, <span className='code_border'>super</span> inside <span className='code_border'>Student</span> class refers to the <span className='code_border'>Person</span> class. Hence, when the constructor of <span className='code_border'>Student</span> class is called, it also calls the constructor of the <span className='code_border'>Person</span> class which assigns a name property to it.
                    </p>
                </div>
            </section>
        </>
    )
}

export default SuperKeyword