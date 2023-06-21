import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Arrays</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript arrays with the help of examples.</p>
                    <p className='main_text mb-4'>An array is an object that can store multiple values at once. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                            const words = ['hello', 'world', 'welcome'];
                        </p>
                    </div>
                    <p className='main_text mb-4'>Here, words is an array. The array is storing 3 values.</p>
                </div>
                <div className='mt-10'>
                    <h2 className='sec_heading mb-4'>Create an Array</h2>
                    <p className='main_text mb-4'>You can create an array using two ways:</p>
                    <p className='main_text mb-4 !font-black'>1. Using an array literal</p>
                    <p className='main_text mb-4'>The easiest way to create an array is by using an array literal []. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const array1 = ["eat", "sleep"];
                        </p>
                    </div>
                    <p className='main_text mb-4 !font-black'>2. Using the new keyword</p>
                    <p className='main_text mb-4'>You can also create an array using JavaScript's new keyword.</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const array2 = new Array("eat", "sleep");
                        </p>
                    </div>
                    <p className='main_text mb-4'>In both of the above examples, we have created an array having two elements.</p>
                    <div className='bg-light-dark p-5 mb-4 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>It is recommended to use array literal to create an array.</p>
                    </div>
                    <p className='main_text mb-4'>Here are more examples of arrays:</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                    // empty array <br />
                            const myList = [ ];<br /><br />

                    // array of numbers<br />
                            const numberArray = [ 2, 4, 6, 8];<br /><br />

                    // array of strings<br />
                            const stringArray = [ 'eat', 'work', 'sleep'];<br /><br />

                    // array with mixed data types<br />
                            const newData = ['work', 'exercise', 1, true];<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>You can also store arrays, functions and other objects inside an array. For example,</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            const newData = [ <br />
                            &#123;'task1': 'exercise'&#123;,<br />
                            [1, 2 ,3],<br />
                            function hello() &#123; console.log('hello')&#123;<br />
                            ];<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction