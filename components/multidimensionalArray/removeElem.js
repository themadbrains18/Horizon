import React from 'react'

const RemoveElem = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Remove an Element from a Multidimensional Array</h1>
                    <p className='main_text mb-4'>You can use the Array's pop() method to remove the element from a multidimensional array. For example,</p>
                    <p className='main_text mb-4 !font-black'>  Remove Element from Outer Array</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                        // remove the array element from outer array <br />
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br />
                            studentsData.pop();<br /><br />

                            console.log(studentsData); // [["Jack", 24]]<br />
                        </p>
                    </div>
                    <p className='main_text mb-4 !font-black'>Remove Element from Inner Array</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                        // remove the element from the inner array <br />
                            let studentsData = [['Jack', 24], ['Sara', 23]];<br />
                            studentsData[1].pop();<br /><br />

                            console.log(studentsData); // [["Jack", 24], ["Sara"]]<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'> You can also use the splice() method to remove an element at a specified index. For example,</p>
                    <div className='bg-light-dark p-3'>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br /><br />

                        // removing 1 index array item<br />
                            studentsData.splice(1,1);<br />
                            console.log(studentsData); // [["Jack", 24]]<br />
                        </p>
                    </div>
                </div>
            </section>

        </>
    )
}

export default RemoveElem