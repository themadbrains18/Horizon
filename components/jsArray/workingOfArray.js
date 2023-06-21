import Image from 'next/image'
import indexingArrayimg from '/public/array-indexing1.png'
import React from 'react'

const WorkingOfArray = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Working of JavaScript Arrays</h1>
                    <p className='main_text mb-4'>In JavaScript, an array is an object. And, the indices of arrays are objects keys.</p>
                    <p className='main_text mb-4'>Since arrays are objects, the array elements are stored by reference. Hence, when an array value is copied, any change in the copied array will also reflect in the original array. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let arr = ['h', 'e'];<br />
                            let arr1 = arr;<br />
                            arr1.push('l');<br /><br />

                            console.log(arr); // ["h", "e", "l"]<br />
                            console.log(arr1); // ["h", "e", "l"]<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>You can also store values by passing a named key in an array. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let arr = ['h', 'e'];<br />
                            arr.name = 'John';<br /><br />

                            console.log(arr); // ["h", "e"]<br />
                            console.log(arr.name); // "John"<br />
                            console.log(arr['name']); // "John"<br />
                        </p>
                    </div>
                    <Image src={indexingArrayimg} width={700} height={480} alt='unread checkmark icon' className='bg-white mb-8' />
                    <p className='main_text mb-4'>However, it is not recommended to store values by passing arbitrary names in an array.</p>
                    <p className='main_text mb-4'>Hence in JavaScript, you should use an array if values are in ordered collection. Otherwise it's better to use object with &#123; &#125;.</p>

                </div>
            </section>
        </>
    )
}

export default WorkingOfArray