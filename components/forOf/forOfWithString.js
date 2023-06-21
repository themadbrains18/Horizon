import React from 'react'

const ForOfWithString = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>for...of with Strings</h3>
                    <p className='main_text mb-4'>You can use <code className='code_border'>for..of</code> loop to iterate over string values. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // string <br />
                            const string = 'code';<br /><br />

                        // using for...of loop<br />
                            for (let i of string) &#123;<br />
                            console.log(i);<br />
                            &#125;<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            c <br />
                            o <br />
                            d <br />
                            e <br />
                        </p>
                    </div>
                </div>
            </section>
        </>

    )
}

export default ForOfWithString