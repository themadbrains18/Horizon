import React from 'react'

const Getter = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Getter</h3>
                    <p className='main_text mb-4'>In JavaScript, getter methods are used to access the properties of an object. For example,</p>
                    <div className='bg-light-dark mb-4 p-5'>
                        <p className='medium_text'>
                            const student = &#123; <br /><br />

                            // data property<br />
                            firstName: 'Monica',<br /><br />

                            // accessor property(getter)<br />
                            get getName() &#123;<br />
                            return this.firstName;<br />
                            &#125;<br />
                            &#125;;<br /><br />

                            // accessing data property<br />
                            console.log(student.firstName); // Monica<br /><br />

                            // accessing getter methods<br />
                            console.log(student.getName); // Monica<br /><br />

                            // trying to access as a method<br />
                            console.log(student.getName()); // error<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'> In the above program, a getter method getName() is created to access the property of an object.</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            get getName() &#123; <br />
                            return this.firstName;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>To create a getter method, the get keyword is used.</p>
                    </div>
                    <p className='main_text mb-4'>And also when accessing the value, we access the value as a property.</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>student.getName;</p>
                    </div>
                    <p className='main_text mb-4'>When you try to access the value as a method, an error occurs.</p>
                    <div className='bg-light-dark p-5'>
                        <p className='medium_text'>console.log(student.getName()); // error</p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default Getter