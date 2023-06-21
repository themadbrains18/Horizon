import React from 'react'
import Image from 'next/image'
import pointsArrow from '/public/pointsArrow.svg'


const JsTypes = () => {
    let types = ["Assignment Operators", "Arithmetic Operators", "Comparison Operators", "Logical Operators", "Bitwise Operators", "String Operators", "Other Operators"]
    return (
        <>
            <section className='bg-dark py-10 border_bottom'>
                <h2 className='sec_heading mb-6'>JavaScript Operator Types</h2>
                <p className='main_text mb-6'>Here is a list of different operators you will learn in this tutorial.</p>
                {
                    types?.length > 0 &&
                    types?.map((data, ind) => {
                        return (
                            <div className='flex gap-4  mb-4 items-center'>
                                <Image src={pointsArrow} width={10} height={9} alt='plus Icon' className='transition-all' />
                                <p className='main_text'>{data}</p>
                            </div>
                        )
                    })
                }
            </section>
        </>
    )
}

export default JsTypes