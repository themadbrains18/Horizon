import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='large_heading mb-6'>JavaScript Classes</h3>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript classes with the help of examples.</p>
                    <p className='main_text mb-4'>Classes are one of the features introduced in the <span className='!font-extrabold'>ES6</span> version of JavaScript.</p>
                    <p className='main_text mb-4'>A class is a blueprint for the object. You can create an object from the class.</p>
                    <p className='main_text mb-4'>You can think of the class as a sketch (prototype) of a house. It contains all the details about the floors, doors, windows, etc. Based on these descriptions, you build the house. House is the object.</p>
                    <p className='main_text mb-4'>Since many houses can be made from the same description, we can create many objects from a class.</p>
                </div>
                <h3 className='sec_heading mb-4'>Creating JavaScript Class</h3>
                <p className='main_text mb-4'>JavaScript class is similar to the Javascript constructor function, and it is merely a syntactic sugar.</p>
                <p className='main_text mb-4'>The constructor function is defined as:</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                    // constructor function <br />
                        function Person () &#123;<br />
                        this.name = 'John',<br />
                        this.age = 23<br />
                        &#125;<br /><br />

                    // create an object<br />
                        const person1 = new Person();<br />
                    </code>
                </div>
                <p className='main_text mb-4'>Instead of using the <span className='code_border'>function</span> keyword, you use the <span className='code_border'>class</span> keyword for creating JS classes. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                // creating a class <br />
                        class Person &#123;<br />
                        constructor(name) &#123;<br />
                        this.name = name;<br />
                        &#125;<br />
                        &#125;<br />
                    </code>
                </div>
                <p className='main_text mb-4'>The <span className='code_border'>class</span> keyword is used to create a class. The properties are assigned in a constructor function.</p>
                <p className='main_text mb-4'>Now you can create an object. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                // creating a class <br />
                        class Person &#123;<br />
                        constructor(name) &#123;<br />
                        this.name = name;<br />
                        &#125;<br />
                        &#125;<br /><br />

                        // creating an object<br />
                        const person1 = new Person('John');<br />
                        const person2 = new Person('Jack');<br /><br />

                        console.log(person1.name); // John<br />
                        console.log(person2.name); // Jack<br />
                    </code>
                </div>
                <p className='main_text mb-4'>Here, <span className='code_border'>person1</span> and person2 are objects of <span className='code_border'>person</span> class.</p>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>The <span className='code_border'>constructor()</span>  method inside a class gets called automatically each time an object is created.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction