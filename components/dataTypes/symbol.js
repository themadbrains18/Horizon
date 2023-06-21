import React from 'react'

const Symbol = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Symbol</h2>
                    <p className='main_text mb-6'>This data type was introduced in a newer version of JavaScript (from ES2015).:</p>
                    <p className='main_text mb-6'>A value having the data type Symbol can be referred to as a symbol value. Symbol is an immutable primitive value that is unique. For example,.</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
       // two symbols with the same description<br /><br />

                            const value1 = Symbol('hello');<br />
                            const value2 = Symbol('hello');<br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>  Though value1 and value2 both contain 'hello', they are different as they are of the Symbol type.</p>

                    <h2 className='sec_heading mt-10 mb-6'>JavaScript Object</h2>
                    <p className='main_text mb-6'>  An object is a complex data type that allows us to store collections of data. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const student = &#123;<br />
                            firstName: 'ram',<br />
                            lastName: null,<br />
                            class: 10<br />
                            &#125;;<br />
                        </p>
                    </div>
                    <p className='main_text'> You will learn about JavaScript Objects in later tutorials.</p>

                </div>
            </section>
        </>
    )
}

export default Symbol