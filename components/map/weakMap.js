import React from 'react'

const WeakMap = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>JavaScript WeakMap</h3>
                    <p className='main_text mb-4'>The WeakMap is similar to a Map. However, WeakMap can only contain objects as keys. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const weakMap = new WeakMap();<br />
                            console.log(weakMap); // WeakMap &#123;&#125;<br /><br />

                            let obj = &#123;&#125;;<br /><br />

                        // adding object (element) to WeakMap<br />
                            weakMap.set(obj, 'hello');<br /><br />

                            console.log(weakMap); // WeakMap &#123;&#123;&#125; =&#62; "hello"&#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>When you try to add other data types besides objects, WeakMap throws an error. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const weakMap = new WeakMap();<br /><br />
                            // adding string as a key to WeakMap<br />
                            weakMap.set('obj', 'hello');<br />
                        </code>
                    </div>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                    // throws error<br />
                    // TypeError: Attempted to set a non-object key in a WeakMap
                        </code>
                    </div>
                </div>

                <div className='pb-10 mt-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>WeakMap Methods</h3>
                    <p className='main_text mb-4'>WeakMaps have methods <span className='code_border'>get(),</span> <span className='code_border'>set(),</span> <span className='code_border'> delete(),</span>  and <span className='code_border'> has().</span> For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const weakMap = new WeakMap();<br />
                            console.log(weakMap); // WeakMap &#123; &#125;<br /><br />

                            let obj = &#123; &#125;;<br /><br />

                            // adding object (element) to WeakMap<br />
                            weakMap.set(obj, 'hello');<br /><br />

                            console.log(weakMap); // WeakMap &#123;&#123;&#125; =&#62; "hello"&#125;<br /><br />

                            // get the element of a WeakMap<br />
                            console.log(weakMap.get(obj)); // hello<br /><br />

                            // check if an element is present in WeakMap<br />
                            console.log(weakMap.has(obj)); // true<br /><br />

                            // delete the element of WeakMap<br />
                            console.log(weakMap.delete(obj)); // true<br /><br />

                            console.log(weakMap); // WeakMap &#123; &#125;<br />
                        </code>
                    </div>
                </div>
                <div className='py-10 mb-10 border_bottom'> 
                    <h3 className='sec_heading mb-4'>WeakMaps Are Not iterable</h3>
                    <p className='main_text mb-4'>Unlike Maps, WeakMaps are not iterable. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            const weakMap = new WeakMap(); <br />
                            console.log(weakMap); // WeakMap  &#123; &#125;<br /><br />

                            let obj =  &#123; &#125;;<br /><br />

                        // adding object (element) to WeakMap<br />
                            weakMap.set(obj, 'hello');<br /><br />


                        // looping through WeakMap<br />
                            for (let i of weakMap)  &#123;<br /><br />

                            console.log(i);  // TypeError<br />
                            &#125;<br />
                        </code>
                    </div>
                </div>
                <p className='main_text mb-4'> JavaScript Map and WeakMap were introduced in ES6. Some browsers may not support their use.</p>
            </section>
        </>
    )
}

export default WeakMap