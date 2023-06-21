import React from 'react'
import Image from 'next/image'

const Header = ({show,setShow}) => {
    return (
        <>
            <header className='bg-[#0C1012]  py-[1.875rem] md:py-11'>
                <div className='px-5 max-w-[90.625rem] w-full mx-auto'>
                    <div className='md:flex w-[100%] justify-between  items-center '>
                        <Image src={'/Horizon-Logo.png'} alt="logo" className='mb-[0.625rem] md:mb-0' height={32} width={140} />
                        <button className="header_btn hover:bg-[#4946ff9f] transition duration-500 w-[100%] md:w-[12.5rem]"   onClick={() => setShow(!show)}>Book Your Seat</button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header