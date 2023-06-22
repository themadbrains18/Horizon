import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <h1 className='large_heading mb-6'>JavaScript Iterators and Iterables</h1>
                <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript iterators and iterables with the help of examples.</p>

                <h2 className='sec_heading mb-6'>JavaScript Iterables and Iterators</h2>
                <p className='main_text mb-4'>JavaScript provides a protocol to iterate over data structures. This protocol defines how these data structures are iterated over using the <code className='code_border'>for...of</code>  loop.</p>
                <p className='main_text mb-4'>The concept of the protocol can be split into:</p>
                <ul>
                    <li className='main_text mb-6 list-disc'>iterable</li>
                    <li className='main_text mb list-disc'>iterator</li>
                </ul>
                <p className='main_text mb-4'>The iterable protocol mentions that an iterable should have the <code className='code_border'>Symbol.iterator</code> key.</p>
                <h2 className='sec_heading mb-6 !text-[19px]'>JavaScript Iterables</h2>
                <p className='main_text mb-4'>The data structures that have the <code className='code_border'>Symbol.iterator</code> method are called iterables. For example, Arrays, Strings, Sets, etc.</p>
                <h2 className='sec_heading mb-6 !text-[19px]'>JavaScript Iterators</h2>
                <p className='main_text mb-4'>An iterator is an object that is returned by the <code className='code_border'>Symbol.iterator</code> method.</p>
                <p className='main_text mb-4'>The iterator protocol provides the <code className='code_border'>next()</code> method to access each element of the iterable (data structure) one at a time.</p>
            </section>
        </>
    )
}

export default Introduction