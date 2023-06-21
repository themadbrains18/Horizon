import React from 'react'

const IteratesSet = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Iterate Sets</h3>
                <p className='main_text mb-4'>You can iterate through the Set elements using the for...of loop or forEach() method. The elements are accessed in the insertion order. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const set = new Set([1, 2, 3]);<br /><br />

                        // looping through Set<br />
                        for (let i of set) &#123;<br />
                        console.log(i);<br />
                        &#125;<br />
                    </code>
                </div>
                <div className='bg-light-dark p-5 mb-6 mt-6'>
                    <p className='medium_text'>
                        1<br />
                        2<br />
                        3<br />
                    </p>
                </div>
            </section>

        </>
    )
}

export default IteratesSet