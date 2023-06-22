import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript "use strict"</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about the JavaScript 'use strict' syntax with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, <code className='code_border'>'use strict';</code> states that the code should be executed in '<strong>strict mode</strong>'. This makes it easier to write good and secure JS code. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            myVariable = 9;
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, <code className='code_border'>myVariable</code> is created without declaring. This works as a global variable in JavaScript. However, if you use this in strict mode, the program will throw an error. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';    <br />
                            <br />
                    // Error <br />
                            myVariable = 9; <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>The above code throws an error because <code className='code_border'>myVariable</code> is not declared. In strict mode, you cannot use the variable without declaring them.</p>
                    <p className='main_text mb-4'>To indicate this program is in the strict mode, we have used</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            'use strict';
                        </code>
                    </div>
                    <p className='main_text mb-4'>at the top of the program.</p>
                    <p className='main_text mb-4'>You can declare the strict mode by adding <code className='code_border'>'use strict';</code> or <code className='code_border'>"use strict";</code> at the beginning of a program.</p>
                    <p className='main_text mb-4'>When you declare strict mode at the beginning of a program, it will have global scope and all the code in the program will execute in strict mode.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction