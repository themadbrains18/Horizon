import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=' pb-10 b-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Set and WeakSet</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript Sets and WeakSets with the help of examples.</p>
                    <p className='main_text mb-6'>The JavaScript <span className='font-extrabold'>ES6</span>  has introduced two new data structures, i.e  <span className='code_border'>Set</span> and <span className='code_border'>WeakSet</span>.</p>
                    <p className='main_text mb-4'>Set is similar to an array that allows us to store multiple items like numbers, strings, objects, etc. However, unlike an array, a set cannot contain duplicate values.</p>
                </div>
                <div className='pt-10'>
                    <h2 className='sec_heading mb-6'>Create JavaScript Set</h2>
                    <p className='main_text mb-4'>To create a <span className='code_border'>Set</span>, you need to use the new <span className='code_border'>new Set()</span> constructor. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <code>
                        // create Set<br />
                            const set1 = new Set(); // an empty set<br />
                            console.log(set1); // Set &#123;&#125;<br /><br />

                        // Set with multiple types of value<br />
                            const set2 = new Set([1, 'hello', &#123;count : true&#125;]);<br />
                            console.log(set2); // Set &#123;1, "hello", &#123;count: true&#125;&#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>When duplicate values are passed to a Set object, the duplicate values are excluded.</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <code>
                    // Set with duplicate values <br />
                            const set3 = new Set([1, 1, 2, 2]);<br />
                            console.log(set3); // Set &#123;1, 2&#125;<br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction