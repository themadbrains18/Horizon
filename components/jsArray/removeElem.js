import React from 'react'

const RemoveElem = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Remove an Element from an Array</h1>
                    <p className='main_text mb-4'>You can use the pop() method to remove the last element from an array. The pop() method also returns the returned value. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let dailyActivities = ['work', 'eat', 'sleep', 'exercise'];<br /><br />

                        // remove the last element<br />
                            dailyActivities.pop();<br />
                            console.log(dailyActivities); // ['work', 'eat', 'sleep']<br /><br />

                        // remove the last element from ['work', 'eat', 'sleep']<br />
                            const removedElement = dailyActivities.pop();<br /><br />

                        //get removed element<br />
                            console.log(removedElement); // 'sleep'<br />
                            console.log(dailyActivities);  // ['work', 'eat']<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'> If you need to remove the first element, you can use the shift() method. The shift() method removes the first element and also returns the removed element. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let dailyActivities = ['work', 'eat', 'sleep'];<br/><br/>

                            // remove the first element<br/>
                            dailyActivities.shift();<br/><br/>

                            console.log(dailyActivities); // ['eat', 'sleep']<br/>
                        </p>
                    </div>
                    <p className='main_text mb-4'>Basically, if you try to add elements to high indices, the indices in between will have undefined value.</p>
                </div>
            </section>

        </>
    )
}

export default RemoveElem