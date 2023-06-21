import React from 'react'

const Handler = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Proxy handlers</h3>
                    <p className='main_text mb-4'>Proxy provides two handler methods <code className='code_border'>get()</code> and <code className='code_border'>set()</code>.</p>
                    <h3 className='sec_heading mb-4'>get() handler</h3>
                    <p className='main_text mb-4'>The <code className='code_border'>get()</code> method is used to access the properties of a target object. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let student = &#123; <br />
                            name: 'Jack',<br />
                            age: 24<br />
                            &#125;<br /><br />

                            const handler = &#123;<br /><br />

                            // get the object key and value<br />
                            get(obj, prop) &#125;<br /><br />

                            return obj[prop];<br />
                            &#125;<br />
                            &#125;<br /><br />

                            const proxy = new Proxy(student, handler);<br />
                            console.log(proxy.name); // Jack<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, the <code className='code_border'>get()</code> method takes the object and the property as its parameters.</p>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>set() handler</h3>
                    <p className='main_text mb-4'>The set() method is used to set the value of an object. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        let student = &#123; <br/>
                            name: 'John'<br/>
                            &#125;<br/><br/>
                        
                        let setNewValue = &#123;<br/>
                          set: function(obj, prop, value) &#123;<br/><br/>
                        
                            obj[prop] = value;<br/>
                            return;<br/>
                            &#125;<br/>
                            &#125;;<br/><br/>
                        
                        // setting new proxy<br/>
                        let person = new Proxy(student, setNewValue);<br/><br/>
                        
                        // setting new key/value<br/>
                        person.age = 25;<br/>
                        console.log(person); // Proxy &#123;name: "John", age: 25&#125;<br/>
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, a new property <code className='code_border'>age</code>age is added to the <code className='code_border'>student</code> object.</p>
                </div>
            </section>
        </>
    )
}

export default Handler