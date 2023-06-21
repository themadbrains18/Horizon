import Link from 'next/link'
import React from 'react'

const SpreadOp = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Rest Parameter and Spread Operator</h2>
                <p className='main_text mb-4'>You can use the <strong>rest parameter</strong>  to represent an indefinite number of arguments as an array. For example,</p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        function show(a, b, ...args) &#123; <br />
                        console.log(a); // one<br />
                        console.log(b); // two<br />
                        console.log(args); // ["three", "four", "five", "six"]<br />
                        &#125;<br /><br />

                        show('one', 'two', 'three', 'four', 'five', 'six')<br />
                    </p>
                </div>
                <p className='main_text mb-4'> You pass the remaining arguments using <code className="code_border">...</code>  syntax. Hence, the name <strong>rest parameter.</strong> </p>
                <p className='main_text mb-4'>You use the <strong> spread syntax</strong> <code className="code_border">...</code> to copy the items into a single array. For example, </p>
                <div className='bg-light-dark p-5 mb-6'>
                    <p className='medium_text'>
                        let arr1 = ['one', 'two']; <br />
                        let arr2 = [...arr1, 'three', 'four', 'five'];<br />
                        console.log(arr2); // ["one", "two", "three", "four", "five"]<br />
                    </p>
                </div>
                <p className='main_text mb-4'>Both the rest parameter and the spread operator use the same syntax. However, the spread operator is used with arrays (iterable values).</p>
                <p className='main_text mb-4'>To learn more about the spread operator, visit <Link href="/" className='text-blue-500'>JavaScript Spread Operator.</Link> </p>
            </section>
        </>
    )
}

export default SpreadOp