import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className=' pb-10 b-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Map</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript Maps and WeakMaps with the help of examples.</p>
                    <p className='main_text mb-6'>The JavaScript <strong>ES6</strong> has introduced two new data structures, i.e <code className='code_border'>Map</code> and  <code className='code_border'>WeakMap</code>.</p>
                    <p className='main_text mb-4'>Map is similar to objects in JavaScript that allows us to store elements in a <strong>key/value </strong>pair.</p>
                    <p className='main_text mb-4'>The elements in a Map are inserted in an insertion order. However, unlike an object, a map can contain objects, functions and other data types as key.</p>
                </div>
                <div className='pt-10'>
                    <h2 className='sec_heading mb-6'>Create JavaScript Map</h2>
                    <p className='main_text mb-4'>To create a  <code className='code_border'>Map</code>, we use the  <code className='code_border'>new Map()</code> constructor. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <code>
                        // create a Map<br/>
                            const map1 = new Map(); // an empty map<br/>
                            console.log(map1); // Map &#123; &#125;<br/>
                        </code>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction