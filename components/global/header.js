import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import menuBtn from '/public/menu.svg'
import Link from 'next/link';
import FormPopup from '../snippets/formPopup';

const Header = ({ show, setShow }) => {
    console.log(show,"djjdkdk");
    const [nav, setNav] = useState(false);
    useEffect(() => {
        nav == true ? document.body.style.overflow = 'hidden' : document.body.style.overflow = 'unset'
    });
    return (
        <>
            <header className='bg-[#0C1012]  py-[1.875rem] md:py-11'>
                <div className='px-5 max-w-[90.625rem] w-full mx-auto'>
                    <div className='flex justify-between smd:grid nav_bar items-center'>
                        <Image src={menuBtn} width={30} height={30} alt='Menu ICon' className='lg:hidden' onClick={() => { nav === false ? setNav(true) : setNav(false) }} />
                        <Link href="/"> <Image src={'/Horizon-Logo.png'} alt="logo" className='' height={32} width={140} /></Link>
                        
                        <ul className='gap-6 hidden lg:flex'>
                            <li className='nav_item medium_text !text-quartary'> <Link nav_link href="/"> Courses </Link></li>
                            <li className='nav_item medium_text !text-quartary'> <Link nav_link href="/">Web Designing</Link></li>
                            <li className='nav_item medium_text !text-quartary'> <Link nav_link href="/">Web Development</Link></li>
                            <li className='nav_item medium_text !text-quartary'> <Link nav_link href="/">Mentor</Link></li>
                            <li className='nav_item medium_text !text-quartary'> <Link nav_link href="/">FAQ</Link></li>
                        </ul>
                        <button className="header_btn  place-self-end hover:bg-[#4946ff9f] transition duration-500" onClick={() => setShow(!show)}>Book Your Seat</button>
                    </div>

                    <ul className={`fixed bg-[#121313] border p-6 h-[100vh] top-[92px] md:top-[104px] max-w-[330px] w-full transition-all duration-500 z-10 lg:hidden ${nav == true ? "left-0" : "-left-[100%]"}`}>
                    <li className='nav_item medium_text !text-[18px] !text-quartary py-2 mb-2'> <Link nav_link href="http://localhost:3000/javascript/getStarted"> Courses </Link></li>
                    <li className='nav_item medium_text !text-[18px] !text-quartary py-2 mb-2'> <Link nav_link href="/">Web Designing</Link></li>
                    <li className='nav_item medium_text !text-[18px] !text-quartary py-2 mb-2'> <Link nav_link href="/">Web Development</Link></li>
                    <li className='nav_item medium_text !text-[18px] !text-quartary py-2 mb-2'> <Link nav_link href="/">Mentor</Link></li>
                    <li className='nav_item medium_text !text-[18px] !text-quartary py-2 mb-2'> <Link nav_link href="/">FAQ</Link></li>
                    </ul>
                </div>
            </header>
            <FormPopup show={show} setShow={setShow} />
        </>
    )
}

export default Header






















// <header className='bg-[#0C1012]  py-[1.875rem] md:py-11'>
//     <div className='px-5 max-w-[90.625rem] w-full mx-auto'>
//         <div className='md:flex w-[100%] justify-between  items-center '>
//             <Image src={'/Horizon-Logo.png'} alt="logo" className='mb-[0.625rem] md:mb-0' height={32} width={140} />
//             <button className="header_btn hover:bg-[#4946ff9f] transition duration-500 w-[100%] md:w-[12.5rem]"   onClick={() => setShow(!show)}>Book Your Seat</button>
//         </div>
//     </div>
// </header>