import React from 'react'
import Link from 'next/link'

const TemplateLiterals = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Template Literals</h2>
                <p className='main_text mb-4'>The template literal has made it easier to include variables inside a string. For example, before you had to do:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        const first_name = "Jack";<br/>
                        const last_name = "Sparrow";<br/><br/>

                        console.log('Hello ' + first_name + ' ' + last_name);<br/>
                    </p>
                </div>
                <p className='main_text mb-4'>This can be achieved using template literal by:</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        const first_name = "Jack";<br/>
                        const last_name = "Sparrow";<br/><br/>

                        console.log(`Hello $&#123;first_name&#125; $&#123;last_name&#125;`);<br/>
                    </p>
                </div>
                <p className='main_text mb-4'>To learn more about template literals, visit <Link href="/" className='text-blue-500'>JavaScript Template Literal.</Link> </p>
            </section>
        </>
    )
}

export default TemplateLiterals