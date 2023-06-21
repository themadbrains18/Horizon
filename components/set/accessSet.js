import React from 'react'

const AccessSet = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Access Set Elements</h3>
                <p className='main_text mb-4'> You can access Set elements using the values() method and check if there is an element inside Set using has() method. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const set1 = new Set([1, 2, 3]); <br /><br />

                        // access the elements of a Set<br />
                        console.log(set1.values()); // Set Iterator [1, 2, 3]<br />
                    </code>
                </div>
                <p className='main_text mb-4'>You can use the has() method to check if the element is in a Set. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const set1 = new Set([1, 2, 3]); <br /><br />

                    // check if an element is in Set<br />
                        console.log(set1.has(1));<br />
                    </code>
                </div>
            </section>
        </>
    )
}

export default AccessSet