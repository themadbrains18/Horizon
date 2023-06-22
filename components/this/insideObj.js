import React from 'react'

const InsideObj = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>4. this Inside Object Method</h2>
                    <p className='main_text mb-4'>When this is used inside an object's method, this refers to the object it lies within. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const person = &#123; <br />
                            name : 'Jack', <br />
                            age: 25, <br />
                            <br />
                            // this inside method <br />
                            // this refers to the object itself <br />
                            greet() &#123; <br />
                            console.log(this); <br />
                            console.log(this.name); <br />
                            &#125; <br />
                            &#125; <br />
                            <br />
                            person.greet(); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            &#123;name: "Jack", age: 25, greet: ƒ&#125; <br />
                            Jack
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, <code className='code_border'>this</code> refers to the <code className='code_border'>person</code> object.</p>
                </div>
            </section>

        </>
    )
}

export default InsideObj