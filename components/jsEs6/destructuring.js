import React from 'react'
import Link from 'next/link'

const Destructuring = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Destructuring</h2>
                <p className='main_text mb-4'>The destructuring syntax makes it easier to assign values to a new variable. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                    // before you would do something like this <br />
                        const person = &#123;<br />
                        name: 'Sara',<br />
                        age: 25,<br />
                        gender: 'female'<br />
                        &#125;<br /><br />

                        let name = person.name;<br />
                        let age = person.age;<br />
                        let gender = person.gender;<br /><br />

                        console.log(name); // Sara<br />
                        console.log(age); // 25<br />
                        console.log(gender); // female<br />
                    </p>
                </div>
                <p className='main_text mb-4'>Using ES6 Destructuring syntax, the above code can be written as:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        const person = &#123;<br/>
                            name: 'Sara',<br/>
                        age: 25,<br/>
                        gender: 'female'    <br/>
                        &#125;<br/><br/>

                        let &#123;name, age, gender&#125; = person;<br/><br/>

                        console.log(name); // Sara<br/>
                        console.log(age); // 25<br/>
                        console.log(gender); // female<br/>
                    </p>
                </div>
                <p className='main_text mb-4'>To learn more about destructuring, visit <Link href="/" className='text-blue-500'> JavaScript Destructuring.</Link> </p>
            </section>
        </>
    )
}

export default Destructuring