import React from 'react'

const ThisKeyConstructor = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript this Keyword</h3>
                    <p className='main_text mb-4'>In JavaScript, when this keyword is used in a constructor function, this refers to the object when the object is created. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // constructor function<br/>
                        function Person () &#123;<br/>
                            this.name = 'John',<br/>
                            &#125;<br/><br/>
                        
                        // create object<br/>
                        const person1 = new Person();<br/><br/>
                        
                        // access properties<br/>
                        console.log(person1.name);  // John<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>Hence, when an object accesses the properties, it can directly access the property as person1.name.</p>

                </div>
            </section>
        </>
    )
}

export default ThisKeyConstructor