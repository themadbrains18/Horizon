import React from 'react'

const RemoveElem = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Removing Elements</h3>
                <p className='main_text mb-4'>You can use the <span className='code_border'>clear()</span> and the <span className='code_border'>delete()</span> method to remove elements from a Set.</p>
                <p className='main_text mb-4'> The <span className='code_border'>delete()</span> method removes a specific element from a <span className='code_border'>Set</span>. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const set = new Set([1, 2, 3]); <br />
                        console.log(set.values()); // Set Iterator [1, 2, 3]<br /><br />

                    // removing a particular element<br />
                        set.delete(2);<br />
                        console.log(set.values()); // Set Iterator [1, 3]<br />
                    </code>
                </div>
                <p className='main_text mb-4'>The <span className='code_border'>clear()</span>  method removes all elements from a <span className='code_border'>Set</span>. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        const set = new Set([1, 2, 3]);<br/>
                        console.log(set.values()); // Set Iterator [1, 2, 3]<br/><br/>

                        // remove all elements of Set<br/>
                        set.clear();<br/>
                        console.log(set.values()); // Set Iterator []<br/>
                    </code>
                </div>
            </section>

        </>
    )
}

export default RemoveElem