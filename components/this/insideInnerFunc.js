import React from 'react'

const InsideInnerFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>5. this Inside Inner Function</h2>
                    <p className='main_text mb-4'>When you access <code className='code_border'>this</code> inside an inner function (inside a method), <code className='code_border'>this</code> refers to the global object. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const person = &#123; <br />
                            name : 'Jack', <br />
                            age: 25, <br />
                            <br />
                            // this inside method <br />
                            // this refers to the object itself <br />
                            greet() &#123; <br />
                            console.log(this);        // &#123;name: "Jack", age ...&#125; <br />
                            console.log(this.age);  // 25 <br />
                            <br />
                            // inner function <br />
                            function innerFunc() &#123; <br />
                            <br />
                            // this refers to the global object <br />
                            console.log(this);       // Window &#123; ... &#125; <br />
                            console.log(this.age);    // undefined <br />
                            <br />
                            &#125; <br />
                            <br />
                            innerFunc(); <br />
                            <br />
                            &#125; <br />
                            &#125; <br />
                            <br />
                            person.greet(); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            &#123;name: "Jack", age: 25, greet: ƒ&#125;  <br />
                            25 <br />
                            Window &#123; …&#125; <br />
                            undefined <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, <code className='code_border'>this</code> inside <code className='code_border'>innerFunc()</code> refers to the global object because <code className='code_border'>innerFunc()</code> is inside a method.</p>
                    <p className='main_text mb-4'> However, <code className='code_border'>this.age </code> outside <code className='code_border'>innerFunc() </code> refers to the <code className='code_border'>person </code> object.</p>
                </div>
            </section>
        </>
    )
}

export default InsideInnerFunc