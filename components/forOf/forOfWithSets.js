import React from 'react'

const ForOfWithSets = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>for...of with Sets</h3>
                    <p className='main_text mb-4'>You can iterate through Set elements using the <code className='code_border'>for..of</code> loop. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            // define Set <br/>
                            const set = new Set([1, 2, 3]);<br/><br/>

                            // looping through Set<br/>
                            for (let i of set) &#123;<br/>
                            console.log(i);<br/>
                            &#125;<br/>
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            1<br />
                            2<br />
                            3<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ForOfWithSets