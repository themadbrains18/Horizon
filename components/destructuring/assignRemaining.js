import React from 'react'

const AssignRemaining = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Assign Remaining Elements to a Single Variable</h3>
                    <p className='main_text mb-4'>You can assign the remaining elements of an array to a variable using the spread syntax <span className='code_border'>....</span>  For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const arrValue = ['one', 'two', 'three', 'four']; <br /><br />

                        // destructuring assignment in arrays<br />
                        // assigning remaining elements to y<br />
                            const [x, ...y] = arrValue;<br /><br />

                            console.log(x); // one<br />
                            console.log(y); // ["two", "three", "four"]<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, <span className='code_border'>one </span> is assigned to the <span className='code_border'>x </span> variable. And the rest of the array elements are assigned to <span className='code_border'>y</span> variable.</p>
                    <p className='main_text mb-4'>You can also assign the rest of the object properties to a single variable. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const person = &#123; <br />
                            name: 'Sara',<br />
                            age: 25,<br />
                            gender: 'female'    <br />
                            &#125;<br /><br />

                        // destructuring assignment<br />
                        // assigning remaining properties to rest<br />
                            let &#123; name, ...rest &#125; = person;<br /><br />

                            console.log(name); // Sara<br />
                            console.log(rest); // &#123;age: 25, gender: "female"&#125;<br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>The variable with the spread syntax cannot have a trailing comma <span className='code_border'>,</span> . You should use this rest element (variable with spread syntax) as the last variable.</p>
                    </div>
                    <p className='main_text mb-4'>For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const arrValue = ['one', 'two', 'three', 'four']; <br/><br/>

                            // throws an error<br/>
                            const [ ...x, y] = arrValue;<br/><br/>

                            console.log(x); // eror<br/>
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AssignRemaining