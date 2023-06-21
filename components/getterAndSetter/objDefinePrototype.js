import React from 'react'

const ObjDefinePrototype = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Object.defineProperty()</h3>
                    <p className='main_text mb-4'>In JavaScript, you can also use Object.defineProperty() method to add getters and setters. For example,</p>
                    <div className='bg-light-dark mb-8 p-5'>
                        <p className='medium_text'>
                            const student = &#123; <br />
                            firstName: 'Monica'<br />
                            &#125;<br /><br />

        // getting property<br />
                            Object.defineProperty(student, "getName", &#123;<br />
                            get : function () &#123;<br />
                            return this.firstName;<br />
                            &#125;<br />
                            &#125;);<br /><br />

        // setting property<br />
                            Object.defineProperty(student, "changeName", &#123;<br />
                            set : function (value) &#123;<br />
                            this.firstName = value;<br />
                            &#125;<br />
                            &#125;);<br /><br />

                            console.log(student.firstName); // Monica<br /><br />

        // changing the property value<br />
                            student.changeName = 'Sarah';<br /><br />

                            console.log(student.firstName); // Sarah<br />

                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, Object.defineProperty() is used to access and change the property of an object.</p>
                    <p className='main_text mb-4'>The syntax for using Object.defineProperty() is:</p>
                    <div className='bg-light-dark mb-8 p-5'>
                        <p className='medium_text'>
                            Object.defineProperty(obj, prop, descriptor)
                        </p>
                    </div>
                    <p className='main_text mb-4'>The Object.defineProperty() method takes three arguments..</p>
                    <ul>
                        <li className='main_text mb-4 list-disc'>The first argument is the objectName.</li>
                        <li className='main_text mb-4 list-disc'>The second argument is the name of the property.</li>
                        <li className='main_text mb-4 list-disc'>The third argument is an object that describes the property.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default ObjDefinePrototype