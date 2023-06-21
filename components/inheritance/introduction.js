import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='large_heading mb-6'>JavaScript Class Inheritance</h3>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript class inheritance with the help of examples.</p>
                    <h3 className='sec_heading mb-4'>Class Inheritance</h3>
                    <p className='main_text mb-4'>Inheritance enables you to define a class that takes all the functionality from a parent class and allows you to add more.</p>
                    <p className='main_text mb-4'>Using class inheritance, a class can inherit all the methods and properties of another class.</p>
                    <p className='main_text mb-4'>Inheritance is a useful feature that allows code reusability.</p>
                    <p className='main_text mb-4'>To use class inheritance, you use the <span className='code_border'>extends</span>  keyword. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // parent class<br />
                            class Person &#123;<br />
                            constructor(name) &#123;<br />
                            this.name = name;<br />
                            &#125;<br /><br />

                            greet() &#123;<br />
                            console.log(`Hello $&#123;this.name&#125;`);<br />
                            &#125;<br />
                            &#125;<br /><br />

                            // inheriting parent class<br />
                            class Student extends Person &#123;<br /><br />

                            &#125;<br /><br />

                            let student1 = new Student('Jack');<br />
                            student1.greet();<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Hello Jack
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above example, the <span className='code_border'>Student</span> class inherits all the methods and properties of the <span className='code_border'>Person</span> class. Hence, the <span className='code_border'>Student</span> class will now have the <span className='code_border'>name</span> property and the <span className='code_border'>greet()</span> method.</p>
                    <p className='main_text mb-4'>Then, we accessed the <span className='code_border'>greet()</span> method of <span className='code_border'>Student</span> class by creating a <span className='code_border'>student1</span> object.</p>
                </div>
            </section>

        </>
    )
}

export default Introduction