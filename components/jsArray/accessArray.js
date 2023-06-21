import React from 'react'
import Image from 'next/image'
import arrayIndexing from '/public/javascript-array-indexing.webp'
const AccessArray = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Access Elements of an Array</h1>
                    <p className='main_text mb-4'>You can access elements of an array using indices (0, 1, 2 …). For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            const myArray = ['h', 'e', 'l', 'l', 'o'];<br /><br />

                            // first element<br />
                            console.log(myArray[0]);  // "h"<br /><br />

                            // second element<br />
                            console.log(myArray[1]); // "e"<br />
                        </p>
                    </div>
                    <Image src={arrayIndexing} width={700} height={200} alt='arrayIndexing img' className='bg-white mb-8' />
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>Array's index starts with 0, not 1.</p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Add an Element to an Array</h1>
                    <p className='main_text mb-4'>You can use the built-in method push() and unshift() to add elements to an array.</p>
                    <p className='main_text mb-4'>The push() method adds an element at the end of the array. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let dailyActivities = ['eat', 'sleep']; <br /><br />

                            // add an element at the end<br />
                            dailyActivities.push('exercise');<br /><br />

                            console.log(dailyActivities); //  ['eat', 'sleep', 'exercise']<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>The unshift() method adds an element at the beginning of the array. For example,</p>
                    <div className='bg-light-dark p-3   '>
                        <p className='medium_text'>
                            let dailyActivities = ['eat', 'sleep'];<br /><br />

                        //add an element at the start<br />
                            dailyActivities.unshift('work'); <br /><br />

                            console.log(dailyActivities); // ['work', 'eat', 'sleep']<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AccessArray