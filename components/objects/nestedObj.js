import React from 'react'

const NestedObj = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-4'>JavaScript Nested Objects</h1>
                    <p className='main_text pb-4 '>An object can also contain another object. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // nested object<br />
                            const student =  &#123; <br />
                            name: 'John', <br />
                            age: 20,<br />
                            marks:  &#123;<br />
                            science: 70,<br />
                            math: 75<br />
                            &#125;<br />
                            &#125;<br /><br />

                        // accessing property of student object<br />
                            console.log(student.marks); //  &#123;science: 70, math: 75 &#125;<br /><br />

                        // accessing property of marks object<br />
                            console.log(student.marks.science); // 70<br />
                        </p>
                    </div>
                    <p className='main_text'>In the above example, an object student contains an object value in the marks property.</p>
                </div>
                <div className='pt-10'>
                    <h1 className='large_heading mb-4'>JavaScript Object Methods</h1>
                    <p className='main_text pb-4 '>In JavaScript, an object can also contain a function. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const person = &#123; <br />
                            name: 'Sam',<br />
                            age: 30,<br />
                        // using function as a value<br />
                            greet: function() &#123; console.log('hello') &#125;<br />
                            &#125;<br /><br />

                            person.greet(); // hello<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, a function is used as a value for the greet key. That's why we need to use person.greet() instead of person.greet to call the function inside the object.</p>
                    <p className='main_text '>A JavaScript method is a property containing a function declaration. In the next tutorial, you will learn about JavaScript Methods in detail.</p>
                </div>
            </section>
        </>
    )
}

export default NestedObj