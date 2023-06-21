import React from 'react'

const MapKeysValue = () => {
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Iterate Over Map Keys</h3>
                    <p className='main_text mb-4'>You can iterate over the Map and get the key using the <span className='code_border'>keys()</span> method. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let map1 = new Map(); <br />
                            map1.set('name', 'Jack');<br />
                            map1.set('age', '27');<br /><br />

                            // looping through the Map<br />
                            for (let key of map1.keys()) &#123;<br />
                            console.log(key)<br />
                            &#125;<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            name<br />
                            age<br />
                        </code>
                    </div>
                </div>
                <div className='pb-10 mb-10 border_bottom'>
                    <h3 className='sec_heading mb-4'>Iterate Over Map Values</h3>
                    <p className='main_text mb-4'>You can iterate over the Map and get the values using the <span className='code_border'>values()</span> method. For example,</p>
                    <div className='bg-light-dark p-5 mb-8'>
                        <code>
                            let map1 = new Map(); <br />
                            map1.set('name', 'Jack');<br />
                            map1.set('age', '27');<br /><br />

                        // looping through the Map<br />
                            for (let values of map1.values()) &#123;<br />
                            console.log(values);<br />
                            &#125;<br />
                        </code>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <code>
                            Jack<br />
                            27<br />
                        </code>
                    </div>
                </div>

                <h3 className='sec_heading mb-4'>Get Key/Values of Map</h3>
                <p className='main_text mb-4'>You can iterate over the Map and get the key/value of a Map using the <span className='code_border'>entries()</span>  method. For example,</p>
                <div className='bg-light-dark p-5 mb-8'>
                    <code>
                    let map1 = new Map(); <br/>
                    map1.set('name', 'Jack');<br/>
                    map1.set('age', '27');<br/><br/>
                    
                    // looping through the Map<br/>
                    for (let elem of map1.entries()) &#123;<br/>
                        console.log(`$&#123;elem[0]&#125;: $&#123;elem[1]&#125;`);<br/>
                        &#125;<br/>
                    </code>
                </div>
                <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                <div className='bg-light-dark p-5 mb-6 mt-6'>
                    <code>
                    name: Jack<br/>
                    age: 27<br/>
                    </code>
                </div>
            </section>
        </>
    )
}

export default MapKeysValue