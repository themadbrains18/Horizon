import React from 'react'

const NextMethod = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h2 className='sec_heading mb-6'>JavaScript next() Method</h2>
                    <p className='main_text mb-4'>The iterator object has a <code className='code_border'>next()</code> method that returns the next item in the sequence.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>next()</code> method contains two properties: <code className='code_border'>value</code> and <code className='code_border'>done</code>.</p>
                    <ul>
                        <li className='main_text mb-6 list-disc'> <strong> value</strong>
                            <p className='main_text mb-4'>The  <code className='code_border'>next()</code>value property can be of any data type and represents the current value in the sequence.</p>
                        </li>
                        <li className='main_text mb-6 list-disc'><strong> done</strong>
                            <p className='main_text mb-4'>The  <code className='code_border'>done</code> property is a boolean value that indicates whether the iteration is complete or not. If the iteration is incomplete, the  <code className='code_border'>done</code> property is set to  <code className='code_border'>false</code>, else it is set to  <code className='code_border'>true</code>.</p>
                        </li>
                    </ul>
                    <p className='main_text mb-4'>Let's look at an example of array iterables:</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const arr = ['h', 'e', 'l', 'l', 'o']; <br /><br />

                            let arrIterator = arr[Symbol.iterator]();<br /><br />

                            console.log(arrIterator.next()); // &#123;value: "h", done: false&#125;<br />
                            console.log(arrIterator.next()); // &#123;value: "e", done: false&#125;<br />
                            console.log(arrIterator.next()); // &#123;value: "l", done: false&#125;<br />
                            console.log(arrIterator.next()); // &#123;value: "l", done: false&#125;<br />
                            console.log(arrIterator.next()); // &#123;value: "o", done: false&#125;<br />
                            console.log(arrIterator.next()); // &#123;value: undefined, done: true&#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>You can call  <code className='code_border'>next()</code> repeatedly to iterate over an <code className='code_border'>arrIterator</code>  object.</p>
                    <ul>
                        <li className='main_text mb-6 list-disc'>The <code className='code_border'>next()</code> method returns an object with two properties: <code className='code_border'>value</code> and <code className='code_border'>done</code>.</li>
                        <li className='main_text mb-6 list-disc'>When the <code className='code_border'>next()</code> method reaches the end of the sequence, then the <code className='code_border'>done</code> property is set to <code className='code_border'>false</code>.</li>
                    </ul>
                    <p className='main_text mb-4'>Let's look at how <code className='code_border'>for...of</code> loop executes the above program. For example,</p>
                    <div className='bg-light-dark p-5 mb-4'>
                        <code>
                            const arr = ['h', 'e', 'l', 'l', 'o'];   <br />
                            <br />
                            for (let i of arr) &#123; <br />
                            console.log(i); <br />
                            &#125; <br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            h <br />
                            e <br />
                            l <br />
                            l <br />
                            o <br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The <code className='code_border'>for...of</code> loop does exactly the same as the program above.</p>
                    <p className='main_text mb-4'>The <code className='code_border'>for...of</code> loop keeps calling the <code className='code_border'>next()</code> method on the iterator. Once it reaches <code className='code_border'>done:true</code>, the <code className='code_border'>for...of</code> loop terminates.</p>
                </div>
            </section>
        </>
    )
}

export default NextMethod