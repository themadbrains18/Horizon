import React from 'react'

const SwappingSkip = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Swapping Variables</h3>
                    <p className='main_text mb-4'>In this example, two variables are swapped using the destructuring assignment syntax.</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // program to swap variables <br /><br />

                            let x = 4;<br />
                            let y = 7;<br /><br />

                        // swapping variables<br />
                            [x, y] = [y, x];<br /><br />

                            console.log(x); // 7<br />
                            console.log(y); // 4<br />
                        </code>
                    </div>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Skip Items</h3>
                    <p className='main_text mb-4'>You can skip unwanted items in an array without assigning them to local variables. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const arrValue = ['one', 'two', 'three']; <br /><br />

                        // destructuring assignment in arrays<br />
                            const [x, , z] = arrValue;<br /><br />

                            console.log(x); // one<br />
                            console.log(z); // three<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>In the above program, the second element is omitted by using the comma separator <span className='code_border'>,</span>.</p>
                </div>
            </section>
        </>
    )
}

export default SwappingSkip