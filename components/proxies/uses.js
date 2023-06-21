import React from 'react'

const Uses = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='large_heading mb-4'>Uses of Proxy</h3>
                    <h3 className='sec_heading mb-4'>1. For Validation</h3>
                    <p className='main_text mb-4'>You can use a proxy for validation. You can check the value of a key and perform an action based on that value.</p>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let student = &#123; <br />
                            name: 'Jack',<br />
                            age: 24<br />
                            &#125;<br /><br />

                            const handler = &#123;<br /><br />

                                // get the object key and value<br />
                            get(obj, prop) &#125;<br /><br />

                // check condition<br />
                            if (prop == 'name') &#123;<br />
                            return obj[prop];<br />
                            &#125; else &#123;<br />
                            return 'Not allowed';<br />
                            &#125;<br />
                            &#125;<br />
                            &#125;<br /><br />

                            const proxy = new Proxy(student, handler);<br />
                            console.log(proxy.name); // Jack<br />
                            console.log(proxy.age); // Not allowed<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'> Here, only the name property of the <code className='code_border'> student</code> object is accessible. Else, it returns <code className='code_border'>Not allowed</code>.</p>
                </div>
            </section>
        </>
    )
}

export default Uses