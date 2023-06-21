import React from 'react'

const RemovingElem = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h3 className='sec_heading mb-4'>Removing Elements</h3>
                <p className='main_text mb-4'>You can use the <code className='code_border'> clear()</code> and the <code className='code_border'> delete()</code> method to remove elements from a Map.</p>
                <p className='main_text mb-4'>The <code className='code_border'>delete()</code> method returns <code className='code_border'>true</code> if a specified key/value pair exists and has been removed or else returns <code className='code_border'>false</code>. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        let map1 = new Map(); <br />
                        map1.set('info', &#123;name: 'Jack', age: "26"&#125;);<br /><br />

                        // removing a particular element<br />
                        map1.delete('address'); // false<br />
                        console.log(map1); // Map &#123;"info" =&#62; &#123;name: "Jack", age: "26"&#125;&#125;<br /><br />

                        map1.delete('info'); // true<br />
                        console.log(map1); // Map &#123; &#125;<br />
                    </code>
                </div>
                <p className='main_text mb-4'>The <code className='code_border'> clear()</code> method removes all key/value pairs from a Map object. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        let map1 = new Map(); <br/>
                        map1.set('info', &#123;name: 'Jack', age: "26"&#125;);<br/><br/>

                        // removing all element<br/>
                        map1.clear();<br/>
                        console.log(map1); // Map &#123; &#125;<br/>
                    </code>
                </div>

            </section>
        </>
    )
}

export default RemovingElem