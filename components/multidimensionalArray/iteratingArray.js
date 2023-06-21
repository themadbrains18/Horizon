import React from 'react'

const IteratingArray = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Iterating over Multidimensional Array</h1>
                    <p className='main_text mb-4'>You can iterate over a multidimensional array using the Array's forEach() method to iterate over the multidimensional array. For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br /><br />

                        // iterating over the studentsData<br />
                            studentsData.forEach((student) =&#62; &#123;<br />
                            student.forEach((data) =&#62; &#123;<br />
                            console.log(data);<br />
                            &#125;);<br />
                            &#125;);<br />
                        </p>
                    </div>
                    <h3 className='sec_heading text-[20px] mb-4'>Output</h3>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            Jack <br />
                            24 <br />
                            Sara <br />
                            23 <br />
                        </p>
                    </div>
                    <p className='main_text mb-6'>The first forEach() method is used to iterate over the outer array elements and the second forEach() is used to iterate over the inner array elements.</p>
                    <p className='main_text'>You can also use the for...of loop to iterate over the multidimensional array. For example,</p>
                    <div className='bg-light-dark p-5 mb-6 mt-6'>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br /><br />

                            for (let i of studentsData) &#123;<br />
                            for (let j of i) &#123;<br />
                            console.log(j);<br />
                            &#125;<br />
                            &#125;<br />
                        </p>
                    </div>
                    <p className='main_text'>You can also use the for loop to iterate over a multidimensional array. For example,</p>
                    <div className='bg-light-dark p-3 '>
                        <p className='medium_text'>
                            let studentsData = [['Jack', 24], ['Sara', 23],];<br /><br />

                            // looping outer array elements<br />
                            for(let i = 0; i &#60; studentsData.length; i++)&#123;<br /><br />

                            // get the length of the inner array elements<br />
                            let innerArrayLength = studentsData[i].length;<br /><br />

                            // looping inner array elements<br />
                            for(let j = 0; j &#60; innerArrayLength; j++) &#123;<br />
                            console.log(studentsData[i][j]);<br />
                            &#125;<br />
                            &#125;<br />
                        </p>
                    </div>

                </div>
            </section>
        </>
    )
}

export default IteratingArray