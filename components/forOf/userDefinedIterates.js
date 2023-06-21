import React from 'react'

const UserDefinedIterates = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className=''>
                    <h3 className='sec_heading mb-4'>User Defined Iterators</h3>
                    <p className='main_text mb-4'>
                        You can create an iterator manually and use the <code className='code_border'>for..of</code>  loop to iterate through the iterators. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // creating iterable object <br/>
                            const iterableObj = &#123;<br/><br/>

                            // iterator method<br/>
                            [Symbol.iterator]() &#123;<br/>
                            let step = 0;<br/>
                            return &#123;<br/>
                            next() &#123;<br/>
                            step++;<br/>
                            if (step === 1) &#123;<br/>
                            return &#123; value: '1', done: false&#125;;<br/>
                            &#125;<br/>
                            else if (step === 2) &#123;<br/>
                            return &#123; value: '2', done: false&#125;;<br/>
                            &#125;<br/>
                            else if (step === 3) &#123;<br/>
                            return &#123; value: '3', done: false&#125;;<br/>
                            &#125;<br/>
                            return &#123; value: '', done: true &#125;;<br/>
                            &#125;<br/>
                            &#125;<br/>
                            &#125;<br/>
                            &#125;<br/><br/>

                            // iterating using for...of<br/>
                            for (const i of iterableObj) &#123;<br/>
                            console.log(i);<br/>
                            &#125;<br/>
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                           1<br/>
                           2<br/>
                           3<br/>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserDefinedIterates