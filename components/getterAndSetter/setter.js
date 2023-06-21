import React from 'react'

const Setter = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>JavaScript Setter</h3>
                    <p className='main_text mb-4'>In JavaScript, setter methods are used to change the values of an object. For example,</p>
                    <div className='bg-light-dark mb-8 p-5'>
                        <p className='medium_text'>
                            const student = &#123; <br />
                            firstName: 'Monica',<br /><br />

                            //accessor property(setter)<br />
                            set changeName(newName) &#123;<br />
                            this.firstName = newName;<br />
                            &#125;<br />
                            &#125;;<br /><br />

                            console.log(student.firstName); // Monica<br /><br />

                            // change(set) object property using a setter<br />
                            student.changeName = 'Sarah';<br /><br />

                            console.log(student.firstName); // Sarah<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, the setter method is used to change the value of an object.</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'>
                            set changeName(newName)  &#123;
                            this.firstName = newName;
                            &#125;
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>To create a setter method, the set keyword is used.</p>
                    </div>
                    <p className='main_text mb-4'>As shown in the above program, the value of firstName is Monica.</p>
                    <p className='main_text mb-4'>Then the value is changed to Sarah.</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <p className='medium_text'> student.changeName = 'Sarah';</p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Setter must have exactly one formal parameter.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Setter