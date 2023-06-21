import React from 'react'

const AddElem = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Adding New Elements</h3>
                <p className='main_text mb-4'>You can add elements to a Set using the <span className='code_border'>add()</span>  method. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const set = new Set([1, 2]); <br />
                        console.log(set.values());<br /><br />

                    // adding new elements<br />
                        set.add(3);<br />
                        console.log(set.values());<br /><br />

                    // adding duplicate elements<br />
                    // does not add to Set<br />
                        set.add(1);<br />
                        console.log(set.values());<br />
                    </code>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-6 mt-6'>
                    <p className='medium_text'>
                        Set Iterator [1, 2]         <br />
                        Set Iterator [1, 2, 3]<br />
                        Set Iterator [1, 2, 3]<br />
                    </p>
                </div>
            </section>
        </>
    )
}

export default AddElem