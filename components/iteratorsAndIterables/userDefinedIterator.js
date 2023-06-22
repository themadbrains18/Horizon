import React from 'react'

const UserDefinedIterator = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=''>
                    <h1 className='large_heading my-6'>User Defined Iterator</h1>
                    <p className='main_text mb-6'>You can also create your own iterator and call <code className='code_border'>next()</code> to access the next element. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            function displayElements(arr) &#123;                 <br />
                            <br />
                                // to update the iteration <br />
                            let n = 0; <br />
                            <br />
                            return &#123; <br />
                            <br />
                                // implementing the next() function <br />
                            next() &#123; <br />
                            <br />
                            if(n &#60; arr.length) &#123; <br />
                            return &#123; <br />
                            value: arr[n++], <br />
                            done: false <br />
                            &#125; <br />
                            &#125; <br />
                            <br />
                            return &#123; <br />
                            value: undefined, <br />
                            done: true <br />
                            &#125; <br />
                            &#125; <br />
                            &#125; <br />
                            &#125; <br />
                            <br />
                            const arr = ['h', 'e', 'l', 'l', 'o']; <br />
                            <br />
                            const arrIterator = displayElements(arr); <br />
                            <br />
                            console.log(arrIterator.next()); <br />
                            console.log(arrIterator.next()); <br />
                            console.log(arrIterator.next()); <br />
                            console.log(arrIterator.next()); <br />
                            console.log(arrIterator.next()); <br />
                            console.log(arrIterator.next()); <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            &#123;value: "h", done: false&#125;
                            &#123;value: "e", done: false&#125;
                            &#123;value: "l", done: false&#125;
                            &#123;value: "l", done: false&#125;
                            &#123;value: "o", done: false&#125;
                            &#123;value: undefined, done: true&#125;
                        </p>
                    </div>
                    <p className='main_text mb-6'>In the above program, we have created our own iterator. The <code className='code_border'>displayElements()</code> function returns <code className='code_border'>value</code> and <code className='code_border'>done</code> property.</p>
                    <ul>
                        <li className='main_text mb-6 list-disc'>Each time the <code className='code_border'>next()</code> method is called, the function gets executed once and displays the value of an array.</li>
                        <li className='main_text mb list-disc'>Finally, when all the elements of an array are exhausted, the <code className='code_border'>done</code> property is set to <code className='code_border'>true</code>, with <code className='code_border'>value</code> as <code className='code_border'>undefined</code>.</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default UserDefinedIterator