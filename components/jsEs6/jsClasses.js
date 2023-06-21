import Link from 'next/link'
import React from 'react'


const JsClasses = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Classes</h2>
                <p className='main_text mb-4'>JavaScript class is used to create an object. Class is similar to a constructor function. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        class Person &#123; <br />
                        constructor(name) &#123;<br />
                        this.name = name;<br />
                        &#125;<br />
                        &#125;<br />
                    </p>
                </div>
                <p className='main_text mb-4'>Keyword class is used to create a class. The properties are assigned in a constructor function.</p>
                <p className='main_text mb-4'>Now you can create an object. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        class Person &#123;<br />
                        constructor(name) &#123;<br />
                        this.name = name;<br />
                        &#125;<br />
                        &#125;<br /><br />

                        const person1 = new Person('John');<br /><br />

                        console.log(person1.name); // John<br />
                    </p>
                </div>
                <p className='main_text mb-4'>To learn more about classes, visit <Link href="/" className='text-blue-500'>JavaScript Classes.</Link> </p>
            </section>
        </>
    )
}

export default JsClasses