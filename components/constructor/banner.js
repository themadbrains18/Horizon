import React from 'react'



const Banner = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading mb-6'>JavaScript Constructor Function</h1>
                    <p className='main_text mb-4 '>In this tutorial, you will learn about JavaScript constructor function with the help of examples.</p>
                    <p className='main_text mb-4 '>In JavaScript, a constructor function is used to create objects. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // constructor function <br />
                            function Person () &#123;<br />
                            this.name = 'John',<br />
                            this.age = 23<br />
                            &#125;<br /><br />

                        // create an object<br />
                            const person = new Person();<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, function Person() is an object constructor function.</p>
                    <p className='main_text mb-4'>To create an object from a constructor function, we use the new keyword.</p>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>It is considered a good practice to capitalize the first letter of your constructor function.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Banner