import React from 'react'

const ThisWithArrow = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-4'>this with Arrow Function</h2>
                    <p className='main_text mb-4'>this with Arrow Function</p>
                    <p className='main_text mb-4'>However, this is not associated with arrow functions. Arrow function does not have its own this. So whenever you call this, it refers to its parent scope. For example,</p>
                    <h2 className='sec_heading !text-[20px] mb-4'>  Inside a regular function</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            function Person() &#123; <br />
                            this.name = 'Jack',<br />
                            this.age = 25,<br />
                            this.sayName = function () &#123;<br /><br />

                                // this is accessible<br />
                            console.log(this.age);<br /><br />

                            function innerFunc() &#123;<br /><br />

                                    // this refers to the global object<br />
                            console.log(this.age);<br />
                            console.log(this);<br />
                            &#125;<br /><br />

                            innerFunc();<br /><br />

                            &#125;<br />
                            &#125;<br /><br />

                            let x = new Person();<br />
                            x.sayName();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            25 <br />
                            undefined<br />
                            Window &#123; &#125;
                        </p>
                    </div>
                    <p className='main_text mb-6'>Here, this.age inside this.sayName() is accessible because this.sayName() is the method of an object.</p>
                    <p className='main_text mb-6'>However, innerFunc() is a normal function and this.age is not accessible because this refers to the global object (Window object in the browser). Hence, this.age inside the innerFunc() function gives undefined.</p>
                    <h2 className='sec_heading !text-[20px] mb-4'>Inside an arrow function</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            function Person() &#123; <br />
                            this.name = 'Jack',<br />
                            this.age = 25,<br />
                            this.sayName = function () &#123;<br /><br />

                            console.log(this.age);<br />
                            let innerFunc = () =&#62; &#123;<br />
                            console.log(this.age);<br />
                            &#125;<br /><br />

                            innerFunc();<br />
                            &#125;<br />
                            &#125;<br /><br />

                            const x = new Person();<br />
                            x.sayName();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            25 <br />
                            25<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>Here, the <code className="code_border">innerFunc()</code>  function is defined using the arrow function. And inside the arrow function,  <code className="code_border">this</code> refers to the parent's scope. Hence, <code className="code_border"> this.age</code> gives <strong>25</strong>.</p>
                </div>
            </section>
        </>
    )
}

export default ThisWithArrow