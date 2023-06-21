import React from 'react'

const ClassMethods = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Javascript Class Methods</h3>
                    <p className='main_text mb-4'>While using constructor function, you define methods as:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // constructor function<br />
                            function Person (name) &#123;<br /><br />

                           // assigning  parameter values to the calling object<br />
                            this.name = name;<br /><br />

                            // defining method<br />
                            this.greet = function () &#125;<br />
                            return ('Hello' + ' ' + this.name);<br />
                            &#125;<br />
                            &#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>It is easy to define methods in the JavaScript class. You simply give the name of the method followed by <span className='code_border'>( )</span>. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            class Person &#123; <br />
                            constructor(name) &#123;<br />
                            this.name = name;<br />
                            &#125;<br /><br />

                            // defining method<br />
                            greet() &#123;<br />
                            console.log(`Hello $&#123;this.name&#125;`);<br />
                            &#125;<br />
                            &#125;<br /><br />

                            let person1 = new Person('John');<br /><br />

                            // accessing property<br />
                            console.log(person1.name); // John<br /><br />

                            // accessing method<br />
                            person1.greet(); // Hello John<br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>To access the method of an object, you need to call the method using its name followed by <span className='code_border'>()</span>.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ClassMethods