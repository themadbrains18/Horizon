import React from 'react'

const Example = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <p className='main_text mb-4'>Let's look at an example of iterables having <code className='code_border'>Symbol.Iterator()</code></p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const arr = [1, 2 ,3];  <br />
                            <br />
                        // calling the Symbol.iterator() method <br />
                            const arrIterator = arr[Symbol.iterator](); <br />
                            <br />
                        // gives Array Iterator <br />
                            console.log(arrIterator); <br />
                            <br />
                            const str = 'hello'; <br />
                            <br />
                        // calling the Symbol.iterator() method <br />
                            const strIterator = str[Symbol.iterator](); <br />
                            <br />
                        // gives String Iterator <br />
                            console.log(strIterator); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Array Iterator &#123;&#125; <br />
                            StringIterator &#123;&#125;
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, calling the <code className='code_border'>Symbol.Iterator()</code> method of both the array and string returns their respective iterators.</p>
                </div>
            </section>
        </>
    )
}

export default Example