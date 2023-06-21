import React from 'react'

const WeaksetMethods = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>WeakSet Methods</h3>
                    <p className='main_text mb-4'>WeakSets have methods <span className='code_border'>add()</span>, <span className='code_border'>delete()</span>, and <span className='code_border'>has()</span>. For example,
                    </p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const weakSet = new WeakSet();
                            console.log(weakSet); // WeakSet &#123;&#125;

                            const obj = &#123;a:1&#125;;

                            // add to a weakSet
                            weakSet.add(obj);
                            console.log(weakSet); // WeakSet &#123;&#123;a: 1&#125;&#125;

                            // check if an element is in Set
                            console.log(weakSet.has(obj)); // true

                            // delete elements
                            weakSet.delete(obj);
                            console.log(weakSet); // WeakSet &#123;&#125;
                        </code>
                    </div>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>WeakSets Are Not iterable</h3>
                    <p className='main_text mb-4'>Unlike Sets, WeakSets are not iterable. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const weakSet = new WeakSet(&#123;a:1&#125;);<br /><br />

                        // looping through WeakSet<br />
                            for (let i of weakSet) &#123;<br /><br />

                            // TypeError<br />
                            console.log(i);<br />
                            &#125;<br />
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default WeaksetMethods