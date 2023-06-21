import React from 'react'

const Examples = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Mathematical Set Operations</h3>
                    <p className='main_text mb-4'>In JavaScript, Set does not provide built-in methods for performing mathematical operations such as union, intersection, difference, etc. However, we can create programs to perform those operations.</p>
                    <h3 className='sec_heading mb-4'> Example: Set Union Operation</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // perform union operation <br />
                        // contain elements of both sets<br />
                            function union(a, b) &#123;<br />
                            let unionSet = new Set(a);<br />
                            for (let i of b) &#123;<br />
                            unionSet.add(i);<br />
                            &#125;<br />
                            return unionSet<br />
                            &#125;<br /><br />

                        // two sets of fruits<br />
                            let setA = new Set(['apple', 'mango', 'orange']);<br />
                            let setB = new Set(['grapes', 'apple', 'banana']);<br /><br />

                            let result = union(setA, setB);<br /><br />

                            console.log(result);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Set  &#123;"apple", "mango", "orange", "grapes", "banana" &#125;
                        </p>
                    </div>
                </div>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Example: Set Intersection Operation</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // perform intersection operation <br />
                            // elements of set a that are also in set b<br />
                            function intersection(setA, setB) &#123;<br />
                            let intersectionSet = new Set();<br /><br />

                            for (let i of setB) &#123;<br />
                            if (setA.has(i)) &#123;<br />
                            intersectionSet.add(i);<br />
                            &#125;<br />
                            &#125;<br />
                            return intersectionSet;<br />
                            &#125;<br /><br />

                            // two sets of fruits<br />
                            let setA = new Set(['apple', 'mango', 'orange']);<br />
                            let setB = new Set(['grapes', 'apple', 'banana']);<br /><br />

                            let result = intersection(setA, setB);<br /><br />

                            console.log(result);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Set &#123;"apple"&#125;
                        </p>
                    </div>
                </div>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Example: Set Difference Operation</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // perform difference operation <br />
                            // elements of set a that are not in set b<br />
                            function difference(setA, setB) &#123;<br />
                            let differenceSet = new Set(setA)<br />
                            for (let i of setB) &#123;<br />
                            differenceSet.delete(i)<br />
                            &#125;<br />
                            return differenceSet<br />
                            &#125;<br /><br />

                            // two sets of fruits<br />
                            let setA = new Set(['apple', 'mango', 'orange']);<br />
                            let setB = new Set(['grapes', 'apple', 'banana']);<br /><br />

                            let result = difference(setA, setB);<br /><br />

                            console.log(result);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Set &#123;"mango", "orange"&#125;
                        </p>
                    </div>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Example: Set Subset Operation</h3>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // perform subset operation <br />
                        // true if all elements of set b is in set a<br />
                            function subset(setA, setB) &#123;<br />
                            for (let i of setB) &#123;<br />
                            if (!setA.has(i)) &#123;<br />
                            return false<br />
                            &#125;<br />
                            &#125;<br />
                            return true<br />
                            &#125;<br /><br />

                        // two sets of fruits<br />
                            let setA = new Set(['apple', 'mango', 'orange']);<br />
                            let setB = new Set(['apple', 'orange']);<br /><br />

                            let result = subset(setA, setB);<br /><br />

                            console.log(result);<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            true
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Examples