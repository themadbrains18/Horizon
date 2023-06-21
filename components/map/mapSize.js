import React from 'react'

const MapSize = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>JavaScript Map Size</h3>
                    <p className='main_text mb-4'>You can get the number of elements in a Map using the <code className='code_border'>size</code> property. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let map1 = new Map();<br />
                            map1.set('info', &#123;name: 'Jack', age: "26"&#125;);<br /><br />

                            console.log(map1.size); // 1<br />
                        </code>
                    </div>
                </div>
                <h3 className='sec_heading mb-4'>Iterate Through a Map</h3>
                <p className='main_text mb-4'>You can iterate through the Map elements using the for...of loop or forEach() method. The elements are accessed in the insertion order. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                        let map1 = new Map(); <br />
                        map1.set('name', 'Jack');<br />
                        map1.set('age', '27');<br /><br />

                    // looping through Map<br />
                        for (let [key, value] of map1) &#123;<br />
                        console.log(key + '- ' + value);<br />
                        &#125;
                    </code>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-6 mt-6'>
                    <code>
                        name- Jack <br />
                        age- 27<br />
                    </code>
                </div>
                <p className='main_text mb-4'>You could also get the same results as the above program using the <span className='code_border'>forEach() </span> method. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                    // using forEach method() <br/>
                    let map1 = new Map();<br/>
                    map1.set('name', 'Jack');<br/>
                    map1.set('age', '27');<br/><br/>
                    
                    // looping through Map<br/>
                    map1.forEach(function(value, key) &#123;<br/>
                      console.log(key + '- ' + value)<br/>
                      &#125;)<br/>
                    </code>
                </div>
            </section>
        </>
    )
}

export default MapSize