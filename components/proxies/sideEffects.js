import React from 'react'

const SideEffects = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>3. Side Effects</h3>
                    <p className='main_text mb-4'>You can use a proxy to call another function when a condition is met. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const myFunction = () =&#62; &#123; <br />
                            console.log("execute this function")<br />
                            &#125;;<br /><br />

                            const handler = &#123;<br />
                            set: function (target, prop, value) &#123;<br />
                            if (prop === 'name' && value === 'Jack') &#123;<br />
                                    // calling another function<br />
                            myFunction();<br />
                            &#125;<br />
                            else &#123;<br />
                            console.log('Can only access name property');<br />
                            &#125;<br />
                            &#125;<br />
                            &#125;;<br /><br />

                            const proxy = new Proxy(&#123;&#125;, handler);<br /><br />

                            proxy.name = 'Jack'; // execute this function<br />
                            proxy.age = 33; // Can only access name property<br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SideEffects