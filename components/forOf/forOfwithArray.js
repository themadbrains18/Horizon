import React from 'react'

const ForOfwithArray = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>for...of with Arrays</h3>
                    <p className='main_text mb-4'>The <code className='code_border'>for..of</code> loop can be used to iterate over an array. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
            // array <br />
                            const students = ['John', 'Sara', 'Jack'];<br /><br />

            // using for...of<br />
                            for ( let element of students ) &#123;<br /><br />

                // display the values<br />
                            console.log(element);<br />
                            &#125;<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            John<br />
                            Sara<br />
                            Jack<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the <code className='code_border'>for...of</code>  loop is used to iterate over the <code className='code_border'>students</code> array object and display all its values.</p>
                </div>
            </section>
        </>
    )
}

export default ForOfwithArray