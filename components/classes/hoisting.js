import React from 'react'

const Hoisting = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Hoisting</h3>
                    <p className='main_text mb-4'>A class should be defined before using it. Unlike functions and other JavaScript declarations, the class is not hoisted. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // accessing class <br/>
                        const p = new Person(); // ReferenceError<br/><br/>
                        
                        // defining class<br/>
                        class Person &#123;<br/>
                          constructor(name) &#123;<br/>
                            this.name = name;<br/>
                            &#125;<br/>
                            &#125;<br/>
                        </code>
                    </div>
                    <p className='main_text mb-4'>As you can see, accessing a class before defining it throws an error.</p>
                </div>
            </section>
        </>
    )
}

export default Hoisting