import React from 'react'

const ObjDeclaration = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Object Declaration</h3>
                    <p className='main_text mb-4'>The syntax to declare an object is:</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const object_name = &#123; <br />
                            key1: value1,<br />
                            key2: value2<br />
                            &#123;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, an object object_name is defined. Each member of an object is a key: value pair separated by commas and enclosed in curly braces &#123; &#125;.</p>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                        // object creation<br />
                            const person = &#123;<br />
                            name: 'John',<br />
                            age: 20<br />
                            &#125;;<br />
                            console.log(typeof person); // object<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>You can also define an object in a single line.</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            const person = &#123; name: 'John', age: 20 &#125;;
                        </p>
                    </div>
                    <p className='main_text mb-10'>In the above example, name and age are keys, and John and 20 are values respectively.</p>
                    <p className='main_text'>There are other ways to declare an object in JavaScript. To learn more, visit Different Ways to Declare JavaScript Objects.</p>
                </div>
            </section>
        </>
    )
}

export default ObjDeclaration