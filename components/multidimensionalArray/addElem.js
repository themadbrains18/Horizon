import React from 'react'

const AddElem = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Add an Element to a Multidimensional Array</h1>
                    <p className='main_text mb-4'>You can use the Array's push() method or an indexing notation to add elements to a multidimensional array.</p>
                    <p className='main_text mb-4 !font-black'>  Adding Element to the Outer Array</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23],]; <br />
                            studentsData.push(['Peter', 24]);<br /><br />

                            console.log(studentsData); //[["Jack", 24], ["Sara", 23], ["Peter", 24]<br />
                        </p>
                    </div>

                    <p className='main_text mb-4 !font-black'>  Adding Element to the Inner Array</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                        // using index notation<br />
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br />
                            studentsData[1][2] = 'hello';<br /><br />

                            console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]<br />
                        </p>
                    </div>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                    // using push() <br />
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br />
                            studentsData[1].push('hello');<br /><br />

                            console.log(studentsData); // [["Jack", 24], ["Sara", 23, "hello"]]<br />

                        </p>
                    </div>
                    <p className='main_text mb-4'> You can also use the Array's splice() method to add an element at a specified index. For example,</p>
                    <div className='bg-light-dark p-3'>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br /><br />

                            // adding element at 1 index<br />
                            studentsData.splice(1, 0, ['Peter', 24]);<br /><br />

                            console.log(studentsData); // [["Jack", 24], ["Peter", 24], ["Sara", 23]]<br />
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default AddElem