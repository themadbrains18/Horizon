import React from 'react'

const NotAllowedInStrictMode = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Things Not Allowed in Strict Mode</h2>
                    <h2 className='sec_heading !text-[19px] mb-4'>1. Undeclared variable is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';<br /><br />

                            a = 'hello'; // throws an error
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>2. Undeclared objects are not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict'; <br /><br />

                            person = &#123;name: 'Carla', age: 25&#125;; // throws an error
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>3. Deleting an object is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';  <br /><br />

                            let person = &#123;name: 'Carla'&#125;; <br /><br />

                            delete person; // throws an error
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>4. Duplicating a parameter name is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            "use strict";<br /><br />

                            function hello(p1, p1) {console.log('hello')}; // throws an error<br /><br />

                            hello();
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>5. Assigning to a non-writable property is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';<br /><br />

                            let obj1 = &#123; &#125;;<br /><br />

                            Object.defineProperty(obj1, 'x', &#123;value: 42, writable: false &#125;);<br /><br />

                            // assignment to a non-writable property<br />
                            obj1.x = 9; // throws an error
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>6. Assigning to a getter-only property is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';<br /><br />

                            let obj2 = &#123;get x() &#123; return 17; &#125; &#125;;<br /><br />

                            // assignment to a getter-only property<br />
                            obj2.x = 5; // throws an error
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>7. Assigning to a new property on a non-extensible object is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';<br /><br />

                            let obj = &#123; &#125;;<br />
                            Object.preventExtensions(obj);<br /><br />

                            // Assignment to a new property on a non-extensible object<br />
                            obj.newValue = 'new value'; // throws an error
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>8. Octal syntax is not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';<br /><br />

                            let a = 010; // throws an error<br />
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'>9. The variable name arguments and eval are not allowed.</h2>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';<br /><br />

                            let arguments = 'hello'; // throws an error<br /><br />

                            let eval = 44;<br />
                        </code>
                    </div>
                    <h2 className='sec_heading !text-[19px] mb-4'> 10. You cannot also use these reserved keywords in strict mode.</h2>
                    <p className='main_text mb-4'><code className='code_border'>implements</code> <code className='code_border'>interface</code> <code className='code_border'>let</code> <code className='code_border'>package</code> <code className='code_border'>private</code> <code className='code_border'>protected</code> <code className='code_border'>public</code> <code className='code_border'>static </code> <code className='code_border'>yield</code></p>
                </div>
            </section>
        </>
    )
}

export default NotAllowedInStrictMode