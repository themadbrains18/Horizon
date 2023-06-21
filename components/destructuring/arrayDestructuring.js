import React from 'react'

const ArrayDestructuring = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Array Destructuring</h3>
                    <p className='main_text mb-4'>You can also perform array destructuring in a similar way. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const arrValue = ['one', 'two', 'three']; <br /><br />

                        // destructuring assignment in arrays<br />
                            const [x, y, z] = arrValue;<br /><br />

                            console.log(x); // one<br />
                            console.log(y); // two<br />
                            console.log(z); // three<br />
                        </code>
                    </div>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Assign Default Values</h3>
                    <p className='main_text mb-4'>You can assign the default values for variables while using destructuring. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let arrValue = [10];<br /><br />

                        // assigning default value 5 and 7<br />
                            let [x = 5,  y = 7] = arrValue;<br /><br />

                            console.log(x); // 10<br />
                            console.log(y); // 7<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>In the above program, <span className='code_border'>arrValue</span> has only one element. Hence,</p>
                    <ul className=''>
                        <li className='main_text mb-4'>the <span className='code_border'>x</span> variable will be <span className='font-extrabold'>10</span></li>
                        <li className='main_text'>the <span className='code_border'>y</span> variable takes the default value <span className='font-extrabold'>7</span></li>
                    </ul>
                    <p className='main_text mb-4'>In object destructuring, you can pass default values in a similar way. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const person = &#123;<br/>
                            name: 'Jack',<br/>
                            &#125;<br/><br/>

                            // assign default value 26 to age if undefined<br/>
                            const &#123; name, age = 26&#125; = person;<br/><br/>

                            console.log(name); // Jack<br/>
                            console.log(age); // 26<br/>
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArrayDestructuring