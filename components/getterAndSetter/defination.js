import React from 'react'

const Defination = () => {
    return (
        <>
            <section className='bg-dark pb-5 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-7'>JavaScript Getter and Setter</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript getter and setter methods with the help of examples.</p>
                    <p className='main_text mb-4'>In JavaScript, there are two kinds of object properties:</p>
                    <ul className='pb-8 border_bottom'>
                        <li className='main_text mb-4'>Data properties</li>
                        <li className='main_text '>Accessor properties</li>
                    </ul>
                    <h3 className='sec_heading my-8 mb-4'>  Data Property</h3>
                    <p className='main_text mb-6'>Here's an example of data property that we have been using in the previous tutorials.</p>
                    <div className='bg-light-dark p-3 mb-4'>
                        <p className='medium_text'>
                            const student = &#123; <br /><br />

                            // data property<br />
                            firstName: 'Monica';<br />
                            &#125;;<br />
                        </p>
                    </div>
                    <h3 className='sec_heading my-8 mb-4'>Accessor Property</h3>
                    <p className='main_text mb-6'>In JavaScript, accessor properties are methods that get or set the value of an object. For that, we use these two keywords:</p>
                    <ul className=''>
                        <li className='main_text mb-4 list-disc'>get - to define a getter method to get the property value</li>
                        <li className='main_text list-disc'>set - to define a setter method to set the property value</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Defination