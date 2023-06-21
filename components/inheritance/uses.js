import React from 'react'

const Uses = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Uses of Inheritance</h3>
                <ul>
                    <li className='main_text mb-4 ml-4 list-disc'>Since a child class can inherit all the functionalities of the parent's class, this allows code reusability.</li>
                    <li className='main_text mb-4 ml-4 list-disc'>Once a functionality is developed, you can simply inherit it. No need to reinvent the wheel. This allows for cleaner code and easier to maintain.</li>
                    <li className='main_text mb-4 ml-4 list-disc'>Since you can also add your own functionalities in the child class, you can inherit only the useful functionalities and define other required features.</li>
                </ul>
            </section>
        </>
    )
}

export default Uses
