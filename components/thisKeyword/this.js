import React from 'react'

const This = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-4'>JavaScript this Keyword</h1>
                    <p className='main_text pb-4 '>To access a property of an object from within a method of the same object, you need to use the this keyword. Let's consider an example.</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const person = &#123; <br />
                            name: 'John',<br />
                            age: 30,<br /><br />

                            // accessing name property by using this.name<br />
                            greet: function() &#123; console.log('The name is' + ' ' + this.name); &#125;<br />
                            &#125;;<br /><br />

                            person.greet();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>The name is John </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, a person object is created. It contains properties (name and age) and a method greet.</p>
                    <p className='main_text mb-4'>In the method greet, while accessing a property of an object, this keyword is used.</p>
                    <p className='main_text mb-4'>In order to access the properties of an object, this keyword is used following by . and key.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>In JavaScript, this keyword when used with the object's method refers to the object. this is bound to an object.</p>
                    </div>
                </div>


                <div className='pt-10'>
                    <p className='main_text pb-4 '>However, the function inside of an object can access it's variable in a similar way as a normal function would. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const person = &#123; <br />
                            name: 'John',<br />
                            age: 30,<br />
                            greet: function() &#123;<br />
                            let surname = 'Doe';<br />
                            console.log('The name is' + ' ' + this.name + ' ' + surname); &#123;<br />
                            &#125;;<br /><br />

                            person.greet();<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>The name is John Doe</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default This