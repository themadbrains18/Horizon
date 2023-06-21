import React from 'react'

const ForInWithString = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'> for...in with Strings</h2>
                    <p className='main_text mb-4'>You can also use for...in loop to iterate over string values. For example,</p>

                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const string = 'code'; <br /><br />

                        // using for...in loop<br />
                            for (let i in string) &#123;<br />
                            console.log(string[i]);<br />
                            &#125;<br />
                        </p>
                    </div>

                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5  mt-6'>
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

export default ForInWithString