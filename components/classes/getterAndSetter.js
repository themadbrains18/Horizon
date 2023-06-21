import React from 'react'

const GetterAndSetter = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Getters and Setters</h3>
                    <p className='main_text mb-4'>In JavaScript, getter methods get the value of an object and setter methods set the value of an object.</p>
                    <p className='main_text mb-4'>JavaScript classes may include getters and setters. You use the <span className='code_border'>get</span> keyword for getter methods and <span className='code_border'>set</span> for setter methods. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            class Person &#123;<br/>
                            constructor(name) &#123;<br/>
                            this.name = name;<br/>
                            &#125;<br/><br/>

                            // getter<br/>
                            get personName() &#123;<br/>
                            return this.name;<br/>
                            &#125;<br/><br/>

                            // setter<br/>
                            set personName(x) &#123;<br/>
                            this.name = x;<br/>
                            &#125;<br/>
                            &#125;<br/><br/>

                            let person1 = new Person('Jack');<br/>
                            console.log(person1.name); // Jack<br/><br/>

                            // changing the value of name property<br/>
                            person1.personName = 'Sarah';<br/>
                            console.log(person1.name); // Sarah<br/>
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default GetterAndSetter