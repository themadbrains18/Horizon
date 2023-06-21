
import React from 'react'

import Image from 'next/image'
import multidimensionalImg1 from '/public/multidimensional-array.webp'
const AccessElem = () => {
    return (
        <>
            <section className='bg-dark pb-10 border_bottom'>
                <div className='mt-10'>
                    <h1 className='sec_heading mb-6'>Access Elements of an Array</h1>
                    <p className='main_text mb-4'>You can access the elements of a multidimensional array using indices (0, 1, 2 …). For example,</p>
                    <div className='bg-light-dark p-3 mb-8'>
                        <p className='medium_text'>
                            let x = [ <br />
                            ['Jack', 24],<br />
                            ['Sara', 23], <br />
                            ['Peter', 24]<br />
                            ];<br /><br />

                            // access the first item <br />
                            console.log(x[0]); // ["Jack", 24]<br /><br />

                            // access the first item of the first inner array<br />
                            console.log(x[0][0]); // Jack<br /><br />

                            // access the second item of the third inner array<br />
                            console.log(x[2][1]); // 24<br />
                        </p>
                    </div>
                    <p className='main_text mb-4'>You can think of a multidimensional array (in this case, x), as a table with 3 rows and 2 columns.</p>
                    <Image src={multidimensionalImg1} width={900} height={500} alt='arrayIndexing img' className='bg-white ' />
                </div>
            </section>
        </>
    )
}

export default AccessElem