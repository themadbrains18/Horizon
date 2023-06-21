import React from 'react'

const InsertToMap = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Insert Item to Map</h3>
                    <p className='main_text mb-4'>After you create a map, you can use the set() method to insert elements to it. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                        // create a set <br />
                            let map1 = new Map();<br /><br />

                        // insert key-value pair<br />
                            map1.set('info', &#123;name: 'Jack', age: 26&#125;);<br />
                            console.log(map1); // Map &#123;"info" =&#62; &#123;name: "Jack", age: 26&#125;&#125;<br />
                        </code>
                    </div>
                    <p className='main_text mb-4'>You can also use objects or functions as keys. For example,</p>
                    <div className='bg-light-dark p-5 mb-8 '>
                        <code>
                    // Map with object key<br/>
                            let map2 = new Map();<br/><br/>

                            let obj = &#123; &#125;;<br/>
                            map2.set(obj, &#123;name: 'Jack', age: "26"&#125;);<br/><br/>

                            console.log(map2); // Map &#123;&#123;&#125; =&#62; &#123;name: "Jack", age: "26"&#125;&#125;
                        </code>
                    </div>           
            </section>
        </>
    )
}

export default InsertToMap