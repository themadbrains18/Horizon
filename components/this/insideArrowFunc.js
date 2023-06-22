import React from 'react'

const InsideArrowFunc = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>6. this Inside Arrow Function</h2>
                    <p className='main_text mb-4'>Inside the arrow function,  <code className='code_border'>this</code> refers to the parent scope. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const greet = () =&#62; &#123;             <br />
                            console.log(this); <br />
                            &#125; <br />
                            greet(); // Window &#123;...&#125; <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Arrow functions do not have their own  <code className='code_border'>this</code>. When you use  <code className='code_border'>this</code> inside an arrow function,  <code className='code_border'>this</code> refers to its parent scope object. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            const greet = &#123;                                 <br />
                            name: 'Jack', <br />
                            <br />
                            // method <br />
                            sayHi () &#123; <br />
                            let hi = () =&#62; console.log(this.name); <br />
                            hi(); <br />
                            &#125; <br />
                            &#125; <br />
                            <br />
                            greet.sayHi(); // Jack <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'> Here, <code className='code_border'>this.name</code>  inside the  <code className='code_border'>hi()</code>  function refers to the <code className='code_border'>greet</code>  object.</p>
                    <p className='main_text mb-4'>You can also use the arrow function to solve the issue of having <code className='code_border'>undefined</code>  when using a function inside a method (as seen in Example 5). For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            const person = &#123;                                    <br />
                            name : 'Jack', <br />
                            age: 25, <br />
                            <br />
                            // this inside method <br />
                            // this refers to the object itself <br />
                            greet() &#123; <br />
                            console.log(this); <br />
                            console.log(this.age); <br />
                            <br />
                                // inner function <br />
                            let innerFunc = () =&#62; &#123; <br />
                            <br />
                                    // this refers to the global object <br />
                            console.log(this); <br />
                            console.log(this.age); <br />
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
                            &#123; name: "Jack", age: 25, greet: ƒ&#125;     <br />
                            25 <br />
                            &#123;name: "Jack", age: 25, greet: ƒ&#125; <br />
                            25 <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'> Here, <code className='code_border'>innerFunc()</code> is defined using the arrow function. It takes <code className='code_border'>this</code> from its parent scope. Hence, <code className='code_border'>this.age</code> gives 25.</p>
                    <p className='main_text mb-4'>When the arrow function is used with <code className='code_border'>this</code>, it refers to the outer scope.</p>
                </div>
            </section>
        </>
    )
}

export default InsideArrowFunc