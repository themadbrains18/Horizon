import React from 'react'

const ForInWithArray = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mt-10 mb-6'>for...in with Arrays</h2>
                    <p className='main_text mb-4'>You can also use for...in with arrays. For example,</p>

                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // define array <br />
                            const arr = [ 'hello', 1, 'JavaScript' ];<br /><br />

                        // using for...in loop<br />
                            for (let x in arr) &#123;<br />
                            console.log(arr[x]);<br />
                            &#125;<br />
                        </p>
                    </div>

                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            hello <br />
                            1<br />
                            JavaScript<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'> You will learn more about the arrays in later tutorials.</p>
                    <div className='bg-light-dark p-5 mb-6 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>You should not use for...in to iterate over an array where the index order is important.</p>
                    </div>
                    <p className='main_text mb-4'>One of the better ways to iterate over an array is using the for...of loop.</p>
                </div>
            </section>
        </>
    )
}

export default ForInWithArray