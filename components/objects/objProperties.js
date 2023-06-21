import React from 'react'
import Image from 'next/image'
import ObjPropertiesImg from '/public/javascript-object-properties.webp'
const ObjProperties = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Object Properties</h3>
                    <p className='main_text mb-4'>In JavaScript, "key: value" pairs are called properties. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            let person = &#123;<br />
                            name: 'John',<br />
                            age: 20<br />
                            &#125;;<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, name: 'John' and age: 20 are properties.</p>
                    <div className='border_bottom mb-10' >
                        <Image src={ObjPropertiesImg} width={640} height={350} alt='Menu ICon' className='bg-white mb-10' />
                    </div>
                    <h3 className='sec_heading mb-4'>Accessing Object Properties</h3>
                    <p className='main_text mb-4'>You can access the value of a property by using its key.</p>
                    <h3 className='sec_heading mb-4'>1. Using dot Notation</h3>
                    <p className='main_text mb-4'>Here's the syntax of the dot notation.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>objectName.key</p>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <p className='medium_text'>
                            const person = &#123; <br />
                            name: 'John',<br />
                            age: 20, <br />
                            &#125;;<br /><br />
                            // accessing property<br />
                            console.log(person.name); // John<br />
                        </p>
                    </div>
                    <div>
                        <h3 className='sec_heading mb-4'>2. Using bracket Notation</h3>
                        <p className='main_text mb-4'>Here is the syntax of the bracket notation.</p>
                        <div className='bg-light-dark p-5 mb-8'>
                            <p className='medium_text'>objectName["propertyName"]</p>
                        </div>
                        <p className='main_text mb-4'>For example,</p>
                        <div className='bg-light-dark p-5'>
                            <p className='medium_text'>
                                const person = &#123; <br />
                                name: 'John', <br />
                                age: 20, <br />
                                &#125;;<br /><br />

                            // accessing property<br />
                                console.log(person["name"]); // John<br />
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ObjProperties