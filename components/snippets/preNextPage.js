import React from 'react'
import Image from 'next/image'
import prePageArrow from '/public/prePageArrow.svg'
const PreNextPage = () => {
    return (
        <>
            <section className='pt-10'>
                <div className='flex justify-between items-center'>
                    <button className='btn !bg-[#182024] flex gap-3 items-center'>
                    <Image src={prePageArrow} width={12} height={12} alt='arrow' className=''/>
                    Previous Tutorial</button>
                    <button className='btn flex gap-3 items-center'>
                    Next Tutorial
                    <Image src={prePageArrow} width={12} height={12} alt='arrow' className='rotate-180'/>
                    </button>
                  
                </div>
            </section>
        </>
    )
}

export default PreNextPage