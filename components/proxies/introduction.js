import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Proxies</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript proxies with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, proxies (proxy object) are used to wrap an object and redefine various operations into the object such as reading, insertion, validation, etc. Proxy allows you to add custom behavior to an object or a function.</p>
                </div>

                <div className=''>
                    <h2 className='sec_heading mb-4'>Creating a Proxy Object</h2>
                    <p className='main_text mb-4'>The syntax of proxy is:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'> new Proxy(target, handler); </p>
                    </div>
                    <p className='main_text mb-4'>Here,</p>
                    <ul>
                        <li className='main_text mb-4 list-disc'><code className='code_border'>new Proxy()</code> - the constructor.</li>
                        <li className='main_text mb-4 list-disc'><code className='code_border'>target</code> - the object/function which you want to proxy</li>
                        <li className='main_text mb-4 list-disc'><code className='code_border'>handler</code> - can redefine the custom behavior of the object</li>
                    </ul>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let student1 = &#123;<br />
                            age: 24,<br />
                            name: "Felix"<br />
                            &#125;<br /><br />

                            const handler = &#123;<br />
                            get: function(obj, prop) &#123;<br />
                            return obj[prop] ? obj[prop] : 'property does not exist';<br />
                            &#125;<br />
                            &#125;<br /><br />

                            const proxy = new Proxy(student1, handler);<br />
                            console.log(proxy.name); // Felix<br />
                            console.log(proxy.age); // 24<br />
                            console.log(proxy.class); // property does not exist<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, the <code className='code_border'>get()</code>  method is used to access the object's property value. And if the property is not available in the object, it returns <code className='code_border'>property does not exist</code>.</p>
                    <p className='main_text mb-4'>As you can see, you can use a proxy to create new operations for the object. A case may arise when you want to check if an object has a particular key and perform an action based on that key. In such cases, proxies can be used.</p>
                    <p className='main_text mb-4'>You can also pass an empty handler. When an empty handler is passed, the proxy behaves as an original object. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let student = &#123;<br />
                            name: 'Jack',<br />
                            age: 24<br />
                            &#125;<br /><br />

                            const handler = &#123; &#125;;<br /><br />

           // passing empty handler<br />
                            const proxy1 = new Proxy(student, &#123;&#125;);<br /><br />

                            console.log(proxy1); // Proxy &#123;name: "Jack", age: 24&#125;<br />
                            console.log(proxy1.name); // Jack<br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction