import React from 'react'

const InsideConstructor = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>3. this Inside Constructor Function</h2>
                    <p className='main_text mb-4'>In JavaScript, constructor functions are used to create objects. When a function is used as a constructor function, <code className='code_border'>this</code> refers to the object inside which it is used. For example,</p>
                    <div className='bg-light-dark mb-4 p-5'>
                        <code>
                            function Person() &#123;  <br />
                            <br />
                            this.name = 'Jack'; <br />
                            console.log(this); <br />
                            <br />
                            &#125; <br />
                            <br />
                            let person1 = new Person(); <br />
                            console.log(person1.name); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Person &#123;name: "Jack"&#125;<br />
                            Jack
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, <code className='code_border'>this</code> refers to the <code className='code_border'>person1</code> object. That's why, <code className='code_border'>person1.name</code> gives us <code className='code_border'>Jack</code>.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>When <code className='code_border'>this</code> is used with ES6 classes, it refers to the object inside which it is used (similar to constructor functions).</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default InsideConstructor