import React from 'react'

const Examples = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h2 className='sec_heading mt-10 mb-6'> Example 1: Iterate Through an Object</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const student = &#123; <br />
                            name: 'Monica',<br />
                            class: 7,<br />
                            age: 12<br />
                            &#125;<br /><br />

                        // using for...in<br />
                            for ( let key in student ) &#123;<br /><br />

                            // display the properties<br />
                            console.log(`$&#123;key&#125; =&#62; $&#123;student[key]&#125;`);<br />
                            &#125;<br />
                        </p>
                    </div>

                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            name =&#62; Monica<br />
                            class =&#62; 7<br />
                            age =&#62; 12<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above program, the for...in loop is used to iterate over the student object and print all its properties.</p>
                    <ul>
                        <li className='main_text mb-4 list-disc ml-8'>The object key is assigned to the variable key.</li>
                        <li className='main_text list-disc ml-8'>student[key] is used to access the value of key.</li>
                    </ul>
                </div>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'> Example 2: Update Values of Properties</h2>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const salaries= &#123; <br />
                            Jack : 24000,<br />
                            Paul : 34000,<br />
                            Monica : 55000<br />
                            &#125;<br /><br />

                        // using for...in<br />
                            for ( let i in salaries) &#123;<br /><br />

                            // add a currency symbol<br />
                            let salary = "$" + salaries[i];<br /><br />

                            // display the values<br />
                            console.log(`$&#123;i&#125; : $&#123;salary&#125;`);<br />
                            &#125;<br />
                        </p>
                    </div>

                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Jack : $24000, <br />
                            Paul : $34000,<br />
                            Monica : $55000<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>In the above example, the for...in loop is used to iterate over the properties of the salaries object. Then, the string $ is added to each value of the object.</p>
                </div>

            </section>
        </>
    )
}

export default Examples