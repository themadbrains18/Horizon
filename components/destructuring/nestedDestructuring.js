import React from 'react'

const NestedDestructuring = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Nested Destructuring Assignment</h3>
                    <p className='main_text mb-4'>You can perform nested destructuring for array elements. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // nested array elements <br />
                            const arrValue = ['one', ['two', 'three']];<br /><br />

                            // nested destructuring assignment in arrays<br />
                            const [x, [y, z]] = arrValue;<br /><br />

                            console.log(x); // one<br />
                            console.log(y); // two<br />
                            console.log(z); // three<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, the variable <span className='code_border'>y</span> and <span className='code_border'>z</span> are assigned nested elements <span className='code_border'>two</span> and <span className='code_border'>three</span>.</p>
                    <p className='main_text mb-4'>In order to execute the nested destructuring assignment, you have to enclose the variables in an array structure (by enclosing inside  <span className='code_border'>[ ]</span> ).</p>
                    <p className='main_text mb-4'>You can also perform nested destructuring for object properties. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const person = &#123;  <br />
                            name: 'Jack',<br />
                            age: 26,<br />
                            hobbies: &#123;<br />
                            read: true,<br />
                            playGame: true<br />
                            &#125;<br />
                            &#125;<br />
                            // nested destructuring <br />
                            const &#123;name, hobbies: &#123;read, playGame&#125;&#125; = person;<br /><br />

                            console.log(name); // Jack<br />
                            console.log(read); // true<br />
                            console.log(playGame); // true<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>In order to execute the nested destructuring assignment for objects, you have to enclose the variables in an object structure (by enclosing inside &#123;&#125;).</p>
                </div>
            </section>
        </>
    )
}

export default NestedDestructuring