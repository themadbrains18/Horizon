import React from 'react'

const AccessCheckMap = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 border_bottom mb-10'>
                    <h3 className='sec_heading mb-4'>Access Map Elements</h3>
                    <p className='main_text mb-4'>You can access <code className='code_border'>Map</code> elements using the <code className='code_border'>get()</code> method. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let map1 = new Map();<br />
                            map1.set('info', &#123;name: 'Jack', age: "26"&#125;);<br /><br />

                    // access the elements of a Map<br />
                            console.log(map1.get('info')); // &#123;name: "Jack", age: "26"&#125;<br />
                        </code>
                    </div>
                </div>
                <div className=''>
                    <h3 className='sec_heading mb-4'>Check Map Elements</h3>
                    <p className='main_text mb-4'>You can use the <code className='code_border'> has()</code> method to check if the element is in a Map. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        const set1 = new Set([1, 2, 3]);<br/><br/>

                        let map1 = new Map();<br/>
                        map1.set('info', &#123;name: 'Jack', age: "26"&#125;);<br/><br/>
                        
                        // check if an element is in Set<br/>
                        console.log(map1.has('info')); // true<br/>
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccessCheckMap