import React from 'react'

const Introduction = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='pb-10 border_bottom'>
                    <h1 className='large_heading mb-6'>JavaScript Multidimensional Array</h1>
                    <p className='main_text mb-4'>In this tutorial, you will learn about JavaScript multidimensional arrays with the help of examples.</p>
                    <p className='main_text mb-4'>A multidimensional array is an array that contains another array. For example,</p>
                    <div className='bg-light-dark p-3 mb-6'>
                        <p className='medium_text'>
                        // multidimensional array <br />
                            const data = [[1, 2, 3], [1, 3, 4], [4, 5, 6]];<br />
                        </p>
                    </div>
                </div>

                <div className='mt-10'>
                    <h2 className='sec_heading mb-4'>Create a Multidimensional Array</h2>
                    <p className='main_text mb-4'>Here is how you can create multidimensional arrays in JavaScript.</p>
                    <p className='main_text mb-4 !font-black'>Example 1</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23], ['Peter', 24]];
                        </p>
                    </div>
                    <p className='main_text mb-4 !font-black'>Example 2</p>
                    <div className='bg-light-dark p-5 mb-6'>
                        <p className='medium_text'>
                            let student1 = ['Jack', 24];<br />
                            let student2 = ['Sara', 23];<br />
                            let student3 = ['Peter', 24];<br /><br />

                        // multidimensional array<br />
                            let studentsData = [student1, student2, student3];<br />
                        </p>
                    </div>
                    <p className='main_text'>Here, both example 1 and example 2 creates a multidimensional array with the same data.</p>
                </div>
            </section>
        </>
    )
}

export default Introduction