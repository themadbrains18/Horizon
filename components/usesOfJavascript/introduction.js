import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h1 className='large_heading mb-6'>Uses of JavaScript</h1>
                <p className='main_text mb-4'>In this tutorial, you will learn about the different uses of JavaScript.</p>
                <p className='main_text mb-4'>JavaScript is one of the most popular programming languages because of its wide range of applications.</p>
                <p className='main_text mb-6'>Before JavaScript was primarily used in:</p>
                <ul>
                    <li className='main_text mb-4 ml-4 list-disc'>making web pages interactive</li>
                </ul>
                <p className='main_text mb-6'>Nowadays, JavaScript is also used in:</p>
                <ul>
                    <li className='main_text mb-4 ml-4 list-disc'>server-side applications</li>
                    <li className='main_text mb-4 ml-4 list-disc'>game development</li>
                    <li className='main_text mb-4 ml-4 list-disc'>mobile apps</li>
                    <li className='main_text mb-4 ml-4 list-disc'>web apps</li>
                </ul>
                <p className='main_text mb-6'>Now let's explore the uses of JavaScript in more detail.</p>
            </section>
        </>
    )
}

export default Introduction