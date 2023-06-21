import React from 'react'

const TypeTypeOf = () => {
    return (
        <>

            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>  JavaScript Type</h2>
                    <p className='main_text mb-6'>JavaScript is a dynamically typed (loosely typed) language. JavaScript automatically determines the variables' data type for you.</p>
                    <p className='main_text mb-6'> It also means that a variable can be of one data type and later it can be changed to another data type. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                          // data is of undefined type<br />
                            let data;<br /><br />

                       // data is of integer type<br />
                            data = 5;<br /><br />

                     // data is of string type<br />
                            data = "JavaScript Programming";<br />
                        </p>
                    </div>
                    <h2 className='sec_heading mt-10 mb-6'>  JavaScript typeof</h2>
                    <p className='main_text mb-6'>To find the type of a variable, you can use the typeof operator. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const name = 'ram';<br />
                            typeof(name); // returns "string"<br /><br />

                            const number = 4;<br />
                            typeof(number); //returns "number"<br /><br />

                            const valueChecked = true;<br />
                            typeof(valueChecked); //returns "boolean"<br /><br />

                            const a = null;<br />
                            typeof(a); // returns "object"<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5  border-l-2 border-[#54D7CE]'>
                        <p className='body_text'>Notice that typeof returned "object" for the null type. This is a known issue in JavaScript since its first release.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default TypeTypeOf