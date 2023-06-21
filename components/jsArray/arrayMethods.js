import React from 'react'

const ArrayMethods = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='py-10 border_bottom'>
                    <h1 className='sec_heading mb-6'>Array length</h1>
                    <p className='main_text mb-4'>You can find the length of an element (the number of elements in an array) using the length property. For example,</p>
                    <div className='bg-light-dark p-3'>
                        <p className='medium_text'>
                            const dailyActivities = [ 'eat', 'sleep']; <br /><br />

                            // this gives the total number of elements in an array<br />
                            console.log(dailyActivities.length); // 2<br />
                        </p>
                    </div>
                </div>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Array Methods</h1>
                    <p className='main_text mb-4'>In JavaScript, there are various array methods available that makes it easier to perform useful calculations.</p>
                    <p className='main_text mb-4'>Some of the commonly used JavaScript array methods are:</p>
                    <div className=' border border-[#37474F] p-5 mb-8 overflow-auto'>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5  '>
                            <li className='body_text mb-6 !font-extrabold'>Method</li>
                            <li className='body_text mb-6 !font-extrabold'>Description</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>concat()</li>
                            <li className='body_text mb-6'>joins two or more arrays and returns a result</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>indexOf()</li>
                            <li className='body_text mb-6'>searches an element of an array and returns its position</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>find()</li>
                            <li className='body_text mb-6'>returns the first value of an array element that passes a test</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>findIndex()</li>
                            <li className='body_text mb-6'>returns the first index of an array element that passes a test</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>forEach()</li>
                            <li className='body_text mb-6'>calls a function for each element</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>includes()</li>
                            <li className='body_text mb-6'>checks if an array contains a specified element</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>push()</li>
                            <li className='body_text mb-6'>aads a new element to the end of an array and returns the new length of an array</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>unshift()</li>
                            <li className='body_text mb-6'>adds a new element to the beginning of an array and returns the new length of an array</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>pop()</li>
                            <li className='body_text mb-6'>removes the last element of an array and returns the removed element</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>shift()</li>
                            <li className='body_text mb-6'>removes the first element of an array and returns the removed element</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>sort()</li>
                            <li className='body_text mb-6'>sorts the elements alphabetically in strings and in ascending order</li>
                        </ul>
                        <ul className='border_bottom pt-5 grid grid_150_1fr gap-5'>
                            <li className='body_text mb-6 '>slice()</li>
                            <li className='body_text mb-6'>selects the part of an array and returns the new array</li>
                        </ul>
                        <ul className='pt-5  grid grid_150_1fr gap-5'>
                            <li className='body_text '>splice()</li>
                            <li className='body_text '>removes or replaces existing elements and/or adds new elements</li>
                        </ul>
                    </div>
                </div>
                <div className=''>
                    <h1 className='sec_heading mb-6'>Example: JavaScript Array Methods</h1>
                    <div className='bg-light-dark p-3 mb-8' >
                        <p className='medium_text'>
                            let dailyActivities = ['sleep', 'work', 'exercise']<br />
                            let newRoutine = ['eat'];<br /><br />

                        // sorting elements in the alphabetical order<br />
                            dailyActivities.sort();<br />
                            console.log(dailyActivities); // ['exercise', 'sleep', 'work']<br /><br />

                        //finding the index position of string<br />
                            const position = dailyActivities.indexOf('work');<br />
                            console.log(position); // 2<br /><br />

                        // slicing the array elements<br />
                            const newDailyActivities = dailyActivities.slice(1);<br />
                            console.log(newDailyActivities); // [ 'sleep', 'work']<br /><br />

                        // concatenating two arrays<br />
                            const routine = dailyActivities.concat(newRoutine);<br />
                            console.log(routine); // ["exercise", "sleep", "work", "eat"]<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-5 border-l-2 border-[#54D7CE]'>
                        <p className='body_text'><span className='!text-white'>Note: </span>If the element is not in an array, indexOf() gives -1.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ArrayMethods