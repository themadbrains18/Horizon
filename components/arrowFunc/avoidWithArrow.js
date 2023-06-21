import React from 'react'

const AvoidWithArrow = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h2 className='sec_heading mt-10 mb-6'>Things You Should Avoid With Arrow Functions</h2>
                <h3 className='sec_heading text-[20px] mb-6'>1. You should not use arrow functions to create methods inside objects.</h3>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        let person = &#123; <br />
                        name: 'Jack',<br />
                        age: 25,<br />
                        sayName: () =&#62; &#123;<br /><br />

                            // this refers to the global .....<br />
                            //<br />
                        console.log(this.age);<br />
                        &#125;<br />
                        &#125;<br /><br />

                        person.sayName(); // undefined<br />
                    </p>
                </div>
                <h3 className='sec_heading text-[20px] mb-6'>2. You cannot use an arrow function as a constructor. For example,</h3>
                <div className='bg-light-dark p-3 mb-6'>
                    <p className='medium_text'>
                        let Foo = () =&#62; &#123;&#125;; <br />
                        let foo = new Foo(); // TypeError: Foo is not a constructor
                    </p>
                </div>
                <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                    <p className='body_text'><span className='!text-white'>Note: </span>Arrow functions were introduced in ES6. Some browsers may not support the use of arrow functions.</p>
                </div>
            </section>
        </>
    )
}

export default AvoidWithArrow