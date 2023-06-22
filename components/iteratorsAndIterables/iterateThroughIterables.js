import React from 'react'

const IterateThroughIterables = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>Iterate Through Iterables</h2>
                    <p className='main_text mb-4'>You can use the <code className='code_border'>for...of</code> loop to iterate through these iterable objects. You can iterate through the <code className='code_border'>Symbol.Iterator()</code> method like this:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const number = [ 1, 2, 3]; <br />
                            <br />
                            for (let n of  number[Symbol.iterator]()) &#123; <br />
                            console.log(n); <br />
                            &#125; <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            1 <br />
                            2 <br />
                            3 <br />
                            4 <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>Or you can simply iterate through the array like this:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const number = [ 1, 2, 3];       <br />
                            <br />
                            for (let n of  number) &#123; <br />
                            console.log(n); <br />
                            &#125; <br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>Here, the iterator allows the <code className='code_border'>for...of</code> loop to iterate over an array and return each value.</p>
                </div>
            </section>
        </>
    )
}

export default IterateThroughIterables