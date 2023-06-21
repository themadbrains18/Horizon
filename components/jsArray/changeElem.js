import React from 'react'

const ChangeElem = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Change the Elements of an Array</h1>
                    <p className='main_text mb-4'>You can also add elements or change the elements by accessing the index value.</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let dailyActivities = [ 'eat', 'sleep']; <br /><br />

                        // this will add the new element 'exercise' at the 2 index<br />
                            dailyActivities[2] = 'exercise';<br /><br />

                            console.log(dailyActivities); // ['eat', 'sleep', 'exercise']<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'> Suppose, an array has two elements. If you try to add an element at index 3 (fourth element), the third element will be undefined. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let dailyActivities = [ 'eat', 'sleep'];<br/><br/>

                            // this will add the new element 'exercise' at the 3 index<br/>
                            dailyActivities[3] = 'exercise';<br/><br/>

                            console.log(dailyActivities); // ["eat", "sleep", undefined, "exercise"]<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>Basically, if you try to add elements to high indices, the indices in between will have undefined value.</p>
                </div>
            </section>
        </>
    )
}

export default ChangeElem